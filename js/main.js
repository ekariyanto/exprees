$(document).ready(() => {
  $('.delete-todo').on('click', (e) => {
    if (confirm("Delete Todo?")){
      $target = $(e.target);
      const id = $target.attr('data-id');
      $.ajax({
        type:'DELETE',
        url: '/todo/delete/'+id,
        success: (response) => {
          window.location.href= '/';
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  });
});
