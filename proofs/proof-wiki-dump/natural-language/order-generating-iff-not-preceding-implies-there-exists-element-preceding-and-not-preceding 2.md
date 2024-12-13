# 

Source: https://proofwiki.org/wiki/Order_Generating_iff_Not_Preceding_implies_There_Exists_Element_Preceding_and_Not_Preceding



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.
Let $X$ be a subset of $S$.

Then

$X$ is order generating
if and only if

$\forall x, y \in S: \paren {y \npreceq x \implies \exists p \in X: x \preceq p \land y \npreceq p}$


Proof
Sufficient Condition
Let $X$ be order generating.
Let $x, y \in S$ such that:

$y \npreceq x$
By Order Generating iff Every Element is Infimum:

$\exists P \subseteq X: x = \inf P$
By definition of infimum:

$y$ is lower bound for $P \implies y \preceq x$
By definition of lower bound:

$\exists p \in P: y \npreceq p$
Thus by definition of subset:

$p \in X$
By definition of infimum:

$x$ is lower bound for $P$.
Thus by definition of lower bound:

$x \preceq p$
Thus

$y \npreceq p$
$\Box$


Necessary Condition
Suppose that

$\forall x, y \in S: \paren {y \npreceq x \implies \exists p \in X: x \preceq p \land y \npreceq p}$
Let $x \in S$.
Thus by definition of complete lattice:

$x^\succeq \cap X$ admits an infimum.
Define $y := \map \inf {x^\succeq \cap X}$
By definition of infimum:

$y$ is lower bound for $x^\succeq \cap X$
We will prove that:

$x$ is lower bound for $x^\succeq \cap X$
Let $a \in x^\succeq \cap X$.
By definition of intersection:

$a \in x^\succeq$
Thus by definition of upper closure of element:

$x \preceq a$
$\Box$

By definition of infimum:

$x \preceq y$
By definition of antisymmetry:

$y \nprec x$

It remains to prove that

$y = x$
Aiming for a contradiction, suppose

$y \ne x$

This article, or a section of it, needs explaining.In particular: The following doesn't seem to make any senseYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By definition of $\prec$:

$y \npreceq x$ or $y = x$
Case $y \npreceq x$
By assumption:

$\exists p \in X: x \preceq p \land y \npreceq p$
By definition of upper closure of element:

$p \in x^\succeq$
By definition of intersection:

$p \in x^\succeq \cap X$
By definition of lower bound:

$y \preceq p$
Thus this contradicts $y \npreceq p$.

Case $y = x$
This contradicts $y \ne x$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:17




