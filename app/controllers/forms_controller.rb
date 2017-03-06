class FormsController < ApplicationController
	before_action :authenticate_user!

	def new
		# render html: '<div>Hello from fofy</div>'.html_safe
		respond_to do |format|
			@form = Form.new
			format.html
		end
	end

	def create
	end
end
