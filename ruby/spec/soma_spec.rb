require './soma.rb'

describe '#soma' do
	let(:resultado) { soma(1,2) }

	it 'deve somar dois números' do
		expect(resultado).to eq(3)
	end
end