const repos = await fetch('https://api.github.com/users/Pink-Mallow/repos?sort=create')
const reposResponse = await repos.json()

export default reposResponse