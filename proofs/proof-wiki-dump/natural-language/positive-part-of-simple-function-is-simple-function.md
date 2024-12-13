# 

Source: https://proofwiki.org/wiki/Positive_Part_of_Simple_Function_is_Simple_Function



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \R$ be a simple function.

Then $f^+: X \to \R$, the positive part of $f$, is also a simple function.


Proof
Let $f$ have the following standard representation:

$f = \ds \sum_{i \mathop = 0}^n a_i \chi_{E_i}$

Then we see that $f^+$ must satisfy:

$f^+ = \ds \sum_{i \mathop = 0}^n \max \set {a_i, 0} \chi_{E_i}$
as the $E_i$ are disjoint, and $\chi_{E_i} \ge 0$ pointwise.

Since all of the $E_i$ are measurable, it follows that $f^+$ is a simple function.
$\blacksquare$


Also see
Negative Part of Simple Function is Simple Function, a natural counterpart


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.7 \ \text{(v)}$




