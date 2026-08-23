async function connectToDatabase(user, password) {
    if(user=== process.env.USERDATABASE && password === process.env.PSWDATABASE) {
        console.log("Conectado ao banco de dados com sucesso!");
    } else {
        console.log("Falha de login, não foi possivel se concetar ao banco de dados!");
    }
}

export {
    connectToDatabase
}
