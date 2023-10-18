function fetchAutodeskUser(accessToken, cb) {
	const API_URL = "https://developer.api.autodesk.com/userprofile/v1";

	const options = {
        url: `${API_URL}/users/@me`,
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

	request(options, (err, res, body) => {
		if (err || res.statusCode !== 200) {
			return cb(err || new Error("Invalid token"));
		}
		try {
			const user = JSON.parse(body);
			const profile = {
				id: user.userId,
				tag: user.userName,
				nickname: user.userName,
				picture: user.profileImages[0].sizeX256Url,
			};
			cb(null, profile);
		} catch (error) {
            return cb(error);
        }
	});
}
