class Product < ActiveRecord::Base
  belongs_to :category
  has_one :stock, dependent: :destroy
  has_one :price
  has_many :product_sales
  has_many :sales, through: :product_sales
  validates :name, presence: true, length: { minimum: 3, maximum: 25}
  validates_uniqueness_of :name
  validates :sku, presence: true, length: { minimum: 3, maximum: 25}
  validates_uniqueness_of :sku
  validates :category_id, presence: true
  
  after_create :create_default_stock
  
  private
  def create_default_stock
    Stock.create(product_id: self.id, available: 0)
  end
end
