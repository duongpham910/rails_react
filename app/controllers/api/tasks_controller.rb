class Api::TasksController < Api::BaseController

  def index
    tasks = Task.all
    response_success ConvertData.convert_date_time(tasks.as_json)
  end

  def create
    @task = Task.new task_params.merge!(status: 0)
    if @task.save
      response_success task: @task
    else
      response_fail @device.errors
    end
  end

  private
    def task_params
      params.require(:task).permit(Task::ATTRIBUTE_PARAMS)
    end
end
