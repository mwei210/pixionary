Rails.application.routes.draw do
  root "static_pages#root"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show]
    resources :photos, only: [:create, :show, :index]
    resources :follows, only: [:create, :destroy]
  end
end
