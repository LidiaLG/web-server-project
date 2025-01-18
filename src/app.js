import { envs } from './cofig/env.js'
import { startServer } from './server/server.js'

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