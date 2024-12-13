# 

Source: https://proofwiki.org/wiki/Prime_Element_iff_Element_Greater_is_Top



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a Boolean lattice.
Let $p \in S$ such that:

$p \ne \top$

Then:

$p$ is prime element
if and only if:

$\forall x \in S: \paren {p \prec x \implies x = \top}$


Proof
Sufficient Condition
Suppose that:

$p$ is prime element
Let $x \in S$ such that:

$p \prec x$
By definition of Boolean lattice:

$L$ is complemented distributive lattice.
By definition of complemented:

$\exists y \in S: y$ is complement of $x$.
By definition of complement:

$x \wedge y = \bot$
By definition of smallest element:

$x \wedge y \preceq p$
By definition of prime element:

$x \preceq p$ or $y \preceq p$
Then by definition of antisymmetry:

$y \prec x$
By definition of $\prec$:

$y \preceq x$
By definition of complement:

$x \vee y = \top$
Thus by Preceding iff Join equals Larger Operand:

$x = \top$
$\Box$

Necessary Condition
Suppose:

$\forall x \in S: \paren {p \prec x \implies x = \top}$
Let $x, y \in S$ such that:

$x \wedge y \preceq p$













\(\ds p\)

\(=\)







\(\ds p \vee \paren {x \wedge y}\)





Preceding iff Join equals Larger Operand














\(\ds \)

\(=\)







\(\ds \paren {p \vee x} \wedge \paren {p \vee y}\)





Definition of Distributive Lattice



Aiming for a contradiction, suppose:

$x \npreceq p$ and $y \npreceq p$
By Preceding iff Join equals Larger Operand:

$p \ne p \vee y$ and $p \ne p \vee x$
By Join Succeeds Operands:

$p \preceq p \vee y$ and $p \preceq p \vee x$
By definition of $\prec$:

$p \prec p \vee y$ and $p \prec p \vee x$
By assumption:

$p \vee y = \top$ and $p \vee x = \top$
By Meet is Idempotent:

$p = \top$
This contradicts $p \ne \top$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:29




