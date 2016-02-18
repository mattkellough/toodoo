// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on("ready", ready);

function ready () {
  $('#new_task').on('ajax:success', newTask);
  $(document).on("ready page: load", ready);

  function newTask(event, data) {
    $('#tasks').append(data);
    $('#task_name').val('');
  }
}
