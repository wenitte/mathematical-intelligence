# 

Source: https://proofwiki.org/wiki/Completely_Prime_Ideal_is_Dual_of_Completely_Prime_Filter


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\struct{L, \preceq}$ be a complete lattice.

Let $K \subseteq L$.

The following are dual statements:

$K$ is a completely prime filter of $\struct {L, \preceq}$
$K$ is a completely prime ideal of $\struct {L, \preceq}$


Proof
By definition of completely prime filter:

$K$ is a completely prime filter of $\struct {L, \preceq}$
if and only if:

$(1)\quad K$ is a proper filter
$(2)\quad \forall A \subseteq L: \paren{\wedge A \in K \implies A \cap K \ne \O}$
where $\wedge A$ denotes the infimum of $A$

By the duality principle, the dual of this statement is:

$(1')\quad K$ is a proper ideal
$(2')\quad \forall A \subseteq L: \paren{\vee A \in K \implies A \cap K \ne \O}$
where $\vee A$ denotes the supremum of $A$

By definition of completely prime ideal:

$K$ is a completely prime ideal of $\struct {L, \preceq}$
$\blacksquare$





