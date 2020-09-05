document.addEventListener("DOMContentLoaded", function() {
    Swal.fire({
        position: 'bottom',
        icon: 'warning',
        title: 'คาดการณ์ภาพรวม',
        html: '<b>จำนวนพัสดุวันนี้</b> : 20 กล่อง  <br>' +  '<b> เวลาการขนส่ง (โดยประมาณ)</b> : 6.30 ชั่วโมง<br>' +  '<b> ปริมาณเชื้อเพลิง (โดยประมาณ)</b> : 2.00 ลิตร',
        focusConfirm: false,
        confirmButtonText: 'เริ่มการขนส่ง',
        confirmButtonColor: '#20bd7e',
        allowOutsideClick: false,
        allowEscapeKey: false
      })
});

var init = 2;

function submit() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swal.fire({
        title: 'ยืนยันการส่งพัสดุ',
        text: "ยืนยันการส่งพัสดุใช่หรือไม่?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ยืนยัน',
        confirmButtonColor: '#20bd7e',
        cancelButtonText: 'ยกเลิก',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          next();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'ยืนยันการส่งพัสดุ',
            'ยกเลิกยืนยันการส่งพัสดุแล้ว',
            'error'
          )
        }
      })
}

function next() {
    if (init == 10) {
        Swal.fire({
            icon: 'success',
            title: 'สรุปภาพรวม',
            html: '<b>จำนวนพัสดุที่ส่งได้</b> : 20 กล่อง  <br>' + '<b>จำนวนพัสดุที่จัดส่งไม่สำเร็จ</b> : 2 กล่อง  <br>' +  '<b> เวลาการขนส่ง</b> : 4.30 ชั่วโมง<br>' +  '<b> ปริมาณเชื้อเพลิง </b> : 2.00 ลิตร',
            focusConfirm: false,
            confirmButtonText: 'สำเร็จการส่ง',
            confirmButtonColor: '#20bd7e',
            allowOutsideClick: false,
            allowEscapeKey: false
          }).then(()=> {

            location.reload();
          
          })
    }
    document.getElementById("overlay1").className = "overlay-wrapper";
    document.getElementById("overlay2").className = "overlay";
    document.getElementById("overlay2").innerHTML = " <i class='fas fa-3x fa-sync-alt fa-spin'></i> <div class='text-bold pt-2'>Loading...</div>";
    setTimeout(overlay, 2000);
    setTimeout(nextpic, 2000);
}

function nextpic() {
    document.getElementById("mainpic").style.backgroundImage = " url('dist/img/map/" + init + ".jpg')";
    init = init + 1;
}

function overlay() {
    document.getElementById("overlay1").className = "";
    document.getElementById("overlay2").className = "";
    document.getElementById("overlay2").innerHTML = "";
}

function postpone() {
    Swal.fire({
        position: 'bottom',
        icon: 'warning',
        title: 'เลื่อนเวลา',
        html: '<div class="form-group"><label>เลือกเวลา</label><div class="input-group date" id="reservationdate" data-target-input="nearest"><input type="text" class="form-control datetimepicker-input" data-target="#reservationdate"/><div class="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker"><div class="input-group-text"><i class="fa fa-calendar"></i></div></div></div></div>',
        focusConfirm: false,
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#20bd7e',
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(()=> {

        next();
      
      })
}

function jumppage() {
    window.location.replace("http://www.w3schools.com");
}