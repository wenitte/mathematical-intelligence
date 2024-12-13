# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Modern_Puzzles/95_-_Squares_and_Cubes/Solution



Modern Puzzles by Henry Ernest Dudeney: $95$
Squares and Cubes
Can you find two whole numbers, such that the difference of their squares is a cube and the difference of their cubes is a square?
What is the answer in the smallest possible numbers?


Solution
We have:












\(\, \ds 10^2 - 6^2 = \, \)

\(\ds 100 - 36\)

\(=\)







\(\ds 64\)

\(\ds = 4^3\)
















\(\, \ds 10^3 - 6^3 = \, \)

\(\ds 1000 - 216\)

\(=\)







\(\ds 784\)

\(\ds = 28^2\)









Proof
We show this solution is minimal by showing that the larger number is at least $10$.
We look at the first equation:

$x^2 - y^2 = a^3 = \paren {x - y} \paren {x + y}$
Since $y^2 > 0$ and $5^3 > 10^2$, we only consider $a = 1, 2, 3, 4$.

$1$ cannot be the difference of two squares.
Since $2^3 = 1 \times 8 = 2 \times 4$, we check:

$\tuple {x, y} = \tuple {3, 1}$
as the other pair are not integers.
This gives:

$3^3 - 1^3 = 26$
which is not a square.

Since $3^3 = 1 \times 27 = 3 \times 9$, we check:

$\tuple {x, y} = \tuple {6, 3}$
as the other pair has $x > 10$.
This gives:

$6^3 - 3^3 = 189$
which is not a square.

Since $4^3 = 1 \times 64 = 2 \times 32 = 4 \times 16 = 8 \times 8$, we check:

$\tuple {x, y} = \tuple {10, 6}$
as the other pairs either has $x > 10$ or $y = 0$.
This gives:

$10^3 - 6^3 = 784 = 28^2$
which is our smallest solution.
$\blacksquare$


Sources
1926: Henry Ernest Dudeney: Modern Puzzles ... (previous) ... (next): Solutions: $95$. -- Squares and Cubes
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $177$. Squares and Cubes




