# 

Source: https://proofwiki.org/wiki/Sequences_of_Projections_in_2-Sequence_Space_do_not_Converge_in_Uniform_Operator_Topology

Theorem
Let $\struct {\ell^2, \norm {\, \cdot \,}_2}$ be the $p$-sequence normed vector space.
Let $\map {CL} {\ell^2} := \map {CL} {\ell^2, \ell^2}$ be the continuous linear transformation space.
Let $\norm {\, \cdot \,}$ be the supremum operator norm.
For $n \in \N$ let $P_n \in \map {CL} {\ell^2}$ be the projection operator over $\ell^2$.
Let $\sequence {P_n}_{n \mathop \in \N}$ be a sequence.
Let $I \in \map {CL} {\ell^2}$ be the identity operator.

Then $\sequence {P_n}_{n \mathop \in \N}$ does not converge to $I$ in the uniform operator topology.


Proof
Aiming for a contradiction, suppose $\sequence {P_n}_{n \mathop \in \N}$ converges to $I$ in the uniform operator topology.
By definition:

$\forall \epsilon \in \R_{> 0} : \exists N \in \N : \forall n \in \N : n > N \implies \norm {I - P_n} < \epsilon$
Suppose $\mathbf e_{N + 1} \in \ell^2$ is such that:

$\mathbf e_{N + 1} = \tuple {\underbrace {0, \ldots, 0}_N, 1, 0 \ldots}$
Then:














\(\ds 1\)

\(=\)







\(\ds \norm {\mathbf e_{N + 1} }_2\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {I - P_N} \mathbf e_{N + 1} }_2\)




















\(\ds \)

\(\le\)







\(\ds \norm {I - P_N} \norm {\mathbf e_{N + 1} }_2\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(<\)







\(\ds \epsilon \cdot 1\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









This has to hold for all $\epsilon > 0$.
However, for $\epsilon < 1$ this does not hold.
Hence, we have a contradiction.
Therefore, $\sequence {P_n}_{n \mathop \in \N}$ does not converge to $I$ in the uniform operator topology.

$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X, Y}$. Strong and weak operator topologies on $\map {CL} {X, Y}$




