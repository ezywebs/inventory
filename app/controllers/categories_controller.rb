class CategoriesController < ApplicationController
  def index
    @categories = Category.all
    @new_category = Category.new
  end
  
  def new
    @category = Category.new
  end
  
  def create
    #@category = Category.new(params.require(:category).permit(:name))
    @category = Category.new(:name => params[:name])
    if @category.save
      flash[:success] = "Category #{@category.name} was created successfully"
    else
      flash[:danger] = "There was an error please try again!"
    end
    redirect_to categories_path
  end
end
