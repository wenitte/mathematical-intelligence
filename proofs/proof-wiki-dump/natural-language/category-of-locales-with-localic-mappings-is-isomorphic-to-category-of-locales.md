# 

Source: https://proofwiki.org/wiki/Category_of_Locales_with_Localic_Mappings_is_Isomorphic_to_Category_of_Locales


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Loc}$ denote the category of locales.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Then:

$\mathbf{Loc_*}$ is isomorphic to $\mathbf{Loc}$.


Proof
By definitions of category of locales and category of locales with localic mappings:

the objects of $\mathbf{Loc}$ and $\mathbf{Loc_*}$ are locales
the morphisms of $\mathbf{Loc}$ are continuous maps
the morphisms of $\mathbf{Loc_*}$ are localic mappings
By definition of continuous maps:

$f : L_1 \to L_2$ is a continuous map if and only if there exists a frame homomorphism $f^* : L_2 \to L_1 :$
$f = \paren{f^*}^{\operatorname{op}}$
By definition of localic mapping:

$g : L_1 \to L_2$ is a localic mapping if and only if there exists a frame homomorphism $g^* : L_2 \to L_1 :$
$\tuple{g, g^*}$ is a Galois connection

Let $F : \mathbf{Loc} \to \mathbf{Loc_*}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map F L = L$
for each continuous map $f : L_1 \to L_2$ of $\mathbf{Loc} : \map F f = f_*$
where:

$f_* : L_1 \to L_2$ denotes the upper adjoint of the frame homomorphism $f^* : L_2 \to L_1$
$f = \paren{f^*}^{\operatorname{op}}$
Lemma 1
$F : \mathbf{Loc} \to \mathbf{Loc_*}$ is a well-defined covariant functor
$\Box$

Let $G : \mathbf{Loc_*} \to \mathbf{Loc}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map G L = L$
for each localic mapping $g : L_1 \to L_2$ of $\mathbf{Loc_*} : \map G g = \paren{g^*}^{\operatorname{op}}$
where:

$g^* : L_2 \to L_1$ denotes the frame homomorphism that is the lower adjoint of the localic mapping $g$
$\paren{g^*}^{\operatorname{op}}$ denotes the opposite morphism of the frame homomorphism
Lemma 2
$G : \mathbf{Loc_*} \to \mathbf{Loc}$ is a well-defined covariant functor
$\Box$


Lemma 3
$GF = \operatorname{id}_{\mathbf {Loc}}$
$\Box$


Lemma 4
$FG = \operatorname{id}_{\mathbf {Loc_*}}$
$\Box$

It follows that $F$ is an isomorphism of categories by definition.
Hence $\mathbf{Loc_*}$ is isomorphic to $\mathbf{Loc}$.
$\blacksquare$


Sources
2012: Jorge Picado and Aleš Pultr: Frames and Locales: Chapter II: Frames and Locales. Spectra, $\S 2.2$




