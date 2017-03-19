var EventEmitter = require('../lib/event-emitter');

class CardService extends EventEmitter {
    constructor(ChatService) {
        super();
        ChatService.owner.then(owner => {
        this.owner = owner
            console.log('owner değeri', this.owner.cards);
        });
        window.cs = this;
        this.content = 'Delete';
    }
    getOwnerUserName(){
        return this.owner.username;
    }

    setDeleteCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards.splice(i, 1);
            }
        }
        console.log('new delete', this.owner.cards);
    }
    setarchivedCard(newContent) {
        this.content = newContent;
        for (var i = this.owner.cards.length; i--;) {
            if (this.owner.cards[i].name === this.content) {
                this.owner.cards[i].isArchived=true;
            }
        }
        console.log('new archived card', this.owner.cards);
    }
}

angular.module('chat-app').service('CardService', CardService);