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

      <h4>Shpping Method</h4>

        <div class="d-block my-3">
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS Ground</label>
                </div>
                <div>$2.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS 3 Days Select</label>
                </div>
                <div>$4.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS 2 Days Air</label>
                </div>
                <div>$7.00</div>
            </div>
            <div class="d-flex justify-content-between">
                <div class="custom-control custom-radio">
                  <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
                  <label class="custom-control-label" for="credit">UPS Next Day Air</label>
                </div>
                <div>$10.00</div>
            </div>
        </div>

      <form class="needs-validation" novalidate>
        <hr>

        <div class="d-flex justify-content-between pt-5">
            <h6 class="mb-0">
                <router-link to="/cart/checkout">
                    <a href="#!" class="text-body">
                        <i class="fas fa-long-arrow-alt-left me-2"></i>Return to Customer Information
                    </a>
                </router-link>
            </h6>
            <router-link to="/cart/checkout/payment">
                <button class="btn btn-primary btn-lg" type="submit">Continue to Payment</button>
            </router-link>
        </div>

      </form>
    </div>
  </div>

<!-- </div> -->
</template>