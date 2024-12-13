# 

Source: https://proofwiki.org/wiki/Lifting_The_Exponent_Lemma



Theorem
Let $x, y \in \Z$ be distinct integers.
Let $n \ge 1$ be a natural number.
Let $p$ be an odd prime.
Let:

$p \divides x - y$
and:

$p \nmid x y$
where $\divides$ and $\nmid$ denote divisibility and non-divisibility respectively.

Then

$\map {\nu_p} {x^n - y^n} = \map {\nu_p} {x - y} + \map {\nu_p} n$
where $\nu_p$ denotes $p$-adic valuation.


Proof
Lemma
Let $x, y \in \Z$ be distinct integers.
Let $p$ be an odd prime.
Let:

$p \divides x - y$
and:

$p \nmid x y$.

Then 

$\map {\nu_p} {x^p - y^p} = \map {\nu_p} {x - y} + 1$
$\Box$

Let $k = \map {\nu_p} n$.
Then $n = p^k m$ such that $p \nmid m$.
By P-adic Valuation of Difference of Powers with Coprime Exponent:

$\map {\nu_p} {x^n - y^n} = \map {\nu_p} {x^{p^k} - y^{p^k} }$
By repeatedly applying the lemma:

$\map {\nu_p} {x^{p^k} - y^{p^k} } = \map {\nu_p} {x - y} + k$
$\blacksquare$


Also see
Lifting The Exponent Lemma for Sums
Lifting The Exponent Lemma for p=2


Sources
7 April 2011: Amir Hossein Parvardi: Lifting The Exponent Lemma (LTE) ()




