class ChangeStreetdirectionColumn < ActiveRecord::Migration[5.1]
  def change
    change_column :spots, :street_direction, :string
  end
end
