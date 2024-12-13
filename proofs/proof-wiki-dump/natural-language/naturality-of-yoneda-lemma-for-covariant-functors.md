# 

Source: https://proofwiki.org/wiki/Naturality_of_Yoneda_Lemma_for_Covariant_Functors

Theorem
Let $C$ be a locally small category.
Let $\mathbf {Set}$ be the category of sets.
Let $\sqbrk {C, \mathbf {Set} }$ be the covariant functor category.
Let $C \times \sqbrk {C, \mathbf {Set} }$ be the product category.
Let $C \times \sqbrk {C, \mathbf {Set} } \to \mathbf {Set}: \tuple {A, F} \mapsto \map {\operatorname {Nat} } {h^A, F}$ be the covariant functor defined as the composition of the hom bifunctor and the product of the contravariant Yoneda functor $h^-$ and the identity functor $\operatorname{id}_{\sqbrk {C, \mathbf {Set} } }$.
Let $\operatorname{ev} : C \times \sqbrk {C, \mathbf {Set} } \to \mathbf {Set}: \tuple {A, F} \mapsto \map F A$ be the functor evaluation functor.

Then $\Phi_{\tuple {A, F} } : \map {\operatorname {Nat} } {h^A, F} \to \map F A: \eta \mapsto \map {\eta_A} {\operatorname {id}_A}$ defines a natural isomorphism, where $\operatorname{id}_A$ is the identity morphism of $A$.


Proof
By the Bijection in Yoneda Lemma for Covariant Functors, $\Phi_{\tuple {A, F} }$ is a bijection for all $\tuple {A, F}$.
Let $\tuple {f, \xi}: \tuple {A, F} \to \tuple {B, G} $ be a morphism in $C \times \sqbrk {C, \mathbf {Set} }$.
To prove that $\Phi$ is a natural isomorphism, it remains to prove that the following diagram commutes:

$\xymatrix{
\map {\operatorname {Nat} } {h^A, F} \ar[d]^{\Phi_{\tuple {A, F} } } \ar[r]^{\map {\operatorname {Nat} } {h^f, \xi} } & \map {\operatorname {Nat} } {h^B, G} \ar[d]^{\Phi_{\tuple {B, G} } } \\
F(A) \ar[r]^{\map {\operatorname {ev} } {f, \xi} }          & \map G B}$
Let $\eta \in \map {\operatorname {Nat} } {h^A, F}$.
We have 














\(\ds \map {\paren {\map {\operatorname {ev} } {f, \xi} \circ \Phi_{\tuple {A, F} } } } \eta\)

\(=\)







\(\ds \map {\map {\operatorname {ev} } {f, \xi} } {\map {\eta_A} {\operatorname {id}_A} }\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B\circ \map F f} } {\map {\eta_A} {\operatorname {id}_A} }\)





Definition of Functor Evaluation Bifunctor














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B \circ \map {h^A} f} } {\operatorname{id}_A}\)





Definition of Natural Transformation, applied to $\eta: h^A \to F$














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B} } {f \circ \operatorname{id}_A}\)





Definition of Covariant Hom Functor, applied to $h^A$














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B} } f\)









and:














\(\ds \map {\paren {\Phi_{\tuple {B, G} } \circ \map {\operatorname {Nat} } {h^f, \xi} } } \eta\)

\(=\)







\(\ds \map {\Phi_{\tuple {B, G} } } {\xi \circ \eta \circ h^f}\)





Definition of Hom Bifunctor














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi \circ \eta \circ h^f}_B} {\operatorname{id}_B}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B} } {\map {\paren {h^f}_B} {\operatorname{id}_B} }\)





Definition of Vertical Composition of Natural Transformations














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B} } {\operatorname{id}_B \circ f}\)





Definition of Contravariant Yoneda Functor, Definition of Precomposition Natural Transformation














\(\ds \)

\(=\)







\(\ds \map {\paren {\xi_B \circ \eta_B} } f\)









$\blacksquare$


Also see
Naturality of Yoneda Lemma for Contravariant Functors




