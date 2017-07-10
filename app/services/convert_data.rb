class ConvertData

  FIELDS_DATE_FORMAT = [:due_date, :created_at, :updated_at]
  DATE_TIME_FROMAT = "%Y-%m-%d %H:%M"

  class << self
    def convert_date_time tasks
      tasks.each do |task|
        FIELDS_DATE_FORMAT.each do |field|
          task["#{field}"] = task["#{field}"].try(:strftime, DATE_TIME_FROMAT)
        end
      end
      tasks
    end
  end

end
