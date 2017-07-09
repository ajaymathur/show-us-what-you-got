class GitHubService {
    constructor(baseUrl, http, apiAuthenticationToken) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.apiAuthenticationToken = apiAuthenticationToken;
        this.authenticationQueryString = "";
        if (this.apiAuthenticationToken !== "") {
            this.authenticationQueryString = "?access_token=" + this.apiAuthenticationToken;
        }
    }

    getUsersForOrganisation(organisationId) {
        return this.http.get(this.baseUrl + "orgs/" + organisationId + "/members" + this.authenticationQueryString);
    }

    getRepositoriesByUser(userName) {
        return this.http.get(`${this.baseUrl}users/${userName}/repos${this.authenticationQueryString}`)
    }
}

module.exports = GitHubService;