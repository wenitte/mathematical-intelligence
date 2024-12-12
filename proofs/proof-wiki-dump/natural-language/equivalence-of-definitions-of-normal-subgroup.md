# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Normal_Subgroup


This page has been identified as a candidate for refactoring of advanced complexity.In particular: Use extension to prettify headersUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $G$ be a group.
Let $N$ be a subgroup of $G$.

The following definitions of the concept of Normal Subgroup are equivalent:

Definition 1
$\forall g \in G: g \circ N = N \circ g$
Definition 2
Every right coset of $N$ in $G$ is a left coset
that is:

The right coset space of $N$ in $G$ equals its left coset space.
Definition 3









\(\ds \forall g \in G: \, \)



\(\ds g \circ N \circ g^{-1}\)

\(\subseteq\)







\(\ds N\)
















\(\ds \forall g \in G: \, \)



\(\ds g^{-1} \circ N \circ g\)

\(\subseteq\)







\(\ds N\)









Definition 4









\(\ds \forall g \in G: \, \)



\(\ds N\)

\(\subseteq\)







\(\ds g \circ N \circ g^{-1}\)
















\(\ds \forall g \in G: \, \)



\(\ds N\)

\(\subseteq\)







\(\ds g^{-1} \circ N \circ g\)









Definition 5









\(\ds \forall g \in G: \, \)



\(\ds N\)

\(=\)







\(\ds g \circ N \circ g^{-1}\)
















\(\ds \forall g \in G: \, \)



\(\ds N\)

\(=\)







\(\ds g^{-1} \circ N \circ g\)









Definition 6









\(\ds \forall g \in G: \, \)



\(\ds \leftparen {n \in N}\)

\(\iff\)







\(\ds \rightparen {g \circ n \circ g^{-1} \in N}\)
















\(\ds \forall g \in G: \, \)



\(\ds \leftparen {n \in N}\)

\(\iff\)







\(\ds \rightparen {g^{-1} \circ n \circ g \in N}\)









Definition 7
$N$ is a normal subset of $G$.


Proof
Definition 1 iff Definition 2: Subgroup is Normal iff Left Cosets are Right Cosets
Necessary Condition
Let $N$ be a normal subgroup of $G$ by Definition 1.
Then the equality of the coset spaces follows directly from definition of normal subgroup and coset.
$\Box$


Sufficient Condition
Suppose that every right coset of $N$ in $G$ is a left coset of $N$ in $G$.
Let $g \in G$.
Since every right coset of $N$ in $G$ is a left coset, there exists an $h \in G$ such that $N \circ g = h \circ N$.
By Element of Group is in its own Coset:

$g \in N \circ g = h \circ N$
From Element in Left Coset iff Product with Inverse in Subgroup:

$g^{-1} \circ h \in N$
Then:














\(\ds N \circ g\)

\(=\)







\(\ds \paren {g \circ g^{-1} } \circ \paren {h \circ N}\)





Definition of Inverse Element and Coset by Identity














\(\ds \)

\(=\)







\(\ds g \circ \paren {\paren { g^{-1} \circ h } \circ N}\)





Subset Product within Semigroup is Associative: Corollary














\(\ds \)

\(=\)







\(\ds g \circ N\)





$g^{-1} \circ h \in N$ and Left Coset Equals Subgroup iff Element in Subgroup



Since this holds for all $g \in G$, $N$ is normal in $G$ (by definition 1).
$\blacksquare$


Definition 1 iff Definition 3: Subgroup is Superset of Conjugate iff Normal
By definition, a subgroup is normal in $G$ if and only if:

$\forall g \in G: g \circ N = N \circ g$

First note that:

$(1): \quad \paren {\forall g \in G: g \circ N \circ g^{-1} \subseteq N} \iff \paren {\forall g \in G: g^{-1} \circ N \circ g \subseteq N}$
which is shown by, for example, setting $h := g^{-1}$ and substituting.


Necessary Condition
Suppose that $N$ is normal in $G$.
Then:










\(\ds \forall g \in G: \, \)



\(\ds g \circ N\)

\(=\)







\(\ds N \circ g\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds N \circ g\)





Definition of Set Equality








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ N} \circ g^{-1}\)

\(\subseteq\)







\(\ds \paren {N \circ g} \circ g^{-1}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds g \circ N \circ g^{-1}\)

\(\subseteq\)







\(\ds N \circ \paren {g \circ g^{-1} }\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds g \circ N \circ g^{-1}\)

\(\subseteq\)







\(\ds N \circ e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ N \circ g^{-1}\)

\(\subseteq\)







\(\ds N\)





Coset by Identity




Similarly:


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Do not repeat this verification again. This part was done at the beginning of the proof. If it is true for all $g$, of course true for all $g^{-1}$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.









\(\ds \forall g \in G: \, \)



\(\ds N \circ g\)

\(=\)







\(\ds g \circ N\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds g \circ N\)





Definition of Set Equality








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ \paren {N \circ g}\)

\(\subseteq\)







\(\ds g^{-1} \circ \paren {g \circ N}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ N \circ g\)

\(\subseteq\)







\(\ds \paren {g^{-1} \circ g} \circ N\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ N \circ g\)

\(\subseteq\)







\(\ds e \circ N\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ N \circ g\)

\(\subseteq\)







\(\ds N\)





Coset by Identity



$\Box$


Sufficient Condition
Let $N$ be a subgroup of $G$ such that:

$\forall g \in G: g \circ N \circ g^{-1} \subseteq N$
and so from $(1)$ above:

$\forall g \in G: g^{-1} \circ N \circ g \subseteq N$

Then:










\(\ds \forall g \in G: \, \)



\(\ds g \circ N \circ g^{-1}\)

\(\subseteq\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ N \circ g^{-1} } \circ g\)

\(\subseteq\)







\(\ds N \circ g\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ N} \circ \paren {g^{-1} \circ g}\)

\(\subseteq\)







\(\ds N \circ g\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ N} \circ e\)

\(\subseteq\)







\(\ds N \circ g\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds N \circ g\)





Coset by Identity




Similarly:


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Do not repeat this verification again. This part was done at the beginning of the proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.









\(\ds \forall g \in G: \, \)



\(\ds g^{-1} \circ N \circ g\)

\(\subseteq\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds g \circ \paren {g^{-1} \circ N \circ g}\)

\(\subseteq\)







\(\ds g \circ N\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren {g \circ g^{-1} } \circ \paren {N \circ g}\)

\(\subseteq\)







\(\ds g \circ N\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds e \circ \paren {N \circ g}\)

\(\subseteq\)







\(\ds g \circ N\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds g \circ N\)





Coset by Identity




Thus we have:

$N \circ g \subseteq g \circ N$
$g \circ N \subseteq N \circ g$
By definition of set equality:

$g \circ N = N \circ g$
Hence the result.
$\blacksquare$


Definition 1 iff Definition 4: Subgroup is Subset of Conjugate iff Normal
By definition, a subgroup is normal in $G$ if and only if:

$\forall g \in G: g \circ N = N \circ g$

First note that:

$(1): \quad \paren {\forall g \in G: N \subseteq g \circ N \circ g^{-1} } \iff \paren {\forall g \in G: N \subseteq g^{-1} \circ N \circ g}$
which is shown by, for example, setting $h := g^{-1}$ and substituting.


Necessary Condition
Suppose that $N$ is normal in $G$.
Then:










\(\ds \forall g \in G: \, \)



\(\ds g \circ N\)

\(=\)







\(\ds N \circ g\)





Definition of Normal Subgroup








\(\ds \leadsto \ \ \)





\(\ds g^{-1} \circ \paren {g \circ N}\)

\(=\)







\(\ds g^{-1} \circ \paren {N \circ g}\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren {g^{-1} \circ g} \circ N\)

\(=\)







\(\ds g^{-1} \circ N \circ g\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds e \circ N\)

\(=\)







\(\ds g^{-1} \circ N \circ g\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds N\)

\(=\)







\(\ds g^{-1} \circ N \circ g\)





Coset by Identity








\(\ds \leadsto \ \ \)





\(\ds N\)

\(\subseteq\)







\(\ds g^{-1} \circ N \circ g\)





Definition 2 of Set Equality



$\Box$

Then by $(1)$ above:

$\paren {\forall g \in G: N \subseteq g \circ N \circ g^{-1} } \implies \paren {\forall g \in G: N \subseteq g^{-1} \circ N \circ g}$
$\Box$


Sufficient Condition
Let $N$ be a subgroup of $G$ such that:

$\forall g \in G: N \subseteq g \circ N \circ g^{-1}$
and so from $(1)$ above:

$\forall g \in G: N \subseteq g^{-1} \circ N \circ g$

Then:










\(\ds \forall g \in G: \, \)



\(\ds N\)

\(\subseteq\)







\(\ds g \circ N \circ g^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds \paren {g \circ N \circ g^{-1} } \circ g\)





Subset Relation is Compatible with Subset Product: Corollary 2








\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds \paren {g \circ N} \circ \paren {g^{-1} \circ g}\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds \paren {g \circ N} \circ e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds N \circ g\)

\(\subseteq\)







\(\ds g \circ N\)





Coset by Identity




Similarly:


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Do not repeat this verification again. This part was done at the beginning of the proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.









\(\ds \forall g \in G: \, \)



\(\ds N\)

\(\subseteq\)







\(\ds g^{-1} \circ N \circ g\)














\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds g \circ \paren {g^{-1} \circ N \circ g}\)





Subset Relation is Compatible with Subset Product: Corollary 2








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds \paren {g \circ g^{-1} } \circ \paren {N \circ g}\)





Subset Product within Semigroup is Associative: Corollary








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds e \circ \paren {N \circ g}\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds N \circ g\)





Coset by Identity




Thus we have:

$N \circ g \subseteq g \circ N$
$g \circ N \subseteq N \circ g$
By definition of set equality:

$g \circ N = N \circ g$
Hence the result.
$\blacksquare$


Definitions 3 and 4 iff Definition 5: Subgroup equals Conjugate iff Normal
From Subgroup is Superset of Conjugate iff Normal, $N$ is normal in $G$ if and only if:

$\forall g \in G: N \supseteq g \circ N \circ g^{-1}$
$\forall g \in G: N \supseteq g^{-1} \circ N \circ g$
From Subgroup is Subset of Conjugate iff Normal, $N$ is normal in $G$ if and only if:

$\forall g \in G: N \subseteq g \circ N \circ g^{-1}$
$\forall g \in G: N \subseteq g^{-1} \circ N \circ g$
The result follows by definition of set equality.
$\blacksquare$


Definition 1 iff Definition 6: Subgroup is Normal iff Contains Conjugate Elements
By definition, a subgroup is normal in $G$ if and only if:

$\forall g \in G: g \circ N = N \circ g$


Necessary Condition
Suppose that $g \circ N = N \circ g$, by definition 1 of normality in $G$.
Let $n \in N$.
Then:














\(\ds g \circ n\)

\(\in\)







\(\ds N \circ g\)





Definition of Coset








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists n_1 \in N: \, \)



\(\ds g \circ n\)

\(=\)







\(\ds n_1 \circ g\)





Definition of Coset








\(\ds \leadstoandfrom \ \ \)





\(\ds g \circ n \circ g^{-1}\)

\(=\)







\(\ds n_1\)





Division Laws for Groups








\(\ds \leadstoandfrom \ \ \)





\(\ds g \circ n \circ g^{-1}\)

\(\in\)







\(\ds N\)





Definition of $n_1$



$\Box$


Sufficient Condition
Suppose that:

$\forall g \in G: \paren {n \in N \iff g \circ n \circ g^{-1} \in N}$
Let $g \circ n \circ g^{-1} \in N$.










\(\ds \exists n_1 \in N: \, \)



\(\ds g \circ n \circ g^{-1}\)

\(=\)







\(\ds n_1\)














\(\ds \leadsto \ \ \)





\(\ds g \circ n\)

\(=\)







\(\ds n_1 \circ g\)





Division Laws for Groups








\(\ds \leadsto \ \ \)





\(\ds g \circ n\)

\(\in\)







\(\ds N \circ g\)





Definition of Coset








\(\ds \leadsto \ \ \)





\(\ds g \circ N\)

\(\subseteq\)







\(\ds N \circ g\)





Definition of Subset




Similarly:










\(\ds \exists n_2 \in N: \, \)



\(\ds g \circ n \circ g^{-1}\)

\(=\)







\(\ds n_2\)














\(\ds \leadsto \ \ \)





\(\ds n \circ g^{-1}\)

\(=\)







\(\ds g^{-1} \circ n_2\)





Division Laws for Groups








\(\ds \leadsto \ \ \)





\(\ds n \circ g^{-1}\)

\(\in\)







\(\ds g^{-1} \circ N\)





Definition of Coset








\(\ds \leadsto \ \ \)





\(\ds N \circ g^{-1}\)

\(\subseteq\)







\(\ds g^{-1} \circ N\)





Definition of Subset



As $g$ is arbitrary, then so is $g^{-1}$.
Thus:

$N \circ g \subseteq g \circ N$
By definition of set equality:

$g \circ N = N \circ g$


Definition 1 iff Definition 7: Subgroup is Normal iff Normal Subset
Necessary Condition
Let $N$ be normal in $G$ (by definition 1):
Thus for each $g \in G$:

$\forall g \in G: g \circ N = N \circ g$
where $g \circ N$ denotes the subset product of $g$ with $N$.

Thus $N$ is a normal subset of $G$ (by definition 1):

$\forall g \in G: g \circ N = N \circ g$


Sufficient Condition
Let $N$ be a normal subset of $G$ (by definition 1):

$\forall g \in G: g \circ N = N \circ g$
Since $N$ is a subgroup, $N$ is a normal subgroup of $G$ (by definition 1).
$\blacksquare$





