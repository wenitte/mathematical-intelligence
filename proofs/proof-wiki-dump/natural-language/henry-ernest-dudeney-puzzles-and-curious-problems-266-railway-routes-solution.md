# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/266_-_Railway_Routes/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $266$
Railway Routes
The diagram below represents a simplified railway system,
and we want to know how many different ways there are of going from $A$ to $E$, if we never go twice along the same line in any journey.



Solution
There are $2501$ ways of going.


Proof
We need consider only the routes from $B$ to $D$.

$\begin{array} {rrrr}
\text{$1$-station journey} & \text {$1$ route} & \text {$2$ variations} & 2 \\
\text{$2$-station journey} & \text {$1$ route} & \text {$9$ variations} & 9 \\
\text{$3$-station journey} & \text {$2$ routes} & \text {$12$ variations} & 24 \\
\text{$4$-station journey} & \text {$5$ routes} & \text {$18$ variations} & 90 \\
\text{$5$-station journey} & \text {$4$ routes} & \text {$72$ variations} & 288 \\
\text{$6$-station journey} & \text {$14$ routes} & \text {$36$ variations} & 504 \\
\text{$8$-station journey} & \text {$22$ routes} & \text {$72$ variations} & 1584 \\
\end{array}$

The $1$-station route is direct to $D$.
The $2$-station route is $BCD$.
The $3$-station routes are $BCBD$ and $BDCD$.
The five $4$-station routes are $BDBCD$, $BDCBD$, $BCBCD$, $BCDCD$ and $BCDBD$.
Each is subject to a number of variations of the actual lines used.
For a journey of a given number of stations there is always the same number of variations, despite the route taken.
A $7$-station route is not possible.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solution: $266$. -- Railway Routes
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $424$. Railway Routes




