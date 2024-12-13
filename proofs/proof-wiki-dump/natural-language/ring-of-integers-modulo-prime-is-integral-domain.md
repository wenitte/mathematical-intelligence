# 

Source: https://proofwiki.org/wiki/Ring_of_Integers_Modulo_Prime_is_Integral_Domain



Corollary to Ring of Integers Modulo Prime is Field
Let $m \in \Z: m \ge 2$.
Let $\struct {\Z_m, +, \times}$‎ be the ring of integers modulo $m$.

Then:

$m$ is prime
if and only if:

$\struct {\Z_m, +, \times}$ is an integral domain.


Proof 1
We have that a Field is Integral Domain.
We also have that a Finite Integral Domain is Galois Field.
The result follows from Ring of Integers Modulo Prime is Field.
$\blacksquare$


Proof 2
From Ring of Integers Modulo m is Ring, $\struct {\Z_m, +, \times}$‎ is a ring.
It remains to be shown that $\struct {\Z_m, +, \times}$‎ has no proper zero divisors if and only if $m$ is prime.


$m$ Composite
Let $m$ be composite.
Then:

$m = m_1 m_2$
where $0 < m_1 < m, 0 < m_2 < m$.
Then:

$\eqclass {m_1} m \eqclass {m_2} m = \eqclass 0 m$
and so both $\eqclass {m_1} m$ and $\eqclass {m_2} m$ are proper zero divisors.
Hence if $m$ is not prime then $\struct {\Z_m, +, \times}$‎ is not an integral domain by definition.
$\Box$


$m$ Prime
Let $m$ be prime.
Let $\eqclass a m \eqclass b m = \eqclass 0 m$.
Then by Modulo Multiplication is Well-Defined:

$\eqclass {a b} m = \eqclass 0 m$
Thus either

$m \divides a$ or $m \divides b$
where $\divides$ denotes the divisibility relation.
If $m \divides a$ then $\eqclass a m = 0$.
If $m \divides b$ then $\eqclass b m = 0$.
Thus neither $a$ nor $b$ is a proper zero divisor.
Hence there are no proper zero divisors of $\struct {\Z_m, +, \times}$.
Hence, by definition, $\struct {\Z_m, +, \times}$‎ is an integral domain
$\blacksquare$





