class Task < ApplicationRecord
  validates :title, :due_date, :priority, presence: true

  enum priority: [:Low, :Medium, :High, :Urgent]
  enum status: [:New, :Inprogress, :Completed, :Reopen]
end
