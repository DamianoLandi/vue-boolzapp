const root = new Vue({
    el: "#root",
    data:{
        data,
    },
    methods:{
        switchChat(i){
            for(key in this.data.contacts){
                this.data.contacts[key].visible = false;
            }
            this.data.contacts[i].visible = true;
        }
    },

    created: function () {
        for(key in this.data.contacts){
            this.data.contacts[key].visible = false;
        }
        this.data.contacts[0].visible = true;
      }
});