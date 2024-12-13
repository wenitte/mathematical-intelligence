# 

Source: https://proofwiki.org/wiki/Relative_Pseudocomplement_and_Shift_Mapping_form_Galois_Connection_in_Brouwerian_Lattice

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a Brouwerian lattice.
Let $a$ be an element of $S$.
Let $g, d: S \to S$ be mappings such that:

$\forall s \in S: \map g s = a \to s$
and

$\forall s \in S: \map d s = a \wedge s$

Then $\struct {g, d}$ is a Galois connection.


Proof
By Brouwerian Lattice iff Shift Mapping is Lower Adjoint:

$d$ is lower adjoint
By definition of lower adjoint:

$\exists g': S \to S: \struct {g', d}$ is Galois connection
By Galois Connection is Expressed by Maximum:

$\forall s \in S: \map {g'} s = \map \max {d^{-1} \sqbrk {s^\preceq} }$
By definition of image of set:

$\forall s \in S: \map {g'} s = \map \max {\set {x \in S: \map d x \in s^\preceq} }$
By definition of lower closure of element:

$\forall s \in S: \map {g'} s = \map \max {\set {x \in S: \map d x \preceq s} }$
By definition of $d$:

$\forall s \in S: \map {g'} s = \map \max {\set {x \in S: a \wedge x \preceq s} }$
By definition of relative pseudocomplement:

$\forall s \in S: \map {g'} s = a \to s = \map g s$
By Equality of Mappings:

$g = g'$
Hence

$\struct {g, d}$ is a Galois connection.
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:def 20




