# 

Source: https://proofwiki.org/wiki/Prime_Element_iff_There_Exists_Way_Below_Open_Filter_which_Complement_has_Maximum



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below continuous distributive lattice.
Let $p \in S$ such that:

$p \ne \top$
where $\top$ denotes the top of $L$.

Then

$p$ is a prime element
if and only if:

there exists a way below open filter $F$ in $L$: $p = \map \max {\relcomp S F}$


Proof
Sufficient Condition
Let $p$ be a prime element.
By definition of continuous:

$\forall x \in S: x^\ll$ is directed
We will prove that:

$\forall x \in S: \paren {x \in \relcomp S {p^\preceq} \implies \exists y \in S: y \in \relcomp S {p^\preceq} \land y \ll x}$
Let $x \in S$ such that:

$x \in \relcomp S {p^\preceq}$
By definition of relative complement:

$x \notin p^\preceq$
By definition of lower closure of element:

$x \npreceq p$
By Axiom of Approximation in Up-Complete Semilattice:

$\exists y \in S: y \ll x \land y \npreceq p$
By definition of lower closure of element:

$y \notin p^\preceq$
By definition of relative complement:

$y \in \relcomp S {p^\preceq}$
Thus:

$\exists y \in S: y \in \relcomp S {p^\preceq} \land y \ll x$
$\Box$

By Prime Element iff Complement of Lower Closure is Filter:

$F := \relcomp S {p^\preceq}$ is way below open filter in $L$.
By definitions of antisymmetry and lower closure of element:

$\lnot \exists y \in S: y \in F \land y \prec p$
By Relative Complement of Relative Complement::

$\relcomp S F = p^\preceq$
By definitions of reflexivity and lower closure of element:

$p \in \relcomp S F$
Thus by definition of greatest element:

$p = \map \max {\relcomp S F}$
$\Box$


Necessary Condition
Let:

there exists a way below open filter $F$ in $L$: $p = \map \max {\relcomp S F}$
By Maximal Element of Complement of Filter is Meet Irreducible:

$p$ is meet irreducible.
Thus by Prime Element iff Meet Irreducible in Distributive Lattice:

$p$ is a prime element.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_6:30




