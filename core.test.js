const createCore = require('./core.js')

function createMock(){
	function start(){
		console.log('[mock] start')
	}

	function stop(){
	console.log('[mock] start')
	}

	return{
		start,
		stop,
	}
}

describe('Core quando importado', ()=>{
	test('deve ter o método #start e #stop', ()=>{
		const core = createCore({
			database: createMock(),
			webserver: createMock()
		})
		expect(core).toHaveProperty('start')
		expect(core).toHaveProperty('stop')
	})
})

describe('Core quando inicializado', ()=>{
	test('não deve retornar erros', ()=>{
		const core = createCore({
			database: createMock(),
			webserver: createMock()
		})
		expect(()=>{
			core.start()
		}).not.toThrow()
	})
})