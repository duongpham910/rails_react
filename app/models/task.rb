class Task < ApplicationRecord
  validates :title, :due_date, :priority, presence: true

  enum priority: [:Low, :Medium, :High, :Urgent]
  enum status: [:New, :Inprogress, :Completed, :Reopen]

  ATTRIBUTE_PARAMS = [:title, :description, :due_date,
    :estimate_time, :priority, :status]
end
