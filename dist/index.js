(function() {
	let _sbecc
	try {
		_sbecc = sbecc
	} catch(e) {
		_sbecc = require("./sbecc.js")
	}
	if (!_sbecc) {
		throw new Error("Make sure sbecc.js is available to require or is referenced before index.js")
	}

	sbecc = _sbecc().then(m => {
		if(m.getRandomValue===undefined){try{var window_="object"===typeof window?window:self;var crypto_=typeof window_.crypto!=="undefined"?window_.crypto:window_.msCrypto;var randomValuesStandard=function(){var buf=new Uint32Array(1);crypto_.getRandomValues(buf);return buf[0]>>>0};randomValuesStandard();m.getRandomValue=randomValuesStandard}catch(e){try{var crypto=require("crypto");var randomValueNodeJS=function(){var buf=crypto["randomBytes"](4);return(buf[0]<<24|buf[1]<<16|buf[2]<<8|buf[3])>>>0};randomValueNodeJS();m.getRandomValue=randomValueNodeJS}catch(e){throw"No secure random number generator found"}}}
		return {
			createContext: m._sbecc_create_context,
			destroyContext: m._sbecc_destroy_context,
			encrypt: function(script) {
				const headerSize = 76;
				const headerPtr = m.stackAlloc(headerSize);

				const len = m.lengthBytesUTF8(script) + 1;
				const scriptPtr = m.stackAlloc(len);
				m.stringToUTF8(script, scriptPtr, len);

				if (m._sbecc_encrypt(headerPtr, headerSize, scriptPtr, len)) {
					throw new Error("sbecc_encrypt failed. Did you initialize context?")
				}

				const result = new Uint8Array(headerSize + len)
				result.set(m.HEAPU8.slice(headerPtr, headerPtr + headerSize), 0)
				result.set(m.HEAPU8.slice(scriptPtr, scriptPtr + len), headerSize)
				return result
			}
		}
	})

	return sbecc
})()

if (typeof exports === 'object' && typeof module === 'object')
		module.exports = sbecc;
	else if (typeof define === 'function' && define['amd'])
		define([], function() { return sbecc; });
	else if (typeof exports === 'object')
		exports["sbecc"] = sbecc;