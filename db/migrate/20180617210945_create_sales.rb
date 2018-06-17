class CreateSales < ActiveRecord::Migration
  def change
    create_table :sales do |t|
      t.decimal :tax
      t.decimal :delivery
      t.decimal :total
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
