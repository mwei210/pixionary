class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.save
  end

  def destroy
    @follow = Follow.find_by(follow_params)
    @follow.destroy
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
