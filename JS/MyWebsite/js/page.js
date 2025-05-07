let content = []
content[0] =
    `<h1 style="text-align: center;">Welcome to My Website</h1>
    <hr>`
content[1] =
    `<h1 style="text-align: center;">Lorem Ipsum</h1>
    <h2 style="text-align: center;">Ispsum</h2>
    <p style="text-align: center;">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos illo
        necessitatibus provident exercitationem..."</p>
    <p style="text-align: center;">"Illum animi, dignissimos omnis a aliquid vitae maiores sunt est vel.
        Earum odit quo impedit..."</p>
    <hr>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quas, enim consectetur
        minima totam sint nulla, facilis unde quos velit animi. Fuga dolorem molestias aut quod quam, ratione harum
        optio. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores quas reprehenderit molestiae.
        Obcaecati provident quisquam temporibus eligendi, officiis minima doloremque totam voluptas numquam non,
        commodi, amet dolorum architecto ea? Voluptatem.</p>
    <p>Veritatis nulla quod magni quae neque. Nobis voluptatibus, dolorem, ex libero et expedita
        aspernatur consectetur esse dolore quibusdam aperiam quisquam voluptatum aut! Accusamus, voluptatum ducimus rem
        quos minima nam dolore culpa quisquam sapiente amet, provident sed dolorem, soluta error blanditiis iure optio
        voluptate eveniet?</p>
    <p>Ipsa dolorum similique dolore quo, at quam sit inventore. Vitae rem odit, sit libero
        laborum, soluta adipisci, blanditiis consequuntur aliquid architecto enim! Distinctio blanditiis dolorum minus
        modi soluta! A, reiciendis aperiam nam omnis ex distinctio esse dolor sunt quo? Cupiditate voluptatem
        dignissimos eligendi laborum. Illo repellat laborum voluptate. Doloremque illo quia placeat minus. Dolorem
        aperiam mollitia perferendis libero ea facilis deleniti harum hic, numquam atque accusantium.</p>
    <p>Facere sit vel dignissimos quae hic sapiente, voluptatem eaque voluptates iusto dolor
        fuga tenetur obcaecati aliquid ipsam quidem nulla molestias sunt ea! Quam facere voluptas ipsam accusantium
        quasi soluta! Vel ut iure quis deserunt molestias aut consectetur eveniet id, perferendis molestiae? Sunt,
        facere delectus!</p>
    <p>A, reiciendis aperiam nam omnis ex distinctio esse dolor sunt quo? Cupiditate voluptatem
        dignissimos eligendi laborum. Illo repellat laborum voluptate. Doloremque illo quia placeat minus. Dolorem
        aperiam mollitia perferendis libero ea facilis deleniti harum hic, numquam atque accusantium. Praesentium, nam
        culpa vel doloremque cumque ratione quidem in quia nostrum quae nisi blanditiis autem facilis! Consectetur
        laudantium labore consequatur voluptatem saepe.</p>
    <p><b>Generated 5 paragraphs, 274 words, 2064 bytes of Lorem Ipsum</b></p>
    <hr>
    <p><a href="mailto:help@lipsum.com">help@lipsum.com</a></p>
    <hr>`

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
    p.innerHTML = content[0]

    p = document.getElementById("copyright");
    p.innerHTML = "&copy; Copyright " + new Date().getFullYear() + ".www.&lt;abc&gt;.com";
}

function goToPage(index) {
   let p = document.getElementById("content");
    p.innerHTML = content[index]
}