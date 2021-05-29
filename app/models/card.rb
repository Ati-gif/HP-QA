class Card < ApplicationRecord
  belongs_to :category
  validates :question, presence: true
end
