class CardsController < ApplicationController
  before_action :set_category, except: [:all]
  before_action :set_card, only: [:show, :update, :destroy]

  def index
      
      render json: {category: @category, cards: @category.cards}
      
  end

  def all
      render json: Card.all
  end

  def show
  
      render json: @card
  end

  def create
     @card = @category.cards.new(card_params)
     if(@card.save)
      render json: @card
     else
      render json: @card.errors.full_messages, status: :unprocessable_entity
     end
  end

  def update
      if(@card.update(card_params))
       render json: @card
      else
       render json: @card.errors.full_messages, status: :unprocessable_entity
      end
   end

  def destroy
    render json: @card.destroy
  end

  private 

  def card_params
     params.require(:card).permit(:question, :answer, :answered)
  end

  def set_category
     @category = Category.find(params[:category_id])
  end

  def set_card
      @card = Card.find(params[:id])
  end
end

