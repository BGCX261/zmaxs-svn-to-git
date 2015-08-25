// Hello World
// zmaxs.blogspot.com emo-tion slow

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
        emo(/\s:\)+/g, "https://sites.google.com/site/zmaxsimages/css/smile.gif", ":)");
        emo(/\s;\)+/g, "https://sites.google.com/site/zmaxsimages/css/wink.gif", ";)");
        emo(/\s:\(/g, "https://sites.google.com/site/zmaxsimages/css/sad.gif", ":(");
        emo(/\s=\(/g, "https://sites.google.com/site/zmaxsimages/css/sadanimated.gif", "=(");
        emo(/\s:yaya:/ig, "https://sites.google.com/site/zmaxsimages/css/yaya.gif", ":yaya:");
        emo(/\s:D/g, "https://sites.google.com/site/zmaxsimages/css/haha.gif", ":D");
        emo(/\s\^:D/g, "https://sites.google.com/site/zmaxsimages/css/abovemehaha.gif", "^:D");
        emo(/\s\^(\_|)\^/g, "https://sites.google.com/site/zmaxsimages/css/senyum-tulus.gif", "^_^");
        emo(/\s:'\(/g, "https://sites.google.com/site/zmaxsimages/css/cry.gif", ":&#39;(");
        emo(/\s:waaa:/g, "https://sites.google.com/site/zmaxsimages/css/wawa.gif", ":waaa:");
        emo(/\sT_T/ig, "https://sites.google.com/site/zmaxsimages/css/tears.gif", "T_T");
        emo(/\sB\)/g, "https://sites.google.com/site/zmaxsimages/css/cool.gif", "B)");
        emo(/\s:Q/ig, "https://sites.google.com/site/zmaxsimages/css/smoking.gif", ":Q");
        emo(/\s:p/ig, "https://sites.google.com/site/zmaxsimages/css/wee.gif", ":p");
        emo(/\s\\o\//ig, "https://sites.google.com/site/zmaxsimages/css/applause.gif", "&#92;o/");
        emo(/\s\\m\//ig, "https://sites.google.com/site/zmaxsimages/css/metal.gif", "&#92;m/");
        emo(/\s&lt;3/ig, "https://sites.google.com/site/zmaxsimages/css/love.gif", "&amp;amp;lt;3");
        emo(/\s\*fck\*/ig, "https://sites.google.com/site/zmaxsimages/css/fuck.gif", "*fck*");
        emo(/\sx\@/g, "https://sites.google.com/site/zmaxsimages/css/marahbesar.gif", "x@");
        emo(/\s:-bd/ig, "https://sites.google.com/site/zmaxsimages/css/topmarkotop.gif", ":-bd");
        emo(/\s\~x\(+/ig, "https://sites.google.com/site/zmaxsimages/css/ugh.gif", "~x(");
        emo(/\s:bye:/ig, "https://sites.google.com/site/zmaxsimages/css/bye.gif", ":bye:");
        emo(/\s:cendol:/ig, "https://sites.google.com/site/zmaxsimages/css/cendol.gif", ":cendol:");
        emo(/\s\*bang\*/ig, "https://sites.google.com/site/zmaxsimages/css/bang.gif", "*bang*");

         // by zmaxs
        // Show alert one times!
        $('.emoWrap').one("click", function() {
                if(emoMessage) {
                        alert(emoMessage);
                }
        });
        // Click to show the code!
       // zmaxs.blogspot.com
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
