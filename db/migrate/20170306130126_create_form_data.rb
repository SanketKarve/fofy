class CreateFormData < ActiveRecord::Migration[5.0]
  def change
    create_table :form_data do |t|
      t.integer   :form_id
      t.timestamps
    end
  end
end
