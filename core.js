const createDatabaseConnection = require('./database')
const createWebserver = require('./webserver')

function createCore(configs={}){
	const databaseConnection = configs.database || createDatabaseConnection()
	const webserver = configs.webserver || createWebserver()

	function start(){
		databaseConnection.start()
		webserver.start()
	}
	function stop(){
		webserver.stop()
		databaseConnection.stop()

	}

	return {
		start,
		stop,
	}
}

// export default createCore
module.exports = createCore
