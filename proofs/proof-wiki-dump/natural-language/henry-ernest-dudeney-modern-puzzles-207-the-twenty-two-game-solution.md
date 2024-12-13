# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/207_-_The_Twenty-Two_Game/Solution



Modern Puzzles by Henry Ernest Dudeney: $207$
The Twenty-Two Game
Here is a variation of our little "Thirty-one Game" (The Canterbury Puzzles: No. $79$).
Lay out the $16$ cards as shown.
$\qquad \begin{matrix}
\boxed {A \heartsuit} & \boxed {A \spadesuit} & \boxed {A \diamondsuit} & \boxed {A \clubsuit} \\
\boxed {2 \heartsuit} & \boxed {2 \spadesuit} & \boxed {2 \diamondsuit} & \boxed {2 \clubsuit} \\
\boxed {3 \heartsuit} & \boxed {3 \spadesuit} & \boxed {3 \diamondsuit} & \boxed {3 \clubsuit} \\
\boxed {4 \heartsuit} & \boxed {4 \spadesuit} & \boxed {4 \diamondsuit} & \boxed {4 \clubsuit} \\
\end{matrix}$

Two players alternately turn down a card and add it to the common score,
and the player who makes the score of $22$, or forces his opponent to go beyond that number, wins.
For example, $A$ turns down a $4$, $B$ turns down $3$ (counting $7$), $A$ turns down a $4$ (counting $11$),
$B$ plays a $2$ (counting $13$), $A$ plays $1$ (counting $14$), $B$ plays $3$ ($17$), and whatever $A$ does, $B$ scores the winning $22$ next play.
Now, which player should always win, and how?


Solution
The first player can always win by playing $1$.


Proof
Apart from the cards running out, the winning series is:

$7, 12, 17, 22$
If you can score $17$ and leave at least one pair adding up to $5$ of both kinds: $1 - 4$ and $3 - 2$, you must win.
If you can score $12$ and leave at least two pairs adding up to $5$ of both kinds, you must win.
If you can score $7$ and leave at least $3$ pairs adding up to $5$ of both kinds, you must win.

Call the first player $A$ and the second player $B$.
So, if the $A$ plays $3$ or $4$, $B$ plays $4$ and $3$, gets $7$, and wins.
Nothing now stops $B$ scoring $12$, then $17$, then $22$.

If $A$ plays $2$, then $B$ replies with either $3$ or $2$.
So, for example: $2 - 3$, $2 - 3$, $2 - 3$, $2 - 3$ making $20$, and there is no $2$ left to make $22$.
$A$ must then play $1$ leaving another $1$ for $B$ to play and win.
Similarly: $2 - 3$, $1 - 3$, 3 - 2$, 3 - 2$ giving $19$ and again $B$ wins, as there is no $3$ left to make $22$.
And so on.

So, $A$ plays $1$.
Examples:

$1 - 1$, $4 - 1$, $4 - 1$, $4$ making $16$ and $A$ wins.
$1 - 3$, $1 - 2$, $4 - 1$, $4 - 1$, $4$ making $21$ and $A$ wins.
$1 - 4$, $2$ making $7$ and $A$ wins.
$1 - 2$, $4$ making $7$ and $A$ wins.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $207$. -- The Twenty-Two Game
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $476$. The $22$ Game




