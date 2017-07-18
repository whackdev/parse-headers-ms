const whoAmI = require('./whoami');

module.exports = class Parser {

	static processReq(request) {
		let whoami = new whoAmI();

		whoami.ipaddress = Parser.getIP(request.connection.remoteAddress);
		whoami.language = Parser.getLang(request.headers["accept-language"]);
		whoami.software = Parser.getOS(request.headers["user-agent"]);

		return whoami;
	}

	static getIP(remoteAddress) {
		let checkV6 = remoteAddress.indexOf(':') >= 0;
		
		return checkV6 ? remoteAddress.split(':').reverse()[0] : remoteAddress;
	}

	static getOS(userAgent) {
		return userAgent.split(/[\(\)]/)[1].trim(); 
	}

	static getLang(acceptLang) {
		return acceptLang.split(',')[0].trim();
	}
}