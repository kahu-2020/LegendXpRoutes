
exports.seed = function(knex) {
  return knex('mobs').del()
    .then(function () {
      return knex('mobs').insert([
        {mob_name: 'shade of Augustus', era: 'ancient', zone: 'Rome', notes: '20000 gold', xp: '320000', agg:'yes'},
        {mob_name: 'dvergar dragon-hunter', era: 'ancient', zone: 'Svartalfheim', notes: '', xp: '309000', agg:'no'},
        {mob_name: 'Alam ad-Din Sulaiman Ibn Jandar', era: 'medieval', zone: 'The Crusades', notes: '', xp: '98685', agg: 'no' },
        {mob_name: 'Saif ad-Din Ali Al-Mashtub', era: 'medieval', zone: 'The Crusades', notes: '', xp: '217107', agg: 'no' },
        {mob_name: 'Richard Coeur de Lion', era: 'medieval', zone: 'The Crusades', notes: '', xp: '217107', agg: 'no' },
        {mob_name: 'a black rhinoceros', era: 'industrial', zone: 'African Savanna', notes: '', xp: '162411', agg: 'no' },        
        {mob_name: 'a giant python', era: 'industrial', zone: 'African Savanna', notes: '', xp: '105586', agg: 'yes' },        
        {mob_name: 'a man-eating lion45', era: 'industrial', zone: 'African Savanna', notes: '', xp: '182728', agg: 'yes' },        
        { mob_name: 'Boggy Mary', era: 'industrial', zone: 'Dartmoor', notes: '', xp: '179116', agg: 'no' },  
        { mob_name: 'Nucklavee', era: 'ancient', zone: 'Celtic Ireland', notes: 'Hidden mob', xp: '345204', agg: 'yes' },
        { mob_name: 'Leenan Sidhe', era: 'ancient', zone: 'Celtic Ireland', xp: '315792', agg: 'no' },
        { mob_name: 'Herne, the hunter', era: 'ancient', zone: 'Celtic Ireland', notes: 'Hidden mob', xp: '275100', agg: 'no' },
        { mob_name: 'Finarra', era: 'ancient', zone: 'Celtic Ireland', notes: '', xp: '214200', agg: 'no' },
        { mob_name: 'Oonagh', era: 'ancient', zone: 'Celtic Ireland', notes: 'Hidden mob', xp: '197370', agg: 'no' },
        { mob_name: 'Bane Sidhe', era: 'ancient', zone: 'Celtic Ireland', notes: 'Slay special', xp: '177633', agg: 'yes' },
        {mob_name: 'Lugh, the Il-dana', era: 'ancient', zone: 'Celtic Ireland', notes: 'Slay special, eats charmies', xp: '177633', agg:''},
        { mob_name: 'Cian', era: 'ancient', zone: 'Celtic Ireland', notes: '', xp: '172602', agg: 'no' },
        { mob_name: 'Megwan', era: 'ancient', zone: 'Celtic Ireland', notes: '', xp: '162411', agg: 'no' },
        { mob_name: 'Rhys', era: 'ancient', zone: 'Celtic Ireland', notes: '', xp: '121840', agg: 'no' },
      ]);
    });
};
