const main = () => {
    console.log('Server')
}


//función agnóstica autoconvocada
( async() => {
    main()
})()