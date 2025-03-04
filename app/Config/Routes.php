<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');
$routes->get('changeLanguage/(:any)', 'ChangeLanguage::Language/$1');