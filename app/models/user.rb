# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  email             :string           not null
#  session_token     :string           not null
#  password_digest   :string           not null
#  profile_photo_url :text
#  bio               :text
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  name              :string           not null
#

class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, :name, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  before_validation :ensure_session_token

  has_many :photos,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Photo

  has_many :follower_links,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :followers,
    through: :follower_links,
    source: :follower

  has_many :following_links,
    primary_key: :id,
    foreign_key: :following_id,
    class_name: :Follow

  has_many :followings,
    through: :following_links,
    source: :following

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
