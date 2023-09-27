// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  console.log(
    'Congratulations, your extension "snowball-components-folder-template" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  // let disposable = vscode.commands.registerCommand(
  // "snowball-components-folder-template.helloWorld",
  // () => {
  const fileSystemWatcher = vscode.workspace.createFileSystemWatcher("**/");

  fileSystemWatcher.onDidCreate((event) => {
    if (/components/g.test(event.path)) {
      const eventURI = vscode.Uri.file(event.path);

      vscode.workspace.fs.stat(eventURI).then(({type}) => {
        console.log(typeof type, typeof vscode.FileType.Directory);

        if (type === vscode.FileType.Directory) {
          const componentFileURI = path.join(event.fsPath, "index.tsx");
          const stylesFileURI = path.join(event.fsPath, "styles.ts");

          fs.writeFileSync(componentFileURI, "// i'm component");
          vscode.window.setStatusBarMessage(
            "index.tsx 파일이 생성되었어요",
            5000
          );
          fs.writeFileSync(stylesFileURI, "// i'm styles");
          vscode.window.setStatusBarMessage(
            "styles.ts 파일이 생성되었어요",
            5000
          );

          return;
        }
      });
    }
  });

  context.subscriptions.push(fileSystemWatcher);
  // context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
