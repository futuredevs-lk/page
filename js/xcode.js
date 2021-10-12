try{
document.getElementById('default_header').innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-lg-2">
                    <div class="header__logo">
                        <a href="../index.html"><img src="../img/logo.png" style="max-width:180px;" alt="FUTURE-Devs"></a>
                    </div>
                </div>
                <div class="col-lg-10">
                    <div class="header__nav__option">
                        <nav class="header__nav__menu mobile-menu">
                            <ul>
                                <li id="home_active"><a href="../index.html">Home</a></li>
                                <li id="services_active"><a href="./../Services/index.html">Services</a>
                                    <ul class="dropdown">
                                        <li><a href="./../Services/index.html#w-services">Web Services</a></li>
                                        <li><a href="./../Services/index.html#s-services">Software</a></li>
                                        <li><a href="./../Services/index.html#g-services">Graphical</a></li>
                                        <li><a href="./../Services/index.html#m-services">Marketing</a></li>
                                        <li><a href="./../Services/index.html#o-services">Other</a></li>
                                    </ul>
                                </li>
                                <li id="blog_active"><a href="./../Blog/index.html">Blog</a></li>
                                <li id="apps_active"><a href="./../Apps/index.html">Apps</a></li>
                                <li id="prices_active"><a href="./../Prices/index.html">prices</a>
                                    <ul class="dropdown">
                                        <li><a href="./../About/index.html">Web Services</a></li>
                                        <li><a href="./../Apps/index.html">Software</a></li>
                                        <li><a href="./../Blog/index.html">Graphical</a></li>
                                        <li><a href="./blog-details.html">Marketing</a></li>
                                    </ul>
                                </li>
                                <li id="about_active"><a href="./../About/index.html">About</a></li>
                                <li id="contact_active"><a href="./../Contact/index.html">Contact</a></li>
                            </ul>
                        </nav>
                        <div class="header__nav__social">
                        <a class="facebook_link" target="_blank"   href="https://www.facebook.com/Future-Devs-112710120870797/"><i class="fa fa-facebook"></i></a>
                        <a class="instagram_link" target="_blank"  href="https://www.instagram.com/invites/contact/?i=18pkg9jutrvt3&utm_content=lap42r2"><i class="fa fa-instagram"></i></a>
                        <a class="youtube_link" target="_blank"    href="https://youtube.com/channel/UCl45XQ-U4H15bbI6XGEgBKA"><i class="fa fa-youtube-play"></i></a>
                        <!--<a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>-->
                        </div>
                    </div>
                </div>
            </div>
            <div id="mobile-menu-wrap"></div>
        </div>`;

document.getElementById('default_footer').innerHTML =  `
    <div class="container">
        <div class="footer__top">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="footer__top__logo">
                        <a href="../index.html"><img src="../img/logo.png" width="200px" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="footer__top__social">
                        <a class="facebook_link" target="_blank"   href="https://www.facebook.com/Future-Devs-112710120870797/"><i class="fa fa-facebook"></i></a>
                        <a class="instagram_link" target="_blank"  href="https://www.instagram.com/invites/contact/?i=18pkg9jutrvt3&utm_content=lap42r2"><i class="fa fa-instagram"></i></a>
                        <a class="youtube_link" target="_blank"    href="https://youtube.com/channel/UCl45XQ-U4H15bbI6XGEgBKA"><i class="fa fa-youtube-play"></i></a>
                        <!--<a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a>-->
                        </div>
                </div>
            </div>
        </div>
        <div class="footer__option">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="footer__option__item">
                        <h5>Address</h5>
                        <p>
                            No.xx,<br>
                            Sri Gangarama MW,<br>
                            Colobo-11,<br>
                            Sri Lanka.
                        </p>
                        <a href="../Contact/index.html" class="read__more">Contact us <span class="arrow_right"></span></a>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3">
                    <div class="footer__option__item">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="../Services/index.html#w-services">Web</a></li>
                            <li><a href="../Services/index.html#s-services">Software</a></li>
                            <li><a href="../Services/index.html#g-services">Graphical</a></li>
                            <li><a href="../Services/index.html#m-services">Marketing</a></li>
                            <li><a href="../Services/index.html#o-services">Other</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-3">
                    <div class="footer__option__item">
                        <h5>Visit</h5>
                        <ul>
                            <li><a href="../Blog/index.html">Blog</a></li>
                            <li><a href="../Apps/index.html">Apps</a></li>
                            <li><a href="../Prices/index.html">Price Plans</a></li>
                            <li><a href="../About/index.html">About</a></li>
                            <li><a href="../Contact/index.html">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="footer__option__item">
                    <h5>Newsletter</h5>
                    <p>Get in touch for offers, upcomming events, reports and blog updates.</p>
                    <form action="#email_field">
                        <input id="email_field" type="email" placeholder="Email">
                        <button onclick="subscribe()" type="submit"><i class="fa fa-send"></i></button>
                    </form>
                </div>
                </div>
            </div>
        </div>
        <div class="footer__copyright">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    <p class="footer__copyright__text">Copyright &copy;
                        <script>
                            document.write(new Date().getFullYear());
                        </script>
                        All rights reserved <a href="../index.html" target="_blank">FUTUREDevs</a>
                    </p>
                    <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </div>
            </div>
        </div>
    </div>`;
}catch{null;}

// Social Media links starts

let instagram_link = "https://www.instagram.com/invites/contact/?i=18pkg9jutrvt3&utm_content=lap42r2";
let facebook_link = "https://www.facebook.com/Future-Devs-112710120870797/";
let youtube_link = "https://youtube.com/channel/UCl45XQ-U4H15bbI6XGEgBKA";    

let facebook = document.getElementsByClassName('facebook_link')
for (let i = 0; i < facebook.length; i++) {
    facebook[i].setAttribute('href',facebook_link);
    document.getElementsByClassName('instagram_link')[i].setAttribute('href',instagram_link);
    document.getElementsByClassName('youtube_link')[i].setAttribute('href',youtube_link);
}
// Social Media links ends

let page = location.href.toString().split("/");
try{
    document.getElementById(`${page[page.length - 2].toLowerCase()}_active`).classList.add('active');
}
catch{
    null;
}

function togglepopup(){
    document.getElementsByClassName('popup')[0].classList.toggle('active');
}

var firebaseConfig = {
	apiKey: "AIzaSyBlcD_0RKH87i_zXJOvZMD4JCioeVYv3yo",
	authDomain: "future-devs.firebaseapp.com",
	projectId: "future-devs",
	storageBucket: "future-devs.appspot.com",
	messagingSenderId: "1074049332947",
	appId: "1:1074049332947:web:f121991f716f28301cc626",
	measurementId: "G-WY1SJ3Q9P5"
};
// Initialize Firebase
try{
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var db = firebase.firestore();
}catch{null;}

function subscribe(){
    document.getElementsByClassName('popup')[0].classList.toggle('active');
	db.collection("subscription").doc(document.getElementById('email_field').value).set({
	at: Date.apply()
	}).then(() => {
		null;// alert("Document successfully written!");
	}).catch((error) => {
		null;// alert("Error writing document: ", error);
    });
}

function send_message(){
    document.getElementsByClassName('popup')[0].classList.toggle('active');
    let message =  `Sender : ${document.getElementById('msg_name').value} \n
                    email  : ${document.getElementById('msg_email').value}\n
                    ${document.getElementById('msg_msg').value}`;
	db.collection("Message").doc(message).set({
	at: Date.apply()
	}).then(() => {
		null;// alert("Document successfully written!");
	}).catch((error) => {
		null;// alert("Error writing document: ", error);
    });
}