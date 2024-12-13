# 

Source: https://proofwiki.org/wiki/Metrics_on_Space_are_Lipschitz_Equivalent_iff_Identity_Mapping_is_Lipschitz_Equivalence



Theorem
Let $M_1 = \struct {A, d_1}$ and $M_2 = \struct {A, d_2}$ be metric spaces on the same underlying set $A$.
Let $I_A$ denote the identity mapping on $A$.
Then:

$d_1$ and $d_2$ are Lipschitz equivalent
if and only if:

$I_A: M_1 \to M_2$ is a Lipschitz equivalence.


Proof
By definition of identity mapping:

$\forall x \in A: \map {I_A} x = x$


Sufficient Condition
Let $d_1$ and $d_2$ be Lipschitz equivalent.
Then:










\(\ds \exists h, k \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds h \map {d_2} {x, y}\)

\(\le\)







\(\ds \map {d_1} {x, y} \le k \map {d_2} {x, y}\)





Definition of Lipschitz Equivalent Metrics








\(\ds \leadsto \ \ \)

\(\ds \exists h, k \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds h \map {d_2} {\map {I_A} x, \map {I_A} y}\)

\(\le\)







\(\ds \map {d_1} {x, y} \le k \map {d_2} {\map {I_A} x, \map {I_A} y}\)





Definition of Identity Mapping: $\forall x \in A: \map {I_A} x = x$



That is, by definition:

$I_A: M_1 \to M_2$ is a Lipschitz equivalence.
$\Box$


Necessary Condition
Let $I_A$ be a Lipschitz equivalence.
Then:










\(\ds \exists h, k \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds h \map {d_2} {\map {I_A} x, \map {I_A} y}\)

\(\le\)







\(\ds \map {d_1} {x, y} \le k \map {d_2} {\map {I_A} x, \map {I_A} y}\)





Definition of Lipschitz Equivalence (Mapping)








\(\ds \leadsto \ \ \)

\(\ds \exists h, k \in \R_{>0}: \forall x, y \in A: \, \)



\(\ds h \map {d_2} {x, y}\)

\(\le\)







\(\ds \map {d_1} {x, y} \le k \map {d_2} {x, y}\)





Definition of Identity Mapping: $\forall x \in A: \map {I_A} x = x$



That is, by definition:

$d_1$ and $d_2$ are Lipschitz equivalent metrics.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics




