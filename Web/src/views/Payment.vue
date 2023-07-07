<template>
    <div style="padding-top: 30px;"></div>
    <!-- <div class="container"> -->
  <div class="row">
    <div class="col-md-4 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">Summarize items (3)</span>
        <span class="badge badge-secondary badge-pill">3</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">First product</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$10.00</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Second product</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$10.00</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">Third item</h6>
            <small class="text-muted">Brief description</small>
          </div>
          <span class="text-muted">$10.00</span>
        </li>
        
        <li class="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$30.00</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>

    <div class="col-md-8 order-md-1">
      <h4 class="mb-3">Shipping Address :<span> #01, 271, Phnom Penh, Cambodia</span></h4>
      <hr>

      <h4 class="mb-3">Shpping Method :<span> UPS Ground, $2.00</span></h4>
      <hr>

      <h4 class="mb-3">Payment Method</h4>

        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="credit">Credit Card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="debit">Visa Card</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="paypal">Master Card</label>
          </div>
        </div>

        <div class="row">
          <div >
            <label for="cc-name">Card Number</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required>
            <div class="invalid-feedback">
                card number is required
            </div>
          </div>
         
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
            <label for="cc-number">Name on card</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-expiration">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="cc-cvv">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
        <hr>

        <h4 class="mb-3">Billing Address</h4>


        <div class="d-block my-3">
          <div class="custom-control custom-radio">
            <input id="same-address" name="billing" type="radio" class="custom-control-input" checked required>
            <label class="custom-control-label" for="same-address">Same as shipping address</label>
          </div>
          <div class="custom-control custom-radio">
            <input id="save-info" name="billing" type="radio" class="custom-control-input" required>
            <label class="custom-control-label" for="save-info">Use different billing address</label>
          </div>
        </div>
        <hr>

        <h4 class="mb-3">Remember me</h4>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="save-info">
          <label class="custom-control-label" for="save-info">Save this information for next time</label>
        </div>

      <form class="needs-validation" novalidate>
        

        <div class="d-flex justify-content-between pt-5">
            <h6 class="mb-0">
                <router-link to="/cart/checkout/shipping">
                    <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Return to Shipping Method
                    </a>
                </router-link>
            </h6>
            <button class="btn btn-primary btn-lg" type="submit">Complete Order</button>
        </div>

      </form>
    </div>
  </div>

<!-- </div> -->
</template>