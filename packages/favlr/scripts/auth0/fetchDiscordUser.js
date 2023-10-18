function fetchDiscordUser(accessToken, ctx, cb) {
	const API_URL = "https://discord.com/api/v10";
	const CDN_URL = "https://cdn.discordapp.com";
	request.get(
		{
			url: `${API_URL}/users/@me`,
			headers: {
				Authorization: `Bearer ${accessToken}`,
			},
		},
		(err, resp, body) => {
			if (err || resp.statusCode !== 200)
				return cb(err || new Error("Invalid token"));
			try {
				const response = JSON.parse(body);
				const { id, username, discriminator, avatar } = response;
				const tag = `${username}#${discriminator}`;
				const picture = avatar
					? `${CDN_URL}/avatars/${id}/${avatar}.png`
					: `${CDN_URL}/embed/avatars/${discriminator % 5}.png`;
				const profile = {
					id,
					tag,
					nickname: username,
					picture,
				};
				cb(null, profile);
			} catch (error) {
				return cb(error);
			}
		}
	);
}
