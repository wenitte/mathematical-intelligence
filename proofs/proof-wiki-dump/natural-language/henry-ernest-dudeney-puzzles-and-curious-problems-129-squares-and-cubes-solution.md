# 

Source: https://proofwiki.org/wiki/Henry_Ernest_Dudeney/Puzzles_and_Curious_Problems/129_-_Squares_and_Cubes/Solution



Puzzles and Curious Problems by Henry Ernest Dudeney: $129$
Squares and Cubes
Find two different numbers such that the sum of their squares shall equal a cube, and the sum of their cubes equals a square.


Solution
We have:

$625^2 + 1250^2 = 125^3$
while:

$625^3 + 1250^3 = 46 \, 875^2$


Proof
We wish to find integral solutions to:




\(\text {(1)}: \quad\)









\(\ds x^2 + y^2\)

\(=\)







\(\ds z^3\)










\(\text {(2)}: \quad\)









\(\ds x^3 + y^3\)

\(=\)







\(\ds w^2\)









Dudeney states that if one number is $625 m^6$ and the other number double the first, you can get any number of solutions of a particular series.
The answer given is for $m = 1$.
He probably exploited the fact that $1 + 2^3 = 3^2$.
Therefore for any $k$:

$k^3 + \paren {2 k}^3 = 9 k^3$
$9 k^3$ would be a square if $k$ is itself a square.
So we write $k = n^2$:

$\paren {n^2}^3 + \paren {2 n^2}^3 = \paren {3 n^3}^2$
and we see that $(2)$ is satisfied with $x = n^2, y = 2 n^2, w = 3 n^3$.

Substituting this to $(1)$, we have:

$\paren {n^2}^2 + \paren {2 n^2}^2 = 5 n^4 = z^3$
Since $5 n^4$ is a cube, $n$ must be divisible by $5$.
By writing $n = 5 a$, we still require $5^5 a^4$ to be a cube.
Hence $a$ must again be divisible by $5$.
By writing $a = 5 b$, we only require $5^9 b^4$ to be a cube.
Thus $b$ must itself be a cube.
Finally we write $b = m^3$.

$k = n^2 = 25 a^2 = 625 b^2 = 625 m^6$
and we see that:

$\paren {625 m^6}^2 + \paren {1250 m^6}^2 = 5^9 m^{12} = \paren {125 m^4}^3$
which is a cube, so $(1)$ is also satisfied.

Substituting $x = 625 m^6, y = 1250 m^6$ back to $(2)$, we have:

$\paren {625 m^6}^3 + \paren {1250 m^6}^3 = 2 \, 197 \, 265 \, 625 m^{18} = \paren {46 \, 875 m^9}^2$
and thus we have obtained a general solution.
$\blacksquare$


Sources
1932: Henry Ernest Dudeney: Puzzles and Curious Problems ... (previous) ... (next): Solutions: $129$. -- Squares and Cubes
1968: Henry Ernest Dudeney: 536 Puzzles & Curious Problems ... (previous) ... (next): Answers: $202$. Squares and Cubes




