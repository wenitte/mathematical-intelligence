# 

Source: https://proofwiki.org/wiki/Compact_Subspace_of_Linearly_Ordered_Space/Reverse_Implication/Proof_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct {X, \preceq, \tau}$ be a linearly ordered space.
Let $Y \subseteq X$ be a non-empty subset of $X$.

Let the following hold:

$(1): \quad$ For every non-empty $S \subseteq Y$, $S$ has a supremum and an infimum in $X$.
$(2): \quad$ For every non-empty $S \subseteq Y$: $\sup S, \inf S \in Y$.

Then $Y$ is a compact subspace of $\struct {X, \tau}$.


Proof
Let $\tau'$ be the $\tau$-relative subspace topology on $Y$.
Let $\preceq'$ be the restriction of $\preceq$ to $Y$.


Lemma
$\struct {Y, \preceq', \tau'}$ is a linearly ordered space.
$\Box$

The premises immediately show that $\struct {Y, \preceq'}$ is a complete lattice.
By Complete Linearly Ordered Space is Compact, $Y$ is a compact subspace of $X$.
$\blacksquare$





