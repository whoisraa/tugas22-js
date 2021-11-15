const perulanganArray = () => {
    let kalimat = "Saya ingin belajar bersama";
    kalimat = kalimat.split(" ");

    kalimat.forEach((item, index) => {
        console.log(`Item : ${item} Index ke ${index}`);
    });
}

perulanganArray();