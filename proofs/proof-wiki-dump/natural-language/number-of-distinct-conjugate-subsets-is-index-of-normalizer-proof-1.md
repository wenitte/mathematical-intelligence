# 

Source: https://proofwiki.org/wiki/Number_of_Distinct_Conjugate_Subsets_is_Index_of_Normalizer/Proof_1

Theorem
Let $G$ be a group.
Let $S$ be a subset of $G$.
Let $\map {N_G} S$ be the normalizer of $S$ in $G$.
Let $\index G {\map {N_G} S}$ be the index of $\map {N_G} S$ in $G$.

The number of distinct subsets of $G$ which are conjugates of $S \subseteq G$ is $\index G {\map {N_G} S}$.


Proof
We have that:

$S^a = S^b \iff S^{a b^{-1}} = S$ (reference to be determined).
That is:

$S^a = S^b \iff a b^{-1} \in \map {N_G} S$
which is equivalent to:

$a^{-1} \equiv b^{-1} \pmod {\map {N_G} S}$
Thus we have a bijection between:

the conjugacy class $\conjclass S$ of subsets of $G$ conjugate to $S$
and:
the left coset space $G / \map {N_G} S$
given by $S^a \to a^{-1} \map {N_G} S$.

Since $G / \map {N_G} S$ has $\index G {\map {N_G} S}$ elements, the result follows.
$\blacksquare$


This article, or a section of it, needs explaining.In particular: Find the reference to $S^a = S^b \iff S^{a b^{-1} } = S$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 49$




