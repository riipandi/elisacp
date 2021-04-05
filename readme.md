# [WIP] ElisaCP

![Release](https://img.shields.io/github/release/riipandi/elisacp.svg)
<!-- ![Test](https://github.com/riipandi/elisacp/workflows/Test/badge.svg)
![Security](https://github.com/riipandi/elisacp/workflows/Security/badge.svg)
![Linter](https://github.com/riipandi/elisacp/workflows/Linter/badge.svg) -->

Manage linux server without hassle. ElisaCP is an open source Linux Control Panel. It's 
written in Golang and React and runs as a single Linux binary with MySQL or PostgreSQL. 
Use the features you like, for example, create virtualhost, manage MariaDB PostgreSQL 
database, etc, with full access to source code.

> Currently only work on Ubuntu 18.04 LTS and Ubuntu 20.04 LTS only.

__Important Note:__ 
*This project still heavy development, not yet ready to use at production server.*

## Quick Start
### Prepare Database
```sql
DROP USER IF EXISTS `elisacp`@`localhost`;
DROP DATABASE IF EXISTS `elisacp`; CREATE DATABASE `elisacp`;
GRANT ALL PRIVILEGES ON `elisacp`.* TO `elisacp`@`localhost` 
    IDENTIFIED BY 'secret' WITH GRANT OPTION;
```

### Development
```sh
go get all
make rundev
```

> Go to `http://localhost:2080`:

### Create Release
```sh
# Prepare Github token
touch .token
echo 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' > .token

# Delete tag if exists
git tag -d v0.1.0
git push --delete origin v0.1.0

git tag -a v0.1.0 -m "Initial release"
git push origin v0.1.0
make pre_release
make release
```

## Things to know
#### Make Commands
```
make all         : build and compile all
release          : create binary release for production
clean            : clean up the workspace

build_cli        : build and install cli in dev mode
compile_cli      : compile cli in prod mode

build_elcp       : build and install ElisaCP in dev mode
build_frontend   : build ElisaCP frontend
compile_elcp     : compile ElisaCP in prod mode

runweb           : run ElisaCP frontend in dev mode
rundev           : run ElisaCP in dev mode
runsite          : run landing page website in dev mode
build_website    : build website for landing page
```

#### Directory Structure
```
/
--/assets     : Assets files (images, logos, etc).
--/cmd        : Main application.
----/eli      : CLI application.
----/elcp     : API and UI application.
--/docs       : Project documentation written in Markdown.
--/internal   : Common application libraries.
--/resources  : Other things.
----/configs  : Configuration file templates or default configs.
----/init     : System init (systemd) and process manager configs.
----/scripts  : Scripts to perform packages installation.
--/target     : Output binary files
--/tools      : Supporting tools for this project.
--/web        : Web application UI.
--/website    : Project website.
```

## Contributing
Current state we won't accept any PR requests to this project. If you 
have discovered a bug or have an idea to improve the code, contact us 
first before you start coding.

## Thanks to ...
In general, I'd like to thank every single one who open-sources their 
source code for their effort to contribute something to the open-source 
community. Your work means the world! 🌍 ❤️

## LICENSE
This project licensed under the terms of [Apache 2.0 License][choosealicense].

```
Copyright (c) Aris Ripandi.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Please see [license file](./license.txt) for more information.

[choosealicense]:https://choosealicense.com/licenses/apache-2.0/
