class Zone < ActiveRecord::Base
  def self.getData(odd_even, street_direction, street_name, street_type)
    resp = Faraday.get 'https://data.cityofchicago.org/resource/ys7w-i4tk.json' do |req|
      req.params['odd_even'] = odd_even
      req.params['street_direction'] = street_direction
      req.params['street_name'] = street_name
      req.params['street_type'] = street_type
      req.params['status'] = "ACTIVE"
    end
    body_hash = JSON.parse(resp.body)
    # @address_high = body_hash[0]["address_range_high"]
  end
end
