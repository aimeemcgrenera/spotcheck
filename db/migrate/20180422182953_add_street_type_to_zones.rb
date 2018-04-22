class AddStreetTypeToZones < ActiveRecord::Migration[5.1]
  def change
    add_column :zones, :street_type, :string
  end
end
