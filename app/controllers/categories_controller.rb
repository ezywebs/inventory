class CategoriesController < ApplicationController
  before_action :set_category, only: [:destroy, :edit, :update]
  # respond_to :html, :js

  def index
    @categories = Category.all
    @new_category = Category.new
  end
  
  def new
    @category = Category.new
  end
  
  def edit
    render  partial: 'categories/edits'
  end
  
  def create
    @category = Category.new(:name => params[:name])
    if @category.save
      flash.now[:success] = "Category #{@category.name} was created successfully"
    else
      flash.now[:danger] = "There was an error please try again!"
    end
    @categories = Category.all
    render partial: 'categories/list'
  end
  
  def update
    if @category.update(:name => params[:editname])
      flash.now[:success] = "Category #{@category.name} was saved successfully"
    else
      flash.now[:danger] = "There was an error please try again!"
    end
    render @category
  end
  
  def destroy
    if @category.destroy
      flash[:success] = "Category #{@category.name} was removed successfully"
    else
      flash[:danger] = "There was an error please try again!"
    end
    redirect_to categories_path
  end

  private
  def set_category
    @category = Category.find(params[:id])
  end
  
  def category_params
    params.require(:category).permit(:name)
  end
end
