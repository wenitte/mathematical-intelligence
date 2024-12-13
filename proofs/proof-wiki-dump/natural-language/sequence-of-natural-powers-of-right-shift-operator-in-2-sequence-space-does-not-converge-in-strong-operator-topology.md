# 

Source: https://proofwiki.org/wiki/Sequence_of_Natural_Powers_of_Right_Shift_Operator_in_2-Sequence_Space_does_not_Converge_in_Strong_Operator_Topology

Theorem
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the $2$-sequence normed vector space.
Let $\map {CL} {\ell^2} := \map {CL} {\ell^2, \ell^2}$ be the continuous linear transformation space.
Let $R \in \map {CL} {\ell^2}$ be the right shift operator over $\ell^2$.
Let $\sequence {R^n}_{n \mathop \in \N}$ be a sequence.
Let $\mathbf 0 \in \map {CL} {\ell^2}$ be the zero mapping.

Then $\sequence {R^n}_{n \mathop \in \N}$ does not converge to $\mathbf 0$ in the strong operator topology.


Proof
Let $\mathbf e_1 = \tuple {1, 0, \ldots} \in \ell^2$
Then $R^n \mathbf e_1 = \tuple {\underbrace {\ldots, 0}_{n \text{ terms} }, 1, 0, \ldots}$
So:

$\forall n \in \N : \norm {R^n \mathbf e_1}_2 = 1$
Therefore:

$\ds \lim_{n \mathop \to \infty} \norm {R^n \mathbf e_1}_2 = 1$
Hence, $\sequence {R^n}_{n \mathop \in \N}$ does not converge to $\mathbf 0$ in the strong operator topology.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Strong and weak operator topologies on $\map {CL} {X, Y}$




