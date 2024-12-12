# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_P-adic_Norms/Lemma_1

Theorem
Let $p \in \N$ be a prime number.
Let $\nu_p: \Z \to \N \cup \set {+\infty}$ be the $p$-adic valuation on the integers.

Then:

$\forall x \in Z_{\ne 0}: \map {\nu_p} x = k : x = p^k y  : p \nmid y$


Proof
Let $x \in \Z_{\ne 0}$.
By definition of the $p$-adic valuation:

$\map {\nu_p} x = \sup \set {v \in \N: p^v \divides x}$
Let $\map {\nu_p} x = k$.
Then:

$p^k \nmid x$
By definition of a divisor:

$\exists y \in Z : x = p^k y$

Aiming for a contradiction, suppose:

$p \divides y$
By definition of a divisor:

$\exists y' \in Z : y = p y'$
Hence:














\(\ds x\)

\(=\)







\(\ds p^k \paren{p y'}\)




















\(\ds \)

\(=\)







\(\ds p^{k + 1} y'\)









This contradicts:

$k = \sup \set {v \in \N: p^v \divides x}$
Hence:

$p \nmid y$

Since the choice of $x \in \Z_{\ne 0}$ was arbitrary:

$\forall x \in Z_{\ne 0}: \map {\nu_p} x = k : x = p^k y : p \nmid y$
$\blacksquare$





