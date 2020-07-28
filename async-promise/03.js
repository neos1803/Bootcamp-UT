const promise = async () => {
    for (let i = 1; i <= 3; i++) {
        await new Promise(_ => 
            setTimeout(_, 1000)
        );
        console.log(i)
    }
    console.log('Done')
}
promise()