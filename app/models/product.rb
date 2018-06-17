class Product < ActiveRecord::Base
  belongs_to :category
  has_one :stock
  has_one :price
  has_many :product_sales
  has_many :sales, through: :product_sales
end
