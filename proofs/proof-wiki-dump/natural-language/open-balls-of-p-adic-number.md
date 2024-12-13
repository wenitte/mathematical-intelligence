# 

Source: https://proofwiki.org/wiki/Open_Balls_of_P-adic_Number

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\Z_p$ be the $p$-adic integers.
Let $a \in \Q_p$.
For all $\epsilon \in \R_{>0}$, let $\map {B_\epsilon} a$ denote the open ball of $a$ of radius $\epsilon$. 

Then:

$\forall n \in Z : \map {B_{p^{-n} } } a = a + p^{n + 1} \Z_p$


Proof
Let $n \in \Z$.
From Open Ball in P-adic Numbers is Closed Ball:

$\map {B_{p^{-n} } } a = \map {B^{\,-}_{p^{-\paren {n + 1} } } } a$
From Closed Balls of P-adic Number:

$\map { B^{\,-}_{p^{-\paren {n + 1} } } } a = a + p^{n + 1} \Z_p$
The result follows.
$\blacksquare$


Also see
Closed Balls of P-adic Number
Local Basis of P-adic Number




