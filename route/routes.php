<?php
if (APPMODE == 'debug') {
    $server->addClass('TestController', '/system/test', 'sys');
}

$server->addThemeClass('AdminThemeController', 'sys');
// $server->addClass('AdminlteController', '/admin', 'sys'); // fortest
// $server->addClass('AdminController', 'sys'); // Adminthem root file
$server->addClass('AdminController', '/admin', 'sys'); // fortest

$server->addThemeClass('SystemThemeController', 'sys');
$server->addClass('SystemController', '/system', 'sys'); // fortest


$server->addClass('LineServiceController', '/system/line', 'sys');
$server->addClass('SysController', 'sys'); // 
$server->addClass('GentableController', '/system/generator', 'sys'); // fortest
$server->addClass('QuestionController', '/systemapi/v1/q', 'sys'); // fortest
$server->addClass('AnswerController', '/systemapi/v1/answer', 'sys'); // fortest
// $server->addClass('UserController', '/systemapi/users', 'sys'); // fortest
$server->addClass('RoleController', '/role', 'sys'); // fortest
$server->addClass('PermissController', '/permiss', 'sys'); // fortest
$server->addClass('RController', '/rbac', 'sys'); // fortest
$server->addClass('TController', '/t', 'sys'); // fortest
$server->addClass('AppController', '/systemapi/v1', 'sys'); // fortest
$server->addClass('TlenController', '/tlen', 'sys'); // fortest
$server->addClass('JwtController', '', 'sys'); // fortest
$server->addClass('ColumnController','/systemapi/v1/columns','sys'); 
$server->addClass('DbinfoController','/systemapi/v1/dbinfos','sys'); 
$server->addClass('MenuController','/systemapi/v1/menus','sys'); 
$server->addClass('AppController', '/systemapi/v1/apps', 'sys');
$server->addClass('ColumnController', '/systemapi/v1/columns', 'sys');
$server->addClass('CompanyController', '/systemapi/v1/companies', 'sys');
$server->addClass('DbinfoController', '/systemapi/v1/dbinfos', 'sys');
$server->addClass('MenuController', '/systemapi/v1/menus', 'sys');
$server->addClass('Model_has_permissionController', '/systemapi/v1/model_has_permissions', 'sys');
$server->addClass('Model_has_roleController', '/systemapi/v1/model_has_roles', 'sys');
$server->addClass('ModuleController', '/systemapi/v1/modules', 'sys');
$server->addClass('PackageController', '/systemapi/v1/packages', 'sys');
$server->addClass('Password_resetController', '/systemapi/v1/password_resets', 'sys');
$server->addClass('PermissionController', '/systemapi/v1/permissions', 'sys');
$server->addClass('ProfileController', '/systemapi/v1/profiles', 'sys');
$server->addClass('Role_has_permissionController', '/systemapi/v1/role_has_permissions', 'sys');
$server->addClass('RoleController', '/systemapi/v1/roles', 'sys');
$server->addClass('SyspackageController', '/systemapi/v1/syspackages', 'sys');
$server->addClass('UserController', '/systemapi/v1/users', 'sys');
$server->addClass('GraphqlController', '/system/graphql', 'sys');

// $server->addClass('RootController', '', 'sys'); // roottheme rootfile
$server->addThemeClass('RootThemeController', 'sys'); 
$server->addClass('LcrmController', '', 'sys'); // roottheme rootfile
if (file_exists(__DIR__ . '/routebygen.php')) {
    require_once __DIR__ . '/routebygen.php';
}
