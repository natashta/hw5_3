const setUpAttacks = (items, shield = true) => {
  const result = [];

  items.forEach((item) => {
    const setDamage = (damage) => {
      const i = item;
      if (!shield) {
        if ((i.health > 0) && (i.health > damage)) {
          i.health -= damage;
        } else { i.health = 0; }
        return items;
      }

      const healthHeroes = items.filter(hero => hero.health > 0).length;
      const restDamage = damage % healthHeroes;
      const indDamage = (damage - restDamage) / healthHeroes;

      items.forEach((element) => {
        const el = element;
        if ((el.health > 0) && (el.health > indDamage)) {
          el.health -= indDamage;
        } else { el.health = 0; }
        return items;
      });

      if ((i.health > 0) && (i.health > restDamage)) {
        i.health -= restDamage;
      } else { i.health = 0; }
      return items;
    };
    result.push(setDamage);
  });

  return result;
};

export default setUpAttacks;
