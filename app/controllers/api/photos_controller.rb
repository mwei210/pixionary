class Api::PhotosController < ApplicationController
  def index
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render "/api/photos/show"
  end

  def photo_params
    params.require(:photo).permit(:url, :title, :description)
  end
end
