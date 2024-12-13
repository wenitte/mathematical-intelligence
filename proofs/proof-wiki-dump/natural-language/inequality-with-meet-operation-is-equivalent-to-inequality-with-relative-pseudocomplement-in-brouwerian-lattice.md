# 

Source: https://proofwiki.org/wiki/Inequality_with_Meet_Operation_is_Equivalent_to_Inequality_with_Relative_Pseudocomplement_in_Brouwerian_Lattice

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be s Brouwerian lattice.
Let $a, x, y \in S$.
Then

$a \wedge x \preceq y$ if and only if $x \preceq a \to y$


Proof
Define a mapping $d: S \to S$:

$\forall s \in S: \map d s = a \wedge s$
Define a mapping $g: S \to S$:

$\forall s \in S: \map g s = a \to s$
By Relative Pseudocomplement and Shift Mapping form Galois Connection in Brouwerian Lattice:

$\tuple {g, d}$ is Galois connection.
By definition of Galois connection:

$x \preceq \map g y$ if and only if $\map d x \preceq y$
Thus by definitions of $g$ and $d$:

$a \wedge x \preceq y$ if and only if $x \preceq a \to y$
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:67




