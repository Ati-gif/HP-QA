class CategoriesController < ApplicationController
  before_action :set_category, only:[:show, :update, :destroy]
  ## ssr of a react component
  def app
   render component: 'App'
  end

  def index
    render json: Category.all
  end

  def show
    #  render json: {category: @category, cards:@category.cards}
    
    # could pass props through my server here to the component and this would be more
    # but we are not going to this so that can get practice with useEffect and axios in react
    # render component: 'CategoryShowSSR', props: {category: @category, cards:@category.cards}
    render component: 'CategoryShowSSR', props: {id: @category.id}
  end

  def create
    @category = Category.new(category_params)
    if(@category.save)
      render json: @category
    else
      render json:  @category.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
      if(@category.update(category_params))
        render json: @category
      else
        render json: @category.errors.full_messages, status: :unprocessable_entity
      end
  end

  def destroy
    render json: @category.destroy
  end

  private

  def category_params
    params.require(:category).permit(:name)
  end

  def set_category
      @category = Category.find(params[:id])
  end
end
