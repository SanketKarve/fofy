class CreateFields < ActiveRecord::Migration[5.0]
  def change
    create_table :fields do |t|
      t.integer   :form_id
      t.integer   :type
      t.integer   :min
      t.integer   :max
      t.timestamps
    end
  end
end
