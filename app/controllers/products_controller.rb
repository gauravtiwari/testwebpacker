class ProductsController < ApplicationController
  def index
    @products = %w(1 2 3 4 5)
  end
end
