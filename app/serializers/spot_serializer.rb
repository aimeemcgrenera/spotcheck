class SpotSerializer < ActiveModel::Serializer
  attributes :id, :address_number, :street_direction, :street_name, :odd_even
end
