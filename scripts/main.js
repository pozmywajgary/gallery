
function setup() {

    const zoom = new gallery.Zoom();
    new gallery.ThumbList();
    

    gallery.db.photos.forEach(({thumb, image}) => {
        const photo = new gallery.Thumb(thumb);
        photo.render();

        //thumb.addEventListener('click'), () => {
            zoom.display(image);
        //})
    });
    
}

window.addEventListener('DOMContentLoaded', setup);