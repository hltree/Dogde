FROM php:7.4-apache

RUN apt-get update \
    && apt-get install -y libzip-dev libonig-dev libpq-dev mariadb-client unzip \
    && docker-php-ext-install zip pdo_mysql mysqli \
    && docker-php-ext-enable pdo_mysql mysqli \
    && a2enmod rewrite

COPY --from=composer /usr/bin/composer /usr/bin/composer
ENV COMPOSER_ALLOW_SUPERUSER 1
ENV COMPOSER_HOME /composer
ENV PATH $PATH:/composer/vendor/bin
