const Database = require('./db.js');
const saveOrphanage = require('./save-orphanage.js');

Database.then( async db => {
    // inserir dados na tabela
    /* await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6655874",
        name: "Lar da Paz",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "1234-4567",
        images: [
            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1598252976330-b8a1461d47a7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1597095556745-7bcd893840ac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 10h até as 16h",
        open_on_weekends: "0"
    }) */

    // consultar dados da tabela
    /* const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)  */

    // consultar um orfanato pelo id
    /* const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage) */

    // deletar dado da tabela
    /* console.log(await db.run('DELETE FROM orphanages WHERE id = "4"')) */
})