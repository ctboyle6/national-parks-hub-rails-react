class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :park_code, null: false
      t.string :image, default: 'https://www.logolynx.com/topic/national+park+service#&gid=1&pid=1'

      t.timestamps
    end
  end
end
