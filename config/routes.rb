Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "root#home"

  namespace :api do
    resources :tasks, only: [:index, :create]
  end

  get "*path", to: "root#home"  #redirect all your request to single page
end
