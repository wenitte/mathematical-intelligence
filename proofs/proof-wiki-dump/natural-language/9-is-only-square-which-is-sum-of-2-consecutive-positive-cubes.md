# 

Source: https://proofwiki.org/wiki/9_is_Only_Square_which_is_Sum_of_2_Consecutive_Positive_Cubes

Theorem
Discounting the trivial solution:

$1^2 = 1 = 0^3 + 1^3$
$9$ is the only square number which is the sum of $2$ consecutive positive cube numbers:

$3^2 = 9 = 1^3 + 2^3$


Proof
The expression for the $n$th square number is:

$n^2$
for $n \in \Z$.
The expression for the $n$th cube number is:

$n^3$
again, for $n \in \Z$.
Therefore the closed-form expression for the $n$th sum of two consecutive cubes is:

$n^3 + \paren {n + 1}^3$
This simplifies to:

$2 n^3 + 3 n^2 + 3 n + 1$
Equate the two expressions with a variable replacing $n$:














\(\ds y^2\)

\(=\)







\(\ds 2 x^3 + 3 x^2 + 3 x + 1\)














\(\ds \leadsto \ \ \)





\(\ds 4 y^2\)

\(=\)







\(\ds 8 x^3 + 12 x^2 + 12 x + 4\)














\(\ds \leadsto \ \ \)





\(\ds \paren {2 y}^2\)

\(=\)







\(\ds \paren {2 x}^3 + 3 \paren {4 x^2 + 4 x + 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x}^3 + 1^3 + 3 \paren {2 x + 1}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x + 1} \paren { \paren {2 x}^2 -2 x + 1} + 3 \paren {2 x + 1}^2\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x + 1} \paren { \paren {2 x}^2 -2 x + 1 + 3 \paren {2 x + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x + 1} \paren {4 x^2 + 4x + 1 + 3 }\)




















\(\ds \)

\(=\)







\(\ds \paren {2 x + 1} \paren {\paren {2x + 1}^2 + 3}\)









Substituting:

$u = 2 x + 1$
$v = 2 y$
the equation becomes:

$v^2 = u^3 + 3 u$
We then apply Integral Points of Elliptic Curve $y^2 = x^3 + 3 x$:
The elliptic curve:

$y^2 = x^3 + 3 x$
has exactly $7$ lattice points:

$\tuple {0, 0}, \tuple {1, \pm 2}, \tuple {3, \pm 6}, \tuple {12, \pm 42}$

We then write them in terms of $x$ and $y$:

$\tuple {-\frac 1 2, 0}, \tuple {0, \pm 1}, \tuple {1, \pm 3}, \tuple {\frac {11} 2, \pm 21}$
Due to the restrictions on the variables, solutions with non-integer inputs are invalid.
This leaves $4$ solutions:

$\tuple {0, \pm 1}, \tuple {1, \pm 3}$
as follows:

$\paren {\pm1}^2 = 1 = 0^3 + 1^3$
$\paren {\pm3}^2 = 9  = 1^3 + 2^3$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9$




