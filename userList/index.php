<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>JS</title>

        <!-- bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        

        <!-- font aweasome -->
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <style>
            .jumbotron{
                width:700px;
                margin:auto;
            }
            .bot{
                margin-bottom:15px;
            }
            .pcol{
                margin-top:10%;
                margin-bottom:0 !important;
            }
            #erro{
                color:#f00;
            }
        </style>

    </head>
    <body>
        <div class="jumbotron">
            <h1 class="text-center" >Insira Usuário</h1>
            
            <div style="margin-top: 50px;" class="col-md-12">
                <label for="txt">Nome:</label>
                <input type="text"  name="name" id="name"  class="form-control" onkeypress="return focus_mail(event)" style="width: 100%; display: inline-block;">
                
            </div>
            <div style="margin-top: 50px;" class="col-md-12">
                <label for="mail">Email:</label>
                <input type="email"  name="mail" id="mail"  class="form-control" onkeypress="return focus_pass(event)" style="width: 100%; display: inline-block;">
                
            </div>
            <div style="margin-top: 50px;" class="col-md-12">
                <label for="pass">Senha:</label>
                <input type="password"  name="pass" id="pass" onkeypress="return enter(event)" class="form-control" style="width: 100%; display: inline-block;">
                
            </div>
            <div class="text-center bot" style="margin-top:50px;" >
                <button class="btn btn-primary" id="insere">Inserir</button>
            </div>
            <p id="erro" class="text-center"></p>

            <div class="card">
                <div class="card-body">
                    <ul class="list-group">
                        <!-- row -->
                        <li class="list-group-item" >
                            <div class="row">
                                <div class="col">
                                    <strong>Nome</strong>
                                </div>
                                <div class="col">
                                    <strong>Email</strong>
                                </div>
                                <div class="col">
                                    <strong>Senha</strong>
                                </div>
                                <div class="col text-center">
                                    <span class="fa fa-trash"></span>
                                </div>
                            </div>
                        </li>
                        <div id="insereUser">
                            
                        </div>
                    </ul>
                </div>
            </div>

        </div>
           
        <script src="js/main.js"></script>
      
    </body>

</html>