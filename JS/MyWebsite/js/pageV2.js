
function init() {
    let p = document.getElementById("header");
    p.innerHTML =
        `<p style="text-align: center;">
            <a href="javascript:goToPage(0)">Homepage |</a>
            <a href="javascript:goToPage(1)">Blog |</a>
            <a href="javascript:goToPage(2)">Gallery |</a>
            <a href="javascript:goToPage(3)">Students Data |</a>
            <a href="javascript:goToPage(4)">Application Form |</a>
            <a href="javascript:goToPage(5)">Contact |</a>
            <a href="javascript:goToPage(6)">Resources</a>
        </p>`

    p = document.getElementById("content");
    p.innerHTML = 

    p = document.getElementById("copyright");
    p.innerHTML = "&copy; Copyright " + new Date().getFullYear() + ".www.&lt;abc&gt;.com";
}

function goToPage(index) {
   let p = document.getElementById("content");
    p.innerHTML = content[index]
}