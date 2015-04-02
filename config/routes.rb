Rails.application.routes.draw do
  resources :items
  root 'ember#bootstrap'
  get '/*path' => 'ember#bootstrap'
end
