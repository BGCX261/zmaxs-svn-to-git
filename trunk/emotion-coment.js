 // Saya datang kembali gan , hehehe
// trelo-skato.blogspot.com

$(function() {

	// Append an emoticon bar before comment-form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap"> :) :( =( :waaa: ^_^ :D ^:D ;) :-bd :yaya: :&#39;( T_T :p B) :Q &#92;o/ &#92;m/ &lt;3 *fck* x@ ~x( :bye: :cendol: *bang* </div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, "<br> $1")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s:\)+/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/smile.gif", ":)");
	emo(/\s;\)+/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/wink.gif", ";)");
	emo(/\s:\(/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/sad.gif", ":(");
	emo(/\s=\(/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/sadanimated.gif", "=(");
	emo(/\s:yaya:/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/yaya.gif", ":yaya:");
	emo(/\s:D/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/haha.gif", ":D");
	emo(/\s\^:D/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/abovemehaha.gif", "^:D");
	emo(/\s\^(\_|)\^/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/senyum-tulus.gif", "^_^");
	emo(/\s:'\(/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/cry.gif", ":&#39;(");
	emo(/\s:waaa:/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/wawa.gif", ":waaa:");
	emo(/\sT_T/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/tears.gif", "T_T");
	emo(/\sB\)/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/cool.gif", "B)");
	emo(/\s:Q/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/smoking.gif", ":Q");
	emo(/\s:p/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/wee.gif", ":p");
	emo(/\s\\o\//ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/applause.gif", "&#92;o/");
	emo(/\s\\m\//ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/metal.gif", "&#92;m/");
	emo(/\s&lt;3/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/love.gif", "&amp;amp;lt;3");
	emo(/\s\*fck\*/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/fuck.gif", "*fck*");
	emo(/\sx\@/g, "https://sites.google.com/site/blogsantamars/css-santa-mars/marahbesar.gif", "x@");
	emo(/\s:-bd/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/topmarkotop.gif", ":-bd");
	emo(/\s\~x\(+/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/ugh.gif", "~x(");
	emo(/\s:bye:/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/bye.gif", ":bye:");
	emo(/\s:cendol:/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/cendol.gif", ":cendol:");
	emo(/\s\*bang\*/ig, "https://sites.google.com/site/blogsantamars/css-santa-mars/bang.gif", "*bang*");

         // by Santa Mars
	// Show alert one times!
	$('.emoWrap').one("click", function() {
		if(emoMessage) {
			alert(emoMessage);
		}
	});
	// Click to show the code!
       // santa-mars.blogspot.com
	$('.emo').css('cursor', 'pointer').live("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});