<div align="center">
  <img alt="StackUp Logo" src="https://image.flaticon.com/icons/svg/957/957310.svg" height="140" />
  <h3 align="center">StackUp - Simplify Linux Servers</h3>
  <p><em>Managing your own Linux server has never been easier.</em></p>
</div>

<p align="center">
  <a href="https://travis-ci.org/riipandi/stackup"><img src="https://travis-ci.org/riipandi/stackup.svg" alt="Build Status"></a>
  <a href="https://snapcraft.io/stackup"><img alt="stackup" src="https://snapcraft.io/stackup/badge.svg" /></a>
  <a href="https://GitHub.com/riipandi/stackup/releases/"><img src="https://img.shields.io/github/downloads/riipandi/stackup/total.svg" alt="Github all releases"></a>
  <a href="./license.txt"><img src="https://img.shields.io/badge/License-Apache%202.0-yellow.svg" alt="License"></a>
</p>

---

StackUp is a simple CLI application for managing your Linux Server just like
[EasyEngine](https://easyengine.io/), [CentminMod](https://centminmod.com/) and
[Webinoly](https://webinoly.com/en/). Install the server stack and configure your
instance in the cloud of Google Cloud Platform, Amazon Web Services, DigitalOcean
or any of your preference. Current focus is making it for the Debian distribution.

<!--
This project adheres to the Contributor Covenant [code of conduct](./CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. For questions send an email to
[aris@ripandi.id](mailto:aris@ripandi.id).
-->

__Important Note:__ *This project still work in progress, not ready to use at production server.*

## Features and TODO

- [ ] LEMP Installer
- [ ] VirtualHost Manager
- [ ] Let's Encrypt Generator
- [ ] MySQL Management
- [ ] PgSQL Management
- [ ] FTP User Management
- [ ] Mail User Management
- [ ] DNS Record Management
- [ ] Domain availability checker
- [ ] Send detailed information via email
- [ ] *You add here*

## Requirements

You will need a fresh supported Linux distribution installation and public IP address.

### Supported Linux Distribution

- Debian 9 (Stretch)
- Debian 10 (Buster)
- Ubuntu 18.04 LTS

## Installation

[![Get it from the Snap Store](https://snapcraft.io/static/images/badges/en/snap-store-black.svg)](https://snapcraft.io/stackup)

You can download binaries at [release page](https://github.com/riipandi/stackup/releases) or using wget.

#### Using wget

```bash
# First download the stackup binary
wget -O /usr/bin/stackup https://xxxxxxxx.xxx/stackup

# Then make it executable
chmod +x /usr/bin/stackup
```

#### Using Snapcraft

```bash
sudo snap install stackup --edge
```

## Usage

#### Basic usage

It's simple, just run `stackup <COMMAND>`

Use `stackup` or `stackup -h` or `stackup --help` to show usage and a list of commands

## Deployment

```bash
# Test configuration
go get
goreleaser --snapshot --skip-publish --rm-dist
```

```bash
# Login to snapcraft
snapcraft login

# Commit current changes
git add . && git commit -m "Create release v0.1.0"
git push origin master

# Delete tag (if necessary)
git tag -d v0.1.0
git push --delete origin v0.1.0

# Create new release tag
git tag -a v0.1.0 -m "Initial release"
git push origin v0.1.0

# Publish
goreleaser --rm-dist
```

> For more information please read: https://goreleaser.com/quick-start/

## Things to know

This project written in [Golang](https://golang.org/) and use [SPF13 Cobra](https://github.com/spf13/cobra) library. 
For detailed explanation on how things work, checkout their documentation.

## Contributing

Contributions to this project are welcome and encouraged. StackUp is a personal project 
by [Aris Ripandi](https://aris.web.id). If you find my project useful, I would appreciate 
if you would [buy me a cup of coffee](https://www.buymeacoffee.com/ars).

## License

This project is open-sourced software licensed under the [Apache 2.0 License](./license.txt).
