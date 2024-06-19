document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navigateTo(this.getAttribute('href').substring(1));
    });
});

document.querySelectorAll('.navigate-btn').forEach(button => {
    button.addEventListener('click', function() {
        navigateTo(this.getAttribute('data-target'));
    });
});

function navigateTo(sectionId) {
    const target = document.getElementById(sectionId);
    const offset = target.offsetLeft;
    document.querySelector('.content-wrapper').style.transform = `translateX(-${offset}px)`;
}
