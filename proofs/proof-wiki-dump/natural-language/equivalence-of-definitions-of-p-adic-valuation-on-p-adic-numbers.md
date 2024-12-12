# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_P-adic_Valuation_on_P-adic_Numbers



Theorem
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers for some prime $p$.

The following definitions of the concept of P-adic Valuation on P-adic Numbers are equivalent:


Definition 1
The $p$-adic valuation on $p$-adic numbers is the function $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ defined by:

$\forall x \in \Q_p : \map {\nu_p} x = \begin {cases}
-\log_p \norm x_p : x \ne 0 \\
+\infty : x = 0
\end {cases}$

Definition 2
The $p$-adic valuation on $p$-adic numbers is the mapping $\nu_p: \Q_p \to \Z \cup \set {+\infty}$ defined by:

$(1): \quad \map {\nu_p} 0 = +\infty$
$(2): \quad $for all $x \in \Q_p \setminus \set 0$:
$\map {\nu_p} x$ is the index of the first non-zero coefficient in the canonical $p$-adic expansion of $x$


Proof
Let $x \in \Q_p \setminus \set 0$.
Let $l$ be the index of the first non-zero coefficient in the $p$-adic expansion:

$l = \min \set {i: i \ge m \land d_i \ne 0}$
From P-adic Norm of P-adic Expansion is determined by First Nonzero Coefficient:

$\norm x_p = p^{-l}$
By definition of real general logarithm:

$-\log_p \norm x_p = l$
The result follows.
$\blacksquare$





