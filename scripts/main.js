
function setup() {
    const zoom = new gallery.Zoom();
    const thumbList = new gallery.ThumbList();


    thumbList.on('click:thumb', ({ image }) => {
        zoom.render(image);
    })

    gallery.PhotosService.fetchPhotos()
        .then(({photos}) => {
            //debugger;
            thumbList.render(photos);
    })

}

window.addEventListener('DOMContentLoaded', setup);