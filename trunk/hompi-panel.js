var panelSelectorer = '#comments',openPanelText = "Komentari",closePanelText = "Tutup Komentar",slideDownPanelSpeed = 600,slideUpPanelSpeed = 400;

$(function() {$(panelSelectorer).hide().addClass('hompiPanel').before('<a class="openpanel from-js" href="#">' + openPanelText + '<em></em></a>').after('<div class="paneline"></div>');
$('.openpanel').toggle(function() {$(this).addClass('active').html(closePanelText + '<em></em>');$(panelSelectorer).slideDown(slideDownPanelSpeed);return false;}, function() {
jQuery(this).removeClass('active').html(openPanelText + '<em></em>');$(panelSelectorer).slideUp(slideUpPanelSpeed);return false;});});
