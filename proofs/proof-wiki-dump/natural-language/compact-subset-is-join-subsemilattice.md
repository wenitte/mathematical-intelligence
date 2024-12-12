# 

Source: https://proofwiki.org/wiki/Compact_Subset_is_Join_Subsemilattice

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a bounded below join semilattice.
Let $\map K L$ be a compact subset of $L$.
Then $\map K L$ is join subsemilattice:

$\forall x, y \in \map K L: x \vee y \in \map K L$


Proof
Let $x, y \in \map K L$.
By definition of compact subset:

$x$ and $y$ are compact.
By definition of compact:

$x \ll x$ and $y \ll y$
By Way Below is Congruent for Join:

$x \vee y \ll x \vee y$
By definition:

$x \vee y$ is compact.
Thus by definition compact subset:

$x \vee y \in \map K L$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_8:3




