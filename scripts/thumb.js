(function(){

    //IIFE
    class Thumb {
        constructor(url){
            this.url = url;
        }
    
        render(){
            const $el = document.createElement('img');
            const $app = document.querySelector('#app');
            $el.setAttribute('src', this.url);
            $app.append($el);
        }
    }
    window.gallery = window.gallery || {};
    window.gallery.Thumb = Thumb;
    
})();