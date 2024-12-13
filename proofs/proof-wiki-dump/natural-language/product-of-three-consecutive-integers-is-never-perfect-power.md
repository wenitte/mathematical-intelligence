# 

Source: https://proofwiki.org/wiki/Product_of_Three_Consecutive_Integers_is_never_Perfect_Power

Theorem
Let $n \in \Z_{> 1}$ be a (strictly) positive integer.
Then:

$\paren {n - 1} n \paren {n + 1}$
cannot be expressed in the form $a^k$ for $a, k \in \Z$ where $k \ge 2$.

That is, the product of $3$ consecutive (strictly) positive integers can never be a perfect power.


Proof
Aiming for a contradiction, suppose $\paren {n - 1} n \paren {n + 1} = a^k$ for $a, k \in \Z$ where $k \ge 2$.
We have that:

$\gcd \set {n − 1, n} = 1 = \gcd \set {n, n + 1}$
Thus $n$ must itself be a perfect power of the form $z^k$ for some $z \in \Z$.
That means $\paren {n - 1} \paren {n + 1} = n^2 - 1$ must also be a perfect power of the same form.

Let:

$n = r^k$ and $n^2 − 1 = s^k$
for $r, s \in \Z$.
Then:

$\paren {r^2}^k = 1 + s^k$
But the only consecutive integers that are $k$th powers are (trivially) $0$ and $1$.
Hence by Proof by Contradiction there can be no such $n$.
$\blacksquare$


Sources
1982: Donald J. Newman: A Problem Seminar
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3$




