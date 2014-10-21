Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create]
  resources :tasks, only: [:index]

  root to: "tasks#index"
end