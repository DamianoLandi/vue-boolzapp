const root = new Vue({
    el: "#root",
    data:{
        data,
        newText: "",
        searchContact: "",
    },
    methods:{
        switchChat(i){
            for(key in this.data.contacts){
                this.data.contacts[key].visible = false;
            }
            this.data.contacts[i].visible = true;
        },

        sendMessage(i){
            if(!this.newText || !this.newText.trim()){
                return
            } 

            const newMessage = {
                status: 'sent',
                message: this.newText,
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
            }

            this.data.contacts[i].messages.push(newMessage);

            this.newText = "";

            setTimeout(() => {
                const newRecivedMessage = {
                    status: 'received',
                    message: "Ok",
                    date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                }

                this.data.contacts[i].messages.push(newRecivedMessage);
            }, 1000)
        },

        deleteMessage(index, i){
            this.data.contacts[index].messages.splice(i, 1);
        }
    },

    created: function () {
        for(key in this.data.contacts){
            this.data.contacts[key].visible = false;
        }
        this.data.contacts[0].visible = true;
      }
});