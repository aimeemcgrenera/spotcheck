class ZonesController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Zone.where(["zone", "%#{q}%"]).limit(100)
      )
    end
  end
end
