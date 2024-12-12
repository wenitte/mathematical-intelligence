# 

Source: https://proofwiki.org/wiki/Brouwerian_Lattice_is_Upper_Bounded

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a Brouwerian lattice.

Then $S$ is upper bounded.


Proof
By assumption:

$S \ne \O$
By definition of non-empty set:

$\exists s: s \in S$
By definition of Brouwerian lattice:

$s$ has relative pseudocomplement with respect to $s$
By definition of relative pseudocomplement:

$\max \set {x \in S: s \wedge x \preceq s}$ exists and equals $s \to s$
Let $x \in S$.
By Meet Precedes Operands:

$s \wedge x \preceq s$
Then:

$x \in \set {x \in S: s \wedge x \preceq s}$
Thus by definition of maximum:

$x \preceq s \to s$
Thus by definition:

$s \to s$ is an upper bound for $S$
Thus by definition:

$S$ is upper bounded.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:68




