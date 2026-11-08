class CreatePatterns < ActiveRecord::Migration[8.1]
  def change
    create_table :patterns do |t|
      t.string :title
      t.string :yarn
      t.string :sizes
      t.text :body

      t.timestamps
    end
  end
end
