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

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
