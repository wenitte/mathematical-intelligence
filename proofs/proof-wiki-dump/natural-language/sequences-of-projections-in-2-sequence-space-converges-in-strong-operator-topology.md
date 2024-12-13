# 

Source: https://proofwiki.org/wiki/Sequences_of_Projections_in_2-Sequence_Space_Converges_in_Strong_Operator_Topology

Theorem
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the $p$-sequence normed vector space.
Let $\map {CL} {\ell^2} := \map {CL} {\ell^2, \ell^2}$ be the continuous linear transformation space.
For $n \in \N$ let $P_n \in \map {CL} {\ell^2}$ be the projection operator over $\ell^2$.
Let $\sequence {P_n}_{n \mathop \in \N}$ be a sequence.
Let $I \in \map {CL} {\ell^2}$ be the identity operator.

Then $\sequence {P_n}_{n \mathop \in \N}$ converges to $I$ in the strong operator topology.


Proof
Let $\mathbf a = \tuple {a_1, a_2, \ldots} \in \ell^2$.
Then:














\(\ds \norm {I \mathbf a - P_n \mathbf a}^2_2\)

\(=\)







\(\ds \norm {\ldots, 0, a_{n+1}, a_{n + 2}, \ldots}^2_2\)





Definition of Projection Operator over 2-Sequence Spaces














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = n + 1}^\infty \size {a_k}^2\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty } \norm {I \mathbf a - P_n \mathbf a}^2_2\)

\(=\)







\(\ds \sum_{k \mathop = n + 1}^\infty \size {a_k}^2\)




















\(\ds \)

\(=\)







\(\ds 0\)





Definition of P-Sequence Space, Tail of Convergent Series tends to Zero



Hence:

$\ds \lim_{n \mathop \to \infty } \norm {I \mathbf a - P_n \mathbf a}_2 = 0$
By definition, $\sequence {P_n}_{n \mathop \in \N}$ converges to $I$ in the strong operator topology.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Strong and weak operator topologies on $\map {CL} {X, Y}$




