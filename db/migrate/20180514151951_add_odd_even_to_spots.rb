class AddOddEvenToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :odd_even, :string
  end
end
