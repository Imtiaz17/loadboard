<!DOCTYPE html>
<html>
    <head>
          <base href="/" />
        <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
{{--     <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"> --}}
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    
    <link rel="stylesheet" href='assets/css/bulma.css'>
    <link rel="stylesheet" href='assets/css/app.css'>
    <link rel="stylesheet" href='assets/css/core_kit7.css'>
    <link rel="stylesheet" href='dash/css/dashboard.css'>
    <link rel="stylesheet" href='css/app.css'>
       <link rel="stylesheet" href='css/main.css'>
        <title>Loadboard</title>
    </head>
    <body>
        <div id="loadboard">
            <app-home>
            </app-home>
        </div>
     
 <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
