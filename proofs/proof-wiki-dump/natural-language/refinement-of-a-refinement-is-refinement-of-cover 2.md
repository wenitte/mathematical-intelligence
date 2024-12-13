# 

Source: https://proofwiki.org/wiki/Refinement_of_a_Refinement_is_Refinement_of_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $S$ be a set.
Let $\UU = \set {U_\alpha}$, $\VV = \set {V_\beta}$ and $\WW = \set {W_\gamma}$ be covers of $S$.

Let $\VV$ be a refinement of $\UU$.
Let $\WW$ be a refinement of $\VV$.

Then:

$\WW$ is a refinement of $\UU$
Proof
Let $W \in \WW$.

By definition of refinement:

$\exists V \in \VV : W \subseteq V$
Similarly:

$\exists U \in \UU : V \subseteq U$
From Subset Relation is Transitive:

$W \subseteq U$

Since $W$ was arbitrary:

$\forall W \in \WW : \exists U \in \UU : W \subseteq U$

It follows that $\WW$ is a refinement of $\UU$ by definition.
$\blacksquare$





