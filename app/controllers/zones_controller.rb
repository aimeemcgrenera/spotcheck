class ZonesController < ApplicationController
  def index
    odd_even = params[:odd_even]
    street_direction = params[:street_direction]
    street_name = params[:street_name]
    street_type = params[:street_type]


    if street_name.blank?
      render status: 400, json: { error: 'Expected a street parameter '}
    else
      render(
        status: 200,
        json: Zone.where(:street_name => ["street_name = ?", street_name])
      )
    end
  end
end
