# 

Source: https://proofwiki.org/wiki/Fermat_Quotient_of_2_wrt_p_is_Square_iff_p_is_3_or_7



Theorem
Let $p$ be a prime number.
The Fermat quotient of $2$ with respect to $p$:

$\map {q_p} 2 = \dfrac {2^{p - 1} - 1} p$
is a square if and only if $p = 3$ or $p = 7$.


Generalization
The Fermat quotient of $2$ with respect to $p$:

$\map {q_p} 2 = \dfrac {2^{p - 1} - 1} p$
is a perfect power if and only if $p = 3$ or $p = 7$.


Proof
When $p = 3$:

$\map {q_3} 2 = \dfrac {2^{3 - 1} - 1} 3 = 1$
which is square.
When $p = 7$:

$\map {q_7} 2 = \dfrac {2^{7 - 1} - 1} 7 = \dfrac {63} 7 = 9$
which is square.

To show that these are the only ones, we observe that since $p$ is an odd prime, write:

$p = 2 n + 1$ for $n \ge 1$.

Let $\map {q_p} 2$ be a square.
Then $2^{p - 1} - 1 = p x^2$ for some integer $x$.

Note that:

$2^{p - 1} - 1 = 2^{2 n} - 1 = \paren {2^n - 1} \paren {2^n + 1}$
and we have:

$\gcd \set {2^n - 1, 2^n + 1} = \gcd \set {2^n - 1, 2} = 1$
so $2^n - 1$ and $2^n + 1$ are coprime.

Hence there are $2$ cases:

Case $1$: $p \divides 2^n - 1$
By Divisor of One of Coprime Numbers is Coprime to Other:

$\gcd \set {\dfrac {2^n - 1} p, 2^n + 1} = 1$
Hence both the numbers are squares.

In particular we have:

$\exists k \in \Z: 2^n + 1 = k^2$
by 1 plus Power of 2 is not Perfect Power except 9, the only solution to the equation above is:

$n = k = 3$
This gives $p = 2 n + 1 = 7$.
$\Box$


Case $2$: $p \divides 2^n + 1$
By Divisor of One of Coprime Numbers is Coprime to Other:

$\gcd \set {\dfrac {2^n + 1} p, 2^n - 1} = 1$
Hence both the numbers are squares.

In particular we have:

$\exists k \in \Z: 2^n - 1 = k^2$
For $n > 1$:

$2^n - 1 \equiv 3 \pmod 4$
which by Square Modulo 4 is never a square.
Hence we must have $n = 1$.
This gives $p = 2 n + 1 = 3$.
$\Box$

We have already shown that $p = 3, 7$ gives square Fermat quotients.
Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $7$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $7$




