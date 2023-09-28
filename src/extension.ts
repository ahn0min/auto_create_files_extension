import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

export function activate(context: vscode.ExtensionContext) {
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
}

export function deactivate() {}
