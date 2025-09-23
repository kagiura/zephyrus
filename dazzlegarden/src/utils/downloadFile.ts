/**
 * given a link, download the file
 */
function downloadFile(link: string, fileName: string): void {
  const a = document.createElement("a");
  a.href = link;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default downloadFile;
