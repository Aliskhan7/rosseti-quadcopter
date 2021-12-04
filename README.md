# rosseti-quadcopter

склонируйте проект Laradock, запустите контейнеры `docker-compose up -d workspace mysql nginx php-fpm` настройте путь к `nginx.conf` в контейнере nginx. перейдите в контейнер `workspace` идите в папку с проектом в папку backend и запустите `composer install` после `php artisan migrate --seed`. далее соотв-но в hosts добавить rosseti.localhost и перезапустить контейнер nginx `docker-compose restart nginx` 
