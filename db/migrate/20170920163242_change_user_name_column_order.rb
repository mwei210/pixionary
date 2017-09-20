class ChangeUserNameColumnOrder < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :name, :string, null: false, after: :password_digest
  end
end
