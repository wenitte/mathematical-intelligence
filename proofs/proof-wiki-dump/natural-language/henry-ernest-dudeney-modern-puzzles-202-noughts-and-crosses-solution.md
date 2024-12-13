# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/202_-_Noughts_and_Crosses/Solution



Modern Puzzles by Henry Ernest Dudeney: $202$
Noughts and Crosses
Every child knows how to play this ancient game.
You make a square of nine cells, and each of the two players, playing alternately, puts his mark
(a nought or a cross, as the case may be) in a cell with the object of getting three in a line.
Whichever player gets three in a line wins.
In this game, cross has won:
$\qquad \begin {array} {|c|c|c|}
\hline \text X & \text O & \text O \\
\hline \text X & \text X & \text O \\
\hline \text O &         & \text X \\ 
\hline \end{array}$

I have said in my book, The Canterbury Puzzles,
that between two players who thoroughly understand the play every game should be drawn,
for neither party could ever win except through the blundering of his opponent.
Can you prove this?
Can you be sure of not losing a game against an expert opponent?


Solution
Against an expert player, the best that can be accomplished is a draw, whether playing first or second.

If playing first, you can play any square on the board.
If playing second, play a corner if the first player opens with the center, and the center if anything else is played.

In the words of Dudeney himself:

The fact remains that it is a capital little game for children, and even for adults who have never analysed it,
but two experts would merely be wasting their time in playing it.
To them it is not a game, but a mere puzzle that they have completely solved.


Proof
Let the squares of the board be numbered:
$\qquad \begin {array} {|c|c|c|}
\hline 1 & 2 & 3 \\
\hline 4 & 5 & 6 \\
\hline 7 & 8 & 9 \\
\hline \end {array}$

In the following, it is assumed that each player is sufficiently rational as to always block a row of $2$ and hence prevent an immediate win for the other player.
Hence a win cannot be prevented if and only if a play leaves more than one row of $2$, which means at least one row of $2$ cannot be blocked.

Without loss of generality, let $\text O$ play first.


Center Opening
The following opening is a win for $\text O$:
$\qquad \begin {array} {|c|c|c|}
\hline \ \ & \text X & \ \ \\
\hline  & \text O & \\
\hline  &  &  \\
\hline \end {array}$
as $\text O$ then plays $1$ then $4$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O & \text X & \\
\hline \text O & \text O & \\
\hline  &  & \text X \\
\hline \end {array}$
and there is nothing $\text X$ can do to stop $\text O$ winning.

The following opening is a draw:
$\qquad \begin {array} {|c|c|c|}
\hline \text X & & \ \ \\
\hline  & \text O & \\
\hline  &  &  \\
\hline \end {array}$
Whatever $\text O$ then does, $\text X$ can block.
This leaves a line of two $\text X$'s which $\text O$ then blocks.
This leaves a line of two $\text O$'s which $\text X$ then blocks.
And so on, till the end of the game.


Corner Opening
If $\text O$ starts with a corner, the following sequences are possible:

$\qquad \begin {array} {|c|c|c|}
\hline \text O & \text X & \ \ \\
\hline  &  & \\
\hline  &  &  \\
\hline \end {array}$
$\text O$ then plays $5$ then $4$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O & \text X & \\
\hline \text O & \text O & \\
\hline  &  & \text X \\
\hline \end {array}$
and there is nothing $\text X$ can do to stop $\text O$ winning.

$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \\
\hline  &  \ \ & \\
\hline  &  & \text X \\
\hline \end {array}$
$\text O$ then plays $7$ then $3$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \text O\\
\hline \text X & \ \ & \\
\hline \text O &  & \text X \\
\hline \end {array}$
and $\text O$ wins.

$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \text X \\
\hline  &  \ \ &  \\
\hline  &  &  \\
\hline \end {array}$
$\text O$ then plays $9$ then $7$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \text X\\
\hline  & \text X  &  \\
\hline \text O &  & \text O \\
\hline \end {array}$
and $\text O$ wins.

$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \\
\hline  &  \ \ & \text X \\
\hline  &  &  \\
\hline \end {array}$
$\text O$ then plays $5$ then $3$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \text O\\
\hline  & \text O & \text X \\
\hline  &  & \text X \\
\hline \end {array}$
and $\text O$ wins.

Hence on a corner opening, $\text X$ needs to play center:
$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \\
\hline  & \text X & \ \ \\
\hline  &  &  \\
\hline \end {array}$
If $\text O$ plays $2$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O & \text O & \\
\hline  & \text X & \ \ \\
\hline  &  &  \\
\hline \end {array}$
then all subsequent moves are forced, leading to a draw.

If $\text O$ plays $3$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O &  & \text O \\
\hline  & \text X & \ \ \\
\hline  &  &  \\
\hline \end {array}$
then again all subsequent moves are forced, leading to a draw.


Side Opening
If $\text O$ starts with a side, the following sequences are possible:

$\qquad \begin {array} {|c|c|c|}
\hline & \text O & \ \ \\
\hline \text X &  & \\
\hline  &  &  \\
\hline \end {array}$
$\text O$ then plays $5$ then $1$, leaving:
$\qquad \begin {array} {|c|c|c|}
\hline \text O & \text O & \ \ \\
\hline \text X & \text O & \\
\hline  & \text X &  \\
\hline \end {array}$
and $\text O$ wins.

$\qquad \begin {array} {|c|c|c|}
\hline & \text O & \ \ \\
\hline  &  & \\
\hline \text X &  &  \\
\hline \end {array}$
$\text O$ then plays $5$ then $9$ (forced), leaving:
$\qquad \begin {array} {|c|c|c|}
\hline  & \text O & \ \ \\
\hline  & \text O & \\
\hline \text X & \text X & \text O \\
\hline \end {array}$
The subsequent moves are forced, leading to a draw.

The other three cases:
$\qquad \begin {array} {|c|c|c|}
\hline \text X & \text O & \ \ \\
\hline  &  & \\
\hline  &  &  \\
\hline \end {array} \qquad 
\begin {array} {|c|c|c|}
\hline  & \text O & \ \ \\
\hline \ \ & \text X & \\
\hline  &  &  \\
\hline \end {array} \qquad 
\begin {array} {|c|c|c|}
\hline  & \text O & \ \ \\
\hline \ \ &  & \\
\hline  & \text X &  \\
\hline \end {array}$
end as a draw with best play.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $202$. -- Noughts and Crosses
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $471$. Tic Tac Toe




