import {getData} from './getData.js'
import userData from './userData.js'



const generateCart = () => {

    const cartList = userData.cartListData

    const generateCartList = data => {
        const cartList = document.querySelector('.cart-list')
        cartList.textContent = ''
        data.forEach(item => {
            console.log(item);
            const {category, description, img, name: itemName, price, id} = item
            cartList.insertAdjacentHTML('afterbegin', `
            <li class="cart-item">
                <div class="product">
                    <div class="product__image-container">
                        <img src="${img[0]}" alt="${itemName} - ${description}" aria-describedby="aria_product_description_40366083" itemprop="image">
                    </div>
                    <div class="product__description">
                        <h3 class="product__name">
                            <a href="card.html#${id}">${itemName}</a></h3>
                        <p class="product_description-text">${description}</p>
                    </div>
                    <div class="product__prices">
                        <div class="product__price-type product__price-type-regular">
                            <div>
                                <div class="product__total product__total-regular">${price}.-</div>
                                <!--    <div class="product__price-regular">99.-</div>  -->
                            </div>
                        </div>
                    </div>
                    <div class="product__controls">

                        <div class="product-controls__remove">
                            <button type="button" class="btn btn-remove">
                                <img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
                            </button>
                        </div>
                        <div class="product-controls__quantity">
                            <select title="Выберите количество" aria-label="Выберите количество">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>

                            </select>
                        </div>
                    </div>
                </div>
            </li>
            `)
        })
    }

    if (location.pathname.includes('cart')){
        getData.cart(cartList, generateCartList);
    }
}

export default generateCart