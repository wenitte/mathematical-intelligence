# 

Source: https://proofwiki.org/wiki/Left_Quasigroup_if_(2-3)_Parastrophe_of_Magma_is_Magma

Theorem
Let $\struct {S, \circ}$ be a magma.
Let the $\paren {2 - 3}$ parastrophe of $\struct {S, \circ}$ be a magma.

Then $\struct {S, \circ}$ is a left quasigroup.


Proof
By the definition of a left quasigroup it must be shown that:

$\forall a, b \in S: \exists ! x \in S: a \circ x = b$
Aiming for a contradiction, suppose there exists $a, b \in S$ such that $a \circ x = b$ does not have a unique solution for $x$.
Then in the $\paren {2 - 3}$ parastrophe of $\struct {S, \circ}$ we see that $\circ$ as a mapping either fails to be left-total or many-to-one for $a \circ b$.
So $\struct {S, \circ}$ is not a magma.
This contradicts our assumption.
$\blacksquare$





