# 

Source: https://proofwiki.org/wiki/Ring_Homomorphism_from_Division_Ring_is_Monomorphism_or_Zero_Homomorphism



Theorem
Let $\struct {R, +_R, \circ}$ and $\struct {S, +_S, *}$ be rings whose zeros are $0_R$ and $0_S$ respectively.
Let $\phi: R \to S$ be a ring homomorphism.

If $R$ is a division ring, then either:

$(1): \quad \phi$ is a monomorphism (that is, $\phi$ is injective)
$(2): \quad \phi$ is the zero homomorphism (that is, $\forall a \in R: \map \phi a = 0_S$).


Proof 1
We have that:

The kernel of a homomorphism is an ideal of $R$
the only ideals of a division ring are trivial.
So $\map \ker \phi = \set {0_R}$ or $R$.  
If $\map \ker \phi = \set {0_R}$, then $\phi$ is injective by Kernel is Trivial iff Monomorphism.
If $\map \ker \phi = R$, $\phi$ is the zero homomorphism by definition.
$\blacksquare$


Proof 2
From Surjection by Restriction of Codomain, we can restrict the codomain of $\phi$ and consider the mapping $\phi': R \to \Img R$
As $\phi'$ is now a surjective homomorphism, it is by definition an epimorphism.
Then an Epimorphism from Division Ring to Ring is either null or an isomorphism.
As an isomorphism is by definition injective, the result follows.
$\blacksquare$


Also see
Ring Homomorphism from Field is Monomorphism or Zero Homomorphism




