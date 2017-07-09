import Logger from './helpers/logger';
import GitHubService from './services/github';
import Http from './helpers/http';

const baseUrl = "https://api.github.com/";
const organisationId = "uber";
const gitHubApiAuthToken = ""; //add your GitHub API OAuth key here to increase request limit

let logger = new Logger();
let http = new Http();

let gitHubService = new GitHubService(baseUrl, http, gitHubApiAuthToken);

gitHubService.getUsersForOrganisation(organisationId).then((users) => {
    users.forEach((user) => {
        gitHubService.getRepositoriesByUser(user.login).then(repos => {
            logger.log("Username: " + user.login);
            logger.log("repositories:");
            repos.forEach(repo => {
                logger.log(repo.name);
            });
            logger.log("------------");
        });
    });
}).catch((error) => {
    logger.log("Error: " + error);
});
