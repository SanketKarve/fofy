class Field < ApplicationRecord
  belongs_to :form
  validates :type, presence: true
end
