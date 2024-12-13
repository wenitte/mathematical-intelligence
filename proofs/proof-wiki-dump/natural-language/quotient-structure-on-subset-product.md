# 

Source: https://proofwiki.org/wiki/Quotient_Structure_on_Subset_Product

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\RR$ be a congruence for $\circ$ on $S$.

Then:

$\forall X, Y \in S / \RR: X \circ_\PP Y \subseteq X \circ_\RR Y$
where:

$S / \RR$ is the quotient of $S$ by $\RR$
$\circ_\PP$ is the operation induced on $\powerset S$ by $\circ$
$\circ_\RR$ is the operation induced on $S / \RR$ by $\circ$


Proof
By definition of subset product:

$X \circ_\PP Y = \set {x \circ y: x \in X, y \in Y}$

This article, or a section of it, needs explaining.In particular: Thus? That is not the definition of $X \circ_\RR Y$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Thus:

$X \circ_\RR Y = \set {x \circ y: x \in X, y \in Y} \cup \set {x \circ y: x \in \eqclass X \RR, y \in \eqclass Y \RR}$
The result follows from Subset of Union.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures




