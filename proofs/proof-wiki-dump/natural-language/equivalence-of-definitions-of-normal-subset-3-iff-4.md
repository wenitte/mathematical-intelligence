# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subset/3_iff_4


This article needs to be tidied.In particular: links mainlyPlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $\struct {G,\circ}$ be a group.
Let $S \subseteq G$.

Then:

$S$ is a normal subset of $G$ by Definition 3
if and only if:

$S$ is a normal subset of $G$ by Definition 4.

That is, the following conditions are equivalent:

$(1) \quad \forall g \in G: g \circ S \circ g^{-1} \subseteq S$
$(2) \quad \forall g \in G: g^{-1} \circ S \circ g \subseteq S$
$(3) \quad \forall g \in G: S \subseteq g \circ S \circ g^{-1}$
$(4) \quad \forall g \in G: S \subseteq g^{-1} \circ S \circ g$


Proof
First note that:

$(5): \quad \paren {\forall g \in G: g \circ S \circ g^{-1} \subseteq S} \iff \paren {\forall g \in G: g^{-1} \circ S \circ g \subseteq S}$
$(6): \quad \paren {\forall g \in G: S \subseteq g \circ S \circ g^{-1}} \iff \paren {\forall g \in G: S \subseteq g^{-1} \circ S \circ g}$
which is shown by, for example, setting $h := g^{-1}$ and substituting.
Therefore:

conditions $(1)$ and $(2)$ are equivalent
and:

conditions $(3)$ and $(4)$ are equivalent.
It remains to be shown that condition $(1)$ is equivalent to condition $(3)$.

Suppose that $(1)$ holds.
Then:










\(\ds \forall g \in G: \, \)



\(\ds g \circ S \circ g^{-1}\)

\(\subseteq\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ \paren {g \circ S \circ g^{-1} }\)

\(\subseteq\)







\(\ds g^{-1} \circ S\)





Subset Relation is Compatible with Subset Product/Corollary 2








\(\ds \leadsto \ \ \)





\(\ds S \circ g^{-1}\)

\(\subseteq\)







\(\ds g^{-1} \circ S\)





Subset Product within Semigroup is Associative/Corollary and the definition of inverse








\(\ds \leadsto \ \ \)





\(\ds \paren {S \circ g^{-1} } \circ g\)

\(\subseteq\)







\(\ds \paren { g^{-1} \circ S} \circ g\)





Subset Relation is Compatible with Subset Product/Corollary 2








\(\ds \leadsto \ \ \)





\(\ds S\)

\(\subseteq\)







\(\ds g^{-1} \circ S \circ g\)





Subset Product within Semigroup is Associative/Corollary and the definition of inverse



Thus condition $(1)$ implies condition $(3)$.
The exact same argument, substituting $\supseteq$ for $\subseteq$ and using Superset Relation is Compatible with Subset Product instead of Subset Relation is Compatible with Subset Product proves that $(3)$ implies $(1)$.


This article, or a section of it, needs explaining.In particular: the necessary corollary is currently only available in subset form, but these arguments are all the same.  Alternatively, the exact same method can be used to move the gs from the right to the left as was used to move them from the left to the right.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\blacksquare$





