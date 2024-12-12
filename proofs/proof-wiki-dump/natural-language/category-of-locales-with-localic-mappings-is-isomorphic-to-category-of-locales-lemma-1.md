# 

Source: https://proofwiki.org/wiki/Category_of_Locales_with_Localic_Mappings_is_Isomorphic_to_Category_of_Locales/Lemma_1


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\mathbf{Loc}$ denote the category of locales.
Let $\mathbf{Loc_*}$ denote the category of locales with localic mappings.

Let $F : \mathbf{Loc} \to \mathbf{Loc_*}$ be defined by:

for each locale $L$ of $\mathbf{Loc_*} : \map F L = L$
for each continuous map $f : L_1 \to L_2$ of $\mathbf{Loc} : \map F f = f_*$
where:

$f_* : L_1 \to L_2$ denotes the upper adjoint of the frame homomorphism $f^* : L_2 \to L_1$
$f = \paren{f^*}^{\operatorname{op}}$

Then:

$F : \mathbf{Loc} \to \mathbf{Loc_*}$ is a well-defined covariant functor


Proof
$F$ is Well-defined
By definition of $\mathbf{Loc}$ and $\mathbf {Loc_*}$ the objects of $\mathbf{Loc}$ are the objects of $\mathbf{Loc_*}$.
The object functor of $F$ is the identity object functor and so is well-defined.

Let $f : L_1 \to L_2$ be a continuous map of $\mathbf{Loc}$.
By definition of continuous map:

there exists a frame homomorphism $\loweradjoint f : L_2 \to L_1$ such that $f = \paren{\loweradjoint f}^{\operatorname{op}}$.
From Frame Homomorphism is Lower Adjoint of Galois Connection:

there exists an upper adjoint $\upperadjoint f$ such that $\tuple{\upperadjoint f, \loweradjoint f}$ is a Galois connection.

From Galois Connection is Unique for Given Lower Adjoint, it follows that $\loweradjoint f$ is unique.
Hence the morphism functor of $F$ is well-defined.
$\Box$


$F$ Preserves Composition of Morphisms
Let $L_1, L_2, L_3$ be locales.
Let $f : L_1 \to L_2, g : L_2 \to L_3$ be a continuous maps of $\mathbf{Loc}$.

Let $\tuple{\upperadjoint f, \loweradjoint f}$ be the Galois connection such that:

$f = \paren{\loweradjoint f}^{\operatorname{op}}$
$\map F f = \upperadjoint f$

Let $\tuple{\upperadjoint g, \loweradjoint g}$ be the Galois connection such that:

$g = \paren{\loweradjoint g}^{\operatorname{op}}$
$\map F g = \upperadjoint g$

Let $\tuple{\upperadjoint {\paren{g \circ f}}, \loweradjoint {\paren{g \circ f}}}$ be the Galois connection such that:

$g \circ f = \paren{\loweradjoint {\paren{g \circ f}}}^{\operatorname{op}}$
$\map F {g \circ f} = \upperadjoint {\paren{g \circ f}}$

We have:














\(\ds \map F {g \circ f}\)

\(=\)







\(\ds \upperadjoint {\paren{g \circ f} }\)




















\(\ds \)

\(=\)







\(\ds \upperadjoint g \circ \upperadjoint f\)





Composition of Galois Connections is Galois Connection














\(\ds \)

\(=\)







\(\ds \map F g \circ \map F f\)










Hence $F$ preserves composition.
$\Box$


$F$ Preserves Identity Morphisms
Let $L$ be a locale.
Let $\operatorname{id}_L : L \to L$ be the identity mapping on  $L$.

Let $\tuple{\upperadjoint {\paren{\operatorname{id}_L}}, \loweradjoint {\paren{\operatorname{id}_L}}}$ be the Galois connection such that:

$\operatorname{id}_L = \paren{\loweradjoint {\paren{\operatorname{id}_L}}}^{\operatorname{op}}$
$\map F {\operatorname{id}_L} = \upperadjoint {\paren{\operatorname{id}_L}}$

By definition of dual category:

$\operatorname{id}_L = \paren{\operatorname{id}_L}^{\operatorname{op}}$
So:

$\paren{\operatorname{id}_L}^{\operatorname{op}} = \paren{\loweradjoint {\paren{\operatorname{id}_L}}}^{\operatorname{op}}$

By definition of dual category:

$\operatorname{id}_L = \loweradjoint {\paren{\operatorname{id}_L}}$

From Identity Mapping forms Galois Connection:

$\tuple{\operatorname{id}_L, \operatorname{id}_L}$ is a Galois connection

From Galois Connection is Unique for Given Lower Adjoint:

$\tuple{\upperadjoint {\paren{\operatorname{id}_L}}, \loweradjoint {\paren{\operatorname{id}_L}}} = \tuple{\operatorname{id}_L, \operatorname{id}_L}$

We have:














\(\ds \map F {\operatorname{id}_L}\)

\(=\)







\(\ds \upperadjoint {\paren{\operatorname{id}_L} }\)




















\(\ds \)

\(=\)







\(\ds \operatorname{id}_L\)




















\(\ds \)

\(=\)







\(\ds \operatorname{id}_{\map F L}\)





definition of object functor of $F$




Hence $F$ preserves identities.
$\Box$

The result follows.
$\blacksquare$





