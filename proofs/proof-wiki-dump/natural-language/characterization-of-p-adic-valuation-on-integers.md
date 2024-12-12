# 

Source: https://proofwiki.org/wiki/Characterization_of_P-adic_Valuation_on_Integers

Theorem
Let $p \in \N$ be a prime number.
Let $\nu_p^\Z: \Z \to \N \cup \set {+\infty}$ be the $p$-adic valuation on $\Z$.
Let $n \in \Z_{\ne 0}$.

Then $\map {\nu_p^\Z} n$ is the unique $r \in \N$ such that:

$\exists k \in \Z: n = p^r k : p \nmid k$


Proof
Uniqueness of $r$
Let $r, r'$ be such that:

$\exists k \in \Z: n = p^r k : p \nmid k$
and:

$\exists k' \in \Z: n = p^{r'} k' : p \nmid k'$
Without loss of generality, suppose $r \ge r'$.
By subtracting the above equations:

$0 = p^r k - p^{r'} k' = p^{r'} \paren {p^{r - r'} k - k'} = 0$
Therefore:

$p ^{r - r'} k = k'$
Thus because $p \nmid k'$:

$r - r' = 0$
$\Box$

Let $n \in \Z_{\ne 0}$.
In the following, we shall find a $k\in\Z$ such that:

$n = p^{\map {\nu_p^\Z} n} k$
$p \nmid k$
By definition of $p$-adic valuation:

$\map {\nu_p^\Z} n = \sup S$
where

$S := \set {v \in \N: p^v \divides n}$
$S$ is a non-empty finite set, since:

$0 \in S \subseteq \closedint 0 {\floor {\log _p n} }$
Hence, the supremum of $S$ is adopted, that is:

$\map {\nu_p^\Z} n \in S$
$\forall v > \map {\nu_p^\Z} n : v \notin S$
In particular:

$p^{\map {\nu_p^\Z} n} \divides n$
$p^{\map {\nu_p^\Z} n + 1} \nmid n$
Therefore, let:

$k := \dfrac n {p^{\map {\nu_p^\Z} n} }$
so that:

$n = p^{\map {\nu_p^\Z} n} k$
Finally, $p \nmid k$, as $p^{\map {\nu_p^\Z} n + 1} \nmid n$.
$\blacksquare$





