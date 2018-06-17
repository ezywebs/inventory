class CreatePrices < ActiveRecord::Migration
  def change
    create_table :prices do |t|
      t.decimal :buy
      t.decimal :sale
      t.references :product, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
