require "spec_helper"
require "lib/zombie"

describe Zombie do
  it "is named Ash" do
    zombie = Zombie.new
    zombie.name.should == 'Ash'
  end

  it "has no brains" do
  	zombie = Zombie.new
  	zombie.brains.should < 1
  end

  it "alive should be false" do
  	zombie = Zombie.new
  	zombie.alive.should == false
  end

  it "rotting should be true" do
  	zombie = Zombie.new
  	zombie.rotting.should == true
  end

  it 'is hungry' do
  	zombie = Zombie.new
  	zombie.hungry?.should == true
  end

  it 'thirsty' do
  	zombie = Zombie.new
  	zombie.should be_thirsty
  end
end
