Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'categories#app'
  # resources :categories do 
  #    resources :cards
  # end

  get '/categories', to:'categories#index'
  post '/categories', to:'categories#create'
  
  get '/categories/:id', to:'categories#show'
  put '/categories/:id', to:'categories#update'
  patch '/categories/:id', to:'categories#update'
  delete '/categories/:id', to:'categories#destroy'


  get '/categories/:category_id/cards', to: 'cards#index'
  post '/categories/:category_id/cards', to: 'cards#create'

  get '/categories/:category_id/cards/:id', to: 'cards#show'
  put '/categories/:category_id/cards/:id', to: 'cards#update'
  patch '/categories/:category_id/cards/:id', to: 'cards#update'
  delete '/categories/:category_id/cards/:id', to: 'cards#destroy'

  get  '/cards', to:'cards#all'
end
