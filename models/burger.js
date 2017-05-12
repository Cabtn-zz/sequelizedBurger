module.exports = (sequelize, DataTypes) => {
	var Burger = sequelize.define("Burger", {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	});
	return Burger;
}
