class FormsController < ApplicationController
  def index
    @forms = Form.all
  end

  def new
    @form = Form.new
    @fields = Field.new
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
