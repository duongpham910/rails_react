class Api::TasksController < Api::BaseController

  def index
    tasks = Task.all
    response_success ConvertData.convert_date_time(tasks.as_json)
  end

end
