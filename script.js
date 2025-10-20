let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}


$('.menu-btn').click(function(){
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        })









////// date and time function ///////

  function updateClock(){
      var now = new Date();
      var dname = now.getDay(),
          mo = now.getMonth(),
          dnum = now.getDate(),
          yr = now.getFullYear(),
          hou = now.getHours(),
          min = now.getMinutes(),
          sec = now.getSeconds(),
          pe = "AM";

          if(hou >= 12){
            pe = "PM";
          }
          if(hou == 0){
            hou = 12;
          }
          if(hou > 12){
            hou = hou - 12;
          }

          Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
          }

          var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
          var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
          var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
          for(var i = 0; i < ids.length; i++)
          document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

    function initClock(){
      updateClock();
      window.setInterval("updateClock()", 1);
    }









////////


function makeTableResponsive(tableId, breakpoint) {
    const table = document.getElementById(tableId);
    if (!table) return;

    const wrapper = document.createElement('div');
    wrapper.classList.add('activities-table-content');
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);

    function checkResponsiveness() {
        if (window.innerWidth < breakpoint) {
            wrapper.style.overflowX = 'auto';
        } else {
            wrapper.style.overflowX = 'visible';
        }
    }

    checkResponsiveness();
    window.addEventListener('resize', checkResponsiveness);
}

// Example usage: Make a table with ID 'myTable' responsive below 768px
makeTableResponsive('myTable', 768);





document.addEventListener('DOMContentLoaded', () => {
  const iframe = document.getElementById('pdf-frame');
  const fallback = document.getElementById('fallback');

  iframe.onerror = () => {
    fallback.classList.remove('hidden');
  };

  // Optional: Add support detection
  const isPDFSupported = () => {
    return !!navigator.mimeTypes['application/pdf'];
  };

  if (!isPDFSupported()) {
    fallback.classList.remove('hidden');
    iframe.style.display = 'none';
  }
});
 

