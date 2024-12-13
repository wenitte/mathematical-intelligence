# 

Source: https://proofwiki.org/wiki/Only_Number_which_is_Sum_of_3_Factors_is_6/Corollary

Corollary to Only Number which is Sum of 3 Factors is 6
$1$ can be expressed uniquely as the sum of $3$ distinct unit fractions:

$1 = \dfrac 1 2 + \dfrac 1 3 + \dfrac 1 6$


Proof
Suppose we have $1 = \dfrac 1 a + \dfrac 1 b + \dfrac 1 c$, where $a, b, c$ are distinct positive integers in ascending order.
Multiplying both sides by $m = \lcm \set {a, b, c}$:

$m = \dfrac m a + \dfrac m b + \dfrac m c$
Each fraction on the right is a factor of $m$.

Moreover, they must be comprime:
Suppose not. Then:

$\exists d > 1: d \divides \dfrac m a, \dfrac m b, \dfrac m c$
Then:

$\dfrac {m / d} a, \dfrac {m / d} b, \dfrac {m / d} c \in \Z$
Which shows that $\dfrac m d$ is a common multiple of $a, b, c$ less than $m$, a contradiction.

From Only Number which is Sum of 3 Factors is 6 we have:

$\dfrac m a = 3, \dfrac m b = 2, \dfrac m c = 1$
Their sum is:

$m = 3 + 2 + 1 = 6$
Thus:

$m = 3 a = 2 b = c = 6$
with the unique solution:

$\tuple {a, b, c} = {2, 3, 6}$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $6$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $6$




