class Task < ApplicationRecord
  validates :title, :due_date, :priority, presence: true

  validates :estimate_time, numericality: {greater_than_or_equal_to: 0}
  validates :description, length: {maximum: 255}

  enum priority: [:Low, :Medium, :High, :Urgent]
  enum status: [:New, :Inprogress, :Completed, :Reopen]

  ATTRIBUTE_PARAMS = [:title, :description, :due_date,
    :estimate_time, :priority, :status]
end
