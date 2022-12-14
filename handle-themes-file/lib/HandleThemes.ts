import { readdir } from "fs";

export default class HandleThemes {
  public getFolderFiles(path: string): void {
    readdir(path, (errStatus, fileList) => {
      if (errStatus !== null) {
        console.log("文件读取失败, 错误原因: ", errStatus);
        return;
      }
      console.log("文件读取成功", fileList);
    });
  }
}
