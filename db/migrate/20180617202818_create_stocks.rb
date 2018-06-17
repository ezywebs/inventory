class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :available
      t.references :product, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
