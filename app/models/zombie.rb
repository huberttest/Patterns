class Zombie < ActiveRecord::Base
  validates :name, presence: true

  def respond_test_method
  	"It works"
  end
end
