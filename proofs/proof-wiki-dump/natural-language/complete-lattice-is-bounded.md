# 

Source: https://proofwiki.org/wiki/Complete_Lattice_is_Bounded

Theorem
Let $L = \struct {S, \vee, \wedge, \preceq}$ be a complete lattice.

Then

$L$ is bounded.


Proof
By definition of complete lattice:

$\O$ admits a supremum and an infimum.
By Infimum of Empty Set is Greatest Element:

$\forall x \in S: x \preceq \inf \O$
Thus by definition:

$L$ is bounded above.
By Supremum of Empty Set is Smallest Element:

$\forall x \in S: \sup \O \preceq x$
Thus by definition:

$L$ is bounded below.
Hence $L$ is bounded.
$\blacksquare$


Sources
Mizar article YELLOW_0:condreg 3




