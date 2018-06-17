class WelcomeController < ApplicationController
  def index
    @inventory = Stock.all
  end
end