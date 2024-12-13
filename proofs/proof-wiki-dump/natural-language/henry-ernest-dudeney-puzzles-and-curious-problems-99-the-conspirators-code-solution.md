# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/99_-_The_Conspirators%27_Code/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $99$
The Conspirators' Code
Two conspirators had a secret code.
Their letters sometimes contained little arithmetical sums related to some quite plausible discussion,
and having an entirely innocent appearance.
But in their code each of the ten digits represented a different letter of the alphabet.
Thus, on one occasion, there was a little sum in simple addition which, when the letters were substituted for the figures, read as follows:
    F L Y
    F O R
+ Y O U R
-----------
  L I F E

It will be found an interesting puzzle to reconstruct the addition sum with the help of the clue that $I$ and $O$ stand for the figures $1$ and $0$ respectively.


Solution
    5 9 8
    5 0 7
+ 8 0 4 7
-----------
  9 1 5 2

Proof
For each place value, the carry can only be $0, 1$ or $2$.
Let the carries from the units, tens and hundreds be $c_1, c_2$ and $c_3$ respectively.
We are given that $O = 0$ and $I = 1$.
So from the hundreds column we have:

$F + F + 0 + c_2 \equiv 1 \pmod {10}$
Since the left hand side is an odd number:

$c_2 = 1$
and thus $2 F \equiv 0 \pmod {10}$.
Since $F \ne 0$, we must have $F = 5$.
This gives $c_3 = 1$, and thus $Y + 1 = L$.
From $c_2 = 1$ we also have, in the tens column:

$L + U + c_1 = 15$
so:

$L = 15 - U - c_1 \ge 15 - 9 - 2 = 4$

We test each possible value of $L$.
Suppose $L = 4$.
Then $Y = 3$, $U = 9$ and $c_1 = 2$.
From the units column:

$3 + R + R \ge 20$
$R \ge 8.5$
but since the value of $9$ is taken by $U$, this is impossible.
Thus $L > 4$.

Since the value of $5$ is taken by $F$:

$L \ne 5, 6$
Suppose $L = 7$.
Then $Y = 6$.
From the tens column:

$7 + U + c_1 = 15$
Since $c_1$ can take on $0, 1, 2$:

$U = 8, 7, 6$
but both $6$ and $7$ are taken.
Thus $U = 8$ and $c_1 = 0$.
From the units column:

$6 + R + R = E < 10$
This gives $R = 1$ but $1$ is also taken.
Thus we cannot have $L = 7$.

Suppose $L = 8$.
Then $Y = 7$.
From the tens column:

$8 + U + c_1 = 15$
Since $c_1$ can take on $0, 1, 2$:

$U = 7, 6, 5$
but both $5$ and $7$ are taken.
Thus $U = 6$ and $c_1 = 1$.
From the units column:

$7 + R + R = 10 + E$
The possible values of $R$ are $2, 3, 4, 9$.
But:

$7 + 2 + 2 = 11$
$7 + 3 + 3 = 13$
$7 + 4 + 4 = 15$
$7 + 9 + 9 = 25$
and all these possibities will use the same digit twice.
Thus $L \ne 8$.

Now we arrive at $L = 9$.
So we have $Y = 8$.
From the units column:

$10 c_1 + E = 8 + R + R > 8 + 1 + 1 = 10$
so $c_1 \ge 1$.
From the tens column:

$9 + U + c_1 = 15$
Since $c_1$ can take on $1$ and $2$:

$U = 5, 4$
but $5$ is taken by $F$, so $U = 4$ and $c_1 = 2$.
Since $0$ is taken by $O$:

$8 + R + R > 20$
This gives $R > 6$.
Since both $8$ and $9$ are taken, we must have $R = 7$ and thus $E = 2$.
Hence we arrive at the solution:

    5 9 8
    5 0 7
+ 8 0 4 7
-----------
  9 1 5 2

$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $99$. -- The Conspirators' Code
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $158$. The Conspirators' Code




