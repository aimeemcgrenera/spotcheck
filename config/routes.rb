Rails.application.routes.draw do
  scope '/api' do
    get :zone, to: 'zones#index'
    post :spot, to: 'spots#create'
    get :spot, to: 'spots#index'
    get :allzones, to: 'zones#all_zones'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
