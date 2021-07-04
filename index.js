const line = "";
bot.on('message', message =>{
    let args = message.content.substring(line.length).split(" ");

    switch(args[0]){

        case "":
//           ⬆️ insert the PREFIX and NAME COMMAND (-command)   
            const Embed = new MessageEmbed()
//                    ⬆️ insert number embed (Embed1 /Embed2 ...)

            .setColor("") // color https://convertingcolors.com/color-bucket.html
            .setTitle("") // title 
            .setImage("") // if you want to put an image put the link ( not mandatory )
            .setDescription("") //insert the description 
            .setThumbnail("")

            if (message.member.roles.cache.find(r => r.name === "")) {
                message.channel.bulkDelete(1);//                ⬆️ insert the name role staff
                message.channel.send(Embed);
//                                       ⬆️ insert number embed (Embed1 /Embed2 ...)
            }
    }
})
