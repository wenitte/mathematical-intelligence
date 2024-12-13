# 

Source: https://proofwiki.org/wiki/Intersection_of_Magmas_of_Sets_is_Magma_of_Sets

Theorem
Let $X$ be a set.
Let $\Phi := \set {\phi_i: i \in I}$ be a collection of partial mappings with codomain $\powerset X$, the power set of $X$.
Let $\SS_j$ be a magma of sets for $\Phi$, for each $j \in J$, for some index set $J$.

Then:

$\SS := \ds \bigcap_{j \mathop \in J} \SS_j$
is also a magma of sets for $\Phi$.


Proof

This article, or a section of it, needs explaining.In particular: the notation in the belowYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
For each $i \in I$ and $j \in J$, we have:

$\map {\phi_i} {\sequence {S_{j, j_i} }_{j_i \mathop \in J_i} } \in \SS_j$
Thus, if for each $j \in J$, one has:

$(1): \quad \sequence {S_{j_i} }_{j_i \mathop \in J_i} \in \SS_j^{J_i}$
it follows from definition of set intersection that:

$\map {\phi_i} {\sequence {S_{j_i} }_{j_i \mathop \in J_i} } \in \SS$

The condition $(1)$, for each $j \in J$, comes down to:

$\sequence {S_{j_i} }_{j_i \mathop \in J_i} \in \SS^{J_i}$
It follows that $\SS$ satisfies the requirement on $\phi_i$ to be a magma of sets, for each $i \in I$.

That is to say, $\SS$ is a magma of sets for $\Phi$.
$\blacksquare$





