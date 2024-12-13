# 

Source: https://proofwiki.org/wiki/Lattice_of_Power_Set_is_Algebraic

Theorem
Let $X$ be a set.
Let $L = \struct {\powerset X, \cup, \cap, \preceq}$ be the lattice of power set of $X$
where $\mathord \preceq = \mathord \subseteq \cap \paren {\powerset X \times \powerset X}$

Then $L$ is algebraic.


Proof
We will prove that

$\forall x \in \powerset X: x^{\mathrm{compact} }$ is directed.
Let $x \in \powerset X$.
By Empty Set is Bottom of Lattice of Power Set:

$\O = \bot$
where $\bot$ denotes the bottom of $L$.
By Bottom is Way Below Any Element:

$\bot \ll \bot$
where $\ll$ is the way below relation.
By definition:

$\bot$ is compact.
By definition of the smallest element:

$\bot \preceq x$
By definition of compact closure:

$\bot \in x^{\mathrm{compact} }$
By definition:

$x^{\mathrm{compact} }$ is non-empty.
Thus by Non-Empty Compact Closure is Directed:

$x^{\mathrm{compact} }$ is directed.
$\Box$
By Power Set is Complete Lattice:

$L$ is complete lattice.
Thus by definition of complete lattice:

$L$ is up-complete.
It remains to prove that:

$L$ satisfies the axiom of $K$-approximation.
Let $x \in \powerset X$.
We will prove that:

$\forall a \in \powerset X: a$ is upper bound for $x^{\mathrm{compact} } \implies x \preceq a$
Let $a \in \powerset X$ such that:

$a$ is upper bound for $x^{\mathrm{compact} }$
We will prove that:

$x \subseteq a$
Let $t \in x$.
By definition of power set:

$x \subseteq X$
By definitions of subset and singleton:

$\set t \subseteq X$ and $\set t \subseteq x$
By definition of power set:

$\set t \in \powerset X$
By Singleton is Finite:

$\set t$ is finite.
By definition of $\operatorname {Fin}$:

$\set t \in \map {\operatorname {Fin} } x$
where $\map {\operatorname {Fin} } x$ denotes the set of all finite subset of $x$.
By Compact Closure is Set of Finite Subsets in Lattice of Power Set:

$\set t \in x^{\mathrm{compact} }$
By definition of upper bound:

$\set t \preceq a$
By definition of $\preceq$:

$\set t \subseteq a$
Thus by definitions of subset and singleton:

$t \in a$
$\Box$
Thus by definition of $\preceq$:

$x \preceq a$
$\Box$
By definition of compact closure:

$\forall y \in x^{\mathrm{compact} }: y \preceq x$
By definition of upper bound:

$x$ is upper bound for $x^{\mathrm{compact} }$
Thus by definition of supremum:

$x = \map \sup {x^{\mathrm{compact} } }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:31




