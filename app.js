fetch(`https://api.github.com/repos/viniarski/first_website`)
  .then((response) => response.json())
  .then((data) => {
    displayRepoInfo(data);
  });

function displayRepoInfo(repoData) {
  const repoInfo = document.getElementById("repo-info");

  const stargazersCount = document.createElement("p");
  stargazersCount.textContent = `Repo: first_website - Stargazers: ${repoData.stargazers_count}`;

  repoInfo.appendChild(stargazersCount);
}
