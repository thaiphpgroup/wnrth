  <?php 
    $company = 'Servit Co,.Ltd.';
    // try {
    //   $footer = App::where('popkey','Company')->first();
    //   $company = $footer ? $footer->pop_value  : 'Company';
    // } catch (Exception $e) {
      
    // }
  ?>
  <footer class="main-footer noprint">
    <div>
      <strong>Copyright &copy; 2016 <a href="#"><?=$company?></a>.</strong> All rights reserved.
    </div>
    <div style="float:right;">Anything you want</div>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-114317649-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-114317649-1');
    </script>
  </footer>