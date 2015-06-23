require 'rails_helper'

describe Zombie do
  it 'is invalid without a name' do
    zombie = Zombie.new
    zombie.should_not be_valid
  end

  it "has  name that matches 'Ash Clone'" do
  	zombie = Zombie.new(name: 'Ash Clone 1')
  	zombie.name.should match(/Ash Clone \d/)
  end

  it 'changes the number of Zombies' do
  	zombie = Zombie.new(name: 'Ash')
  	expect { zombie.save }.to change { Zombie.count }.by(1)
  end

  it 'changes the number of Zombies - second method' do
  	zombie = Zombie.new(name: 'Ash')
  	expect { zombie.save }. to change {Zombie.count}.from(0).to(1)
  end

  it 'raises an error if saved without a name' do
  	zombie = Zombie.new
  	expect { zombie.save! }.to raise_error(ActiveRecord::RecordInvalid)
  end

  it 'responds to respond_test_method' do
  	zombie = Zombie.new
  	zombie.respond_to?(:respond_test_method)
  end

######DRY######

  it 'responds to respond_test_method second method' do
  	subject.should respond_to(:respond_test_method)
  end

  it 'responds to respond_test_method third method' do
  	should respond_to(:respond_test_method)
  end

  it { should respond_to(:respond_test_method) }

  its(:name) { should == nil }

end
