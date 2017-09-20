class Api::TasksController < Api::BaseController
  before_action :set_task, only: [:show, :update, :destroy]

  def index
    tasks = Task.all
    response_success ConvertData.convert_date_time(tasks.as_json)
  end

  def create
    @task = Task.new task_params.merge! status: 0
    if @task.save
      response_success task: @task
    else
      response_fail @task.errors
    end
  end

  def show
    task = Task.find_by id: params[:id]
    response_success task: task
  end

  def show
    response_success task: @task
  end

  def update
    if @task.update_attributes task_params
      response_success task: @task
    else
      response_fail @task.errors
    end
  end

  def destroy
    if @task.destroy
      response_success
    else
      response_fail
    end
  end

  private
    def task_params
      params.require(:task).permit(Task::ATTRIBUTE_PARAMS)
    end

    def set_task
      @task= Task.find params[:id]
    end
end
