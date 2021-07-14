Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'parks/index'
      get 'parks/:id', to: 'parks#show'
    end
  end
  root 'home#index'
  get '/*path' => 'home#index'
end
