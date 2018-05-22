<?php
//----------------------------------------------
//FILE NAME:  GraphqlController.php gen for Servit Framework Controller
//DATE:		  2018-04-26(Thu) 00:25:24
//----------------------------------------------
use	\Servit\Restsrv\RestServer\RestException;
use	\Servit\Restsrv\RestServer\RestController as BaseController;
use	Illuminate\Database\Capsule\Manager as Capsule;
use	Servit\Restsrv\Libs\Request; 
use	Servit\Restsrv\Libs\Graphql as GraphQL; 
use	Servit\Restsrv\Libs\Linenotify;
use	Carbon\Carbon;
use \Servit\Restsrv\traits\DbTrait;


class GraphqlController extends BaseController {



    
    /**
    *@noAuth
    *@url GET /index
    *----------------------------------------------
    *FILE NAME:  GraphqlController.php gen for Servit Framework Controller
    *DATE:		  2018-04-27(Fri) 12:46:05
    *----------------------------------------------
    */
    public function index(){
            echo 'ServIt Frameword GraphQL Generator';
            $tb = 'dbinfos';
            $types = '
<?php

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\ResolveInfo;

class UserType extends ObjectType
{
    public function __construct()
    {
        $config = [  ';
        $types .= " 'name' => '$tb',\n";
        $types .= " 'description'=> '$tb',\n";
        $types .="         'fields' => function() {
                return [\n";
            $cols = Capsule::select("SELECT IS_NULLABLE,COLUMN_DEFAULT,TABLE_NAME,COLUMN_NAME,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,NUMERIC_SCALE,COLUMN_TYPE,COLUMN_KEY,COLUMN_COMMENT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME= ? AND Table_SCHEMA= ? ", [$tb, DB_NAME]);
            foreach ($cols as $col) {
                // dump($col);
                // dump([$col->COLUMN_NAME, $col->CHARACTER_MAXIMUM_LENGTH, $col->NUMERIC_PRECISION,$col->NUMERIC_SCALE]);
                // dump($col->DATA_TYPE);
                if($col->COLUMN_NAME == 'id') {
                    $type = 'id';
                } elseif($col->COLUMN_NAME == 'id') {
                    $type = 'boolean';
                } elseif($col->CHARACTER_MAXIMUM_LENGTH){
                    $type = 'string';
                } else {
                    if($col->NUMERIC_PRECISION){

                        if( $col->NUMERIC_SCALE ){
                            $type = 'float';
                        } else {
                            if($col->NUMERIC_SCALE > 3) {
                                $type = 'int';
                            } else {
                                $type = 'boolean';
                            }
                        }
                    }  
                }
                // dump($type);
                $types .= "\t\t\t\t'$col->COLUMN_NAME'=>['type'=>GraphQL::$type()],\r\n";
            }
            $types .="\t\t];    
            },
        ];
        parent::__construct(\$config);
    }
}";
        dump($types);
        file_put_contents(__DIR__.'/'.$tb.'.php',$types);
    }
    
    /**
    *@noAuth
    *@url GET /gengraphql
    *----------------------------------------------
    *FILE NAME:  GraphqlController.php gen for Servit Framework Controller
    *DATE:		  2018-04-27(Fri) 17:54:29
    *----------------------------------------------
    */
    public function gengraphql(){
        $cols = Capsule::select("SELECT IS_NULLABLE,COLUMN_DEFAULT,TABLE_NAME,COLUMN_NAME,DATA_TYPE,CHARACTER_MAXIMUM_LENGTH,NUMERIC_PRECISION,NUMERIC_SCALE,COLUMN_TYPE,COLUMN_KEY,COLUMN_COMMENT FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME= ? AND Table_SCHEMA= ? ", ['dbinfos', DB_NAME]);
        dump($cols);

        $this->gentype();
        $this->genquery();
        $this->getmutation();

    }
    
    
    private function  gentype() {

    }

    private function genquery(){

    }

    private function getmutation() {

    }
    
    /**
    *@noAuth
    *@url GET /
    *@url POST /
    *----------------------------------------------
    *FILE NAME:  GraphqlController.php gen for Servit Framework Controller
    *DATE:		  2018-04-26(Thu) 00:25:52
    *----------------------------------------------
    */
    public function graphql(){
        try {
                GraphQL::require_all(   __DIR__ . '/../../graphql');
                GraphQL::loadQuery(     __DIR__ . '/../../graphql/query');
                GraphQL::loadMutation(  __DIR__ . '/../../graphql/mutation');
                $rs = GraphQL::execute($this->getquery(),$this->getvars(), $this->server);
                return $rs;
        } catch (Exception $e) {
            return[
                'status' => '0',
                'success'=> false,
                'msg'=> $e->getMessage(),
                'func'=> __CLASS__.'/'.__FUNCTION__,
            ]; 
        }
    }
    
    private function getquery(){
        $query = $this->input->input->query?:null;
        if(empty($query)) $query = $this->input->gets->query?:null;
        if(empty($query))  $query = $this->input->posts->query?:null;
        $query = $query ?:'{status}';
        return $query;
    }    
    
    private function getvars() {
        $variables = $this->input->input->variables?:null;
        if(empty($variables))  $variables = $this->input->gets->variables?:null;
        if(empty($variables))  $variables = $this->input->posts->variables?:null;
        $variables = $variables ?:[];
        return $variables;
    }
}

