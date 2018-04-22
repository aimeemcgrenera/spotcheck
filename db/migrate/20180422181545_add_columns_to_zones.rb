class AddColumnsToZones < ActiveRecord::Migration[5.1]
  def change
    add_column :zones, :row_id, :integer
    add_column :zones, :status, :string
    add_column :zones, :zone, :integer
    add_column :zones, :odd_even, :string
    add_column :zones, :address_range_low, :integer
    add_column :zones, :address_range_high, :integer
    add_column :zones, :street_direction, :string
    add_column :zones, :street_name, :string
    add_column :zones, :second_street_direction, :string
    add_column :zones, :buffer, :string
    add_column :zones, :ward_low, :integer
    add_column :zones, :ward_high, :integer
  end
end
