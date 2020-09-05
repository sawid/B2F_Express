<?php
include('connect_db.php');
$actions = $_POST['actions'];

if ($actions == 2) {
    // $searchby = $_POST["searchby"];
    $page = $_POST['page'];
    $next_on = $_POST['next_on'];
    $previous_link = '';
    $next_link = '';
    $page_link = '';
    $previous_id = $page - 1;
    $next_id = $page + 1;
    if ($page == 1) {
        $previous_link = '
      <li class="page-item disabled" disabled>
        <a class="page-link " href="#">Previous</a>
      </li>
      ';
    } else {
        $previous_link = '<li class="page-item"><a class="page-link page-link-c" href="javascript:void(0)" data-page_number="'.$previous_id.'">Previous</a></li>';
    }

    $page_link .= '
    <li class="page-item active">
      <a class="page-link" href="#">'.$page.' <span class="sr-only">(current)</span></a>
    </li>
    ';
    if ($next_on == 'N') {
        $next_link = '
      <li class="page-item disabled" disabled>
        <a class="page-link" href="#">Next</a>
      </li>
        ';
    } else {
        $next_link = '<li class="page-item"><a class="page-link page-link-c" href="javascript:void(0)" data-page_number="'.$next_id.'">Next</a></li>';
    }
   
    $tag_o = '<ul id="pagination_ul" name="pagination_ul" class="pagination justify-content-center">';
    $tag_end = '</ul>';
    $output = $tag_o .$previous_link . $page_link . $next_link . $tag_end;
  
    echo $output;
}
