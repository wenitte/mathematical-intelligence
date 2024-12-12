# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subset



Theorem
The following definitions of the concept of Normal Subset are equivalent:

Definition 1
$\forall g \in G: g \circ S = S \circ g$
Definition 2
$\forall g \in G: g \circ S \circ g^{-1} = S$
or, equivalently:

$\forall g \in G: g^{-1} \circ S \circ g = S$
Definition 3
$\forall g \in G: g \circ S \circ g^{-1} \subseteq S$
or, equivalently:

$\forall g \in G: g^{-1} \circ S \circ g \subseteq S$
Definition 4
$\forall g \in G: S \subseteq g \circ S \circ g^{-1}$
or, equivalently:

$\forall g \in G: S \subseteq g^{-1} \circ S \circ g$
Definition 5
$\forall x, y \in G: x \circ y \in S \implies y \circ x \in S$
Definition 6
$\map {N_G} S = G$
where $\map {N_G} S$ denotes the normalizer of $S$ in $G$.

Definition 7
$\forall g \in G: g \circ S \subseteq S \circ g$
or:

$\forall g \in G: S \circ g \subseteq g \circ S$


Proof
Definition 1 is Equivalent to Definition 2
Let $e$ be the identity of $G$.
First note that:

$(4): \quad \paren {\forall g \in G: g \circ S \circ g^{-1} = S} \iff \paren {\forall g \in G: g^{-1} \circ S \circ g = S}$
which is shown by, for example, setting $h := g^{-1}$ and substituting.


Necessary Condition
Suppose that $S$ satisfies $(1)$.

Let $g \in G$.
Then:














\(\ds g \circ S\)

\(=\)







\(\ds S \circ g\)





$(1)$








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ g^{-1}\)

\(=\)







\(\ds \paren {S \circ g} \circ g^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S \circ \paren {g \circ g^{-1} }\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S \circ e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S\)





Subset Product by Identity Singleton








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ S \circ g\)

\(=\)







\(\ds S\)





$(4)$



$\Box$


Sufficient Condition
Suppose that $S$ satisfies $(2)$ or $(3)$.
By $(4)$, as long as one of these statements holds, the other one holds as well.

Let $g \in G$.
Then:














\(\ds g \circ S \circ g^{-1}\)

\(=\)







\(\ds S\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S \circ g^{-1} } \circ g\)

\(=\)







\(\ds S \circ g\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ \paren {g^{-1} \circ g}\)

\(=\)







\(\ds S \circ g\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ S} \circ e\)

\(=\)







\(\ds S \circ g\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ S\)

\(=\)







\(\ds S \circ g\)





Subset Product by Identity Singleton



$\blacksquare$


Definition 2 Implies Definition 3
We have that:

$\left({\forall g \in G: g \circ S \circ g^{-1} = S}\right) \iff \left({\forall g \in G: g^{-1} \circ S \circ g = S}\right)$
The result follows by definition of set equality.
$\blacksquare$


Definition 3 is Equivalent to Definition 4
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


Definitions 3 and 4 imply Definition 2
By Equivalence of Definitions of Normal Subset: 3 iff 4, $S$ being a normal subset of $G$ by Definition 3 and Definition 4 implies that the following hold:

$(1)\quad \forall g \in G: g \circ S \circ g^{-1} \subseteq S$
$(2)\quad \forall g \in G: g^{-1} \circ S \circ g \subseteq S$
$(3)\quad \forall g \in G: S \subseteq g \circ S \circ g^{-1}$
$(4)\quad \forall g \in G: S \subseteq g^{-1} \circ S \circ g$
By $(1)$ and $(3)$ and definition of set equality:

$\forall g \in G: g \circ S \circ g^{-1} = S$
By $(2)$ and $(4)$ and definition of set equality:

$\forall g \in G: g^{-1} \circ S \circ g = S$
$\blacksquare$


Definition 3 is Equivalent to Definition 5
3 implies 5
Suppose that $S$ is a normal subset of $G$ by Definition 3.
That is:

$\forall g \in G: g^{-1} \circ S \circ g \subseteq S$.

Let $x, y \in G$ such that $x \circ y \in S$.
Then:














\(\ds y \circ x\)

\(=\)







\(\ds e \circ \paren {y \circ x}\)





Group Axiom $\text G 2$: Existence of Identity Element














\(\ds \)

\(=\)







\(\ds \paren {x^{-1} \circ x} \circ \paren {y \circ x}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds x^{-1} \circ \paren {x \circ y} \circ x\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds y \circ x\)

\(\in\)







\(\ds x^{-1} \circ S \circ x\)





$x \circ y \in S$








\(\ds \leadsto \ \ \)





\(\ds y \circ x\)

\(\in\)







\(\ds S\)





by hypothesis: Definition 3 of Normal Subset



$\Box$


5 implies 3
Suppose that $S$ is a normal subset of $G$ by Definition 5.
That is:

$\forall x, y \in G: x \circ y \in S \implies y \circ x \in S$

Let $g \in G$.
Then:










\(\ds \forall x \in S: \, \)



\(\ds e \circ x \circ e\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g \circ g^{-1} } \circ x \circ \paren {g \circ g^{-1} }\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 3$: Existence of Inverse Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds g \circ \paren {g^{-1} \circ x \circ g \circ g^{-1} }\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g \circ g^{-1} } \circ g\)

\(\in\)







\(\ds S\)





by hypothesis: Definition 5 of Normal Subset








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g} \circ \paren {g^{-1} \circ g}\)

\(\in\)







\(\ds S\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \paren {g^{-1} \circ x \circ g} \circ e\)

\(\in\)







\(\ds S\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds g^{-1} \circ x \circ g\)

\(\in\)







\(\ds S\)





Definition of Identity Element








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ S \circ g\)

\(\subseteq\)







\(\ds S\)





Definition of Subset Product



$\blacksquare$



This theorem requires a proof.In particular: Include equivalence to definitions 6 and 7You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




