export default function banner() {
    const banners = document.querySelectorAll('.slider-img');
    let currentBannerIndex = 0;

    function showBanner(index) {
        banners.forEach((banner, i) => {
            if (i === index) {
                banner.classList.add('slider-img-on');
            } else {
                banner.classList.remove('slider-img-on');
            }
        });
    }
    showBanner(currentBannerIndex);

    function nextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    }
    setInterval(nextBanner, 5000);
}





