(function($) {
    $.fn.contentFilter = function(options) {
        var $that = this;
        var settings = $.extend({
			'event': 'keyup'
        }, options);
        var $trigger = settings.clickButton || settings.input,
            $event = settings.event;//event type(keyup or click)
        $trigger[$event](function(event) {
            var $key = settings.input.val();//get input value
            $that.each(function(index, el) {
                /*if do not contain key-word,hide target; else show them*/
                if ($(el).text().trim().search($key) == -1)
                   settings.target ? $(el).parent(settings.target).hide() : $(el).hide();
                else
                   settings.target ? $(el).parent(settings.target).show() : $(el).show();
            });       	
        });
        return $that;
    };
})(jQuery);
