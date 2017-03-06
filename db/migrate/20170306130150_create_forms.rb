class CreateForms < ActiveRecord::Migration[5.0]
  def change
    create_table :forms do |t|
      t.string    :token
      t.string    :name
      t.timestamps
    end
  end
end
