/* make the API call */
FB.api(
    "/100067820916416/commerce_orders",
    {
        "fields": "id,buyer_details,channel,merchant_order_id,order_status"
    },
    function (response) {
      if (response && !response.error) {
        /* handle the result */
      }
    }
);