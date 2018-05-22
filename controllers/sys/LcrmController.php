<?php
use \Servit\Restsrv\RestServer\RestException;
use Servit\Restsrv\RestServer\ThemeController;
use \Servit\Restsrv\Libs\Request;

class LcrmController extends RootThemeController
{
    
    
    
    /**
     *@noAuth
     *@url GET /
     *@url GET /home
     */
    public function admin()
    {
        try {
            $login = $_SESSION['login'];
            if($login){
                include_once __DIR__.'/../../page/themes/lcrm/index.php';
            } else {
                Header('Location: ./login');
            }
        } catch (Exception $e) {
            Header('Location: ./system/info');
        }
    }
    
    
    
    
    /**
     *@noAuth
     *@url GET /login/
     */
    public function login(){
$token = session_id();
$html = <<<HTML
 <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 signin-form">
                <div class="panel-header">
                    <div class="row">
                        <div class="col-md-12">
                            <h2 class="text-center">
                                <!-- brand -->
                                <img style="width: 225px;background-color:red" src="{$this->server->root}page/themes/lcrm/img/mongkollogo.png" alt="LCRM">
                                <!-- / brand -->
                            </h2>
                        </div>
                    </div>
                </div>
        <div class="container-fluid">
        <div class="row">
            <div class=" col-md-12">
                <div class="box-color">
                    <h4>Sign in with your Account</h4>
                    <br>
                    <form method="POST" action="{$this->server->root}login" accept-charset="UTF-8" name="form"><input name="_token" type="hidden" value="$token">
                    <div class="form-group ">
                        <label for="E-Mail Address">E-Mail Address</label> :
                        <span></span>
                        <input class="form-control" required="required" placeholder="E-mail" name="email" type="email"  value="admin@admin.com" >
                    </div>
                    <div class="form-group ">
                        <label for="Password">Password</label> :
                        <span></span>
                        <input class="form-control" required="required" placeholder="Password" name="password" type="password" value="password">
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" id="remember" value="remember" name="remember">
                            <i class="primary"></i> Keep me signed in
                        </label>
                    </div>
                    <input type="submit" class="btn btn-primary btn-block" value="Login">
                    </form>
                </div>
                <hr class="separator">
                <div class="text-center">
                    <h5><a href="/forgot" class="forgot_pw _600">Forgot Password?</a></h5>
                </div>
            </div>
        </div>
    </div>

            </div>
        </div>
    </div>
</div> 
HTML;
    require_once $this->getthemepath().'/layout/head.php';
    // require_once $this->getthemepath() . '/layout/header.php';
    echo $html;
    require_once $this->getthemepath().'/layout/footer.php';
        
    }
    
    /**
     *@noAuth
     *@url POST /login/
     */
    public function logined(){
        // dump($this->input->posts);
        $email = $this->input->posts->email;
        $passwd = $this->input->posts->password;
        $remember = $this->input->posts->remember;
        $token = $this->input->posts->_token;
        // dump($email,$passwd,$remember,$token, session_id());
        $u = User::where('email',$email)->where('password',$passwd)->where('status',1)->first();
        if($u){
            $_SESSION['login'] = 1;
            $_SESSION['user'] = $u;
            Header('Location: '.$this->server->root.'home');
        } else {
            Header('Location: '.$this->server->root.'login');
        }
    }
    
    /**
     *@noAuth
     *@url GET /logout/
     */
    public function logout(){
        $_SESSION['login'] = null;
        $_SESSION['user'] = null;
        Header('Location: '.$this->server->root.'/login');
    }
    
    


    /**
    *@noAuth
    *@url GET /test/
    */
    public function test()
    {
        echo 'admin test';
    }
}
