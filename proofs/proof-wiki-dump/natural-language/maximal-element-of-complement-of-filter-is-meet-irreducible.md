# 

Source: https://proofwiki.org/wiki/Maximal_Element_of_Complement_of_Filter_is_Meet_Irreducible

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $F$ be a filter in $L$.
Let $p \in S$.
Let $p = \map \max {\relcomp S F}$.

Then $p$ is meet irreducible.


Proof
Let $x, y \in S$.
Aiming for a contradiction, suppose

$p = x \wedge y$ and $p \ne x$ and $p \ne y$
By Meet Precedes Operands:

$p \preceq x$ and $p \preceq y$
By definition of $\prec$:

$p \prec x$ and $p \prec y$
We will prove that

$x \notin F$ or $y \notin F$
Aiming for a contradiction, suppose

$x \in F \land y \in F$
By definition of filtered:

$\exists z \in F: z \preceq x \land z \preceq y$
By definition of infimum:

$z \preceq p$
By definition of upper section:

$p \in F$
Thus this contradicts $p \in \relcomp S F$ by definition of greatest element.
$\Box$

By definition of relative complement:

$x \in \relcomp S F$ or $y \in \relcomp S F$
Thus by definition of greatest element:
this contradicts $p \prec x$ and $p \prec y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:13




