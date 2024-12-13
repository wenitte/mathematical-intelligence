# 

Source: https://proofwiki.org/wiki/P-adic_Norm_not_Complete_on_Rational_Numbers/Proof_2/Lemma_5

Theorem
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rationals $\Q$ for some prime $p$.
Let $k$ be any positive integer.
Let $\map f X \in \Z \sqbrk X$ be the polynomial:

$X^k - a$
for some $a \in \Z$.
Let $\sequence {x_n}$ be an integer sequence such that:

$\forall n: \map f {x_n} \equiv 0 \pmod {p^n}$

Then:

$\ds \lim_{n \mathop \to \infty} {x_n}^k = a$ in $\struct {\Q, \norm {\,\cdot\,}_p}$


Proof
By assumption:

$\forall n \in \N: p^n \divides \paren { {x_n}^k - a}$
By the definition of the $p$-adic norm:

$\forall n \in \N: \norm { {x_n}^k - a}_p \le \dfrac 1 {p^n}$
By Sequence of Powers of Number less than One:

$\ds \lim_{n \mathop \to \infty} \dfrac 1 {p^n} = 0$
By Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} \norm { {x_n}^k - a}_p = 0$
By the definition of convergence in $\struct {\Q, \norm {\,\cdot\,}_p}$:

$\ds \lim_{n \mathop \to \infty} {x_n}^k = a$
$\blacksquare$





