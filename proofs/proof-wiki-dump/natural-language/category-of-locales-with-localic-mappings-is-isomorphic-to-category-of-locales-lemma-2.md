# 

Source: https://proofwiki.org/wiki/Category_of_Locales_with_Localic_Mappings_is_Isomorphic_to_Category_of_Locales/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Loc}$ denote the category of locales.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Let $G : \mathbf{Loc_*} \to \mathbf{Loc}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map G L = L$
for each localic mapping $g : L_1 \to L_2$ of $\mathbf{Loc_*} : \map G g = \paren{\loweradjoint g}^{\operatorname{op}}$
where:

$\loweradjoint g : L_2 \to L_1$ denotes the frame homomorphism that is the lower adjoint of the localic mapping $g$
$\paren{\loweradjoint g}^{\operatorname{op}}$ denotes the opposite morphism of the frame homomorphism

Then:

$G : \mathbf{Loc_*} \to \mathbf{Loc}$ is a well-defined covariant functor


Proof
$G$ is Well-defined
By definition of $\mathbf{Loc_*}$ and $\mathbf {Loc}$ the objects of $\mathbf{Loc_*}$ are the objects of $\mathbf{Loc}$.
The object functor of $G$ is the identity object functor and so is well-defined.

Let $g : L_1 \to L_2$ be a localic mapping of $\mathbf{Loc_*}$.
By definition of localic mapping:

there exists a Galois connection $\tuple{\upperadjoint g, \loweradjoint g}$ such that $g = \upperadjoint g$ and $\loweradjoint g$ is a frame homomorphism.

From Galois Connection is Unique for Given Upper Adjoint, it follows that the Galois connection $\tuple{\upperadjoint g, \loweradjoint g}$ is unique.

By definition of dual category:

$\paren{\loweradjoint g}^{\operatorname{op}}$ is a morphism of $\mathbf {Loc}$.
Hence the morphism functor of $G$ is well-defined.
$\Box$


$G$ Preserves Composition of Morphisms
Let $L_1, L_2, L_3$ be locales.
Let $g : L_1 \to L_2, h : L_2 \to L_3$ be localic mappings of $\mathbf{Loc_*}$.

Let $\tuple{\upperadjoint g, \loweradjoint g}$ be the Galois connection such that:

$g = \upperadjoint g$
$\map G g = \paren{\loweradjoint g}^{\operatorname{op} }$

Let $\tuple{\upperadjoint h, \loweradjoint h}$ be the Galois connection such that:

$h = \upperadjoint h$
$\map G h = \paren{\loweradjoint h}^{\operatorname{op} }$

Let $\tuple{\upperadjoint {\paren{h \circ g}}, \loweradjoint {\paren{h \circ g}}}$ be the Galois connection such that:

$h \circ g = \upperadjoint {\paren{h \circ g}}$
$\map G {h \circ g} = \paren{\loweradjoint {\paren{h \circ g}}}^{\operatorname{op} }$

We have:














\(\ds \map G {h \circ g}\)

\(=\)







\(\ds \paren{\loweradjoint {\paren{h \circ g} } }^{\operatorname{op} }\)





Definition of $G$














\(\ds \)

\(=\)







\(\ds \paren{\loweradjoint g \circ \loweradjoint h }^{\operatorname{op} }\)





Composition of Galois Connections is Galois Connection














\(\ds \)

\(=\)







\(\ds \paren{\loweradjoint h}^{\operatorname{op} } \circ \paren{\loweradjoint g} ^{\operatorname{op} }\)





Definition of Dual Category














\(\ds \)

\(=\)







\(\ds \map G h \circ \map G g\)





Definition of $G$




Hence $G$ preserves composition.
$\Box$


$G$ Preserves Identity Morphisms
Let $L$ be a locale.
Let $\operatorname{id}_L : L \to L$ be the identity mapping on  $L$.

Let $\tuple{\upperadjoint {\operatorname{id}_L}, \loweradjoint {\operatorname{id}_L}}$ be the Galois connection such that:

$\operatorname{id}_L = \upperadjoint {\paren{\operatorname{id}_L}}$
$\map G {\operatorname{id}_L} = \paren{\loweradjoint {\paren{\operatorname{id}_L}}}^{\operatorname{op} }$

From Identity Mapping forms Galois Connection:

$\tuple{\operatorname{id}_L, \operatorname{id}_L}$ is a Galois connection

From Galois Connection is Unique for Given Lower Adjoint:

$\tuple{\upperadjoint {\paren{\operatorname{id}_L}}, \loweradjoint {\paren{\operatorname{id}_L}}} = \tuple{\operatorname{id}_L, \operatorname{id}_L}$

We have:














\(\ds \map G {\operatorname{id}_L}\)

\(=\)







\(\ds \paren{\loweradjoint {\paren{\operatorname{id}_L} } }^{\operatorname{op} }\)




















\(\ds \)

\(=\)







\(\ds \paren{\operatorname{id}_L}^{\operatorname{op} }\)




















\(\ds \)

\(=\)







\(\ds \operatorname{id}_L\)





Definition of Dual Category














\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\map G L}\)





definition of object functor of $G$



$\Box$

Hence $G$ preserves identities.
$\Box$

The result follows.
$\blacksquare$





