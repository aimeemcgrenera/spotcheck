Rails.application.routes.draw do
  resources :spots
  resources :zones

  scope '/api' do
    get :zone, to: 'zones#index'
    post :spot, to: 'spots#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
