class RemoveTypeFromFromPokemons < ActiveRecord::Migration[6.0]
  def change
    remove_column :pokemons, :type, :string
  end
end
