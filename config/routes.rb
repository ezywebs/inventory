Rails.application.routes.draw do
  
  
  namespace :api do
    namespace :v1 do
      
      old_scope = @scope[:module]
      @scope[:module] = nil
      # Use for login and autorize all resource
      use_doorkeeper do
        # No need to register client application
        skip_controllers :applications, :authorized_applications
      end
      @scope[:module] = old_scope
      
      
      devise_for :users, controllers: {
           registrations: 'api/v1/users/registrations',
       }, skip: [:sessions, :password]
      resources :categories, only: [:index, :create, :destroy, :update]
    end
  end
  

  devise_for :users

  resources :categories
  resources :products
  resources :stocks, except: [:destroy]
  resources :prices, except: [:destroy]
  resources :sales, except: [:destroy]
  root 'welcome#index'
  get 'categories/cancel' => 'categories#cancel'



end
