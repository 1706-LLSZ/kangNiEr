$(function(){
	var mySwiper2 = new Swiper('.swiper-container2',{
	slidesPerView : 3,
	slidesPerGroup : 3,
	pagination : '.swiper-pagination1',
	})
	var mySwiper3 = new Swiper('.swiper-container3',{
		pagination:'.swiper-pagination3',
		paginationClickable :true,

	})
	var mySwiper4 = new Swiper('.swiper-container4',{
		pagination:'.swiper-pagination4',
		paginationClickable :true,
		prevButton:'.swiper-button-prev',
		nextButton:'.swiper-button-next',
	})
})