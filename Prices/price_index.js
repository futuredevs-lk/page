

const price_types = ['web', 'web software','software'];

price_types.forEach(type =>{
    let price_html = '<br>';
    prices[type].forEach(plan =>{
        price_html =`
        <div class="col-lg-4 col-md-6 col-sm-6 mix ${type} ${plan.popular}">
            <div class="portfolio__item">
                <div class="price_box">
                    <h4 class="price_head">${plan.title}</h4>
                    <h2 class="price_amount">${plan.price}lkr</h2>
                    <ul>`;
                    plan.features.forEach(feature =>{
                        price_html +=`
                        <li>${feature.replaceAll('(','<small> (').replaceAll(')',') </small>')}</li>`;
                    })

                    price_html +=`
                    </ul>
                    <button class="pricebtn">SELECT PLAN</button>
                </div>
            </div>
        </div>`;
        document.getElementsByClassName('portfolio__gallery')[0].innerHTML += price_html;
    });
})

