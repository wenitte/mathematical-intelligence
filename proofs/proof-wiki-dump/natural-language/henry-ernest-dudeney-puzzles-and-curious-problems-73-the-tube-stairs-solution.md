# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/73_-_The_Tube_Stairs/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $73$
The Tube Stairs
We ran up against Percy Longman, a young athlete, the other day when leaving Curley Street tube station.
He stopped at the lift, saying, "I always go up by the stairs.
A bit of exercise, you know.
But this is the longest stairway on the line -- nearly $1000$ steps.
I will tell you a queer thing about it that only applies to one other smaller stairway on the line.
If I go up two steps at a time, there is one step left for the last bound;
if I go up three at a time, there are two steps left;
if I go up four at a time, there are three steps left;
five at a time, four are left;
six at a time, five are left;
and if I went up seven at a time there would be six risers left over for the last bound.
Now, why is that?"
As he went flying up the stairs, three steps at a time, we laughed and said,
He little suspects that if he went up twenty steps at a time there would be nineteen risers for his last bound!"
How many risers are there in the Curley Street tube stairway?
The platform does not count as a riser, and the top landing does.


Solution
$839$ steps.


Proof
Let $n$ be the number of steps in the tube station.
Let $1$ be added to $n$ to make $m$.
We have that:

$m$ is divisible by $2$
$m$ is divisible by $3$
and so on, until:

$m$ is divisible by $7$
Thus $m$ is divisible by the lowest common multiple of $\set {2, 3, 4, 5, 6, 7}$.
Hence we calculate:














\(\ds \lcm \set  {2, 3, 4, 5, 6, 7}\)

\(=\)







\(\ds \lcm \set  {2, 3, 2^2, 5, 2 \times 3, 7}\)




















\(\ds \)

\(=\)







\(\ds \lcm \set  {2^2, 3, 5, 7}\)




















\(\ds \)

\(=\)







\(\ds 4 \times 3 \times 5 \times 7\)




















\(\ds \)

\(=\)







\(\ds 420\)









and we note in passing that $420 = 21 \times 20$ and so is also divisible by $20$
As we are told there are nearly $1000$ steps, it is clear that $420$ is too small for $m$, so we multiply it by $2$ to get $840$.
We then note that $3 \times 420$ is way over $1000$ so cannot be the value for $m$.
So the only possible value for $m$ is indeed $840$.
Hence:

$n = 840 - 1 = 839$
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $73$. -- The Tube Stairs
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $87$. The Subway Stairs




