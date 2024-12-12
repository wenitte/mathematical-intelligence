# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Projective_Module


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This page has been identified as a candidate for refactoring of advanced complexity.In particular: Complete rewrite into house style. This style of equivalence page is for establishing the equivalence of definitions, and there is only one definition of projective modules.We will have 2 pages: Projective Module is Projective Object in Category of Left A-Modules and Short Exact Sequence ending in Projective Module SplitsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $A$ be a ring.
Let $M$ be an $A$-module.
The following are equivalent:

$(1): \quad$ $M$ is a projective module, that is, $M$ is a projective object in the category of left $A$-modules.
$(2): \quad$ $M$ is a direct summand of a free module.
$(3): \quad$ Every short exact sequence of the form:
$\xymatrix{
0 \ar[r] & X \ar[r]^f & Y \ar[r]^g & M \ar[r] & 0
}$
splits, that is, there is a homomorphism $s : M \to Y$ with $g \circ s = \operatorname {id}_M$.


Proof
$(1)$ implies $(2)$
By Surjection by Free Module there is a free module $Y$ and a surjection $g : Y \to M$.
By Epimorphism of modules iff surjective $g$ is an epimorphism.
By Definition:Projective Object applied to $\operatorname {id}_M$, there is a homomorphism $s : M \to Y$ with $g \circ s = \operatorname {id}_M$.
We have $Y = \map {\operatorname {im} } s \oplus \map \ker g$.
$\Box$


$(2)$ implies $(1)$
Assume that there is an $A$-module $Q$ such that $M \oplus Q$ is free.
Let $f : Y \to Z$ be an epimorphism.
Let $h : M \to Z$ be a homomorphism.
Let $S$ be a basis of $M \oplus Q$.
By Epimorphism of modules iff surjective $f$ is surjective.
Hence for all $s \in S$, there is some $y_s \in Y$ with $\map f {y_s} = \map h {\map {\pr_1} s}$, where $\pr_1: M \oplus Q \to M$ denotes projection to $M$.
By Universal Property of Free Modules there is a unique homomorphism $t : M \oplus Q \to Y$, such that $f \circ t = h \circ \pr_1$.
We have $f \circ (t \circ i_1) = h \circ \pr_1 \circ i_1 = h$, where $i_1 : M \to M \oplus Q$ is the inclusion of the first summand.
It follows, that $t \circ i_1$ is the desired lift of $f$.
$\Box$


$(2)$ implies $(3)$
Assume that there is an $A$-module $Q$ such that $M \oplus Q$ is free.
Consider a short exact sequence $\xymatrix{
0 \ar[r] & X \ar[r]^f & Y \ar[r]^g & M \ar[r] & 0
}$.
Let $M \oplus Q \xrightarrow r M$ be the canonical projection.
We will construct a lift of $r$ across $g$.
Let $\set {e_i}_{i \mathop \in I}$ be a basis of $M \oplus Q$.
Let $m_i = \map r {e_i}$ and choose a $b_i \in \map {g^{-1}} {m_i}$ for each $i \in I$.
By the Universal Property of Free Module on Set, there exists a morphism $\phi: M \oplus Q \to B$ such that $\map \phi {e_i} = b_i$ for all $i \in I$.
For all $i \in I$, the image of $e_i$ under $M \oplus Q \xrightarrow \phi B \xrightarrow g M$ is, by construction, $m_i$.
Likewise for $M \oplus Q \xrightarrow r M$.
Therefore, by the Universal Property of Free Module on Set, $r = g \circ \phi$.
Now restrict along the canonical inclusion $M \xrightarrow s M \oplus Q$, which is a section of $r$.
We obtain $1_P = r \circ s = g \circ \phi \circ s$.
Therefore $\phi s$ is a section of $g$.
$\Box$


$(3)$ implies $(2)$
By Surjection by Free Module there is a free module $Y$ and a surjection $g : Y \to M$.
There is a short exact sequence:
$\xymatrix{
0 \ar[r] & \map \ker g \ar[r] & Y \ar[r]^g & M \ar[r] & 0
}$
By Structure of Split Exact Sequence there is an isomorphism $Y \cong M \oplus \map \ker g$.
$\blacksquare$





