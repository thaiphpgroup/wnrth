<?php
use \Servit\Restsrv\RestServer\RestException;
use Servit\Restsrv\RestServer\ThemeController;
use \Servit\Restsrv\Libs\Request;

class AdminController extends AdminThemeController
{



    /**
    *@noAuth
    *@url GET /
    *@url POST /
    */
    public function admin()
    {
        require_once __DIR__.'/../../page/themes/admin/layout/header.php';
        require_once __DIR__.'/../../page/themes/admin/index.php';
        require_once __DIR__.'/../../page/themes/admin/layout/footer.php';   
    }


    
    

    /**
    *@noAuth
    *@url GET /login/
    *@url POST /login/
    */
    public function test()
    {
        require_once __DIR__.'/../../page/themes/admin/layout/header.php';
        require_once __DIR__.'/../../page/themes/admin/layout/login.php';
        require_once __DIR__.'/../../page/themes/admin/layout/footer.php';
    }
}
