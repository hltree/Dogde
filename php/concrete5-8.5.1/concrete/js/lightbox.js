!function(a,b){"use strict";b("a[data-concrete5-link-lightbox=image]").each(function(){var a=b(this);a.magnificPopup({type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-in"}},closeOnContentClick:!0,midClick:!0})}),b("a[data-concrete5-link-lightbox=iframe]").each(function(){var a=b(this),c=500,d=400;b(this).attr("data-concrete5-link-lightbox-width")&&b(this).attr("data-concrete5-link-lightbox-height")&&(c=b(this).attr("data-concrete5-link-lightbox-width"),d=b(this).attr("data-concrete5-link-lightbox-height")),a.magnificPopup({type:"iframe",callbacks:{beforeOpen:function(){this.st.iframe.markup=this.st.iframe.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-zoom-in";var a=b.magnificPopup.instance;b(a.contentContainer).css("maxWidth",c+"px").css("maxHeight",d+"px")}},iframe:{patterns:{website:{index:"",src:"%id%"}}},closeOnContentClick:!0,midClick:!0})})}(this,jQuery);