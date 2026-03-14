document.getElementById('moreBtn').addEventListener('click', function() {
    var moreText = document.getElementById('moreText');
    if (moreText.classList.contains('hidden')) {
        moreText.classList.remove('hidden');
        moreText.classList.add('animate__animated', 'animate__fadeIn');
        this.textContent = 'Show less';
    } else {
        moreText.classList.add('animate__animated', 'animate__fadeOut');
        var btn = this;
        moreText.addEventListener('animationend', function handler() {
            moreText.classList.add('hidden');
            moreText.classList.remove('animate__animated', 'animate__fadeOut');
            btn.textContent = 'Read more';
            moreText.removeEventListener('animationend', handler);
        });
    }
});