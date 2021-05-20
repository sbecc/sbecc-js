require("../dist").then(m => {
	m.createContext()
	console.log(m.encrypt("print('Hello, world!')").reduce(
		(str, i) => str + ("0" + i.toString(16)).slice(-2),
		""
	))
	m.destroyContext()
})