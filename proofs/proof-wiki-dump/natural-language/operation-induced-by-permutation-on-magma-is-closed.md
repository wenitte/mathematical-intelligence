# 

Source: https://proofwiki.org/wiki/Operation_Induced_by_Permutation_on_Magma_is_Closed

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\sigma: S \to S$ be a permutation on $S$.
Let $\circ_\sigma$ be the operation on $S$ induced by $\sigma$:

$\forall x, y \in S: x \circ_\sigma y := \map \sigma {x \circ y}$

Then $\circ_\sigma$ is closed on $S$


Proof

This article needs proofreading.In particular: Check the validity of the proof for the case when S is the empty setIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Suppose $S$ is the empty set.
Let $\sigma: S \to S$ be a permutation on $S$.
Since $S$ is empty, by definition, $\sigma$ is the empty map. 
Since $\circ_\sigma$ is the operation on $S$ induced by $\sigma$, it follows that $\circ_\sigma$  is the empty map.
It is vacuously true that $\circ_\sigma$ is closed on $S$, as required.

Suppose $S$ is non-empty.
Let $a, b \in S$.
By definition of magma, $\circ$ is closed on $S$.
Thus:

$a \circ b \in S$
Hence:

$a \circ b \in \Dom \sigma$

As $\sigma$ is a permutation on $S$, it follows directly that:

$\map \sigma {a \circ b} \in S$

The operation on $S$ induced by $\sigma$ is well-defined.
In other words, $\circ_\sigma$ is well-defined.

Hence:

$a \circ_\sigma b \in S$

$\blacksquare$





