const shadeColor = require('./helpers/shadeColor')

module.exports = ({
  background,
  blue,
  comment,
  foreground,
  green,
  orange,
  red,
  selection,
  yellow,
}) => ({
  'contrastActiveBorder': null,
  'contrastBorder': background,
  'focusBorder': background,
  'foreground': foreground,
  'selection.background': null,
  'errorForeground': red,
  'button.background': blue,
  'button.foreground': foreground,
  'button.hoverBackground': blue,
  'dropdown.background': background,
  'dropdown.border': blue,
  'dropdown.foreground': foreground,
  'input.background': null,
  'input.border': blue,
  'input.foreground': foreground,
  'input.placeholderForeground': foreground,
  'inputOption.activeBorder': foreground,
  'inputValidation.errorBackground': red,
  'inputValidation.errorBorder': red,
  'inputValidation.infoBackground': null,
  'inputValidation.infoBorder': null,
  'inputValidation.warningBackground': orange,
  'inputValidation.warningBorder': orange,
  'scrollbar.shadow': null,
  'scrollbarSlider.activeBackground': shadeColor(background, 40),
  'scrollbarSlider.background': shadeColor(background, 25),
  'scrollbarSlider.hoverBackground': shadeColor(background, 40),
  'badge.background': blue,
  'badge.foreground': background,
  'progressBar.background': blue,
  'list.activeSelectionBackground': shadeColor(background, 35),
  'list.activeSelectionForeground': foreground,
  'list.dropBackground': red,
  'list.focusBackground': shadeColor(background, 35),
  'list.focusForeground': foreground,
  'list.highlightForeground': foreground,
  'list.hoverBackground': shadeColor(background, 35),
  'list.hoverForeground': foreground,
  'list.inactiveSelectionBackground': shadeColor(background, 35),
  'list.inactiveSelectionForeground': foreground,
  'activityBar.background': background,
  'activityBar.dropBackground': blue,
  'activityBar.foreground': shadeColor(background, 65),
  'activityBar.border': background,
  'activityBarBadge.background': blue,
  'activityBarBadge.foreground': background,
  'sideBar.background': background,
  'sideBar.foreground': foreground,
  'sideBar.border': background,
  'sideBarTitle.foreground': foreground,
  'sideBarSectionHeader.background': shadeColor(background, 15),
  'sideBarSectionHeader.foreground': foreground,
  'editorGroup.background': null,
  'editorGroup.border': null,
  'editorGroup.dropBackground': shadeColor(background, 35),
  'editorGroupHeader.noTabsBackground': null,
  'editorGroupHeader.tabsBackground': background,
  'editorGroupHeader.tabsBorder': background,
  'tab.activeBackground': background,
  'tab.activeForeground': foreground,
  'tab.border': background,
  'tab.activeBorder': background,
  'tab.unfocusedActiveBorder': background,
  'tab.inactiveBackground': background,
  'tab.inactiveForeground': comment,
  'tab.unfocusedActiveForeground': null,
  'tab.unfocusedInactiveForeground': null,
  'editor.background': background,
  'editor.foreground': foreground,
  'editorLineNumber.foreground': comment,
  'editorCursor.foreground': blue,
  'editor.selectionBackground': selection,
  'editor.selectionHighlightBackground': selection,
  'editor.inactiveSelectionBackground': shadeColor(selection, -10),
  'editor.wordHighlightBackground': selection,
  'editor.wordHighlightStrongBackground': selection,
  'editor.findMatchBackground': blue,
  'editor.findMatchHighlightBackground': selection,
  'editor.findRangeHighlightBackground': selection,
  'editor.hoverHighlightBackground': selection,
  'editor.lineHighlightBackground': selection,
  'editor.lineHighlightBorder': selection,
  'editorLink.activeForeground': null,
  'editor.rangeHighlightBackground': selection,
  'editorWhitespace.foreground': null,
  'editorIndentGuide.background': comment,
  'editorRuler.foreground': comment,
  'editorCodeLens.foreground': null,
  'editorBracketMatch.background': null,
  'editorBracketMatch.border': null,
  'editorOverviewRuler.currentContentForeground': blue,
  'editorOverviewRuler.incomingContentForeground': blue,
  'editorOverviewRuler.commonContentForeground': blue,
  'editorError.foreground': red,
  'editorError.border': null,
  'editorWarning.foreground': green,
  'editorWarning.border': null,
  'editorGutter.background': null,
  'editorGutter.modifiedBackground': yellow,
  'editorGutter.addedBackground': green,
  'editorGutter.deletedBackground': red,
  'diffEditor.insertedTextBackground': shadeColor(green, -100),
  'diffEditor.insertedTextBorder': shadeColor(green, -100),
  'diffEditor.removedTextBackground': shadeColor(red, -100),
  'diffEditor.removedTextBorder': shadeColor(red, -100),
  'editorWidget.background': background,
  'editorWidget.border': null,
  'editorSuggestWidget.background': null,
  'editorSuggestWidget.border': null,
  'editorSuggestWidget.foreground': null,
  'editorSuggestWidget.highlightForeground': null,
  'editorSuggestWidget.selectedBackground': null,
  'editorHoverWidget.background': background,
  'editorHoverWidget.border': blue,
  'debugExceptionWidget.background': background,
  'debugExceptionWidget.border': blue,
  'editorMarkerNavigation.background': background,
  'editorMarkerNavigationError.background': red,
  'editorMarkerNavigationWarning.background': orange,
  'peekView.border': blue,
  'peekViewEditor.background': null,
  'peekViewEditor.matchHighlightBackground': selection,
  'peekViewResult.background': null,
  'peekViewResult.fileForeground': foreground,
  'peekViewResult.lineForeground': foreground,
  'peekViewResult.matchHighlightBackground': selection,
  'peekViewResult.selectionBackground': null,
  'peekViewResult.selectionForeground': foreground,
  'peekViewTitle.background': background,
  'peekViewTitleDescription.foreground': null,
  'peekViewTitleLabel.foreground': foreground,
  'merge.currentHeaderBackground': blue,
  'merge.currentContentBackground': null,
  'merge.incomingHeaderBackground': blue,
  'merge.incomingContentBackground': null,
  'merge.border': null,
  'panel.background': background,
  'panel.border': background,
  'panelTitle.activeBorder': blue,
  'panelTitle.activeForeground': foreground,
  'panelTitle.inactiveForeground': null,
  'statusBar.background': background,
  'statusBar.foreground': comment,
  'statusBar.border': background,
  'statusBar.debuggingBackground': null,
  'statusBar.debuggingForeground': null,
  'statusBar.debuggingBorder': null,
  'statusBar.noFolderForeground': null,
  'statusBar.noFolderBackground': background,
  'statusBar.noFolderBorder': null,
  'statusBarItem.activeBackground': null,
  'statusBarItem.hoverBackground': null,
  'statusBarItem.prominentBackground': null,
  'statusBarItem.prominentHoverBackground': null,
  'titleBar.activeBackground': null,
  'titleBar.activeForeground': foreground,
  'titleBar.inactiveBackground': null,
  'titleBar.inactiveForeground': null,
  'notification.background': background,
  'notification.foreground': foreground,
  'notification.buttonForeground': foreground,
  'notification.infoBackground': blue,
  'notification.infoForeground': foreground,
  'notification.warningBackground': orange,
  'notification.warningForeground': foreground,
  'notification.errorBackground': red,
  'notification.errorForeground': foreground,
  'extensionButton.prominentForeground': background,
  'extensionButton.prominentBackground': blue,
  'extensionButton.prominentHoverBackground': blue,
  'pickerGroup.foreground': blue,
  'pickerGroup.border': null,
  'terminal.ansiWhite': foreground,
  'terminal.ansiBlack': background,
  'terminal.ansiBlue': blue,
  'terminal.ansiCyan': blue,
  'terminal.ansiGreen': green,
  'terminal.ansiMagenta': red,
  'terminal.ansiRed': red,
  'terminal.ansiYellow': yellow,
  'terminal.ansiBrightWhite': foreground,
  'terminal.ansiBrightBlack': background,
  'terminal.ansiBrightBlue': blue,
  'terminal.ansiBrightCyan': blue,
  'terminal.ansiBrightGreen': green,
  'terminal.ansiBrightMagenta': green,
  'terminal.ansiBrightRed': red,
  'terminal.ansiBrightYellow': yellow,
  'debugToolBar.background': background,
  'welcomePage.buttonBackground': null,
  'welcomePage.buttonHoverBackground': null,
  'walkThrough.embeddedEditorBackground': null,
})
