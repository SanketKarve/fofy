class FormDatum < ApplicationRecord
  belongs_to :form
  has_many :field_data
end
