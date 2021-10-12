// Page setup from url ///////////////////////////////////

let recent_blog_id = 0;
let recent_blog_count = 0;

let blog_page = location.href.split("?page=");
if (blog_page.length == 1){
    window.location = './index.html';
}
else{
    let blog_title = blog_page[1];
    for (let title = 0; title < blogs.length; title++) {
        if(blogs[title].title.replaceAll(" ","").replace("?","").toLowerCase().includes(blog_title.replaceAll("-","").toLowerCase())){
            document.title = `FUTURE-Devs | ${blogs[title].title}`;
            document.getElementById('blog_title').innerText = blogs[title].title;
            document.getElementById('blog_author').innerText = blogs[title].author;
            document.getElementById('blog_date').innerText = blogs[title].date;

            let blog_detail = blogs[title].blog.split(`\n`);
            for (let detail_id = 0; detail_id < blog_detail.length; detail_id++) {
                if (blog_detail[detail_id].trim().startsWith('^5')){
                    document.getElementsByClassName('blog__details__text')[0].innerHTML += `
                    <h5 class="blog_head">${blog_detail[detail_id].trim().replace('^5','')}</h5>`;
                }
                else{
                    if (blog_detail[detail_id].trim().length <= 40){
                        document.getElementsByClassName('blog__details__text')[0].innerHTML += `
                        <h4 class="blog_head">${blog_detail[detail_id].trim()}</h4>`;
                    }
                    else{
                        document.getElementsByClassName('blog__details__text')[0].innerHTML += `
                        <p>${blog_detail[detail_id].trim()}</p>`;
                    }
                }
            }

            recent_blog_id++;
            continue;
        }

        if(recent_blog_count < 3){
            document.getElementById('recent_blogs').innerHTML+= `
            <div class="col-lg-4 col-md-6 col-sm-6">
                <a href="?page=${blogs[recent_blog_id].title.toLowerCase().replaceAll(' ','-').replaceAll('?','')}">
                <div class="blog__details__recent__item">
                    <!--<img src="../img/blog/ri-1.jpg" alt="">-->
                    <h5>${blogs[recent_blog_id].title}</h5>
                    <span>${blogs[recent_blog_id].date}</span>
                </div>
                </a>
            </div>`;
            recent_blog_count++;
        }
        recent_blog_id++;
    }
}