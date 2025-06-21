type plaUser = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
john Smith,17,0
Mary Sue,14,1
`;

const plaUsers: plaUser[] = [];

const lines: string[] = data.split("\n");
for(const line of lines){

    if(line === ""){
        continue;
    }

    /** 分割代入 */
    const [name, ageString, premiumUserString] = line.split(",");
    plaUsers.push({
        name,
        age: Number(ageString),
        premiumUser: premiumUserString === "1"
    });

    // const plaUser: string[] = line.split(",");

    // plaUsers.push({
    //     name: plaUser[0],
    //     age: Number(plaUser[1]),
    //     premiumUser: plaUser[2] === "1"
    // });
}

for(const pu of plaUsers){
    if(pu.premiumUser){
        console.log(`${pu.name}(${pu.age})はプレミアムユーザです。`);
    }else{
        console.log(`${pu.name}(${pu.age})はプレミアムユーザではありません。`)
    }
}