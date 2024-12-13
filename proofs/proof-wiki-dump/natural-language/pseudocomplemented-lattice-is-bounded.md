# 

Source: https://proofwiki.org/wiki/Pseudocomplemented_Lattice_is_Bounded

Theorem
Let $\struct {L, \wedge, \vee, \preceq}$ be a pseudocomplemented lattice.

Then $\struct {L, \wedge, \vee, \preceq}$ is a bounded lattice.


Proof
By the definition of pseudocomplemented lattice, $L$ has a smallest element $\bot$.
Let $x \in L$.
Then:

$x \wedge \bot = \bot$

This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the definition of pseudocomplemented lattice, there is a greatest element $\bot^*$ such that:

$\bot \wedge \bot^* = \bot$
But then by the definition of greatest element:

$\forall x \in L: x \preceq \bot^*$
Hnce.o $\bot^*$ is the greatest element of $L$.
Since $L$ has a smallest element and a greatest element, it is a bounded lattice.
$\blacksquare$





