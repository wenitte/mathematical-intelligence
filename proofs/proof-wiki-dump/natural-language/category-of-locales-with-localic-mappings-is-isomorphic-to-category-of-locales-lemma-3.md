# 

Source: https://proofwiki.org/wiki/Category_of_Locales_with_Localic_Mappings_is_Isomorphic_to_Category_of_Locales/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $\mathbf{Loc}$ denote the category of locales.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Let $F : \mathbf{Loc} \to \mathbf{Loc_*}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map F L = L$
for each continuous map $f : L_1 \to L_2$ of $\mathbf{Loc} : \map F f = \upperadjoint f$
where:

$\upperadjoint f: L_1 \to L_2$ denotes the upper adjoint of the frame homomorphism $\loweradjoint f : L_2 \to L_1$
$f = \paren{\loweradjoint f}^{\operatorname{op}}$

Let $G : \mathbf{Loc_*} \to \mathbf{Loc}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map G L = L$
for each localic mapping $g : L_1 \to L_2$ of $\mathbf{Loc_*} : \map G g = \paren{\loweradjoint g}^{\operatorname{op}}$
where:

$\loweradjoint g : L_2 \to L_1$ denotes the frame homomorphism that is the lower adjoint of the localic mapping $g$
$\paren{\loweradjoint g}^{\operatorname{op}}$ denotes the opposite morphism of the frame homomorphism

Then:

$GF = \operatorname{id}_{\mathbf {Loc}}$


Proof
By definition of $\mathbf{Loc}$ and $\mathbf {Loc_*}$ the objects of $\mathbf{Loc}$ are the objects of $\mathbf{Loc_*}$.
The object functors of $F$ and $G$ are the identity object functor and so $GF$ is the identity object functor.

Let $f : L_1 \to L_2$ be a continuous map of $\mathbf{Loc}$.
By definition of continuous map:

there exists a frame homomorphism $\loweradjoint f : L_2 \to L_1$ such that $f = \paren{\loweradjoint f}^{\operatorname{op}}$.
From Frame Homomorphism is Lower Adjoint of Galois Connection:

there exists an upper adjoint $\upperadjoint f$ such that $\tuple{\upperadjoint f, \loweradjoint f}$ is a Galois connection.

We have:














\(\ds GF f\)

\(=\)







\(\ds \map G {Ff}\)





Definition of Composition of Functors














\(\ds \)

\(=\)







\(\ds \map G {\upperadjoint f}\)





definition of $F$














\(\ds \)

\(=\)







\(\ds \paren{\loweradjoint f}^{\operatorname{op} }\)





definition of $G$














\(\ds \)

\(=\)







\(\ds f\)





Definition of Continuous Map




Hence $GF$ is the identity morphism functor.

The result follows.
$\blacksquare$





