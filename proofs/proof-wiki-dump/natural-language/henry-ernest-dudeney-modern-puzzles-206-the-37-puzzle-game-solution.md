# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/206_-_The_37_Puzzle_Game/Solution



Modern Puzzles by Henry Ernest Dudeney: $206$
The $37$ Puzzle Game
Here is a beautiful new puzzle game, absurdly simple to play but quite fascinating.
To most people it will seem to be practically a game of chance -- equal for both players --
but there are pretty subtleties in it, and I will show how to win with certainty.
Place the five dominoes $1$, $2$, $3$, $4$, $5$, on the table.
There are two players, who play alternately.
The first player places a coin on any domino, say the $5$, which scores $5$;
then the second player removes the coin to another domino, say to the $3$,
and adds that domino, scoring $8$;
then the first player removes the coin again, say to the $1$, scoring $9$; and so on.
The player who scores $37$, or forces his opponent to score more than $37$, wins.
Remember, the coin must be removed to a different domino at each play.


Solution
Player $A$ can always win.


Proof
The first player leads with $4$.
The winning scores which must be secured during play are $4$, $11$, $17$, $24$, $30$, $37$.
Let us refer to these as the milestones.
It is noted that there are gaps of $7$, $6$, $7$, $6$ and $7$ between them.
Once player $A$ secures one of these numbers, it is not possible for player $B$ to prevent player $A$ to reach the next one or the one after that.

Suppose player $A$ is on milestone $P$ such that there are $6$ points to the next milestone $Q$.
Let $A$ be placed on point $n$.
Let $B$ then move to point $m$ such that $m \ne 3$.
Then $A$ moves to $6 - m$ and so achieves the next milestone.
Now if $B$ did move to the $3$, $A$ cannot move to the $3$, but instead moves to the $5$.
There are then $5$ points to the next milestone, but as $A$ is already on the $5$, $B$ cannot move to the $5$.
So if $B$ plays $n$, $A$ then playes $5 - n$ which cannot equal $n$.
Thus $A$ reaches the milestone $13$ points after $P$.

Suppose player $B$ is on milestone $P$ such that there are $7$ points to the next milestone $Q$.
Let $A$ play any $n$ such that $n > 1$.
Then $B$ plays $7 - n$ and has then achieved $Q$.
So, instead, let $A$ play $1$.
Then there are $6$ points to $Q$.
$B$ plays $3$, which is bound to be empty because $A$ just played $1$.
But $A$ now cannot play $3$.
If he plays $n$ less than $3$, $B$ plays $3 - n$ and achieves milestone $Q$.
So, let $A$ play $4$ or $5$, to take him $1$ point beyond $Q$.
If $Q - 37$, he has just lost the game.
Otherwise there are $5$ or $4$ points to the next milestone, neither of which point $A$ is actually on.
So $A$ achieves the next milestone after $Q$ after all -- or has won the game.

Dudeney describes the above by providing sample games.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $206$. -- The $37$ Puzzle Game
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $475$. The $37$ Puzzle Game




