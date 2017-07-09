import GitHubService from "./github";
import Http from "./../helpers/http";
import sinon from "sinon";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";
import sinonAsPromised from "sinon-as-promised";

let should = chai.should();

chai.use(chaiAsPromised);

describe("github service", () => {
    const baseGitHubUrl = "https://api.github.com/";

    let gitHubService;
    let http;
    let httpGetStub;

    beforeEach(() => {
        http = new Http();
        httpGetStub = sinon.stub(http, 'get');
    });

    afterEach(() => {
        httpGetStub.restore();
    });

    describe('getUsersForOrganisation', () => {
        const organisationId = "facebook";

        const userData = [
            {
                userId: "one"
            },
            {
                userId: "two"
            },
            {
                userId: "three"
            }
        ];
        it("should return users for organisation", (done) => {
            //Arrange
            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, "");

            //Act
            let promise = gitHubService.getUsersForOrganisation(organisationId);

            //Assert
            promise.should.eventually.deep.equal(userData).notify(done);
        });

        it("should append authentication parameter to url", () => {
            //Arrange
            const secret = "secret";

            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, secret);

            //Act
            gitHubService.getUsersForOrganisation(organisationId);

            //Assert
            httpGetStub.getCall(0).args[0].endsWith("?access_token=" + secret).should.equal(true);
        });

        it("should prepend base url to url", () => {
            //Arrange
            const secret = "secret";

            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, secret);

            //Act
            gitHubService.getUsersForOrganisation(organisationId);

            //Assert
            httpGetStub.getCall(0).args[0].startsWith(baseGitHubUrl).should.equal(true);
        });
    })


    describe('getRepositoriesByUser', () => {
        const userName = "testuser";

        const userData = [
            {
                name: "one"
            },
            {
                name: "two"
            },
            {
                name: "three"
            }
        ];

        it("should return all repository for the user", (done) => {
            //Arrange
            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, "");

            //Act
            let promise = gitHubService.getRepositoriesByUser(userName);

            //Assert
            promise.should.eventually.deep.equal(userData).notify(done);
        });

        it("should append authentication parameter to url", () => {
            //Arrange
            const secret = "secret";

            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, secret);

            //Act
            gitHubService.getRepositoriesByUser(userName);

            //Assert
            httpGetStub.getCall(0).args[0].endsWith("?access_token=" + secret).should.equal(true);
        });

        it("should prepend base url to url", () => {
            //Arrange
            const secret = "secret";

            httpGetStub.resolves(userData);

            gitHubService = new GitHubService(baseGitHubUrl, http, secret);

            //Act
            gitHubService.getRepositoriesByUser(userName);

            //Assert
            httpGetStub.getCall(0).args[0].startsWith(baseGitHubUrl).should.equal(true);
        });
    })
});