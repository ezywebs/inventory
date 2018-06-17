class CreateProductSales < ActiveRecord::Migration
  def change
    create_table :product_sales do |t|
      t.integer :quantity
      t.references :product, index: true, foreign_key: true
      t.references :sale, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
