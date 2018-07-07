class ProductsController < ApplicationController
  before_action :set_product, only: [:destroy, :update]
  def index
    @products = Product.all
  end
  
  def create
    @product = Product.new(:name => params[:name], :sku => params[:sku], :category_id => params[:post][:category_id])
    if @product.save
      flash.now[:success] = "Product #{@product.name} was created successfully"
    else
      flash.now[:danger] = "There was an error please try again!"
    end
    # render @product
    @products = Product.all
    render  partial: 'products/list'
  end
  
  def update
    if @product.update(:name => params[:name], :sku => params[:sku], :category_id => params[:category_id])
      flash.now[:success] = "Product #{@product.name} was updated successfully"
    else
      flash.now[:danger] = "There was an error please try again!"
    end
    @products = Product.all
    render  partial: 'products/list'
  end
  
  def destroy
    if @product.destroy
      flash.now[:success] = "Category #{@product.name} was removed successfully"
    else
      flash.now[:danger] = "There was an error please try again!"
    end
    @products = Product.all
    render  partial: 'products/list'
  end
  
  private
  def set_product
    @product = Product.find(params[:id])
  end
  

end
