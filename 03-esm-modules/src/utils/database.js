const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};


async function connectToDatabase(dataname) {
  console.log(`conectando ${dataname}`);
};

async function disconnectDatabase(){
  console.log("Disconectando do banco de dados");
};

export {
  connectToDatabase, 
  disconnectDatabase,
  databaseType,
};
