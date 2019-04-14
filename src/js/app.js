const setUpAttacks = (items, shield = true) => {
  const result = [];

  items.forEach((item) => {
    const setDamage = (damage) => {
      if (!shield) {
        if ((item.health > 0) && (item.health > damage)) {
          item.health -= damage;
        } else { item.health = 0; }
        return items;
      }

      const healthHeroes = items.filter(hero => hero.health > 0).length;
      const restDamage = damage % healthHeroes;
      const indDamage = (damage - restDamage) / healthHeroes;

      items.forEach((element) => {
        if ((element.health > 0) && (element.health > indDamage)) {
          element.health -= indDamage;
        } else { element.health = 0; }
        return items;
      });

      if ((item.health > 0) && (item.health > restDamage)) {
        item.health -= restDamage;
      } else { item.health = 0; }
      return items;
    };
    result.push(setDamage);
  });

  return result;
};

export default setUpAttacks;
