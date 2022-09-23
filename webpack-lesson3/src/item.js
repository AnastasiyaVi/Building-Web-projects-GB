const ITEM_TYPES = {
    image: drawImage,
    audio: drawAudio,
    video: drawVideo,
}

function drawImage(item) {
    const imageElement = document.createElement('img');
    imageElement.className = "gallery-item__image";
    imageElement.src = item.resource;

    return imageElement;
}

function drawAudio(item) {
    const audioElement = document.createElement('audio');
    audioElement.className = "gallery-item__audio";
    audioElement.src = item.resource;
    audioElement.controls = true;

    return audioElement;
}

function drawVideo(item) {
    const videoElement = document.createElement('video');
    videoElement.className = "gallery-item__video";
    videoElement.src = item.resource;
    videoElement.controls = true;

    return videoElement;
}

export function drawGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.className = "gallery-item";

    const resourceWrapElement = document.createElement('div');
    resourceWrapElement.className = "gallery-item__resource";

    const drawerForType = ITEM_TYPES[item.type];
    resourceWrapElement.appendChild(drawerForType(item));

    const titleElement = document.createElement('span');
    titleElement.className = "gallery-item__title";
    titleElement.textContent = item.title;

    itemElement.appendChild(resourceWrapElement);
    itemElement.appendChild(titleElement);

    return itemElement;
}