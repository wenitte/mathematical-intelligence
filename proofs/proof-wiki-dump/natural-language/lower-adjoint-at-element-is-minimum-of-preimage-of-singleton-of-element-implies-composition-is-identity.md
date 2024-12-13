# 

Source: https://proofwiki.org/wiki/Lower_Adjoint_at_Element_is_Minimum_of_Preimage_of_Singleton_of_Element_implies_Composition_is_Identity

Theorem
Let $L = \struct {S, \preceq}, R = \struct {T, \precsim}$ be ordered sets.
Let $g: S \to T, d: T \to S$ be mappings such that

$\forall t \in T: \map d t = \min \set {g^{-1} \sqbrk {\set t} }$

Then $g \circ d = I_T$
where $I_T$ denotes the identity mapping of $T$.


Proof
Let $t \in T$.
By assumption:

$\map d t = \min \set {g^{-1} \sqbrk {\set t} }$
By definition of min operation:

$\map d t = \map \inf {g^{-1} \sqbrk {\set t} }$ and $\map d t \in g^{-1} \sqbrk {\set t}$
By definition of image of set:

$\map g {\map d t} \in \set t$
By definition of singleton:

$\map g {\map d t} = t$
Thus by definition of composition of mappings:

$\map {\paren {g \circ d} } t = t$
$\blacksquare$


Sources
Mizar article WAYBEL_1:23




