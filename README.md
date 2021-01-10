# LISA Control Panel

![Release](https://img.shields.io/github/release/riipandi/lisacp.svg)
<!-- ![Test](https://github.com/riipandi/lisacp/workflows/Test/badge.svg)
![Security](https://github.com/riipandi/lisacp/workflows/Security/badge.svg)
![Linter](https://github.com/riipandi/lisacp/workflows/Linter/badge.svg) -->

Linux Server Administration Control Panel (LisaCP). Manage linux servers without hassle.

> Currently only work on Ubuntu 18.04 LTS and Ubuntu 20.04 LTS only.

__Important Note:__ *This project still heavy development, not ready to use at production server.*

## Quick Start
### Prepare Database
```sql
DROP USER IF EXISTS `lisacpdb`@`localhost`;
DROP DATABASE IF EXISTS `lisacpdb`; CREATE DATABASE `lisacpdb`;
GRANT ALL PRIVILEGES ON `lisacpdb`.* TO `lisacpdb`@`localhost` 
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
----/app      : API and UI application.
----/cli      : CLI application.
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
