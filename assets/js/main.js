var iUp = (function () {
	var t = 0,
		d = 150,
		clean = function () {
			t = 0;
		},
		up = function (e) {
			setTimeout(function () {
				$(e).addClass("up")
			}, t);
			t += d;
		},
		down = function (e) {
			$(e).removeClass("up");
		},
		toggle = function (e) {
			setTimeout(function () {
				$(e).toggleClass("up")
			}, t);
			t += d;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	}
})();

$(document).ready(function () {

	// 获取一言数据
	fetch('https://v1.hitokoto.cn').then(function (res) {
		return res.json();
	}).then(function (res) {
		$('#description').html(res.hitokoto + "<br/> -「<strong>" + res.from + "</strong>」")
	}).catch(function (err) {
		console.error(err);
	})


	/**
	 * 获取Bing壁纸
	 *
	 */
	// var url = 'https://api.bingchunmoli.com/bing/cn';
	// var imgUrls = JSON.parse(sessionStorage.getItem("imgUrls"));
	// if (imgUrls == "undefined_UHD.jpg") {
	// 	imgUrls = null;
	// }
	// var index = sessionStorage.getItem("index");
	// var $panel = $('#panel');
	// if (imgUrls == null) {
	// 	imgUrls = new Array();
	// 	index = 0;
	// 	$.get(url, function (result) {
	// 		images = result.data.images;
	// 		for (let i = 0; i < images.length; i++) {
	// 			const item = images[i];
	// 			imgUrls.push(item.urlbase + "_UHD.jpg");
	// 		}
	// 		var imgUrl = imgUrls[index];
	// 		var url = "https://www.bing.com" + imgUrl;
	// 		$panel.css("background", "url('" + url + "') center center no-repeat #666");
	// 		$panel.css("background-size", "cover");
	// 		sessionStorage.setItem("imgUrls", JSON.stringify(imgUrls));
	// 		sessionStorage.setItem("index", index);
	// 	});
	// } else {
	// 	var url = "https://www.bing.com" + imgUrls[index];
	// 	$panel.css("background", "url('" + url + "') center center no-repeat #666");
	// 	$panel.css("background-size", "cover");
	// }

	$(".iUp").each(function (i, e) {
		iUp.up(e);
	});

	$(".js-avatar")[0].onload = function () {
		$(".js-avatar").addClass("show");
	}
});

$('.btn-mobile-menu__icon').click(function () {
	if ($('.navigation-wrapper').css('display') == "block") {
		$('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
			$('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		});
		$('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

	} else {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown');
	}
	$('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-angleup animated fadeIn');
});
