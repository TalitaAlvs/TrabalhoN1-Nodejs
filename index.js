import inquirer from 'inquirer';
import chalk from 'chalk';

inquirer.prompt([
    {
        type: 'input',
        name: 'nome',
        message: 'Nome: '
    },
    {
        type: 'input',
        name: 'sobrenome',
        message: 'Sobrenome: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'E-mail: '
    },
    {
        type: 'rawlist',
        name: 'senioridade',
        message: 'De qual lado da aplicação você prefere desenvolver? ',
        choices: [{
            value: 'front-end',
            name: 'Front-end'
        },
        {
            value: 'back-end',
            name: 'Back-end'
        },
        {
            value: 'fullstack',
            name: 'Fullstack'
        }]
    },

]).then((answers) => {
    console.log(chalk.cyan.bold("Confira os dados informados: "))
    console.log(chalk.green(answers.nome));
    console.log(chalk.green(answers.sobrenome));
    console.log(chalk.green(answers.email));
    console.log(chalk.green(answers.senioridade));
})
.catch((error) => {
    if(error.isTryError){
        console.log(chalk.red.bold('Houve um erro ao acessar o  console!')) 
    }else{
        console.log(chalk.red.bold('Não foi possível validar os dados informados!'))
    }
})