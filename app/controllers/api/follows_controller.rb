class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id;
    if @follow.save

    end
  end

  def destroy
  end

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
