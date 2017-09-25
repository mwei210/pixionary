# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  url         :text             not null
#  title       :string
#  description :text
#  author_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
