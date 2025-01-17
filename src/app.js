const { envs } = require('./cofig/env')
const { startServer } = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//función agnóstica autoconvocada
( async() => {
    main()
})()