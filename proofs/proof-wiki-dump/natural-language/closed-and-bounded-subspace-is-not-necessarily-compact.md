# 

Source: https://proofwiki.org/wiki/Closed_and_Bounded_Subspace_is_not_necessarily_Compact

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $H \subseteq A$ be a subset of $A$.
Let $M_H = \struct {H, d_H}$ be the subspace of $M$ induced by $d$.
Let $H$ be closed and bounded.
Then it is not necessarily the case that $M_H$ is compact.


Proof
Proof by Counterexample:
Let $A = \openint 0 1$ be the open unit interval.
From Open Real Interval is not Compact, $\openint 0 1$ is not a compact space.
Let $H = \openint 0 1$.
Then $H \subseteq A$.
From Underlying Set of Topological Space is Clopen, $\openint 0 1$ is both closed and open in $\openint 0 1$.
Thus $H$ is closed and bounded but not compact.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $5$: Compact spaces: $5.7$: Compact Subspaces of $\R^n$: Remark $5.7.2$




