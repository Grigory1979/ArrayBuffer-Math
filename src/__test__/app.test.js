import Daemon from "../daemon";
import Magician from "../magician";

test('Атака мага без дурмана', () => {
	const Stas = new Magician('Stas');
	Stas.attack = 100;
	const result = Stas.attack;
	expect(result(2)).toEqual(90);
});

test("Атака демона под дурманом", () => {
	const German = new Daemon("German");
	German.attack = 100;
	German.stoned = true;
	const result = German.attack;
	expect(result(2)).toEqual(85);
});