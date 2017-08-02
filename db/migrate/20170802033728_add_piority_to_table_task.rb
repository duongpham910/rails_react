class AddPiorityToTableTask < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :priority, :integer
    add_column :tasks, :estimate_time, :float
    rename_column :tasks, :completed, :status
  end
end
