# 

Source: https://proofwiki.org/wiki/Product_of_Roots_of_Polynomial

Theorem
Let $P$ be the polynomial equation:

$a_n z^n + a_{n - 1} z^{n - 1} + \cdots + a_1 z + a_0 = 0$
such that $a_n \ne 0$.
The product of the roots of $P$ is $\dfrac {\paren {-1}^n a_0} {a_n}$.


Proof
Let the roots of $P$ be $z_1, z_2, \ldots, z_n$.
Then $P$ can be written in factored form as:

$\ds a_n \prod_{k \mathop = 1}^n \paren {z - z_k} = a_0 \paren {z - z_1} \paren {z - z_2} \dotsm \paren {z - z_n}$
Multiplying this out, $P$ can be expressed as:

$a_n \paren {z^n - \paren {z_1 + z_2 + \dotsb + z_n} z^{n - 1} + \dotsb + \paren {-1}^n z_1 z_2 \dotsm z_n} = 0$
where the coefficients of $z^{n - 2}, z^{n - 3}, \ldots$ are more complicated and irrelevant.
Equating powers of $z$, it follows that:

$a_n \paren {-1}^n z_1 z_2 \dotsm z_n = a_0$
from which:

$z_1 z_2 \dotsm z_n = \dfrac {\paren {-1}^n a_0} {a_n}$
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Solved Problems: Polynomial Equations: $35$




