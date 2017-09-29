json.extract! user, :id, :username, :email, :name, :profile_photo_url, :bio

json.followers user.followers.ids
json.followings user.followings.ids
