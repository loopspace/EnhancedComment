<?php if (!defined('APPLICATION')) exit();

$PluginInfo['EnhancedComments'] = array(
   'Description' => 'Enhances the comment display with numbers and source.',
   'Version' => '1.0',
   'RequiredApplications' => NULL, 
   'RequiredTheme' => FALSE, 
   'RequiredPlugins' => FALSE,
   'HasLocale' => FALSE,
   'Author' => "Andrew Stacey",
   'AuthorEmail' => 'loopspace@mathforge.org',
   'AuthorUrl' => 'http://loopspace.mathforge.org'
);

class EnhancedCommentsPlugin extends Gdn_Plugin {

  var $number;
  var $source;

  public function DiscussionController_BeforeFirstComment_Handler(&$Sender)
  {
    $this->number = $Sender->Offset;
  }
  
  public function DiscussionController_BeforeCommentMeta_Handler(&$Sender)
  {
    $this->number++;
    $this->source = $Sender->CurrentComment->Body;
    echo '<div class="CommentNumber">' . $this->number . ".</div>";
  }

  public function DiscussionController_AfterCommentBody_Handler($Sender) {
    echo '<div class="CommentSource"><span class="CommentSourceTitle">Comment Source:</span><code>' . htmlspecialchars($this->source) . "</code></div>";
  }

  public function DiscussionController_CommentOptions_Handler(&$Sender)
  {
    $Sender->EventArguments['CommentOptions']['ShowSource'] = array('Label' => T('Show Source'), 'Url' => '#', 'ShowSource', 'Class' => 'ShowSource');
    $Sender->EventArguments['CommentOptions']['CopyLink'] = array('Label' => T('Copy Link'), 'Url' => '#', 'CopyLink', 'Class' => 'Copy Link');
  }

 public function Base_Render_Before($Sender) {
   $Sender->Head->AddScript('plugins/EnhancedComments/js/enhancedcomment.js','text/javascript',20);
   $Sender->AddCSSFile('plugins/EnhancedComments/css/enhancedcomment.css');
  }

}

?>