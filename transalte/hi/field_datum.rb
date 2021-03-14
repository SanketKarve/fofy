class FieldDatum < ApplicationRecord
  belongs_to :form_datum

  validates :value, presence: true
end
