# 

Source: https://proofwiki.org/wiki/Category_of_Locales_with_Localic_Mappings_is_Isomorphic_to_Category_of_Locales/Lemma_4


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\mathbf{Loc}$ denote the category of locales.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Let $F : \mathbf{Loc} \to \mathbf{Loc_*}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map F L = L$
for each continuous map $f : L_1 \to L_2$ of $\mathbf{Loc} : \map G f = f_*$
where:

$f_* : L_1 \to L_2$ denotes the upper adjoint of the frame homomorphism $f^* : L_2 \to L_1$
$f = \paren{f^*}^{\operatorname{op}}$

Let $G : \mathbf{Loc_*} \to \mathbf{Loc}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map G L = L$
for each localic mapping $g : L_1 \to L_2$ of $\mathbf{Loc_*} : \map G g = \paren{g^*}^{\operatorname{op}}$
where:

$g^* : L_2 \to L_1$ denotes the frame homomorphism that is the lower adjoint of the localic mapping $g$
$\paren{g^*}^{\operatorname{op}}$ denotes the opposite morphism of the frame homomorphism

Then:

$FG = \operatorname{id}_{\mathbf {Loc_*}}$


Proof
By definition of $\mathbf{Loc_*}$ and $\mathbf {Loc}$ the objects of $\mathbf{Loc_*}$ are the objects of $\mathbf{Loc}$.
The object functors of $G$ and $F$ are the identity object functor and so $FG$ is the identity object functor.

Let $g : L_1 \to L_2$ be a localic mapping of $\mathbf{Loc_*}$.
By definition of localic mapping:

there exists a Galois connection $\tuple{\upperadjoint g, \loweradjoint g}$ such that $g = \upperadjoint g$ and $\loweradjoint g$ is a frame homomorphism.

We have:














\(\ds FG g\)

\(=\)







\(\ds \map F {Gg}\)





Definition of Composition of Functors














\(\ds \)

\(=\)







\(\ds \map F {\paren{\loweradjoint g}^{\operatorname{op} } }\)





definition of $G$














\(\ds \)

\(=\)







\(\ds \upperadjoint g\)





definition of $F$














\(\ds \)

\(=\)







\(\ds g\)





Definition of Localic Mapping




Hence $FG$ is the identity morphism functor.

The result follows.
$\blacksquare$





