# 

Source: https://proofwiki.org/wiki/Conjugate_Permutations_have_Same_Cycle_Type

Theorem
Let $n \ge 1$ be a natural number.
Let $G$ be a subgroup of the symmetric group on $n$ letters $S_n$.
Let $\sigma, \rho \in G$.

Then $\sigma$ and $\rho$ are conjugate if and only if they have the same cycle type.


Proof
Let $\sigma \in G$ have cycle type $\tuple {k_1, k_2, \ldots, k_n}$.
From Existence and Uniqueness of Cycle Decomposition, $\sigma$ can be expressed uniquely as the product of disjoint cycles:

$\sigma = \alpha_1 \alpha_2 \dotsm \alpha_l$
where $\alpha_i$ is a $k_i$-cycle.

Let $\tau \in G$ such that $\rho = \tau \sigma \tau^{-1}$.
Then:














\(\ds \tau \sigma \tau^{-1}\)

\(=\)







\(\ds \tau \alpha_1 \alpha_2 \dotsm \alpha_l \tau^{-1}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \tau \alpha_1 \tau^{-1} \tau \alpha_2 \tau^{-1} \dotsm \tau \alpha_l \tau^{-1}\)





Product of Conjugates equals Conjugate of Products














\(\ds \)

\(=\)







\(\ds \alpha_{\map \tau 1} \alpha_{\map \tau 2} \dotsm \alpha_{\map \tau l}\)





Cycle Decomposition of Conjugate




We have that for $i, j \in \set {1, 2, \ldots, l}$, $\alpha_i$ and $\alpha_j$ are disjoint.
We also have that $\tau$ is a bijection, and so an injection.
It follows that $\alpha_{\map \tau i}$ and $\alpha_{\map \tau j}$ are also disjoint for all $i, j \in \set {1, 2, \ldots, l}$.

Thus:

the product in $(1)$ is $\rho$ written as the product of disjoint cycles
where:

$\tau \alpha_i \tau^{-1}$ is a $k_i$-cycle.

Thus $\rho$ has the same cycle type as $\sigma$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 80 \alpha$




