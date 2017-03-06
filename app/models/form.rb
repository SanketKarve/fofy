class Form < ApplicationRecord
  has_many :fields, dependent: :destroy
  has_many :form_data, dependent: :destroy

  validates :name, presence: true
  validates :token, presence: true
end
