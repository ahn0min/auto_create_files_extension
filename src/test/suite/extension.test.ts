import * as assert from "assert";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
  const acitveTextEditor = vscode.window.activeTextEditor;

  if (acitveTextEditor?.document.uri) {
    const activeFolderURI = vscode.workspace.getWorkspaceFolder(
      acitveTextEditor.document.uri
    )?.uri;
    vscode.window.showInformationMessage(`Start all tests. ${activeFolderURI}`);
  }

  return;
});
