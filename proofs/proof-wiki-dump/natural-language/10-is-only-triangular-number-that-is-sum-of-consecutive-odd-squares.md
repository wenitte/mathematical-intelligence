# 

Source: https://proofwiki.org/wiki/10_is_Only_Triangular_Number_that_is_Sum_of_Consecutive_Odd_Squares

Theorem
$10$ is the only triangular number which is the sum of two consecutive odd squares:

$10 = 1^2 + 3^2$


Proof
The closed-form expression for the $n$th triangular number is:

$\ds T_n = \sum_{i \mathop = 1}^n i = \frac {n \paren {n + 1} } 2$

for $n \in \Z_{\ge 0}$.
The expression for the $n$th odd square number is:

$4 n^2 + 4 n + 1$
again, for $n \in \Z_{\ge 0}$.
Therefore the closed-form expression for the $n$th sum of two consecutive odd squares is:

$4 n^2 + 4 n + 1 + 4 \paren {n + 1}^2 + 4 \paren {n + 1} + 1$
This simplifies to:

$8 n^2 + 16 n + 10$
Equate the two with a variable replacing $n$:

$8 x^2 + 16 x + 10 = \dfrac {y \paren {y + 1} } 2$

This simplifies to:

$16 x^2 + 32 x + 20 = y^2 + y$
We then apply Solutions to Diophantine Equation $16 x^2 + 32 x + 20 = y^2 + y$:

The indeterminate Diophantine equation:

$16x^2 + 32x + 20 = y^2 + y$
has exactly $4$ solutions:

$\tuple {0, 4}, \tuple {-2, 4}, \tuple {0, -5}, \tuple {-2, -5}$

Due to the restrictions on the variables, solutions with negative inputs are invalid.
This leaves one solution:

$\tuple {0, 4}$
as follows:














\(\ds 8 \paren 0^2 + 16 \paren 0 + 10\)

\(=\)







\(\ds \frac {\paren 4 \paren {\paren 4 + 1} } 2\)














\(\ds \leadsto \ \ \)





\(\ds 1^2 + 3^2\)

\(=\)







\(\ds 10\)









$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $10$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $10$




