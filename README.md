# Flask Blueprint

Boilerplate proyek Flask menggunakan Blueprint. Gunakan template ini untuk membuat aplikasi Flask yang fleksibel.

## Kebutuhan Dasar
- Python versi 3.7 atau yang lebih baru + Pipenv
- NodeJS versi 12.8.1 atau yang lebih baru
- NPM (sudah terpaket dengan Nodejs)

## Panduan Dasar

### 1. Clone proyek
Nama folder `myapp` ganti sesuai dengan nama aplikasi yang akan dibuat.

```sh
git clone https://github.com/altarisdev/elsacp-webui myapp
```

### 2. Buat environment dan install dependensi Python menggunakan pipenv
```sh
cd myapp
pipenv install
pipenv shell
```

### 3. Compile asset javascript dan css
```sh
npm install --no-optional --no-audit
npm run build
```

### 4. Jalankan aplikasi
```sh
# Persiapkan file konfigurasi (sesuaikan parameternya)
cp .env.example .env

# Menjalankan menggunakan flask
export FLASK_APP=app
flask run
```

Cara lain menjalankan aplikasi (_disarankan saat mode production_):

```sh
# Jika ingin menjalankan menggunakan gunicorn
gunicorn -c config/gunicorn.py wsgi

# Jika ingin menjalankan menggunakan uwsgi
uwsgi --http-socket :2080 --plugin python3 --module wsgi:application
```

> Penting: pastikan selalu mengaktifkan `pipenv shell` saat development!

## License

Copyright 2018-2020. Aris Ripandi <riipandi@gmail.com>

Licensed under the [Apache License][choosealicense], Version 2.0 (the "License"); you may not use this
file except in compliance with the License. You may obtain a copy of the License at:
<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.

[choosealicense]:https://choosealicense.com/licenses/apache-2.0/
