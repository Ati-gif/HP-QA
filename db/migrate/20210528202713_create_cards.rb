class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.boolean :answered
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
