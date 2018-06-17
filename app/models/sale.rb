class Sale < ActiveRecord::Base
  belongs_to :user
  has_many :product_sales
  has_many :products, through: :product_sales
end
