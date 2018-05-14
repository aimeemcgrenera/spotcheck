class ZonesController < ApplicationController
  def index
    odd_even = params[:odd_even]
    street_direction = params[:street_direction]
    street_name = params[:street_name]

    results = Zone.getData(odd_even, street_direction, street_name)

    render :json => results

  end
end
