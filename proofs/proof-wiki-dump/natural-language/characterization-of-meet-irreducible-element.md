# 

Source: https://proofwiki.org/wiki/Characterization_of_Meet_Irreducible_Element


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct{S, \wedge, \preceq}$ be a meet semilattice.
Let $z \in S$.

Then:

$z$ is meet irreducible
if and only if

$\forall x, y \in S : \leftparen{z \prec x}$ and $\rightparen{z \prec y} \implies \paren{ z \prec x \wedge y}$
where $z \prec x$ denotes that $z \preceq x$ and $z\neq x$. 


Proof
Necessary Condition
Let $z$ be a meet irreducible element.

Let:

$x, y \in S : \leftparen{z \prec x}$ and $\rightparen{z \prec y}$

We have:

$z \ne x$
$z \ne y$
By definition of meet irreducible element:

$z \ne x \wedge y$

By definition of infimum:

$z \preceq x \wedge y$

Hence:

$z \prec x \wedge y$

The result follows.
$\Box$


Sufficient Condition
Let:

$\forall x, y \in S : \leftparen{z \prec x}$ and $\rightparen{z \prec y} \implies \paren{ z \prec x \wedge y}$

Let:

$x,y \in S : z = x \wedge y$

By definition of infimum:

$z \preceq x$
$z \preceq y$

By the contrapositive statement of the hypothesis:

either $z = x$ or $z = y$

As $x$ and $y$ were arbitrary:

$\forall x, y \in S : \paren{ z = x \wedge y} \implies \leftparen{z = x}$ or $\rightparen{z = y}$

It follows that $z$ is meet irreducible by definition.
$\blacksquare$





