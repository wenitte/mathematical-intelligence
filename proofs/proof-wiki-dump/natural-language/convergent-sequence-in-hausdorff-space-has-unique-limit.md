# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Hausdorff_Space_has_Unique_Limit

Theorem
Let $T = \struct {S, \tau}$ be a Hausdorff space.
Let $\sequence {x_n}$ be a convergent sequence in $T$.

Then $\sequence {x_n}$ has exactly one limit.


Proof
From the definition of convergent sequence, we have that $\sequence {x_n}$ converges to at least one limit.

Aiming for a contradiction, suppose $l$ and $m$ are both limits of $\sequence{x_n}$.
As $T$ is Hausdorff, there exist $U, V \in \tau$ such that:

$l \in U, m \in V$ and $U \cap V = \O$

Then, from the definition of convergent sequence:










\(\ds \exists N_U \in \R: \, \)



\(\ds n > N_U\)

\(\implies\)







\(\ds x_n \in U\)
















\(\ds \exists N_V \in \R: \, \)



\(\ds n > N_V\)

\(\implies\)







\(\ds x_n \in V\)










Taking $N = \max \set {N_U, N_V}$ we then have:

$\exists N \in \R: n > N \implies x_n \in U, x_n \in V$
But $U \cap V = \O$.

From that contradiction we can see that there can be no such two distinct $l$ and $m$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $4$: The Hausdorff condition: $4.2$: Separation axioms: Proposition $4.2.2$




