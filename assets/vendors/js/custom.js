// Responsive Header Js ==============
function header_adj() {
	if ($(window).width() < 991.98) {
		var header_height = $(".main_header").outerHeight();
		$(".nav-wrap .nav-list").css({ "padding-top": header_height + "px" });
	} else {
		$(".nav-wrap .nav-list").css({ "padding-top": "0" });
	}
}
function submenu_toggle() {
	if ($(window).width() < 991.98) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 991.98) {
		$(".h_hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".h_hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".h_hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 991.98) {
		$(".h_hamburger")
			.off()
			.click(function () {
				$(this).toggleClass("is-active");
				$("body,html").toggleClass("sidebar-open");
				$(".nav-wrap").toggleClass("is-open");
			});

		$(".overlay")
			.off()
			.click(function () {
				$(".h_hamburger").removeClass("is-active");
				$("body,html").removeClass("sidebar-open");
				$(".nav-wrap").removeClass("is-open");
			});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});

$(window).on('scroll',function() {
    if($(window).scrollTop()){
      $('.scroll-header').addClass('white');
    }
    else{
      $('.scroll-header').removeClass('white');
    }
    
  });
  

//   Light Slider for Single Product=============
$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 4
});





// for form steps==============
const allStepBtn = document.querySelectorAll("[tab-target]");
const allStepItem = document.querySelectorAll(".step-item");
const allTabs = document.querySelectorAll(".step-tab");
allStepBtn.forEach((item) => {
  item.addEventListener("click", () => {
    let currentTabId = item.getAttribute("tab-target");
    let currentTab = document.getElementById(`${currentTabId}`);

    allStepItem.forEach((item) => {
      item.classList.remove("active");
    });

    allTabs.forEach((tab, i) => {
      if (tab.id === currentTab.id) {
        for (let l = 0; i >= 0; i--) {
          allStepItem[i].classList.add("active");
        }
      }
    });

    allTabs.forEach((item) => {
      item.classList.remove("active");
    });

    currentTab.classList.add("active");
    item.classList.add("active");
  });
});



  $(document.body).on("click", "[data-selectbox] .listitem", function () {
	var item = $(this);
	//item.parents('.listbox').find('.is-selected').removeClass('is-selected');
	if (item.hasClass("is-selected")) {
	  item.removeClass("is-selected");
	} else {
	  item.addClass("is-selected");
	}
  });
  


//   ========== Multiple Image Upload============
jQuery(document).ready(function () {
	ImgUpload();
  });
  
  function ImgUpload() {
	var imgWrap = "";
	var imgArray = [];
  
	$(".upload__inputfile").each(function () {
	  $(this).on("change", function (e) {
		imgWrap = $(this).closest(".upload__box").find(".upload__img-wrap");
		var maxLength = $(this).attr("data-max_length");
  
		var files = e.target.files;
		var filesArr = Array.prototype.slice.call(files);
		var iterator = 0;
		filesArr.forEach(function (f, index) {
		  if (!f.type.match("image.*")) {
			return;
		  }
  
		  if (imgArray.length > maxLength) {
			return false;
		  } else {
			var len = 0;
			for (var i = 0; i < imgArray.length; i++) {
			  if (imgArray[i] !== undefined) {
				len++;
			  }
			}
			if (len > maxLength) {
			  return false;
			} else {
			  imgArray.push(f);
  
			  var reader = new FileReader();
			  reader.onload = function (e) {
				var html =
				  "<div class='upload__img-box'><div style='background-image: url(" +
				  e.target.result +
				  ")' data-number='" +
				  $(".upload__img-close").length +
				  "' data-file='" +
				  f.name +
				  "' class='img-bg'><div class='upload__img-close'></div></div></div>";
				imgWrap.append(html);
				iterator++;
			  };
			  reader.readAsDataURL(f);
			}
		  }
		});
	  });
	});
  
	$("body").on("click", ".upload__img-close", function (e) {
	  var file = $(this).parent().data("file");
	  for (var i = 0; i < imgArray.length; i++) {
		if (imgArray[i].name === file) {
		  imgArray.splice(i, 1);
		  break;
		}
	  }
	  $(this).parent().parent().remove();
	});
  }
  



//   Admin Sidebar Menu Js ===========
$(document).ready(function () {
	$(".sidebar-menu > li.have-children a").on("click", function (i) {
	  i.preventDefault();
	  if (!$(this).parent().hasClass("active")) {
		$(".sidebar-menu li ul").slideUp();
		$(this).next().slideToggle();
		$(".sidebar-menu li").removeClass("active");
		$(this).parent().addClass("active");
	  } else {
		$(this).next().slideToggle();
		$(".sidebar-menu li").removeClass("active");
	  }
	});
  });
  

  
//   Three Dot Drodown ===============
let dropdownBtn = document.querySelector('.dropdown-btn');
let dropArea = document.querySelector('.dropdown-area');

dropdownBtn.addEventListener('click', function() {
    console.log("Dropdown");
    dropArea.classList.toggle("activeDropArea");
})



