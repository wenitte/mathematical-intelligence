# 

Source: https://proofwiki.org/wiki/Right_Quasigroup_if_(1-3)_Parastrophe_of_Magma_is_Magma

Theorem
Let $\struct {S, \circ}$ be a magma.
Let the $(1-3)$ parastrophe of $\struct {S, \circ}$ be a magma.

Then $\struct {S, \circ}$ is a right quasigroup.


Proof
By the definition of a right quasigroup it must be shown that:

$\forall a, b \in S: \exists ! x \in S: x \circ a = b$
Aiming for a contradiction, suppose there exists $a, b \in S$ such that $x \circ a = b$ does not have a unique solution for $x$.
Then in the $(1-3)$ parastrophe of $\struct {S, \circ}$ we see that $\circ$ as a mapping either fails to be left-total or many-to-one for $b \circ a$.
So $\struct {S, \circ}$ is not a magma which contradicts our assumption.
$\blacksquare$





