"use strict";$('a[href^="#"').on("click",(function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top}),!1}));var menu=document.querySelector(".nav__burger");document.querySelector(".nav__burger-btn").addEventListener("click",(function(){menu.classList.toggle("nav__burger-active"),document.querySelector(".nav__burger-close").addEventListener("click",(function(){document.querySelector(".nav__burger").classList.remove("nav__burger-active")}))})),menu.addEventListener("transitionend",(function(){menu.classList.contains("nav__burger-active")?menu.style="visibility: visible":menu.removeAttribute("style")}));var form=document.querySelector(".nav__form"),search=document.querySelector(".nav__btn-search"),navClose=document.querySelector(".nav__close");document.querySelector(".nav__btn-search").addEventListener("click",(function(){search.classList.add("nav__btn-search_disabled"),form.classList.toggle("nav__form_active"),navClose.addEventListener("click",(function(){form.classList.remove("nav__form_active"),search.classList.remove("nav__btn-search_disabled")}))})),form.addEventListener("transitionend",(function(){form.classList.contains("nav__form_active")?form.style="visibility: visible":form.removeAttribute("style")})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".menu__btn").forEach((function(e){e.addEventListener("click",(function(){var e=this,t=this.parentElement.querySelector(".menu__dropdown");document.querySelectorAll(".menu__btn").forEach((function(t){t!=e&&t.classList.remove("menu__btn_active")})),document.querySelectorAll(".menu__dropdown").forEach((function(e){e!=t&&e.classList.remove("menu__dropdown-active")})),t.classList.add("menu__dropdown-active"),e.classList.add("menu__btn_active")}))})),document.addEventListener("click",(function(e){e.target.closest(".menu__list")||(document.querySelectorAll(".menu__dropdown").forEach((function(e){e.classList.remove("menu__dropdown-active")})),document.querySelectorAll(".menu__btn").forEach((function(e){e.classList.remove("menu__btn_active")})))}))}));var header=new Swiper(".header__swiper-container",{loop:!0,slidesPerView:1,spaceBetween:10,speed:2e3,autoplay:{delay:2e3},effect:"fade",allowTouchMove:!1}),gallery=new Swiper(".gallery__swiper-container",{loop:!1,IOSEdgeSwipeDetection:!0,onTouchStart:function(){return!1},pagination:{el:".gallery__swiper-pagination_upper",type:"fraction",clickable:!0},navigation:{nextEl:".gallery__swiper-btn-next",prevEl:".gallery__swiper-btn-prev"},breakpoints:{1025:{slidesPerView:3,slidesPerGroup:3,spaceBetween:50},951:{slidesPerView:2,slidesPerGroup:2,spaceBetween:34},831:{slidesPerView:3,slidesPerGroup:3,spaceBetween:34},681:{slidesPerView:2,slidesPerGroup:2,spaceBetween:34},381:{slidesPerView:2,slidesPerGroup:2,spaceBetween:30},319:{slidesPerView:1}}}),modalWrap=document.querySelector(".gallery__modal-wrap"),modalWindow=document.querySelectorAll(".gallery__modal-window"),btns=document.querySelectorAll(".gallery__hover"),close=document.querySelectorAll(".gallery__modal-close");btns.forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelector('[data-target="'.concat(t,'"]')).classList.add("gallery__modal-window_active"),modalWrap.classList.add("gallery__modal-wrap_active")})),window.addEventListener("click",(function(e){e.target==modalWrap&&(modalWrap.classList.remove("gallery__modal-wrap_active"),modalWindow.forEach((function(e){e.classList.remove("gallery__modal-window_active")})))})),close.forEach((function(e){e.addEventListener("click",(function(){modalWrap.classList.remove("gallery__modal-wrap_active"),modalWindow.forEach((function(e){e.classList.remove("gallery__modal-window_active")}))}))}))}));var gallerySelect=document.querySelector(".gallery__select"),choices=new Choices(gallerySelect,{searchEnabled:!1});$(".accordion").accordion({heightStyle:"content",header:"> .catalog__accord-item > .catalog__accord-btn",active:0,animate:300}),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".accord__btn").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.dataset.path;document.querySelectorAll(".catalog__left").forEach((function(e){e.classList.remove("catalog__left-active")})),document.querySelector('[data-target="'.concat(t,'"]')).classList.add("catalog__left-active")}))}))})),$(".accord__btn").click((function(){$(".accord__btn").removeClass("accord__btn-active"),$(this).addClass("accord__btn-active")}));var swiperEvents=new Swiper(".events__swiper-container",{loop:!1,IOSEdgeSwipeDetection:!0,onTouchStart:function(){return!1},spaceBetween:50,slidesPerView:3,slidesPerGroup:1,pagination:{el:".events__swiper-pagination",clickable:!0},navigation:{nextEl:".events__button-next",prevEl:".events__button-prev"},breakpoints:{1341:{spaceBetween:50,slidesPerView:3,slidesPerGroup:1},1280:{spaceBetween:35,slidesPerView:3,slidesPerGroup:1},951:{spaceBetween:27,slidesPerView:3,slidesPerGroup:2},768:{spaceBetween:34,slidesPerView:2,slidesPerGroup:1},681:{spaceBetween:0,slidesPerView:1,slidesPerGroup:1},320:{spaceBetween:0,slidesPerView:1,slidesPerGroup:1}}}),selector=document.querySelector("input[type='tel']"),im=new Inputmask("+7 (999) 999 99 99");im.mask(selector);var validation=new JustValidate("#form");validation.addField("#name",[{rule:"minLength",value:3,errorMessage:"Введите корректное имя"},{rule:"maxLength",value:30,errorMessage:"Введите корректное имя"},{rule:"required",errorMessage:"Поле обязательно для заполнения!"}]).addField("#tel",[{rule:"required",errorMessage:"Поле обязательно для заполнения!"},{validator:function(e,t){var n=selector.inputmask.unmaskedvalue();return Number(n)&&10===n.length},errorMessage:"Недопустимый формат"}]),tippy("#tooltip-1",{trigger:"click",theme:"purple",content:"Пример современных тенденций - современная методология разработки"}),tippy("#tooltip-2",{trigger:"click",theme:"purple",content:"Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции"}),tippy("#tooltip-3",{trigger:"click",theme:"purple",content:"В стремлении повысить качество "});var projects=new Swiper(".projects__swiper-container",{loop:!1,IOSEdgeSwipeDetection:!0,onTouchStart:function(){return!1},navigation:{nextEl:".projects__swiper-btn-next",prevEl:".projects__swiper-btn-prev"},breakpoints:{1340:{slidesPerView:3,spaceBetween:50},1025:{slidesPerView:3,spaceBetween:20},769:{slidesPerView:2,spaceBetween:50},751:{slidesPerView:2,spaceBetween:34},681:{slidesPerView:2,spaceBetween:15},320:{slidesPerView:1,spaceBetween:21}}});function showMap(){document.querySelector(".contacts__map").getBoundingClientRect().top-document.documentElement.clientHeight<0&&(ymaps.ready(init),this.removeEventListener("scroll",showMap))}function init(){var e=new ymaps.Map("map",{center:[55.758468,37.601088],zoom:13,controls:[]}),t=new ymaps.Placemark([55.758468,37.601088],{},{iconLayout:"default#image",iconImageHref:"images/location.svg",iconImageSize:[20,20]});e.controls.add("geolocationControl",{float:"none",position:{right:"20px",bottom:"330px"}}),e.controls.add("zoomControl",{size:"small",float:"none",position:{bottom:"380px",right:"20px"}}),e.behaviors.disable("scrollZoom"),e.geoObjects.add(t),e.events.once("click",(function(){e.behaviors.disable("scrollZoom").enable("multiTouch")}))}window.addEventListener("scroll",showMap);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm9uIiwiaHJlZiIsImF0dHIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm1lbnUiLCJzdHlsZSIsImNvbnRhaW5zIiwicmVtb3ZlQXR0cmlidXRlIiwic2VhcmNoIiwiYWRkIiwiZm9ybSIsInRvZ2dsZSIsIm5hdkNsb3NlIiwiZWwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJkcm9wZG93biIsInRoaXMiLCJwYXJlbnRFbGVtZW50IiwiYnRuIiwidGFyZ2V0IiwiZSIsImNsb3Nlc3QiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3IiwibG9vcCIsImhlYWRlciIsIklPU0VkZ2VTd2lwZURldGVjdGlvbiIsIm9uVG91Y2hTdGFydCIsInNwYWNlQmV0d2VlbiIsInNwZWVkIiwicGFnaW5hdGlvbiIsImRlbGF5IiwiY2xpY2thYmxlIiwiYWxsb3dUb3VjaE1vdmUiLCJnYWxsZXJ5IiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsInR5cGUiLCJuZXh0RWwiLCJwcmV2RWwiLCJtb2RhbFdyYXAiLCJtb2RhbFdpbmRvdyIsInBhdGgiLCJidG5zIiwiZ2FsbGVyeVNlbGVjdCIsInNlYXJjaEVuYWJsZWQiLCJhY2NvcmRpb24iLCJkYXRhc2V0IiwiY29uY2F0Iiwid2luZG93IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY2xvc2UiLCJ6b29tIiwiY2xpY2siLCJhZGRDbGFzcyIsIkNob2ljZXMiLCJuYXZpZ2F0aW9uIiwidGFic0J0biIsInRhYkNvbnRlbnQiLCJyZW1vdmVDbGFzcyIsInN3aXBlckV2ZW50cyIsInNlbGVjdG9yIiwiaW0iLCJJbnB1dG1hc2siLCJtYXNrIiwidmFsaWRhdGlvbiIsImFkZEZpZWxkIiwiZXJyb3JNZXNzYWdlIiwicGhvbmUiLCJpbnB1dG1hc2siLCJOdW1iZXIiLCJjb250ZW50IiwiSnVzdFZhbGlkYXRlIiwicnVsZSIsInZhbHVlIiwibmFtZSIsInVubWFza2VkdmFsdWUiLCJsZW5ndGgiLCJ0aXBweSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0cmlnZ2VyIiwidGhlbWUiLCJjZW50ZXIiLCJteVBsYWNlbWFyayIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsInBvc2l0aW9uIiwicmlnaHQiLCJteU1hcCIsImdlb09iamVjdHMiLCJldmVudHMiLCJiZWhhdmlvcnMiLCJzaG93TWFwIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwieW1hcHMiLCJyZWFkeSIsImluaXQiLCJNYXAiLCJjb250cm9scyIsIlBsYWNlbWFyayIsImZsb2F0IiwiYm90dG9tIiwic2l6ZSIsImRpc2FibGUiLCJvbmNlIiwiZW5hYmxlIl0sIm1hcHBpbmdzIjoiYUFDQUEsRUFBRSxlQUFlQyxHQUFHLFNBQVMsV0FBM0IsSUFBQUMsRUFBREYsRUFBZ0JDLE1BQUdFLEtBQXBCLFFBT0ksT0FIRUgsRUFBQSxjQUFjSSxRQUFRLENBQ3BCQyxVQUFhSCxFQUFEQSxHQUFPSSxTQUFTQyxPQUV6QixLQU1YQyxJQUFBQSxLQUFTQyxTQUFBQSxjQUFjLGdCQUVuQkQsU0FBQUEsY0FBU0Msb0JBQWNDLGlCQUFzQkEsU0FBaUIsV0FDMURGLEtBQUFBLFVBQVNDLE9BQVQsc0JBREpELFNBQUFDLGNBQUEsc0JBQUFDLGlCQUFBLFNBQUEsV0FGSkYsU0FBQUMsY0FBQSxnQkFBQUUsVUFBQUMsT0FBQSw0QkFVS0MsS0FGREgsaUJBRU8saUJBQUEsV0FDRUksS0FBTEgsVUFBYUksU0FBQSxzQkFBYkYsS0FBS0MsTUFBUSxzQkFDaEJELEtBQUFHLGdCQUFBLFlBU0RDLElBQUFBLEtBQU9OLFNBQVVPLGNBQUksY0FDckJDLE9BQUtSLFNBQVVTLGNBQU8sb0JBQ3RCQyxT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VUMsY0FBTixFQURKakUsYUFBQSxJQTNFSSxLQUFNLENBQ0ZMLGNBQWUsRUFDZkssYUFBYyxJQUdsQixJQUFLLENBQ0RMLGNBQWUsRUFDZkssYUFBYyxJQUdsQixJQUFLLENBQ0RMLGNBQWUsRUFDZkssYUFBYyxJQUdsQixJQUFLLENBQ0RMLGNBQWUsRUFDZkssYUFBYyxJQUdsQixJQUFLLENBQ0RMLGNBQWUsRUFDZkssYUFBYyxPQVcxQixTQUFTa0UsVUFDZWpHLFNBQVNDLGNBQWMsa0JBQzNCaUcsd0JBQXdCbkcsSUFBTUMsU0FBU21HLGdCQUFnQkMsYUFBZSxJQUNsRkMsTUFBTUMsTUFBTUMsTUFDWnBGLEtBQUtnRSxvQkFBb0IsU0FBVWMsVUFRM0MsU0FBU00sT0FDTCxJQUFJVixFQUFRLElBQUlRLE1BQU1HLElBQUksTUFBTyxDQUM3QmxCLE9BQVEsQ0FBQyxVQUFXLFdBQ3BCOUIsS0FBTSxHQUNOaUQsU0FBVSxLQUVWbEIsRUFBYyxJQUFJYyxNQUFNSyxVQUFVLENBQUMsVUFBVyxXQUFZLEdBQUksQ0FDOURsQixXQUFZLGdCQUNaQyxjQUFlLHNCQUNmQyxjQUFlLENBQUMsR0FBSSxNQUd4QkcsRUFBTVksU0FBUy9GLElBQUkscUJBQXNCLENBQ3JDaUcsTUFBTyxPQUNQaEIsU0FBVSxDQUNOQyxNQUFPLE9BQ1BnQixPQUFRLFdBR2hCZixFQUFNWSxTQUFTL0YsSUFBSSxjQUFlLENBQzlCbUcsS0FBTSxRQUNORixNQUFPLE9BQ1BoQixTQUFVLENBQ05pQixPQUFRLFFBQ1JoQixNQUFPLFVBSWZDLEVBQU1HLFVBQVVjLFFBQVEsY0FDeEJqQixFQUFNQyxXQUFXcEYsSUFBSTZFLEdBQ3JCTSxFQUFNRSxPQUFPZ0IsS0FBSyxTQUFTLFdBQ3ZCbEIsRUFBTUcsVUFDRGMsUUFBUSxjQUNSRSxPQUFPLGlCQXJDcEI1RCxPQUFPbEQsaUJBQWlCLFNBQVUrRiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc21vb3RoIHNjcm9sbCBcclxuJCgnYVtocmVmXj1cIiNcIicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGxldCBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59KTtcclxuXHJcbi8vYnVyZ2VyXHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdl9fYnVyZ2VyJyk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idXJnZXItYnRuJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX2J1cmdlci1hY3RpdmUnKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19idXJnZXItY2xvc2VcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2X19idXJnZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcIm5hdl9fYnVyZ2VyLWFjdGl2ZVwiKTtcclxuICAgIH0pXHJcbn0pXHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKCFtZW51LmNsYXNzTGlzdC5jb250YWlucyhcIm5hdl9fYnVyZ2VyLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIG1lbnUucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LnN0eWxlID0gXCJ2aXNpYmlsaXR5OiB2aXNpYmxlXCI7XHJcbiAgICB9XHJcbn0pXHJcblxyXG4vL3NlYXJjaCBmaWVsZCBcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19mb3JtJyk7XHJcbmxldCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tc2VhcmNoJyk7XHJcbmxldCBuYXZDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2Nsb3NlJyk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19idG4tc2VhcmNoJykuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgc2VhcmNoLmNsYXNzTGlzdC5hZGQoJ25hdl9fYnRuLXNlYXJjaF9kaXNhYmxlZCcpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKCduYXZfX2Zvcm1fYWN0aXZlJyk7XHJcbiAgICBuYXZDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2X19mb3JtX2FjdGl2ZVwiKTtcclxuICAgICAgICBzZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnbmF2X19idG4tc2VhcmNoX2Rpc2FibGVkJyk7XHJcbiAgICB9KVxyXG59KVxyXG5cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGlmICghZm9ybS5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXZfX2Zvcm1fYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgZm9ybS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvcm0uc3R5bGUgPSBcInZpc2liaWxpdHk6IHZpc2libGVcIjtcclxuICAgIH1cclxufSlcclxuXHJcbi8vZHJvcGRvd24gbWVudVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fYnRuXCIpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgZHJvcGRvd24gPSB0aGlzLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19kcm9wZG93blwiKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fYnRuXCIpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsICE9IGJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19idG5fYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fZHJvcGRvd25cIikuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwgIT0gZHJvcGRvd24pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9fZHJvcGRvd24tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwibWVudV9fZHJvcGRvd24tYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcIm1lbnVfX2J0bl9hY3RpdmVcIilcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KFwiLm1lbnVfX2xpc3RcIikpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51X19kcm9wZG93blwiKS5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51X19kcm9wZG93bi1hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fYnRuXCIpLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX2J0bl9hY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG59KVxyXG5cclxuXHJcblxyXG4vLyBzd2lwZXIgaGVhZGVyXHJcbmNvbnN0IGhlYWRlciA9IG5ldyBTd2lwZXIoJy5oZWFkZXJfX3N3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgICBzcGVlZDogMjAwMCxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDIwMDBcclxuICAgIH0sXHJcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxyXG4gICAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxyXG59KTtcclxuXHJcbi8vIHN3aXBlciBnYWxsZXJ5XHJcbmNvbnN0IGdhbGxlcnkgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgIGxvb3A6IGZhbHNlLFxyXG5cclxuICAgIElPU0VkZ2VTd2lwZURldGVjdGlvbjogdHJ1ZSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLmdhbGxlcnlfX3N3aXBlci1wYWdpbmF0aW9uX3VwcGVyJyxcclxuICAgICAgICB0eXBlOiAnZnJhY3Rpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5nYWxsZXJ5X19zd2lwZXItYnRuLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5nYWxsZXJ5X19zd2lwZXItYnRuLXByZXYnLFxyXG4gICAgfSxcclxuXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDEwMjU6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTBcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICA5NTE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICA4MzE6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzQsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgNjgxOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDM0LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDM4MToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMixcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAzMTk6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIG1vZGFsIHdpbmRvdyBnYWxsZXJ5XHJcbmxldCBtb2RhbFdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX21vZGFsLXdyYXBcIik7XHJcbmxldCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2FsbGVyeV9fbW9kYWwtd2luZG93XCIpO1xyXG5sZXQgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19ob3ZlcicpO1xyXG5sZXQgY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbGxlcnlfX21vZGFsLWNsb3NlXCIpO1xyXG5cclxuYnRucy5mb3JFYWNoKGZ1bmN0aW9uKGJ0bnMpIHtcclxuICAgIGJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgICAgbGV0IHBhdGggPSBlbC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnlfX21vZGFsLXdpbmRvd19hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeV9fbW9kYWwtd3JhcF9hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsV3JhcCkge1xyXG4gICAgICAgICAgICBtb2RhbFdyYXAuY2xhc3NMaXN0LnJlbW92ZSgnZ2FsbGVyeV9fbW9kYWwtd3JhcF9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsV2luZG93LmZvckVhY2goZnVuY3Rpb24oem9vbSkge1xyXG4gICAgICAgICAgICAgICAgem9vbS5jbGFzc0xpc3QucmVtb3ZlKCdnYWxsZXJ5X19tb2RhbC13aW5kb3dfYWN0aXZlJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjbG9zZS5mb3JFYWNoKGZ1bmN0aW9uKHpvb20pIHtcclxuICAgICAgICB6b29tLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgbW9kYWxXcmFwLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbGxlcnlfX21vZGFsLXdyYXBfYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbFdpbmRvdy5mb3JFYWNoKGZ1bmN0aW9uKHpvb20pIHtcclxuICAgICAgICAgICAgICAgIHpvb20uY2xhc3NMaXN0LnJlbW92ZSgnZ2FsbGVyeV9fbW9kYWwtd2luZG93X2FjdGl2ZScpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pXHJcblxyXG5cclxuLy8gY2hvaWNlcyBnYWxsZXJ5XHJcbmNvbnN0IGdhbGxlcnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fc2VsZWN0Jyk7XHJcbmNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhnYWxsZXJ5U2VsZWN0LCB7XHJcbiAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcclxufSk7XHJcblxyXG4kKCcuYWNjb3JkaW9uJykuYWNjb3JkaW9uKHtcclxuXHJcbiAgICBoZWlnaHRTdHlsZTogJ2NvbnRlbnQnLFxyXG4gICAgaGVhZGVyOiAnPiAuY2F0YWxvZ19fYWNjb3JkLWl0ZW0gPiAuY2F0YWxvZ19fYWNjb3JkLWJ0bicsXHJcbiAgICBhY3RpdmU6IDAsXHJcbiAgICBhbmltYXRlOiAzMDBcclxufSk7XHJcblxyXG4vLyBwYWludGVyIHRhYnNcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkX19idG4nKS5mb3JFYWNoKGZ1bmN0aW9uKHRhYnNCdG4pIHtcclxuXHJcbiAgICAgICAgdGFic0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fbGVmdCcpLmZvckVhY2goZnVuY3Rpb24odGFiQ29udGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19sZWZ0LWFjdGl2ZScpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nX19sZWZ0LWFjdGl2ZScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn0pXHJcblxyXG4kKCcuYWNjb3JkX19idG4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5hY2NvcmRfX2J0bicpLnJlbW92ZUNsYXNzKCdhY2NvcmRfX2J0bi1hY3RpdmUnKTtcclxuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjY29yZF9fYnRuLWFjdGl2ZScpXHJcbn0pO1xyXG5cclxuXHJcbi8vIHN3aXBlciBldmVudHNcclxuXHJcbnZhciBzd2lwZXJFdmVudHMgPSBuZXcgU3dpcGVyKFwiLmV2ZW50c19fc3dpcGVyLWNvbnRhaW5lclwiLCB7XHJcbiAgICBsb29wOiBmYWxzZSxcclxuXHJcbiAgICBJT1NFZGdlU3dpcGVEZXRlY3Rpb246IHRydWUsXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc3BhY2VCZXR3ZWVuOiA1MCxcclxuICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogXCIuZXZlbnRzX19zd2lwZXItcGFnaW5hdGlvblwiLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLmV2ZW50c19fYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5ldmVudHNfX2J1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG5cclxuICAgICAgICAxMzQxOiB7XHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTI4MDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDM1LFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICA5NTE6IHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA2ODE6IHtcclxuICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDAsXHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4vLyAgdmFsaWRhdGlvbiArIGlucHV0bWFza1xyXG52YXIgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XHJcbnZhciBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyAoOTk5KSA5OTkgOTkgOTlcIik7XHJcbmltLm1hc2soc2VsZWN0b3IpO1xyXG5cclxuY29uc3QgdmFsaWRhdGlvbiA9IG5ldyBKdXN0VmFsaWRhdGUoJyNmb3JtJyk7XHJcblxyXG52YWxpZGF0aW9uXHJcbiAgICAuYWRkRmllbGQoJyNuYW1lJywgW3tcclxuICAgICAgICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAzLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90L7QtSDQuNC80Y8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBydWxlOiAnbWF4TGVuZ3RoJyxcclxuICAgICAgICAgICAgdmFsdWU6IDMwLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90L7QtSDQuNC80Y8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyEnLFxyXG4gICAgICAgIH1cclxuICAgIF0pXHJcbiAgICAuYWRkRmllbGQoJyN0ZWwnLCBbe1xyXG4gICAgICAgICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyEnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3I6IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhvbmUgPSBzZWxlY3Rvci5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBob25lKSAmJiBwaG9uZS5sZW5ndGggPT09IDEwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgICAgIH1cclxuICAgIF0pO1xyXG5cclxuXHJcbi8vIHRvb2x0aXAgcHJvamVjdHNcclxudGlwcHkoJyN0b29sdGlwLTEnLCB7XHJcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxyXG4gICAgdGhlbWU6ICdwdXJwbGUnLFxyXG4gICAgY29udGVudDogXCLQn9GA0LjQvNC10YAg0YHQvtCy0YDQtdC80LXQvdC90YvRhSDRgtC10L3QtNC10L3RhtC40LkgLSDRgdC+0LLRgNC10LzQtdC90L3QsNGPINC80LXRgtC+0LTQvtC70L7Qs9C40Y8g0YDQsNC30YDQsNCx0L7RgtC60LhcIixcclxufSk7XHJcblxyXG50aXBweSgnI3Rvb2x0aXAtMicsIHtcclxuICAgIHRyaWdnZXI6ICdjbGljaycsXHJcbiAgICB0aGVtZTogXCJwdXJwbGVcIixcclxuICAgIGNvbnRlbnQ6IFwi0J/RgNC40Y/RgtC90L4sINCz0YDQsNC20LTQsNC90LUsINC90LDQsdC70Y7QtNCw0YLRjCwg0LrQsNC6INGB0LTQtdC70LDQvdC90YvQtSDQvdCwINCx0LDQt9C1INCw0L3QsNC70LjRgtC40LrQuCDQstGL0LLQvtC00Ysg0LLRi9C30YvQstCw0Y7RgiDRgyDQstCw0YEg0Y3QvNC+0YbQuNC4XCIsXHJcbn0pO1xyXG5cclxudGlwcHkoJyN0b29sdGlwLTMnLCB7XHJcbiAgICB0cmlnZ2VyOiAnY2xpY2snLFxyXG4gICAgdGhlbWU6IFwicHVycGxlXCIsXHJcbiAgICBjb250ZW50OiBcItCSINGB0YLRgNC10LzQu9C10L3QuNC4INC/0L7QstGL0YHQuNGC0Ywg0LrQsNGH0LXRgdGC0LLQviBcIixcclxufSk7XHJcblxyXG4vLyBzd2lwZXIgcHJvamVjdHNcclxuY29uc3QgcHJvamVjdHMgPSBuZXcgU3dpcGVyKCcucHJvamVjdHNfX3N3aXBlci1jb250YWluZXInLCB7XHJcbiAgICBsb29wOiBmYWxzZSxcclxuXHJcbiAgICBJT1NFZGdlU3dpcGVEZXRlY3Rpb246IHRydWUsXHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnByb2plY3RzX19zd2lwZXItYnRuLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5wcm9qZWN0c19fc3dpcGVyLWJ0bi1wcmV2JyxcclxuICAgIH0sXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAxMzQwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogNTAsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgMTAyNToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDc2OToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDUwLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDc1MToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDM0LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDY4MToge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDE1LFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDIxLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBsYXp5bG9hZCBtYXBcclxuZnVuY3Rpb24gc2hvd01hcCgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RzTWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzX19tYXAnKTtcclxuICAgIGlmIChjb250YWN0c01hcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDwgMCkge1xyXG4gICAgICAgIHltYXBzLnJlYWR5KGluaXQpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2hvd01hcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzaG93TWFwKTtcclxuXHJcbi8vIG1hcCBpbml0XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICAgICAgY2VudGVyOiBbNTUuNzU4NDY4LCAzNy42MDEwODhdLFxyXG4gICAgICAgIHpvb206IDEzLFxyXG4gICAgICAgIGNvbnRyb2xzOiBbXSxcclxuICAgIH0pO1xyXG4gICAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xyXG4gICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuICAgICAgICBpY29uSW1hZ2VIcmVmOiAnaW1hZ2VzL2xvY2F0aW9uLnN2ZycsXHJcbiAgICAgICAgaWNvbkltYWdlU2l6ZTogWzIwLCAyMF0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBteU1hcC5jb250cm9scy5hZGQoJ2dlb2xvY2F0aW9uQ29udHJvbCcsIHtcclxuICAgICAgICBmbG9hdDogJ25vbmUnLFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzMzMHB4J1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgbXlNYXAuY29udHJvbHMuYWRkKCd6b29tQ29udHJvbCcsIHtcclxuICAgICAgICBzaXplOiAnc21hbGwnLFxyXG4gICAgICAgIGZsb2F0OiAnbm9uZScsXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgICAgYm90dG9tOiAnMzgwcHgnLFxyXG4gICAgICAgICAgICByaWdodDogJzIwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBteU1hcC5iZWhhdmlvcnNcclxuICAgIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XHJcbiAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XHJcbiAgICBteU1hcC5ldmVudHMub25jZSgnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBteU1hcC5iZWhhdmlvcnNcclxuICAgICAgICAgICAgLmRpc2FibGUoJ3Njcm9sbFpvb20nKVxyXG4gICAgICAgICAgICAuZW5hYmxlKCdtdWx0aVRvdWNoJyk7XHJcbiAgICB9KTtcclxuXHJcbn0iXX0=
