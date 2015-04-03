Rails.application.routes.draw do
  resources :todos, except: [:new, :edit]
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
