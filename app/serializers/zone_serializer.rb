class ZoneSerializer < ActiveModel::Serializer
  attributes :id, :status, :zone, :odd_even, :address_range_low, :address_range_high, :street_direction, :street_name, :second_street_direction, :street_type
end
