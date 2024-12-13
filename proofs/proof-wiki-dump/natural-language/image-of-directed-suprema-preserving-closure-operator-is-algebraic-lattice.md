# 

Source: https://proofwiki.org/wiki/Image_of_Directed_Suprema_Preserving_Closure_Operator_is_Algebraic_Lattice

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below algebraic lattice.
Let $c: S \to S$ be a closure operator that preserves directed suprema.
Let $C = \struct {c \sqbrk S, \precsim}$ be an ordered subset of $L$.

Then $C$ is algebraic lattice.


Proof
By definition of algebraic ordered set:

$L$ is up-complete.
By Up-Complete Lower Bounded Join Semilattice is Complete:

$L$ is a complete lattice.
By definition of closure operator:

$c$ is idempotent.
By Image of Idempotent and Directed Suprema Preserving Mapping is Complete Lattice:

$C$ is a complete lattice.
We will prove that

$\forall x \in c \sqbrk S: x^{\mathrm {compact} }_C$ is directed.
Let $x \in c \sqbrk S$.
By Complete Lattice is Bounded:

$C$ is bounded.
By Bottom is Way Below Any Element:

$\bot_C \ll \bot_C$
where

$\bot_C$ denotes the bottom of $C$,
$\ll$ denotes the way below relation.
By definition:

$\bot_C$ is compact element in $C$.
By definition of smallest element:

$\bot_C \precsim x$
By definition of compact closure:

$\bot_C \in x^{\mathrm {compact} }_C$
Thus by definition:

$x^{\mathrm {compact} }_C$ is non-empty.
Let $y, z \in x^{\mathrm {compact} }_C$.
By definition of compact closure:

$y$ is a compact element and $z$ is a compact element.
By definition of compact element:

$y \ll y$ and $z \ll z$
Define $v := y \vee_C z$
Thus by Join Succeeds Operands:

$y \precsim v$ and $z \precsim v$
By Preceding and Way Below implies Way Below:

$y \ll v$ and $z \ll v$
By Join is Way Below if Operands are Way Below:

$v \ll v$ and $v \precsim x$
Thus by definitions of compact element and compact closure:

$v \in x^{\mathrm {compact} }_C$
$\Box$

We will prove that:

$\forall x \in c \sqbrk S: x = \sup_C x^{\mathrm {compact} }_C$
Let $x \in c \sqbrk S$.
By definition of image of set:

$\exists y \in S: x = \map c y$
By definition of closure operator/idempotent:

$\map c x = x$
By definition of algebraic ordered set:

$x^{\mathrm {compact} }_L$ is directed.
By definition of mapping preserves directed suprema:

$\map {\sup_L} {c \sqbrk {x^{\mathrm {compact} }_L} } = \map c {\map {\sup_L} {x^{\mathrm {compact} }_L} }$
By definition of algebraic ordered set:

$L$ satisfies the axiom of $K$-approximation.
By the axiom of $K$-approximation:

$\map {\sup_L} {c \sqbrk {x^{\mathrm {compact} }_L} } = x$
By Supremum in Ordered Subset:

$\map {\sup_C} {c \sqbrk {x^{\mathrm {compact} }_L} } = x$
We will prove that:

$c \sqbrk {x^{\mathrm {compact} }_L} \subseteq x^{\mathrm {compact} }_C$
Let $a \in c \sqbrk {x^{\mathrm {compact} }_L}$.
By definition of image of set:

$\exists v \in x^{\mathrm {compact} }_L: a = \map c v$
By definition of compact closure:

$v \preceq x$
By definition of closure operator/increasing:

$\map c v \preceq \map c x$
By definition of ordered subset:

$a \precsim x$
By Image of Compact Subset under Directed Suprema Preserving Closure Operator is Subset of Compact Subset:

$c \sqbrk {\map K L} \subseteq \map K C$
where $\map K L$ denotes the compact subset of $L$.
By definition of [Definition:Compact Subset of Lattice|compact subset]]:

$a$ is a compact element in $C$.
Thus by definition of compact closure:

$a \in x^{\mathrm {compact} }_C$
$\Box$

By Supremum of Subset:

$x \precsim \map {\sup_C} {x^{\mathrm {compact} }_C}$
By definition of compact closure:

$x$ is upper bound for $x^{\mathrm {compact} }_C$ in $C$.
By definition of supremum:

$\map {\sup_C} {x^{\mathrm {compact} }_C} \precsim x$
Thus by definition of antisymmetry:

$x = \map {\sup_C} {x^{\mathrm {compact} }_C}$
$\Box$

By definition:

$C$ satisfies the axiom of $K$-approximation.
Hence $C$ is algebraic lattice.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:24




