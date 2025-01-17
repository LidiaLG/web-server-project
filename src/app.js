const { envs } = require('./cofig/env')

const main = () => {
    console.log(envs)
}


//función agnóstica autoconvocada
( async() => {
    main()
})()