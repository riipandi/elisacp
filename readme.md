# ElisaCP

![Release](https://img.shields.io/github/release/riipandi/elisacp.svg)
<!-- ![Test](https://github.com/riipandi/elisacp/workflows/Test/badge.svg)
![Security](https://github.com/riipandi/elisacp/workflows/Security/badge.svg)
![Linter](https://github.com/riipandi/elisacp/workflows/Linter/badge.svg) -->

Manage linux server without hassle. ElisaCP is an open source Linux Control Panel. It's 
written in Golang and React and runs as a single Linux binary with MySQL or PostgreSQL. 
Use the features you like, for example, create virtualhost, manage MariaDB PostgreSQL 
database, etc, with full access to source code.

> Currently only work on Ubuntu 18.04 LTS and Ubuntu 20.04 LTS only.

__Important Note:__ *This project still heavy development, not ready to use at production server.*

## Quick Start
### Prepare Database
```sql
DROP USER IF EXISTS `elisacp`@`localhost`;
DROP DATABASE IF EXISTS `elisacp`; CREATE DATABASE `elisacp`;
GRANT ALL PRIVILEGES ON `elisacp`.* TO `elisacp`@`localhost` 
    IDENTIFIED BY 'securepwd' WITH GRANT OPTION;
```

### Development
```sh
make rundev
```

> Go to `http://localhost:2080`:

## Directory Structure
```
/
--/assets     : Assets files (images, logos, etc).
--/cmd        : Main application.
----/elisa    : CLI application.
----/elisacp  : API and UI application.
--/configs    : Configuration file templates or default configs.
--/docs       : Project documentation written in Markdown.
--/init       : System init (systemd) and process manager configs.
--/internal   : Common application libraries.
--/scripts    : Scripts to perform packages installation.
--/target     : Output binary files
--/tools      : Supporting tools for this project.
--/web        : Web application UI.
--/website    : Project website.
```

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
