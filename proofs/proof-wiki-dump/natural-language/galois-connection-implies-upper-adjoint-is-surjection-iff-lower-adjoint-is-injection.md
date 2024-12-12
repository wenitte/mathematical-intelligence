# 

Source: https://proofwiki.org/wiki/Galois_Connection_implies_Upper_Adjoint_is_Surjection_iff_Lower_Adjoint_is_Injection



Theorem
Let $L = \struct {S, \preceq}$ and $R = \struct {T, \precsim}$ be ordered sets.
Let $g: S \to T$ and $d: T \to S$ be mappings such that $\struct {g, d}$ is a Galois connection.

Then $g$ is a surjection if and only if $d$ is an injection.


Proof
Sufficient Condition
Assume that

$d$ is a surjection.
By Upper Adjoint of Galois Connection is Surjection implies Lower Adjoint at Element is Minimum of Preimage of Singleton of Element

$\forall t \in T: \map d t = \min \set {g^{-1} \sqbrk {\set t} }$
By Lower Adjoint at Element is Minimum of Preimage of Singleton of Element implies Composition is Identity:

$g \circ d = I_T$
Thus by Injection iff Left Inverse:

$d$ is an injection.
$\Box$

Necessary Condition
Assume that

$d$ is an injection.
By definition of Galois connection:

$g$ and $f$ are increasing mappings.
By Galois Connection Implies Order on Mappings:

$d \circ g \preceq I_S$ and $I_T \precsim g \circ d$
By Increasing and Ordering on Mappings implies Mapping is Composition:

$d = \paren {d \circ g} \circ d$
By Composition of Mappings is Associative:

$= d \circ \paren {g \circ d}$
By Injection iff Left Cancellable:

$g \circ d = I_T$
By Identity Mapping is Right Identity:

$d = d \circ I_T$
Thus by Surjection iff Right Inverse:

$g$ is a surjection.
$\blacksquare$


Sources
Mizar article WAYBEL_1:24




