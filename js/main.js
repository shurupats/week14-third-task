function goToPreviousPhoto(){
    let currentPhoto = document.getElementById('image');
    let currentPhotoNumber = getCurrentPhotoNumber(currentPhoto);
    
    let previousPhotoNumber = currentPhotoNumber;
    if (currentPhotoNumber > 0){
        previousPhotoNumber = currentPhotoNumber - 1;
    }

    currentPhoto.src = getPath(previousPhotoNumber);
}

function goToNextPhoto(){
    let currentPhoto = document.getElementById('image');
    let currentPhotoNumber = getCurrentPhotoNumber(currentPhoto);
    
    let nextPhotoNumber = currentPhotoNumber;
    if (currentPhotoNumber <= 6){
        nextPhotoNumber = currentPhotoNumber + 1;
    }
    
    currentPhoto.src = getPath(nextPhotoNumber);
}

function getCurrentPhotoNumber(currentPhoto){
    let currentPhotoPath = currentPhoto.src;

    let currentPhotoNumber = Number(currentPhotoPath.substring(
        currentPhotoPath.indexOf("images/") + 7, 
        currentPhotoPath.lastIndexOf(".")
    ));

    return currentPhotoNumber;
}

function getPath(photoNumber){
    photoPath = './assets/images/' + photoNumber + '.jpg';
    return photoPath;
}