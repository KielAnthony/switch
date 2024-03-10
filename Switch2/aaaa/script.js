function displayLetter() {
    var envelope = document.querySelector('.envelope');
    var letterContent = document.querySelector('.letter-content');
    var loveLetter = document.getElementById("loveLetter").value;

    if (envelope.classList.contains('closed')) {
        envelope.classList.remove('closed');
        setTimeout(function() {
            letterContent.innerHTML = "<h2>Your Love Letter:</h2><p>" + loveLetter + "</p>";
        }, 500);
    }
}
