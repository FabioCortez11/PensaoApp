import { openDatabase }  from 'expo-sqlite';

const db = openDatabase('TelaCadastro.db');

db.transaction((tx) => {
  tx.executeSql(
    `CREATE TABLE IF NOT EXISTS cadastro 
     (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      email TEXT,  
      senha TEXT);`
  );
});

const adicionarCadastro = (email, senha, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO cadastro (email, senha) VALUES (?, ?)',
      [email, senha],
      (_, result) => {
        callback(result.insertId);
      },
      (_, error) => {
        console.error('Erro ao cadastrar usuário:', error);
        callback(null);
      }
    );
  });
};

const listarCadastros = (callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM cadastro', [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};

const encontrarCadastroPorEmail = (nome, callback) => {
  db.transaction((tx) => {
    tx.executeSql('SELECT * FROM cadastro WHERE email = ?', [email], (_, { rows }) => {
      if (rows.length > 0) {
        callback(rows._array[0]);
      } else {
        callback(null);
      }
    });
  });
};

const alterarCadastro = (id, email, senha, callback) => {
  db.transaction((tx) => {
    const sql = 'UPDATE cadastro SET email = ?, senha = ? WHERE id = ?';
    const params = [email, senha, id];

    tx.executeSql(
      sql,
      params,
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao alterar cadastro:', error);
        callback(0);
      }
    );
  });
};

const excluirCadastro = (id, callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM cadastro WHERE id = ?',
      [id],
      (_, result) => {
        callback(result.rowsAffected);
      },
      (_, error) => {
        console.error('Erro ao excluir cadastro:', error);
        callback(0);
      }
    );
  });
};

export { adicionarCadastro, listarCadastros, alterarCadastro, encontrarCadastroPorEmail, excluirCadastro };
