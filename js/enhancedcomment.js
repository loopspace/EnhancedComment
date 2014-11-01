jQuery(document).ready(function($) {
   // Show comment source
    $('a.ShowSource').livequery('click', function() {
      var btn = this;
      var container = $(btn).parents('li.ItemComment');
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
    $('a.CopyLink').livequery('click', function() {
	var btn = this;
	var container = $(btn).parents('li.ItemComment');
	var parent = $(parent).find('div.Message');
	var link = $(container).find('a.PermaLink');
	var url = $(link).attr('href');
	//	$('<div class="CopyLink">' . url . '</div>').insertBefore(parent);
	alert(url);
	return false;
    });
    $('a.EditComment').livequery('click',function () {
	$('.CommentSource').hide();
	return false;
    });
});
