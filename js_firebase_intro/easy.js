$(document).ready(function(){
    $('.sgt-form').on('click', '.btn-success', function(){
        var fdata = getFormData();
        addStudent(fdata.sid, fdata.sname, fdata.course, fdata.grade);
        clearForm();
    }).on('click', '.btn-info', function(){
        updateStudent($(this).attr('data-uid'));
        $(this).removeClass('btn-info').addClass('btn-success').attr('data-uid', null).text('Add Student');
        clearForm();
    }).on('click', '#clear-form', function(){
        $('#add-student').removeClass('btn-info').addClass('btn-success').attr('data-uid', null).text('Add Student');
        clearForm();
    });

    $('.sgt').on('click', '.delete', function(){
        var studentKey = $(this).closest('td').attr('data-uid');
        deleteStudent(studentKey, $(this));
    }).on('click', '.edit', function(){
        var studentKey = $(this).closest('td').attr('data-uid');
        $('#add-student').removeClass('btn-success').addClass('btn-info').attr('data-uid', studentKey).text('Update Student');
        var fdata = getRowData($(this).closest('tr'));
        populateFormData(fdata.sid, fdata.sname, fdata.course, fdata.grade);
    });
});

// Add config data
var config = {
    apiKey: "AIzaSyAb-frJAyvwARPS4_zov4SiSglw9qG14dc",
    authDomain: "introtest-fef98.firebaseapp.com",
    databaseURL: "https://introtest-fef98.firebaseio.com",
    storageBucket: "introtest-fef98.appspot.com",
    messagingSenderId: "272459267595"
};
// Init firebase
firebase.initializeApp(config);
// Create firebase ref
var fb_ref = firebase.database()
// Create event listener for the students node in your database
fb_ref.ref("students").on("value", function(fb_state){
    console.log(fb_state.val());
    updateDom(fb_state.val());
})
// Complete the addStudent function
function addStudent(id, name, course, grade){
var send_fb_student = {
    id: id,
    name: name,
    course: course,
    grade: grade   
}
fb_ref.ref("students").push(send_fb_student);
}
// complete the delete function
function deleteStudent(key, ele){
fb_ref.ref("students/" + key).remove();
}

// complete the update function
function updateStudent(id){

}

function updateDom(d){
    var table = $('.sgt tbody');
    table.html('');
    for(var key in d){
        if(d.hasOwnProperty(key)){
            var row = $('<tr>');
            var id = $('<td class="sid">' + d[key].id + '</td>');
            var name = $('<td class="name">' + d[key].name + '</td>');
            var course = $('<td class="course">' + d[key].course + '</td>');
            var grade = $('<td class="grade">' + d[key].grade + '</td>');
            var actions = $('<td>', {'data-uid': key});
            var edit = $('<button>', {
                class: 'btn btn-sm btn-info edit',
                text: 'Edit'
            });
            var del = $('<button>', {
                class: 'btn btn-sm btn-danger delete',
                text: 'Delete'
            });

            table.append(row.append(id, name, course, grade, actions.append(edit, del)));
        }
    }
}

function clearForm(){
    $('.sgt-form input').each(function(k, v){
        $(v).val('');
    });
}

function getFormData(){
    var output = {};
    $('.sgt-form input').each(function(k, v){
        var ele = $(v);
        output[ele.attr('id')] = ele.val();
    });

    return output;
}

function populateFormData(sid, sname, course, grade){
    $('#sid').val(sid);
    $('#sname').val(sname);
    $('#course').val(course);
    $('#grade').val(grade);
}

function getRowData(e) {
    return {
        sid: e.find('.sid').text(),
        sname: e.find('.sname').text(),
        course: e.find('.course').text(),
        grade: e.find('.grade').text()
    };
}