

for (let blog_id = 0; blog_id < blogs.length; blog_id++) {
    try{
        document.getElementById('blog_blocks').innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="blog__item">
                <h4>${blogs[blog_id].title}</h4>
                <ul>
                    <li>${blogs[blog_id].date}</li>
                </ul>
                <p>${blogs[blog_id].blog.slice(0,80).toLowerCase() + '...'}</p>
                <a href="./blog.html?page=${blogs[blog_id].title.toLowerCase().replaceAll(' ','-').replaceAll('?','')}">Read more <span class="arrow_right"></span></a>
            </div>
        </div>`;
    }
    catch{
        document.getElementById('recent_blog_block').innerHTML +=`
        <div class="col-lg-4">
            <div class="blog__item latest__item">
                <h4>${blogs[blog_id].title}</h4>
                <ul>
                    <li>${blogs[blog_id].date}</li>
                </ul>
                <p>${blogs[blog_id].blog.slice(0,80).toLowerCase() + '...'}</p>
                <a href="./Blog/blog.html?page=${blogs[blog_id].title.toLowerCase().replaceAll(' ','-').replaceAll('?','')}">Read more <span class="arrow_right"></span></a>
            </div>
        </div>`;
    }
}