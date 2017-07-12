<?php
session_start();
if ( !isset($_SESSION['data']) ) $_SESSION['data']=array();
 
$data = json_decode(file_get_contents('php://input'), true);
 
if ( isset( $data["op"] ) ) {
    if ( $data["op"]=="append" ) {
        $pos=count($_SESSION['data']);
        $_SESSION['data'][ $pos ]=array( 'name'=>$data["name"], 'email'=>$data["email"] );
        }
 
    if ( $data["op"]=="delete" ) {
        for($i=0; $i<count($_SESSION['data']); $i++)
            if ( $_SESSION['data'][$i]["name"]==$data["name"] ) {
                unset($_SESSION['data'][$i]);
                $_SESSION['data']=array_values( $_SESSION['data'] );
                }
        }
    }
 
echo "names: ".json_encode( $_SESSION['data'] );
?>