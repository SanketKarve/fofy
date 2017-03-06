class AddMissingIndexes < ActiveRecord::Migration[5.0]
  def change
    add_index :form_data, :form_id
    add_index :field_data, :form_datum_id
    add_index :fields, :form_id
    add_index :forms, :token
  end
end
