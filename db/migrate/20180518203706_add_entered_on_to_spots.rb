class AddEnteredOnToSpots < ActiveRecord::Migration[5.1]
  def change
    add_column :spots, :entered_on, :string
  end
end
