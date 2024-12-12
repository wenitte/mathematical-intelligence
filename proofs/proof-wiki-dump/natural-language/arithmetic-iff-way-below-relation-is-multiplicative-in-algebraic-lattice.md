# 

Source: https://proofwiki.org/wiki/Arithmetic_iff_Way_Below_Relation_is_Multiplicative_in_Algebraic_Lattice



Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a bounded below algebraic lattice.

Then:

$L$ is arithmetic
if and only if:

$\ll$ is a multiplicative relation
where $\ll$ denotes the way below relation of $L$.


Proof
Sufficient Condition
Let $L$ be arithmetic.
Let $a, x, y \in S$ such that

$a \ll x$ and $a \ll y$
By Algebraic iff Continuous and For Every Way Below Exists Compact Between:

$\exists c \in \map K L: a \preceq c \preceq x$
and

$\exists k \in \map K L: a \preceq k \preceq y$
where $\map K L$ denotes the compact subset of $L$.
By Meet Semilattice is Ordered Structure:

$c \wedge k \preceq x \wedge y$
By definition of arithmetic:

$\map K L$ is meet closed.
By definition of meet closed:

$c \wedge k \in \map K L$
By definition of compact subset:

$c \wedge k$ is compact.
By definition of compact:

$c \wedge k \ll c \wedge k$
By Meet is Idempotent:

$a \wedge a = a$
By Meet Semilattice is Ordered Structure:

$a \preceq c \wedge k$
Thus by Preceding and Way Below implies Way Below

$a \ll x \wedge y$
$\Box$


Necessary Condition
Let $\ll$ be a multiplicative relation.
Thus $L$ is algebraic.
It remains to prove that

$\map K L$ is meet closed.
Let $x, y \in \map K L$.
By definition of compact subset:

$x$ and $y$ are compact.
By definition of compact:

$x \ll x$ and $y \ll y$
By Way Below Relation is Auxiliary Relation:

$\ll$ is auxiliary relation.
By Multiplicative Auxiliary Relation iff Congruent:

$x \wedge y \ll x \wedge y$
By definition:

$x \wedge y$ is compact.
Thus by definition of compact subset:

$x \wedge y \in \map K L$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:20




