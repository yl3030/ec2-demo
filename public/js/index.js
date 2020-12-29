// 收藏
$(".save").click(function () {
	if ($(this).children(".fa-heart").hasClass("far")) {
		$(this).children(".fa-heart").removeClass("far");
		$(this).children(".fa-heart").addClass("fas");
	} else {
		$(this).children(".fa-heart").removeClass("fas");
		$(this).children(".fa-heart").addClass("far");
	}
});

// 漢堡鍵
$(".menu").click(function () {
	if ($(this).hasClass("menu-active")) {
		$(this).removeClass("menu-active");
		$("#rwd-nav-title").animate({ left: "-110%" }, 300);
	} else {
		$(this).addClass("menu-active");
		$("#rwd-nav-title").animate({ left: "0" }, 300);
	}
});

$(window).scroll(function () {
	if ($(window).scrollTop >= $(".top-box").height()) {
		$(".top-box").slideUp(100);
		console.log($(window).scrollTop);
	}
	console.log($(".top-box").height());
	console.log($(window).scrollTop);
});

// 輪播圖
var Rswiper = new Swiper(".home-slider1", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".reco-sp",
		clickable: true,
	},
	navigation: {
		nextEl: ".Rnext", // 上一頁按鈕物件
		prevEl: ".Rprev", // 下一頁按鈕物件
	},
});

var Rswiper2 = new Swiper(".home-slider2", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".reco-sp",
		clickable: true,
	},
	navigation: {
		nextEl: ".Rnext", // 上一頁按鈕物件
		prevEl: ".Rprev", // 下一頁按鈕物件
	},
});

// 小輪播圖
var Sswiper = new Swiper(".second-slider", {
	loop: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".second-sp",
		clickable: true,
	},
});
