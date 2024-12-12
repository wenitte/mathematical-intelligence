# 

Source: https://proofwiki.org/wiki/Brouwerian_Lattice_iff_Shift_Mapping_is_Lower_Adjoint

Theorem
Let $\struct {S, \preceq}$ be a lattice.

Then $\struct {S, \preceq}$ is a Brouwerian lattice if and only if:

$\forall x \in S, f: S \to S: \paren {\forall s \in S: \map f s = x \wedge s} \implies f$ is a lower adjoint


Proof
$\struct {S, \preceq}$ is a Brouwerian lattice
if and only if:

$\forall x, y \in S: x$ has relative pseudocomplement with respect to $y$ by definition of Brouwerian lattice
if and only if:

$\forall x, y \in S: \max \set {s \in S: x \wedge s \preceq y}$ exists by definition of relative pseudocomplement
if and only if:

$\forall x \in S, f: S \to S: \paren {\forall s \in S: \map f s = x \wedge s} \implies f$ is a lower adjoint by Shift Mapping is Lower Adjoint iff Appropriate Maxima Exist
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:def 19




