class Api::TasksController < Api::BaseController

  def index
    tasks = Task.all
    response_success tasks
  end

end
