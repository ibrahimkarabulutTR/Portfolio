alert("Bu portfolyo sayfasının yapımı devam etmektektedir")

//BLOG YAZILARIM SLİDER KODU
const nexticon = '<i class="fas fa-angle-right"></i>';
const previcon = '<i class="fas fa-angle-left"></i>';
$('#slide').owlCarousel({
	loop: true,
	nav: true,
	navText: [previcon, nexticon],
	margin: 0,
	dots: true,
	lazyLoad: true,
	lazyLoadEager: true,
	mouseDrag:false,
	touchDrag:false,
	pullDrag:false,
	freeDrag:false,
	responsive:{
		300:{items:1},
		400:{items:1.5,center:true},
		600:{items:2},
		900:{items:3},
		1200:{items:4}
	}
});

//MOBİL MENU AÇ KAPA KODU
const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
const backLink = `<li class="nav-item"><a class="nav-link nav-back-link" href="javascript:;">Geri Dön</a></li>`
navExpand.forEach(item => {
	item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
	item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
	item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
})
const ham = document.getElementById('hamburger')
ham.addEventListener('click', function() {
	document.body.classList.toggle('nav-is-toggled')
})

