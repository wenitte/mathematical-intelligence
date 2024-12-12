# 

Source: https://proofwiki.org/wiki/Bijection_in_Yoneda_Lemma_for_Covariant_Functors



Theorem
Let $C$ be a locally small category.
Let $\mathbf {Set}$ be the category of sets.
Let $F: C \to \mathbf {Set}$ be a covariant functor.
Let $A \in C$ be an object.
Let $I_A$ be its identity morphism.
Let $h^A = \map {\operatorname {Hom} } {A, -}$ be its covariant hom-functor.

The class of natural transformations $\map {\operatorname {Nat} } {h^A, F}$ is a small class, and:

$\alpha: \map {\operatorname {Nat} } {h^A, F} \to \map F A: \eta \mapsto \map {\eta_A} {I_A}$
$\beta: \map F A \to \map {\operatorname {Nat} } {h^A, F}: u \mapsto \paren {X \mapsto \paren {f \mapsto \map {\paren {\map F f} } u} }$
are inverses of each other.


Outline of proof
The crucial point is that the role of morphisms $f \in \map {h^A} B = \map {\operatorname {Hom} } {A, B}$ is close to their role under the hom functor $h^A$: We have $f = f \circ I_A = \map {\paren {\map {h^A} f} } {I_A}$.
Natural transformations $\eta: h^A \to F$ translate what happens with $f$ under $h^A$ to something involving only $F$, so that $\eta$ is determined by $\map {\eta_A} {I_A} = \map \alpha \eta$.
Making the calculation explicit, we know what the reverse bijection $\beta$ should be.


Proof
The fact that $\map {\operatorname {Nat} } {h^A, F}$ is a small class follows when we prove that the mappings are bijections.


Injectivity
Let $\eta \in \map {\operatorname {Nat} } {h^A, F}$ and $B \in C$ an object.
Let $f \in \map {h^A} B = \map {\operatorname {Hom} } {A, B}$ be a morphism.
Then:














\(\ds \map {\eta_B} f\)

\(=\)







\(\ds \map {\eta_B} {f \circ I_A}\)





Definition of Identity Morphism














\(\ds \)

\(=\)







\(\ds \map {\eta_B} {\map {\paren {\map {h^A} f} } {I_A} }\)





Definition of Covariant Hom Functor














\(\ds \)

\(=\)







\(\ds \map {\map F f} {\map {\eta_A} {I_A} }\)





Definition of Natural Transformation



which shows that $\eta$ is determined by $\map {\eta_A} {I_A} = \map \alpha \eta$.
$\Box$


Surjectivity
Let $u \in \map F A$.
Inspired by the result above, we define $\map \beta u = \eta$ by $\map {\eta_B} f = \map {\map F f} u$ for $B \in C$ and $f \in \map {\operatorname {Hom} } {A, B}$.
Let $B, D \in C$ and $g: B \to D$ be a morphism.
We have to show that the following diagram commutes:

$\xymatrix{
\map {\operatorname {Hom} } {A, B} \ar[d]^{\eta_B} \ar[r]^{g_*} & \map {\operatorname {Hom} } {A, D} \ar[d]^{\eta_D} \\
F(B) \ar[r]^{\map F g}          & \map F D}$
where $g_* = \map {\operatorname {Hom} } {A, g}$ is the postcomposition mapping.
Let $f \in \map {\operatorname {Hom} } {A, B}$.
We have:














\(\ds \map {\eta_D} {\map {g_*} f}\)

\(=\)







\(\ds \map {\eta_D} {g \circ f}\)





Definition of Postcomposition Mapping














\(\ds \)

\(=\)







\(\ds \map {\map F {g \circ f} } u\)









and:














\(\ds \map F g (\map {\eta_B} f)\)

\(=\)







\(\ds \map {\map F g} {\map {\map F f} u}\)




















\(\ds \)

\(=\)







\(\ds \map {\map F {g \circ f} } u\)





Definition of Covariant Functor, applied to $F$



$\Box$


Reverse bijections
By construction, $\map \beta {\map \alpha \eta} = \eta$ for all $\eta \in \map {\operatorname {Nat} } {h^A, F}$.
It remains to show that $\map \alpha {\map \beta u} = u$ for all $u \in \map F A$.
Let $\eta = \map \beta u$.
Then














\(\ds \map \alpha \eta\)

\(=\)







\(\ds \map {\eta_A} {I_A}\)




















\(\ds \)

\(=\)







\(\ds \map {\map F {I_A} } u\)




















\(\ds \)

\(=\)







\(\ds \map {I_{\map F A} } u\)





Definition of Functor














\(\ds \)

\(=\)







\(\ds u\)





Definition of Identity Mapping



$\blacksquare$


Also see
Bijection in Yoneda Lemma for Contravariant Functors




