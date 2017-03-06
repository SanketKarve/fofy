class FormsController < ApplicationController
  before_action :authenticate_user!

  def index
    @forms = Form.all
  end

  def new
    @form = Form.new
    @fields = Field.new
		respond_to do |format|
			format.html
		end
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def delete
  end
end
