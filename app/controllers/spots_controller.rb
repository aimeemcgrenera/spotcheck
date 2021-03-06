class SpotsController < ApplicationController
  before_action :set_spot, only: [:show, :edit, :update, :destroy]

  def index
    @spots = Spot.all
    render json: @spots
  end

  def show
    render json: @spot
  end

  def new
    @spot = Spot.new
  end

  def create
    @spot = Spot.new(spot_params)
    @spot.save!
    render json: @spot, status: 201
  end

  def destroy
    if @spot.destroy!
      render json: { success_message: 'Successfully deleted!' }, status: 200
    end
  end

  def update
    @spot.update!(spot_params)
    render json: @spot
  end

  private

    def set_spot
      @spot = Spot.find(params[:id])
    end

    def spot_params
      params.permit(:address_number, :street_direction, :street_name)
    end

end
