export function dateOfLastUpdate(file) {
  let url = "https://api.github.com/repos/le0flo/curriculum/commits";

  let http = new XMLHttpRequest();
  http.open("GET", url, false);
  http.send();

  if (http.status == 200) {
    let commits = JSON.parse(http.responseText);

    for (const commit of commits) {
      let dateString = commit["commit"]["committer"]["date"];

      http.open("GET", commit["commit"]["tree"]["url"], false);
      http.send();

      if (http.status == 200) {
        let tree = JSON.parse(http.responseText);

        for (const treeFile of tree["tree"]) {
          if (treeFile["path"].includes(file)) {
            let date = new Date(dateString);
            return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
          }
        }
      }
    }
  }

  return "--/--/----";
}
