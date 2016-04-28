var jQuery = require('jquery');
require('../app/js/jquery.i18n.properties-1.0.9.js');
$(function(){
    jQuery.i18n.properties({
        name : 'strings_zh',
        path : './i18n/',
        mode : 'map',
        language : 'zh',
        callback : function() {
            $('#clearscreen').html($.i18n.prop('clear screen'));
            $('#flushdns').html($.i18n.prop('clear dns'));
            $('#clear_flash').html($.i18n.prop('clear flash cache'));
        }
    });
});
