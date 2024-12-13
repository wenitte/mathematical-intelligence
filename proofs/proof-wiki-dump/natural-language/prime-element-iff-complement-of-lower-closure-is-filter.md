# 

Source: https://proofwiki.org/wiki/Prime_Element_iff_Complement_of_Lower_Closure_is_Filter



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded above lattice.
Let $p \in S$ such that

$p \ne \top$
where $\top$ denotes the top of $L$.

Then:

$p$ is a prime element
if and only if

$\relcomp S {p^\preceq}$ is filter in $L$
where

$p^\preceq$ denotes the lower closure of $p$
$\relcomp S {p^\preceq}$ denotes the relative complement of $p^\preceq$ relative to $S$.


Proof
Sufficient Condition
Assume that $p$ is a prime element.
By definition of the greatest element:

$p \preceq \top$
By definition of $\prec$:

$p \prec \top$
By definition of antisymmetry:

$\top \npreceq p$
By definition of lower closure of element:

$\top \notin p^\preceq$
By definition of relative complement:

$\top \in \relcomp S {p^\preceq}$
By definition

$X := \relcomp S {p^\preceq}$ is a non-empty set
We will prove that

$X$ is filtered.
Let $x, y \in X$.
By definition of relative complement:

$x \notin p^\preceq$ and $y \notin p^\preceq$
By definition of lower closure of element:

$x \npreceq p$ and $y \npreceq p$
Then by definition of prime element:

$x \wedge y \npreceq p$
By definition of lower closure of element:

$x \wedge y \notin p^\preceq$
Thus by definition of relative complement:

$x \wedge y \in X$
Thus by Meet Precedes Operands:

$x \wedge y \preceq x$ and $x \wedge y \preceq y$
Thus

$\exists z \in X: z \preceq x \land z \preceq y$
$\Box$

We will prove that $X$ is an upper section.
Let $x \in X, y \in S$ such that:

$x \preceq y$
By definition of relative complement:

$x \notin p^\preceq$
By definition of lower closure of element:

$x \npreceq p$
By definition of transitivity:

$y \npreceq p$
By definition of lower closure of element:

$y \notin p^\preceq$
Thud by definition of relative complement:

$y \in X$
$\Box$

Hence, by definition, $X$ is filter in $L$.
$\Box$


Necessary Condition
Assume that $\relcomp S {p^\preceq}$ is filter in $L$.
Let $x, y \in S$ such that:

$x \wedge y \preceq p$
Aiming for a contradiction, suppose that:

$x \npreceq p$ and $y \npreceq p$
By definition of lower closure of element:
$x \notin p^\preceq$ and $y \notin p^\preceq$
By definition of relative complement:

$x \in \relcomp S {p^\preceq}$ and $y \in \relcomp S {p^\preceq}$
By definition of filtered:

$\exists z \in \relcomp S {p^\preceq}: z \preceq x \text { and } z \preceq y$
Then:
$z \preceq x \wedge y$
By definition of transitivity:

$z \preceq p$
By definition of upper section:

$p \in \relcomp S {p^\preceq}$
By definition of reflexivity:

$p \preceq p$
By definition of lower closure of element:

$p \in p^\preceq$
This contradicts $p \in \relcomp S {p^\preceq}$.
Hence it is not the case that $x \npreceq p$ and $y \npreceq p$.
That is:

$x \preceq p$ or $y \preceq p$
and so, by definition, $p$ is a prime element of $\struct {S, \vee, \wedge, \preceq}$.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:26




