# 

Source: https://proofwiki.org/wiki/Algebraic_iff_Continuous_and_For_Every_Way_Below_Exists_Compact_Between



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a lattice.

Then $L$ is algebraic if and only if:

$L$ is continuous
and:

$\forall x, y \in S: x \ll y \implies \exists k \in \map K L: x \preceq k \preceq y$
where

$\ll$ denotes the way below relation,
$\map K L$ denotes the compact subset of $L$.


Proof
Sufficient Condition
Let $L$ be algebraic.
We will prove that

$\forall x \in S: x^\ll$ is directed
where $x^\ll$ denotes way below closure of $x$.
Let $x \in S$.
By definition of algebraic:

$x^{\mathrm{compact} }$ is directed
where $x^{\mathrm{compact} }$ denotes the compact closure of $x$.
By Compact Closure is Subset of Way Below Closure:

$x^{\mathrm{compact} } \subseteq x^\ll$
By definitions of non-empty set and subset:

$x^\ll \ne \O$
Thus by Non-Empty Way Below Closure is Directed in Join Semilattice:

$x^\ll$ is directed.
$\Box$

Thus by definition of algebraic:

$L$ is up-complete.

We will prove that:

$L$ satisfies the axiom of approximation.
Let $x \in S$.
By previous:

$x^\ll$ is directed.
By definition of algebraic:

$x^{\mathrm{compact} }$ is directed.
By definition of up-complete:

$x^\ll$ admits a supremum
and

$x^{\mathrm{compact} }$ admits a supremum.
By Compact Closure is Subset of Way Below Closure:

$x^{\mathrm{compact} } \subseteq x^\ll$
By Supremum of Subset:

$\map \sup {x^{\mathrm {compact} } } \preceq \map \sup {x^\ll}$
By definition of algebraic:

$L$ satisfies the axiom of $K$-approximation.
By the axiom of $K$-approximation:

$x \preceq \map \sup {x^\ll}$
By Operand is Upper Bound of Way Below Closure:

$x$ is an upper bound for $x^\ll$.
By definition of supremum:

$\map \sup {x^\ll} \preceq x$
Thus by definition of antisymmetry:

$x = \map \sup {x^\ll}$
$\Box$

Hence $L$ is continuous.

Let $x, y \in S$ such that:

$x \ll y$
By definition of algebraic:

$D := y^{\mathrm{compact} }$ is directed.
By the axiom of $K$-approximation:

$y = \sup D$
By definition of way below relation:

$\exists d \in D: x \preceq d$
By definition of compact closure:

$d$ is compact.
Thus by definition of compact subset:

$d \in \map K L$
By definition of supremum:

$y$ is an upper bound for $D$.
Thus by definition of upper bound:

$x \preceq d \preceq y$
$\Box$


Necessary Condition
Suppose that:

$L$ is continuous
and:

$\forall x, y \in S: x \ll y \implies \exists k \in \map K L: x \preceq k \preceq y$
We will prove that:

$\forall x \in S: x^{\mathrm{compact} }$ is directed.
Let $x \in S$.
We will prove that:

for every finite subset $A$ of $x^{\mathrm{compact} }$: there exists $c \in x^{\mathrm{compact} }$: $c$ is an upper bound for $A$.
Let $A$ be a finite subset of $x^{\mathrm{compact} }$.
By Compact Closure is Subset of Way Below Closure:

$x^{\mathrm{compact} } \subseteq x^\ll$
By definition of subset:

$A$ is a finite subset of $x^\ll$
By definition of continuous:

$x^\ll$ is directed.
By Directed iff Finite Subsets have Upper Bounds:

$\exists b \in x^\ll: b$ is an upper bound for $A$.
By definition of way below closure:

$b \ll x$
By assumption:

$\exists c \in \map K L: b \preceq c \preceq x$
By definition of compact subset:

$c$ is compact.
Thus by definition of compact closure:

$c \in x^{\mathrm{compact} }$
Thus by Preceding implies if Less Upper Bound then Greater Upper Bound:

$c$ is upper bound for $A$.
$\Box$

By Directed iff Finite Subsets have Upper Bounds:

$x^{\mathrm{compact} }$ is directed.
$\Box$

Thus by definition of continuous:

$L$ is up-complete.

It remains to prove that:

$L$ satisfies the axiom of $K$-approximation.
Let $x \in S$.
We will prove that:

$\forall z \in S: z$ is an upper bound for $x^{\mathrm{compact} } \implies z$ is an upper bound for $x^\ll$
Let $z \in S$ such that:

$z$ is an upper bound for $x^{\mathrm{compact} }$
Let $d \in x^\ll$.
By definition of way below closure:

$d \ll x$
By assumption:

$\exists k \in \map K L: d \preceq k \preceq x$
By definition of compact subset:

$k$ is compact.
By definition of compact closure:

$k \in x^{\mathrm{compact} }$
By definition of upper bound:

$k \preceq z$
Thus by definition of transitivity:

$d \preceq z$
$\Box$

By Compact Closure is Subset of Way Below Closure:

$x^{\mathrm{compact} } \subseteq x^\ll$
By Upper Bound is Upper Bound for Subset:

$\forall z \in S: z$ is upper bound for $x^\ll \implies z$ is upper bound for $x^{\mathrm{compact} }$
By definition of continuous:

$x^\ll$ is directed.
By definition of up-complete:

$x^\ll$ admits a supremum.
By Upper Bounds are Equivalent implies Suprema are equal:

$\map \sup {x^{\mathrm{compact} } } = \map \sup {x^\ll}$
Thus by the axiom of approximation:

$x = \map \sup {x^{\mathrm{compact} } }$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:7




