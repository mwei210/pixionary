class Api::PhotosController < ApplicationController
  def index
    # if current_user
    #   @user = current_user
    #   if @user.followings.length.empty?
    #     @photos = Photo.all
    #   else
        # @photos = Photo.where(user: @user.followings).order(created_at: :desc)
    #   end
    # end
    if (current_user.id == params[:id])
      @photos = current_user.photos
    else
      @photos = User.find(params[:id]).photos
    end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.author_id = current_user.id
    if @photo.save!
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
