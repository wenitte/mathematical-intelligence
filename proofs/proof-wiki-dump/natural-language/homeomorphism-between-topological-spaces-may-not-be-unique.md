# 

Source: https://proofwiki.org/wiki/Homeomorphism_between_Topological_Spaces_may_not_be_Unique

Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $f$ be a homeomorphism from $T_1$ to $T_2$.

Then $f$ may not necessarily be unique.


Proof
Let $\R$ be the real number line with the Euclidean topology.
Let $I_1 := \openint a b$ and $I_2 := \openint c d$ be non-empty open real intervals.
From Open Real Intervals are Homeomorphic, $I_1$ and $I_2$ are homeomorphic.
The example given of a homeomorphism was the real function $f: I_1 \to I_2$ defined as:

$\forall x \in I_1: \map f x = c + \dfrac {\paren {d - c} \paren {x - a} } {b - a}$

However, note that the following real functions for all $n \in \Z_{>0}$:












\(\, \ds f_n: I_1 \to I_2 \, \)

\(\ds x\)

\(\mapsto\)







\(\ds c + \dfrac {\paren {d - c} \paren {x - a}^n} {\paren {b - a}^n}\)


















\(\, \ds g_n: I_1 \to I_2 \, \)

\(\ds x\)

\(\mapsto\)







\(\ds d + \dfrac {\paren {d - c} \paren {x - a}^n} {\paren {b - a}^n}\)









are all homeomorphisms from $I_1$ to $I_2$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.6$: Homeomorphisms




