var getImageSource = function (icon) {
    var imageSource = null;
    icon = icon.split('.png')[0];
    switch (icon) {
        case 'jQuery':
            imageSource = require('./Resources/jQuery.png');
            break;
        case 'AngularJS':
            imageSource = require('./Resources/angularjs.png');
            break;
        case 'download':
            imageSource = require('./Resources/download.png');
            break;
        case 'done.png':
            imageSource = require('./Resources/done.png');
            break;
        case 'downloading.png':
            imageSource = require('./Resources/update.png');
            break;
        case '_DashAnnotations':
            imageSource = require('./Resources/_DashAnnotations.png');
            break;
        case '_Struct':
            imageSource = require('./Resources/_Struct.png');
            break;
        case 'Abbreviation':
            imageSource = require('./Resources/Abbreviation.png');
            break;
        case 'Abbreviations':
            imageSource = require('./Resources/Abbreviations.png');
            break;
        case 'actionscript':
            imageSource = require('./Resources/actionscript.png');
            break;
        case 'addSnippet':
            imageSource = require('./Resources/addSnippet.png');
            break;
        case 'Advanced':
            imageSource = require('./Resources/Advanced.png');
            break;
        case 'Advanced@2x':
            imageSource = require('./Resources/Advanced@2x.png');
            break;
        case 'akka':
            imageSource = require('./Resources/akka.png');
            break;
        case 'alfred':
            imageSource = require('./Resources/alfred.png');
            break;
        case 'alfredWarningIcon':
            imageSource = require('./Resources/alfredWarningIcon.png');
            break;
        case 'Alias':
            imageSource = require('./Resources/Alias.png');
            break;
        case 'allSnippets':
            imageSource = require('./Resources/allSnippets.png');
            break;
        case 'android':
            imageSource = require('./Resources/android.png');
            break;
        case 'androidstudio':
            imageSource = require('./Resources/androidstudio.png');
            break;
        case 'angulardart':
            imageSource = require('./Resources/angulardart.png');
            break;
        case 'angularjs':
            imageSource = require('./Resources/angularjs.png');
            break;
        case 'Annotation':
            imageSource = require('./Resources/Annotation.png');
            break;
        case 'annotationsAlt':
            imageSource = require('./Resources/annotationsAlt.png');
            break;
        case 'annotationsTemplate':
            imageSource = require('./Resources/annotationsTemplate.png');
            break;
        case 'annotationsYosemiteTemplate':
            imageSource = require('./Resources/annotationsYosemiteTemplate.png');
            break;
        case 'ansible':
            imageSource = require('./Resources/ansible.png');
            break;
        case 'anyapp':
            imageSource = require('./Resources/anyapp.png');
            break;
        case 'apache':
            imageSource = require('./Resources/apache.png');
            break;
        case 'appcode':
            imageSource = require('./Resources/appcode.png');
            break;
        case 'applescript':
            imageSource = require('./Resources/applescript.png');
            break;
        case 'arduino':
            imageSource = require('./Resources/arduino.png');
            break;
        case 'atom':
            imageSource = require('./Resources/atom.png');
            break;
        case 'Attribute':
            imageSource = require('./Resources/Attribute.png');
            break;
        case 'automator':
            imageSource = require('./Resources/automator.png');
            break;
        case 'Avatar':
            imageSource = require('./Resources/Avatar.png');
            break;
        case 'AvatarPaid':
            imageSource = require('./Resources/AvatarPaid.png');
            break;
        case 'awesome':
            imageSource = require('./Resources/awesome.png');
            break;
        case 'awsjs':
            imageSource = require('./Resources/awsjs.png');
            break;
        case 'Axiom':
            imageSource = require('./Resources/Axiom.png');
            break;
        case 'backbone':
            imageSource = require('./Resources/backbone.png');
            break;
        case 'bash':
            imageSource = require('./Resources/bash.png');
            break;
        case 'bbedit':
            imageSource = require('./Resources/bbedit.png');
            break;
        case 'Binding':
            imageSource = require('./Resources/Binding.png');
            break;
        case 'book':
            imageSource = require('./Resources/book.png');
            break;
        case 'Bookmark':
            imageSource = require('./Resources/Bookmark.png');
            break;
        case 'bookmarkTemplate':
            imageSource = require('./Resources/bookmarkTemplate.png');
            break;
        case 'bookmarkTemplateAlt':
            imageSource = require('./Resources/bookmarkTemplateAlt.png');
            break;
        case 'boost':
            imageSource = require('./Resources/boost.png');
            break;
        case 'bootstrap':
            imageSource = require('./Resources/bootstrap.png');
            break;
        case 'bourbon':
            imageSource = require('./Resources/bourbon.png');
            break;
        case 'brackets':
            imageSource = require('./Resources/brackets.png');
            break;
        case 'build':
            imageSource = require('./Resources/build.png');
            break;
        case 'Builtin':
            imageSource = require('./Resources/Builtin.png');
            break;
        case 'c':
            imageSource = require('./Resources/c.png');
            break;
        case 'cakephp':
            imageSource = require('./Resources/cakephp.png');
            break;
        case 'Callback':
            imageSource = require('./Resources/Callback.png');
            break;
        case 'cappuccino':
            imageSource = require('./Resources/cappuccino.png');
            break;
        case 'Category':
            imageSource = require('./Resources/Category.png');
            break;
        case 'cf':
            imageSource = require('./Resources/cf.png');
            break;
        case 'chai':
            imageSource = require('./Resources/chai.png');
            break;
        case 'CheatRepo':
            imageSource = require('./Resources/CheatRepo.png');
            break;
        case 'cheatsheet':
            imageSource = require('./Resources/cheatsheet.png');
            break;
        case 'chef':
            imageSource = require('./Resources/chef.png');
            break;
        case 'chocolat':
            imageSource = require('./Resources/chocolat.png');
            break;
        case 'Class':
            imageSource = require('./Resources/Class.png');
            break;
        case 'ClassRuby':
            imageSource = require('./Resources/ClassRuby.png');
            break;
        case 'ClassRubyRetina':
            imageSource = require('./Resources/ClassRubyRetina.png');
            break;
        case 'clearTokenTemplate':
            imageSource = require('./Resources/clearTokenTemplate.png');
            break;
        case 'ClockFrame':
            imageSource = require('./Resources/ClockFrame.png');
            break;
        case 'clojure':
            imageSource = require('./Resources/clojure.png');
            break;
        case 'cmake':
            imageSource = require('./Resources/cmake.png');
            break;
        case 'cocoadocs_platform':
            imageSource = require('./Resources/cocoadocs_platform.png');
            break;
        case 'cocoapods':
            imageSource = require('./Resources/cocoapods.png');
            break;
        case 'CocoaRepo':
            imageSource = require('./Resources/CocoaRepo.png');
            break;
        case 'CocoaRepoLarge':
            imageSource = require('./Resources/CocoaRepoLarge.png');
            break;
        case 'cocos2d':
            imageSource = require('./Resources/cocos2d.png');
            break;
        case 'cocos2dx':
            imageSource = require('./Resources/cocos2dx.png');
            break;
        case 'coda':
            imageSource = require('./Resources/coda.png');
            break;
        case 'codeigniter':
            imageSource = require('./Resources/codeigniter.png');
            break;
        case 'coffee':
            imageSource = require('./Resources/coffee.png');
            break;
        case 'Column':
            imageSource = require('./Resources/Column.png');
            break;
        case 'Command':
            imageSource = require('./Resources/Command.png');
            break;
        case 'comment_icon_clicked_error':
            imageSource = require('./Resources/comment_icon_clicked_error.png');
            break;
        case 'comment_icon_clicked':
            imageSource = require('./Resources/comment_icon_clicked.png');
            break;
        case 'comment_icon_dark':
            imageSource = require('./Resources/comment_icon_dark.png');
            break;
        case 'comment_icon_hovered_error':
            imageSource = require('./Resources/comment_icon_hovered_error.png');
            break;
        case 'comment_icon_hovered':
            imageSource = require('./Resources/comment_icon_hovered.png');
            break;
        case 'comment_icon_selected_error':
            imageSource = require('./Resources/comment_icon_selected_error.png');
            break;
        case 'comment_icon_selected':
            imageSource = require('./Resources/comment_icon_selected.png');
            break;
        case 'comment_icon':
            imageSource = require('./Resources/comment_icon.png');
            break;
        case 'compass':
            imageSource = require('./Resources/compass.png');
            break;
        case 'Component':
            imageSource = require('./Resources/Component.png');
            break;
        case 'Constant':
            imageSource = require('./Resources/Constant.png');
            break;
        case 'Constructor':
            imageSource = require('./Resources/Constructor.png');
            break;
        case 'Conversion':
            imageSource = require('./Resources/Conversion.png');
            break;
        case 'cordova':
            imageSource = require('./Resources/cordova.png');
            break;
        case 'corona':
            imageSource = require('./Resources/corona.png');
            break;
        case 'cpp':
            imageSource = require('./Resources/cpp.png');
            break;
        case 'css':
            imageSource = require('./Resources/css.png');
            break;
        case 'cvc':
            imageSource = require('./Resources/cvc.png');
            break;
        case 'cvcpp':
            imageSource = require('./Resources/cvcpp.png');
            break;
        case 'cvj':
            imageSource = require('./Resources/cvj.png');
            break;
        case 'cvp':
            imageSource = require('./Resources/cvp.png');
            break;
        case 'd3':
            imageSource = require('./Resources/d3.png');
            break;
        case 'darkModeTemplate':
            imageSource = require('./Resources/darkModeTemplate.png');
            break;
        case 'dartlang':
            imageSource = require('./Resources/dartlang.png');
            break;
        case 'Dash':
            imageSource = require('./Resources/Dash.png');
            break;
        case 'DashRepo':
            imageSource = require('./Resources/DashRepo.png');
            break;
        case 'Database':
            imageSource = require('./Resources/Database.png');
            break;
        case 'defaultProfileIcon':
            imageSource = require('./Resources/defaultProfileIcon.png');
            break;
        case 'defaultProfileIconYosemite':
            imageSource = require('./Resources/defaultProfileIconYosemite.png');
            break;
        case 'Define':
            imageSource = require('./Resources/Define.png');
            break;
        case 'Delegate':
            imageSource = require('./Resources/Delegate.png');
            break;
        case 'DeletedSnippet':
            imageSource = require('./Resources/DeletedSnippet.png');
            break;
        case 'Diagram':
            imageSource = require('./Resources/Diagram.png');
            break;
        case 'Directive':
            imageSource = require('./Resources/Directive.png');
            break;
        case 'django':
            imageSource = require('./Resources/django.png');
            break;
        case 'docsetInfo':
            imageSource = require('./Resources/docsetInfo.png');
            break;
        case 'docsetInfoAlt':
            imageSource = require('./Resources/docsetInfoAlt.png');
            break;
        case 'docsetLarge':
            imageSource = require('./Resources/docsetLarge.png');
            break;
        case 'Docsets':
            imageSource = require('./Resources/Docsets.png');
            break;
        case 'dojo':
            imageSource = require('./Resources/dojo.png');
            break;
        case 'dom':
            imageSource = require('./Resources/dom.png');
            break;
        case 'done':
            imageSource = require('./Resources/done.png');
            break;
        case 'downArrow':
            imageSource = require('./Resources/downArrow.png');
            break;
        case 'downArrowYosemite':
            imageSource = require('./Resources/downArrowYosemite.png');
            break;
        case 'download':
            imageSource = require('./Resources/download.png');
            break;
        case 'Downloads':
            imageSource = require('./Resources/Downloads.png');
            break;
        case 'drupal':
            imageSource = require('./Resources/drupal.png');
            break;
        case 'eclipse':
            imageSource = require('./Resources/eclipse.png');
            break;
        case 'edit2':
            imageSource = require('./Resources/edit2.png');
            break;
        case 'ee':
            imageSource = require('./Resources/ee.png');
            break;
        case 'elasticsearch':
            imageSource = require('./Resources/elasticsearch.png');
            break;
        case 'Element':
            imageSource = require('./Resources/Element.png');
            break;
        case 'elisp':
            imageSource = require('./Resources/elisp.png');
            break;
        case 'elixir':
            imageSource = require('./Resources/elixir.png');
            break;
        case 'emacsLarge':
            imageSource = require('./Resources/emacsLarge.png');
            break;
        case 'ember':
            imageSource = require('./Resources/ember.png');
            break;
        case 'emmet':
            imageSource = require('./Resources/emmet.png');
            break;
        case 'emptyImage':
            imageSource = require('./Resources/emptyImage.png');
            break;
        case 'Entry':
            imageSource = require('./Resources/Entry.png');
            break;
        case 'Enum':
            imageSource = require('./Resources/Enum.png');
            break;
        case 'Environment':
            imageSource = require('./Resources/Environment.png');
            break;
        case 'erlang':
            imageSource = require('./Resources/erlang.png');
            break;
        case 'Error':
            imageSource = require('./Resources/Error.png');
            break;
        case 'espresso':
            imageSource = require('./Resources/espresso.png');
            break;
        case 'Event':
            imageSource = require('./Resources/Event.png');
            break;
        case 'Exception':
            imageSource = require('./Resources/Exception.png');
            break;
        case 'express':
            imageSource = require('./Resources/express.png');
            break;
        case 'Extension':
            imageSource = require('./Resources/Extension.png');
            break;
        case 'extjs':
            imageSource = require('./Resources/extjs.png');
            break;
        case 'feedError':
            imageSource = require('./Resources/feedError.png');
            break;
        case 'feedErrorAlt':
            imageSource = require('./Resources/feedErrorAlt.png');
            break;
        case 'feedInstalled':
            imageSource = require('./Resources/feedInstalled.png');
            break;
        case 'feedInstalledAlt':
            imageSource = require('./Resources/feedInstalledAlt.png');
            break;
        case 'feedOkay':
            imageSource = require('./Resources/feedOkay.png');
            break;
        case 'feedOkayAlt':
            imageSource = require('./Resources/feedOkayAlt.png');
            break;
        case 'feedOkayVersioned':
            imageSource = require('./Resources/feedOkayVersioned.png');
            break;
        case 'feedOkayVersionedAlt':
            imageSource = require('./Resources/feedOkayVersionedAlt.png');
            break;
        case 'feedVersioned':
            imageSource = require('./Resources/feedVersioned.png');
            break;
        case 'feedVersionedAlt':
            imageSource = require('./Resources/feedVersionedAlt.png');
            break;
        case 'Field':
            imageSource = require('./Resources/Field.png');
            break;
        case 'File':
            imageSource = require('./Resources/File.png');
            break;
        case 'Filter':
            imageSource = require('./Resources/Filter.png');
            break;
        case 'flask':
            imageSource = require('./Resources/flask.png');
            break;
        case 'Foreign Key':
            imageSource = require('./Resources/Foreign Key.png');
            break;
        case 'foundation':
            imageSource = require('./Resources/foundation.png');
            break;
        case 'Framework':
            imageSource = require('./Resources/Framework.png');
            break;
        case 'Function':
        case 'func':
            imageSource = require('./Resources/Function.png');
            break;
        case 'GCJumpBarAccessorySeparator':
            imageSource = require('./Resources/GCJumpBarAccessorySeparator.png');
            break;
        case 'GCJumpBarSeparator':
            imageSource = require('./Resources/GCJumpBarSeparator.png');
            break;
        case 'General':
            imageSource = require('./Resources/General.png');
            break;
        case 'generalAppIcon':
            imageSource = require('./Resources/generalAppIcon.png');
            break;
        case 'generateDocset':
            imageSource = require('./Resources/generateDocset.png');
            break;
        case 'Gift':
            imageSource = require('./Resources/Gift.png');
            break;
        case 'git':
            imageSource = require('./Resources/git.png');
            break;
        case 'gl2':
            imageSource = require('./Resources/gl2.png');
            break;
        case 'gl3':
            imageSource = require('./Resources/gl3.png');
            break;
        case 'gl4':
            imageSource = require('./Resources/gl4.png');
            break;
        case 'glib':
            imageSource = require('./Resources/glib.png');
            break;
        case 'Global':
            imageSource = require('./Resources/Global.png');
            break;
        case 'go':
            imageSource = require('./Resources/go.png');
            break;
        case 'godoc':
            imageSource = require('./Resources/godoc.png');
            break;
        case 'goLeft_S':
            imageSource = require('./Resources/goLeft_S.png');
            break;
        case 'goLeft':
            imageSource = require('./Resources/goLeft.png');
            break;
        case 'Google':
            imageSource = require('./Resources/Google.png');
            break;
        case 'GoRepo':
            imageSource = require('./Resources/GoRepo.png');
            break;
        case 'GoRepoLarge':
            imageSource = require('./Resources/GoRepoLarge.png');
            break;
        case 'goRight_S':
            imageSource = require('./Resources/goRight_S.png');
            break;
        case 'goRight':
            imageSource = require('./Resources/goRight.png');
            break;
        case 'grails':
            imageSource = require('./Resources/grails.png');
            break;
        case 'groovy':
            imageSource = require('./Resources/groovy.png');
            break;
        case 'grunt':
            imageSource = require('./Resources/grunt.png');
            break;
        case 'Guide':
            imageSource = require('./Resources/Guide.png');
            break;
        case 'haml':
            imageSource = require('./Resources/haml.png');
            break;
        case 'haskell':
            imageSource = require('./Resources/haskell.png');
            break;
        case 'Hello':
            imageSource = require('./Resources/Hello.png');
            break;
        case 'helpTemplate':
            imageSource = require('./Resources/helpTemplate.png');
            break;
        case 'homeDownload_hovered':
            imageSource = require('./Resources/homeDownload_hovered.png');
            break;
        case 'homeDownload':
            imageSource = require('./Resources/homeDownload.png');
            break;
        case 'homeDownloadRetina_hovered':
            imageSource = require('./Resources/homeDownloadRetina_hovered.png');
            break;
        case 'homeDownloadRetina':
            imageSource = require('./Resources/homeDownloadRetina.png');
            break;
        case 'homeGuide_hovered':
            imageSource = require('./Resources/homeGuide_hovered.png');
            break;
        case 'Hook':
            imageSource = require('./Resources/Hook.png');
            break;
        case 'html':
            imageSource = require('./Resources/html.png');
            break;
        case 'icon_16x16@2x':
            imageSource = require('./Resources/icon_16x16@2x.png');
            break;
        case 'icon_32x32@2x':
            imageSource = require('./Resources/icon_32x32@2x.png');
            break;
        case 'icon_128x128@2x':
            imageSource = require('./Resources/icon_128x128@2x.png');
            break;
        case 'icon_256x256@2x':
            imageSource = require('./Resources/icon_256x256@2x.png');
            break;
        case 'icon_512x512@2x':
            imageSource = require('./Resources/icon_512x512@2x.png');
            break;
        case 'Index':
            imageSource = require('./Resources/Index.png');
            break;
        case 'Indirection':
            imageSource = require('./Resources/Indirection.png');
            break;
        case 'Inductive':
            imageSource = require('./Resources/Inductive.png');
            break;
        case 'InsertTemplate':
            imageSource = require('./Resources/InsertTemplate.png');
            break;
        case 'Instance':
            imageSource = require('./Resources/Instance.png');
            break;
        case 'Instruction':
            imageSource = require('./Resources/Instruction.png');
            break;
        case 'Integration':
            imageSource = require('./Resources/Integration.png');
            break;
        case 'intellij':
            imageSource = require('./Resources/intellij.png');
            break;
        case 'Interface':
            imageSource = require('./Resources/Interface.png');
            break;
        case 'iphone':
            imageSource = require('./Resources/iphone.png');
            break;
        case 'jade':
            imageSource = require('./Resources/jade.png');
            break;
        case 'jasmine':
            imageSource = require('./Resources/jasmine.png');
            break;
        case 'java':
            imageSource = require('./Resources/java.png');
            break;
        case 'javadoc':
            imageSource = require('./Resources/javadoc.png');
            break;
        case 'javafx':
            imageSource = require('./Resources/javafx.png');
            break;
        case 'JavaRepo':
            imageSource = require('./Resources/JavaRepo.png');
            break;
        case 'JavaRepoLarge':
            imageSource = require('./Resources/JavaRepoLarge.png');
            break;
        case 'javascript':
            imageSource = require('./Resources/javascript.png');
            break;
        case 'jee6':
            imageSource = require('./Resources/jee6.png');
            break;
        case 'jee7':
            imageSource = require('./Resources/jee7.png');
            break;
        case 'joomla':
            imageSource = require('./Resources/joomla.png');
            break;
        case 'jQuery':
            imageSource = require('./Resources/jQuery.png');
            break;
        case 'jquerym':
            imageSource = require('./Resources/jquerym.png');
            break;
        case 'jqueryui':
            imageSource = require('./Resources/jqueryui.png');
            break;
        case 'keyboardIcon':
            imageSource = require('./Resources/keyboardIcon.png');
            break;
        case 'Keyword':
            imageSource = require('./Resources/Keyword.png');
            break;
        case 'keywordToken_yosemite':
            imageSource = require('./Resources/keywordToken_yosemite.png');
            break;
        case 'keywordToken':
            imageSource = require('./Resources/keywordToken.png');
            break;
        case 'keywordTokenSelected_yosemite':
            imageSource = require('./Resources/keywordTokenSelected_yosemite.png');
            break;
        case 'keywordTokenSelected':
            imageSource = require('./Resources/keywordTokenSelected.png');
            break;
        case 'knockout':
            imageSource = require('./Resources/knockout.png');
            break;
        case 'kobold2d':
            imageSource = require('./Resources/kobold2d.png');
            break;
        case 'laravel':
            imageSource = require('./Resources/laravel.png');
            break;
        case 'latex':
            imageSource = require('./Resources/latex.png');
            break;
        case 'launchbar':
            imageSource = require('./Resources/launchbar.png');
            break;
        case 'Lemma':
            imageSource = require('./Resources/Lemma.png');
            break;
        case 'less':
            imageSource = require('./Resources/less.png');
            break;
        case 'Library':
            imageSource = require('./Resources/Library.png');
            break;
        case 'linux':
            imageSource = require('./Resources/linux.png');
            break;
        case 'lisp':
            imageSource = require('./Resources/lisp.png');
            break;
        case 'Literal':
            imageSource = require('./Resources/Literal.png');
            break;
        case 'lodash':
            imageSource = require('./Resources/lodash.png');
            break;
        case 'lua':
            imageSource = require('./Resources/lua.png');
            break;
        case 'Mac':
            imageSource = require('./Resources/Mac.png');
            break;
        case 'Macro':
            imageSource = require('./Resources/Macro.png');
            break;
        case 'manPages':
            imageSource = require('./Resources/manPages.png');
            break;
        case 'marionette':
            imageSource = require('./Resources/marionette.png');
            break;
        case 'markdown':
            imageSource = require('./Resources/markdown.png');
            break;
        case 'matlab':
            imageSource = require('./Resources/matlab.png');
            break;
        case 'meteor':
            imageSource = require('./Resources/meteor.png');
            break;
        case 'Method':
            imageSource = require('./Resources/Method.png');
            break;
        case 'MethodsButtonAlt':
            imageSource = require('./Resources/MethodsButtonAlt.png');
            break;
        case 'MethodsButtonTemplate':
            imageSource = require('./Resources/MethodsButtonTemplate.png');
            break;
        case 'Mixin':
            imageSource = require('./Resources/Mixin.png');
            break;
        case 'Modifier':
            imageSource = require('./Resources/Modifier.png');
            break;
        case 'Module':
            imageSource = require('./Resources/Module.png');
            break;
        case 'ModuleRuby':
            imageSource = require('./Resources/ModuleRuby.png');
            break;
        case 'ModuleRubyRetina':
            imageSource = require('./Resources/ModuleRubyRetina.png');
            break;
        case 'moment':
            imageSource = require('./Resources/moment.png');
            break;
        case 'mongodb':
            imageSource = require('./Resources/mongodb.png');
            break;
        case 'mongoose':
            imageSource = require('./Resources/mongoose.png');
            break;
        case 'mono':
            imageSource = require('./Resources/mono.png');
            break;
        case 'moo':
            imageSource = require('./Resources/moo.png');
            break;
        case 'mysql':
            imageSource = require('./Resources/mysql.png');
            break;
        case 'Namespace':
            imageSource = require('./Resources/Namespace.png');
            break;
        case 'neat':
            imageSource = require('./Resources/neat.png');
            break;
        case 'net':
            imageSource = require('./Resources/net.png');
            break;
        case 'NewSnippet':
            imageSource = require('./Resources/NewSnippet.png');
            break;
        case 'nginx':
            imageSource = require('./Resources/nginx.png');
            break;
        case 'nodejs':
            imageSource = require('./Resources/nodejs.png');
            break;
        case 'Notation':
            imageSource = require('./Resources/Notation.png');
            break;
        case 'numpy':
            imageSource = require('./Resources/numpy.png');
            break;
        case 'Object':
            imageSource = require('./Resources/Object.png');
            break;
        case 'ocaml':
            imageSource = require('./Resources/ocaml.png');
            break;
        case 'openExternal':
            imageSource = require('./Resources/openExternal.png');
            break;
        case 'openExternalRegularTemplate':
            imageSource = require('./Resources/openExternalRegularTemplate.png');
            break;
        case 'Operator':
            imageSource = require('./Resources/Operator.png');
            break;
        case 'Option':
            imageSource = require('./Resources/Option.png');
            break;
        case 'Other':
            imageSource = require('./Resources/Other.png');
            break;
        case 'overflowImage':
            imageSource = require('./Resources/overflowImage.png');
            break;
        case 'overflowImagePressed':
            imageSource = require('./Resources/overflowImagePressed.png');
            break;
        case 'overlayLogo':
            imageSource = require('./Resources/overlayLogo.png');
            break;
        case 'Package':
            imageSource = require('./Resources/Package.png');
            break;
        case 'page':
            imageSource = require('./Resources/page.png');
            break;
        case 'Parameter':
            imageSource = require('./Resources/Parameter.png');
            break;
        case 'perl':
            imageSource = require('./Resources/perl.png');
            break;
        case 'phonegap':
            imageSource = require('./Resources/phonegap.png');
            break;
        case 'php':
            imageSource = require('./Resources/php.png');
            break;
        case 'phpp':
            imageSource = require('./Resources/phpp.png');
            break;
        case 'PHPRepo':
            imageSource = require('./Resources/PHPRepo.png');
            break;
        case 'PHPRepoLarge':
            imageSource = require('./Resources/PHPRepoLarge.png');
            break;
        case 'phpstorm':
            imageSource = require('./Resources/phpstorm.png');
            break;
        case 'phpunit':
            imageSource = require('./Resources/phpunit.png');
            break;
        case 'pin':
            imageSource = require('./Resources/pin.png');
            break;
        case 'pinAlt':
            imageSource = require('./Resources/pinAlt.png');
            break;
        case 'Placeholders':
            imageSource = require('./Resources/Placeholders.png');
            break;
        case 'playIcon':
            imageSource = require('./Resources/playIcon.png');
            break;
        case 'playIconAlt':
            imageSource = require('./Resources/playIconAlt.png');
            break;
        case 'playIconYosemite':
            imageSource = require('./Resources/playIconYosemite.png');
            break;
        case 'playIconYosemiteAlt':
            imageSource = require('./Resources/playIconYosemiteAlt.png');
            break;
        case 'playjava':
            imageSource = require('./Resources/playjava.png');
            break;
        case 'playscala':
            imageSource = require('./Resources/playscala.png');
            break;
        case 'Plugin':
            imageSource = require('./Resources/Plugin.png');
            break;
        case 'polymerdart':
            imageSource = require('./Resources/polymerdart.png');
            break;
        case 'popclip':
            imageSource = require('./Resources/popclip.png');
            break;
        case 'Procedure':
            imageSource = require('./Resources/Procedure.png');
            break;
        case 'processing':
            imageSource = require('./Resources/processing.png');
            break;
        case 'progressImage':
            imageSource = require('./Resources/progressImage.png');
            break;
        case 'Projection':
            imageSource = require('./Resources/Projection.png');
            break;
        case 'Property':
            imageSource = require('./Resources/Property.png');
            break;
        case 'Protocol':
            imageSource = require('./Resources/Protocol.png');
            break;
        case 'prototype':
            imageSource = require('./Resources/prototype.png');
            break;
        case 'Provider':
            imageSource = require('./Resources/Provider.png');
            break;
        case 'Provisioner':
            imageSource = require('./Resources/Provisioner.png');
            break;
        case 'psql':
            imageSource = require('./Resources/psql.png');
            break;
        case 'puppet':
            imageSource = require('./Resources/puppet.png');
            break;
        case 'Purchase':
            imageSource = require('./Resources/Purchase.png');
            break;
        case 'Purchased':
            imageSource = require('./Resources/Purchased.png');
            break;
        case 'pycharm':
            imageSource = require('./Resources/pycharm.png');
            break;
        case 'python':
            imageSource = require('./Resources/python.png');
            break;
        case 'PythonRepo':
            imageSource = require('./Resources/PythonRepo.png');
            break;
        case 'PythonRepoLarge':
            imageSource = require('./Resources/PythonRepoLarge.png');
            break;
        case 'qt':
            imageSource = require('./Resources/qt.png');
            break;
        case 'Query':
            imageSource = require('./Resources/Query.png');
            break;
        case 'quicksilver':
            imageSource = require('./Resources/quicksilver.png');
            break;
        case 'r':
            imageSource = require('./Resources/r.png');
            break;
        case 'rails':
            imageSource = require('./Resources/rails.png');
            break;
        case 'Record':
            imageSource = require('./Resources/Record.png');
            break;
        case 'redis':
            imageSource = require('./Resources/redis.png');
            break;
        case 'Relationship':
            imageSource = require('./Resources/Relationship.png');
            break;
        case 'remote_available':
            imageSource = require('./Resources/remote_available.png');
            break;
        case 'remote_connect_screen':
            imageSource = require('./Resources/remote_connect_screen.png');
            break;
        case 'remote_connected':
            imageSource = require('./Resources/remote_connected.png');
            break;
        case 'remote_not_available':
            imageSource = require('./Resources/remote_not_available.png');
            break;
        case 'remote_not_paired':
            imageSource = require('./Resources/remote_not_paired.png');
            break;
        case 'Remote':
            imageSource = require('./Resources/Remote.png');
            break;
        case 'repoArrow':
            imageSource = require('./Resources/repoArrow.png');
            break;
        case 'Report':
            imageSource = require('./Resources/Report.png');
            break;
        case 'requestDocset':
            imageSource = require('./Resources/requestDocset.png');
            break;
        case 'require':
            imageSource = require('./Resources/require.png');
            break;
        case 'Resource':
            imageSource = require('./Resources/Resource.png');
            break;
        case 'Restore':
            imageSource = require('./Resources/Restore.png');
            break;
        case 'ruby':
            imageSource = require('./Resources/ruby.png');
            break;
        case 'rubyGems':
            imageSource = require('./Resources/rubyGems.png');
            break;
        case 'rubymine':
            imageSource = require('./Resources/rubymine.png');
            break;
        case 'rubymotion':
            imageSource = require('./Resources/rubymotion.png');
            break;
        case 'RubyRepo':
            imageSource = require('./Resources/RubyRepo.png');
            break;
        case 'RubyRepoLarge':
            imageSource = require('./Resources/RubyRepoLarge.png');
            break;
        case 'rust':
            imageSource = require('./Resources/rust.png');
            break;
        case 'salt':
            imageSource = require('./Resources/salt.png');
            break;
        case 'Sample':
            imageSource = require('./Resources/Sample.png');
            break;
        case 'sass':
            imageSource = require('./Resources/sass.png');
            break;
        case 'scala':
            imageSource = require('./Resources/scala.png');
            break;
        case 'scaladoc':
            imageSource = require('./Resources/scaladoc.png');
            break;
        case 'ScalaRepo':
            imageSource = require('./Resources/ScalaRepo.png');
            break;
        case 'ScalaRepoLarge':
            imageSource = require('./Resources/ScalaRepoLarge.png');
            break;
        case 'Schema':
            imageSource = require('./Resources/Schema.png');
            break;
        case 'scipy':
            imageSource = require('./Resources/scipy.png');
            break;
        case 'Script':
            imageSource = require('./Resources/Script.png');
            break;
        case 'searchKeywordIcon':
            imageSource = require('./Resources/searchKeywordIcon.png');
            break;
        case 'Section':
            imageSource = require('./Resources/Section.png');
            break;
        case 'sencha':
            imageSource = require('./Resources/sencha.png');
            break;
        case 'Service':
            imageSource = require('./Resources/Service.png');
            break;
        case 'Setting':
            imageSource = require('./Resources/Setting.png');
            break;
        case 'settings2':
            imageSource = require('./Resources/settings2.png');
            break;
        case 'settings2Alt':
            imageSource = require('./Resources/settings2Alt.png');
            break;
        case 'Shortcut':
            imageSource = require('./Resources/Shortcut.png');
            break;
        case 'sinon':
            imageSource = require('./Resources/sinon.png');
            break;
        case 'smarty':
            imageSource = require('./Resources/smarty.png');
            break;
        case 'Snippet':
            imageSource = require('./Resources/Snippet.png');
            break;
        case 'snippetCopied':
            imageSource = require('./Resources/snippetCopied.png');
            break;
        case 'snippetIcon':
            imageSource = require('./Resources/snippetIcon.png');
            break;
        case 'snippetPasted':
            imageSource = require('./Resources/snippetPasted.png');
            break;
        case 'Snippets':
            imageSource = require('./Resources/Snippets.png');
            break;
        case 'sooffline':
            imageSource = require('./Resources/sooffline.png');
            break;
        case 'soonline':
            imageSource = require('./Resources/soonline.png');
            break;
        case 'sourceListSearchIcon':
            imageSource = require('./Resources/sourceListSearchIcon.png');
            break;
        case 'sourceListSearchIconAlt':
            imageSource = require('./Resources/sourceListSearchIconAlt.png');
            break;
        case 'sourceListSearchIconYosemite':
            imageSource = require('./Resources/sourceListSearchIconYosemite.png');
            break;
        case 'sourceListSearchIconYosemiteAlt':
            imageSource = require('./Resources/sourceListSearchIconYosemiteAlt.png');
            break;
        case 'sparrow':
            imageSource = require('./Resources/sparrow.png');
            break;
        case 'spring':
            imageSource = require('./Resources/spring.png');
            break;
        case 'SproutCore':
            imageSource = require('./Resources/SproutCore.png');
            break;
        case 'sqlalchemy':
            imageSource = require('./Resources/sqlalchemy.png');
            break;
        case 'sqlite':
            imageSource = require('./Resources/sqlite.png');
            break;
        case 'Stack Overflow':
            imageSource = require('./Resources/Stack Overflow.png');
            break;
        case 'StackOverflowRepo':
            imageSource = require('./Resources/StackOverflowRepo.png');
            break;
        case 'StackOverflowRepoLarge':
            imageSource = require('./Resources/StackOverflowRepoLarge.png');
            break;
        case 'statamic':
            imageSource = require('./Resources/statamic.png');
            break;
        case 'Statement':
            imageSource = require('./Resources/Statement.png');
            break;
        case 'statusIcon_yosemite':
            imageSource = require('./Resources/statusIcon_yosemite.png');
            break;
        case 'statusIcon':
            imageSource = require('./Resources/statusIcon.png');
            break;
        case 'statusIconAlt':
            imageSource = require('./Resources/statusIconAlt.png');
            break;
        case 'statusIconClicked_yosemite':
            imageSource = require('./Resources/statusIconClicked_yosemite.png');
            break;
        case 'statusIconClicked':
            imageSource = require('./Resources/statusIconClicked.png');
            break;
        case 'stopSplash':
            imageSource = require('./Resources/stopSplash.png');
            break;
        case 'Struct':
            imageSource = require('./Resources/Struct.png');
            break;
        case 'Style':
            imageSource = require('./Resources/Style.png');
            break;
        case 'stylus':
            imageSource = require('./Resources/stylus.png');
            break;
        case 'sublime':
            imageSource = require('./Resources/sublime.png');
            break;
        case 'Subroutine':
            imageSource = require('./Resources/Subroutine.png');
            break;
        case 'svg':
            imageSource = require('./Resources/svg.png');
            break;
        case 'swift':
            imageSource = require('./Resources/swift.png');
            break;
        case 'symfony':
            imageSource = require('./Resources/symfony.png');
            break;
        case 'TabAddButton':
            imageSource = require('./Resources/TabAddButton.png');
            break;
        case 'TabAddButtonYosemite':
            imageSource = require('./Resources/TabAddButtonYosemite.png');
            break;
        case 'tabClose':
            imageSource = require('./Resources/tabClose.png');
            break;
        case 'tabCloseHover':
            imageSource = require('./Resources/tabCloseHover.png');
            break;
        case 'tabCloseHoverYosemite':
            imageSource = require('./Resources/tabCloseHoverYosemite.png');
            break;
        case 'tabClosePressed':
            imageSource = require('./Resources/tabClosePressed.png');
            break;
        case 'tabClosePressedYosemite':
            imageSource = require('./Resources/tabClosePressedYosemite.png');
            break;
        case 'tabCloseYosemite':
            imageSource = require('./Resources/tabCloseYosemite.png');
            break;
        case 'Table':
            imageSource = require('./Resources/Table.png');
            break;
        case 'Tactic':
            imageSource = require('./Resources/Tactic.png');
            break;
        case 'Tag':
            imageSource = require('./Resources/Tag.png');
            break;
        case 'tagIcon':
            imageSource = require('./Resources/tagIcon.png');
            break;
        case 'tcl':
            imageSource = require('./Resources/tcl.png');
            break;
        case 'terminal':
            imageSource = require('./Resources/terminal.png');
            break;
        case 'Test':
            imageSource = require('./Resources/Test.png');
            break;
        case 'textmate':
            imageSource = require('./Resources/textmate.png');
            break;
        case 'textwrangler':
            imageSource = require('./Resources/textwrangler.png');
            break;
        case 'Tick':
            imageSource = require('./Resources/Tick.png');
            break;
        case 'Tips & Tricks':
            imageSource = require('./Resources/Tips & Tricks.png');
            break;
        case 'titanium':
            imageSource = require('./Resources/titanium.png');
            break;
        case 'toolbar_addTemplate_yosemite':
            imageSource = require('./Resources/toolbar_addTemplate_yosemite.png');
            break;
        case 'toolbar_docs_yosemite':
            imageSource = require('./Resources/toolbar_docs_yosemite.png');
            break;
        case 'toolbar_goHomeTemplate_yosemite':
            imageSource = require('./Resources/toolbar_goHomeTemplate_yosemite.png');
            break;
        case 'tornado':
            imageSource = require('./Resources/tornado.png');
            break;
        case 'Trait':
            imageSource = require('./Resources/Trait.png');
            break;
        case 'Trigger':
            imageSource = require('./Resources/Trigger.png');
            break;
        case 'twig':
            imageSource = require('./Resources/twig.png');
            break;
        case 'twisted':
            imageSource = require('./Resources/twisted.png');
            break;
        case 'Type':
            imageSource = require('./Resources/Type.png');
            break;
        case 'typo3':
            imageSource = require('./Resources/typo3.png');
            break;
        case 'underscore':
            imageSource = require('./Resources/underscore.png');
            break;
        case 'unifiedCheck':
            imageSource = require('./Resources/unifiedCheck.png');
            break;
        case 'Union':
            imageSource = require('./Resources/Union.png');
            break;
        case 'unity3d':
            imageSource = require('./Resources/unity3d.png');
            break;
        case 'Unknown':
            imageSource = require('./Resources/Unknown.png');
            break;
        case 'untagged':
            imageSource = require('./Resources/untagged.png');
            break;
        case 'update':
            imageSource = require('./Resources/update.png');
            break;
        case 'Updates':
            imageSource = require('./Resources/Updates.png');
            break;
        case 'UserRepo':
            imageSource = require('./Resources/UserRepo.png');
            break;
        case 'UserRepoAlt':
            imageSource = require('./Resources/UserRepoAlt.png');
            break;
        case 'UserRepoLarge':
            imageSource = require('./Resources/UserRepoLarge.png');
            break;
        case 'vagrant':
            imageSource = require('./Resources/vagrant.png');
            break;
        case 'Value':
            imageSource = require('./Resources/Value.png');
            break;
        case 'Variable':
            imageSource = require('./Resources/Variable.png');
            break;
        case 'Variant':
            imageSource = require('./Resources/Variant.png');
            break;
        case 'vim':
            imageSource = require('./Resources/vim.png');
            break;
        case 'vimLarge':
            imageSource = require('./Resources/vimLarge.png');
            break;
        case 'vsphere':
            imageSource = require('./Resources/vsphere.png');
            break;
        case 'Web':
            imageSource = require('./Resources/Web.png');
            break;
        case 'webPageClose':
            imageSource = require('./Resources/webPageClose.png');
            break;
        case 'webPageCloseRetina':
            imageSource = require('./Resources/webPageCloseRetina.png');
            break;
        case 'webstorm':
            imageSource = require('./Resources/webstorm.png');
            break;
        case 'Welcome':
            imageSource = require('./Resources/Welcome.png');
            break;
        case 'whiteClose':
            imageSource = require('./Resources/whiteClose.png');
            break;
        case 'Word':
            imageSource = require('./Resources/Word.png');
            break;
        case 'wordpress':
            imageSource = require('./Resources/wordpress.png');
            break;
        case 'xamarin':
            imageSource = require('./Resources/xamarin.png');
            break;
        case 'xcode':
            imageSource = require('./Resources/xcode.png');
            break;
        case 'xojo':
            imageSource = require('./Resources/xojo.png');
            break;
        case 'xslt':
            imageSource = require('./Resources/xslt.png');
            break;
        case 'xul':
            imageSource = require('./Resources/xul.png');
            break;
        case 'yii':
            imageSource = require('./Resources/yii.png');
            break;
        case 'yui':
            imageSource = require('./Resources/yui.png');
            break;
        case 'zend':
            imageSource = require('./Resources/zend.png');
            break;
        case 'zepto':
            imageSource = require('./Resources/zepto.png');
            break;
        case 'zoomIn':
            imageSource = require('./Resources/zoomIn.png');
            break;
        case 'zoomInRegularTemplate':
            imageSource = require('./Resources/zoomInRegularTemplate.png');
            break;
        case 'zoomOut':
            imageSource = require('./Resources/zoomOut.png');
            break;
        case 'zoomOutRegularTemplate':
            imageSource = require('./Resources/zoomOutRegularTemplate.png');
            break;
        default:
            console.log(icon);
            imageSource = require('./Resources/Avatar.png');
    }
    return imageSource;
}
module.exports = getImageSource;