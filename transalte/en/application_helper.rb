module ApplicationHelper
    def class_active(controller, action=nil)
        'active'if params[:controller] == controller
    end
end
