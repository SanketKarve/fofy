class CreateFieldData < ActiveRecord::Migration[5.0]
  def change
    create_table :field_data do |t|
      t.integer   :form_data_id
      t.text      :value
      t.timestamps
    end
  end
end
