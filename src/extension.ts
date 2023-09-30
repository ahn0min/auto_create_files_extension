import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

// const config = vscode.workspace.getConfiguration("auto-create-file-bot");

export function activate(context: vscode.ExtensionContext) {
  const fileSystemWatcher = vscode.workspace.createFileSystemWatcher("**/");

  // const folder1 = config.get("folder1");
  // const file1 = config.get("file1");
  // const file2 = config.get("file2");

  fileSystemWatcher.onDidCreate((event) => {
    // if (folder1) {
    //   new RegExp(folder1, "g");
    // }
    // if (/${folder1}/g.test(event.path)) {
    if (/components/g.test(event.path)) {
      const eventURI = vscode.Uri.file(event.path);

      vscode.workspace.fs.stat(eventURI).then(({type}) => {
        if (type === vscode.FileType.Directory) {
          const componentFileURI = path.join(event.fsPath, "index.tsx");
          const styleFileURI = path.join(event.fsPath, "style.ts");

          if (!fs.existsSync(componentFileURI)) {
            fs.writeFileSync(componentFileURI, "// i'm component");
            vscode.window.setStatusBarMessage(
              "index.tsx 파일이 생성되었어요",
              5000
            );
          }

          if (!fs.existsSync(styleFileURI)) {
            fs.writeFileSync(styleFileURI, "// i'm style");
            vscode.window.setStatusBarMessage(
              "style.ts 파일이 생성되었어요",
              5000
            );
          }

          return;
        }
      });
    }
  });

  context.subscriptions.push(fileSystemWatcher);
}

export function deactivate() {}
