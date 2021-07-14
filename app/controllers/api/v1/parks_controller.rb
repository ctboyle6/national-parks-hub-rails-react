class Api::V1::ParksController < ApplicationController
  def index
    parks = Park.all.order(name: :asc)
    render json: parks
  end

  def show
    if park
      render json: park
    else
      render json: park.errors
    end
  end

  private

  def park
    @park ||= Park.find(params[:id])
  end
end
