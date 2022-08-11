class AddColumnToEvent < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :place, :integer, default: 0
    add_column :events, :event_url, :string
  end
end
