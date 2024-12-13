# 

Source: https://proofwiki.org/wiki/Order_Automorphism_on_Well-Ordered_Class_is_Identity_Mapping

Theorem
Let $\struct {A, \preccurlyeq}$ be a well-ordered class.
Let $\phi$ be an order isomorphism on $\struct {A, \preccurlyeq}$.
Then $\phi$ is the identity mapping:

$\forall a \in A: \map \phi a = a$


Proof
Let $\phi$ be an order isomorphism.
Then from Inverse of Order Isomorphism is Order Isomorphism, the inverse mapping $\phi^{-1}$ is also an order isomorphism.
From Order Automorphism on Well-Ordered Class is Forward Moving:

$\forall a \in A: a \preccurlyeq \map \phi a$
and:

$\forall a \in A: a \preccurlyeq \map {\phi^{-1} } a$
from which:

$\forall a \in A: \map \phi a \preccurlyeq \map \phi {\map {\phi^{-1} } a} = a$
Hence:

$\forall a \in A: \map \phi a = a$
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 2$ Isomorphisms of well orderings: Corollary $2.2$




