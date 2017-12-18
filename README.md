# Opl-cli (On-Demand Project Launch)

This is an application made in Node.js with the intention of starting projects based on models hosted in Git repositories.

### Usage

* `opl new` Starts a new project based on pre-registered templates.
* `opl new <project-name> <git-url> <branch>` Starts a new project based on templates hosted in git. The use of `<branch>` is optional.

The OPL has compatibility with 3 web services of git repositories, they are: [Bitbucket](https://bitbucket.org), [GitHub](https://github.com/) and [GitLab](https://gitlab.com/). It's restricted to open source projects.

Below is the fear for url formatting for each Git provider:

Provider      | Url
------------- | -------------
Bitbucket     | bitbucket:owner/repository-name#branch-name
GitHub        | owner/repository-name#branch-name
GitLab        | gitlab:mygitlab.com:owner/repository-name#branch-name

### License
MIT
