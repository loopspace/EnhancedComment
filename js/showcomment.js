jQuery(document).ready(function($) {
   // Show comment source
    $('a.ShowSource').livequery('click', function() {
      var btn = this;
      var container = $(btn).parents('li.ItemComment');
      $(container).addClass('ShowSource');
      var parent = $(container).find('div.Comment');
      var msg = $(parent).find('div.Message');
	var src = $(parent).find('div.CommentSource');
	if ($(msg).is(':visible')) {
	    if ($(src).is(':visible')) {
		$('.CommentSource').hide();
		$(src).hide();
	    } else {
		$('.CommentSource').hide();
		$(src).show();
	    }
	} else {
	    $(parent).find('div.EditCommentForm').remove();
            $(msg).show();
	    $(src).show();
	}
       return false;
    });
    $('a.EditComment').livequery('click',function () {
	$('.CommentSource').hide();
	return false;
    });
});
