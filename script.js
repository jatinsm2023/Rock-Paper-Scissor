let win_time = JSON.parse(localStorage.getItem('win_time')) || {
    Wins: 0,
    losses: 0,
    Tie: 0
  };

  updateScore();

  /*
  if (!win_time) {
    win_time = {
      Wins: 0,
      losses: 0,
      Tie: 0
    };
  }
*/
  function pick_computer_move() 
  {
    let a = Math.random();
    let computer_move = '';
    console.log(a);
    if (a >= 0 && a < 1 / 3) computer_move = 'Rock';
    else if (a >= 1 / 3 && a < 2 / 3) computer_move = 'Paper';
    else if (a >= 2 / 3 && a < 1) computer_move = 'Scissor';

    return computer_move;
  }

  function playGame(move) 
  {

    let result = '';
    let computer_move = pick_computer_move();
    if (move === 'Rock') 
    {
      if (computer_move === 'Rock') 
      {
        result = 'Tie.';
        win_time.Tie++;
      }

      else if (computer_move === 'Paper') 
      {
        result = 'You losses.';
        win_time.losses++;
      }

      else if (computer_move === 'Scissor') 
      {
        result = 'You Win.';
        win_time.Wins++;
      }
    }
    else if (move === 'Paper') 
    {
      if (computer_move === 'Rock') 
      {
        result = 'You Win.';
        win_time.Wins++;

      }

      else if (computer_move === 'Paper') 
      {
        result = 'Tie.';
        win_time.Tie++;

      }

      else if (computer_move === 'Scissor') 
      {
        result = 'You losses.';
        win_time.losses++;
      }
    }
    else if (move === 'Scissor') 
    {
      if (computer_move === 'Rock') 
      {
        result = 'You losses.';
        win_time.losses++;

      }

      else if (computer_move === 'Paper') 
      {
        result = 'You Win.';
        win_time.Wins++;

      }

      else if (computer_move === 'Scissor') 
      {
        result = 'Tie.';
        win_time.Tie++;
      }
      
    }

    localStorage.setItem('win_time', JSON.stringify(win_time));

    updateScore();
    document.querySelector('.js-result')
      .innerHTML = `${result}`;

    document.querySelector('.js-move')
      .innerHTML = `You choose <span style="color:red;">${move}</span>. Computer choose <span style="color:red;">${computer_move}</span>.`;

    
  }
  function updateScore() 
  {
    document.querySelector('.js-win_time')
      .innerHTML = `Wins: ${win_time.Wins}, losses: ${win_time.losses}, Ties: ${win_time.Tie}`;
  }