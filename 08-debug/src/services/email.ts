async function getBaseEmail(sendername:string):Promise<string> {
    let base = await getHeaderText();
    base+= `\nOlá ${sendername},\n\n`;
    base+= `Atenciosamente,\nEquipe de Suporte`;
    return base;
};

async function getHeaderText():Promise<string>{
    return "Email para você";
}


export { getBaseEmail };
