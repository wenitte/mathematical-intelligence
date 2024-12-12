# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_16


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $X$ be a set with well-ordering $\preccurlyeq$ on $X$.

Let $X \times X$ denote the cartesian product of $X$ with itself.

Let $\sequence{V_n}_{n \in \N}$ be a sequence of subsets of $X \times X$ containing the diagonal $\Delta_X$ of $X \times X$:

$\forall n \in \N_{> 0}, V_n$ is symmetric as a relation on $X \times X$
$\forall n \in \N_{> 0}$, the composite relation $V_n \circ V_n$ is a subset of $V_{n - 1}$, that is, $V_n \circ V_n \subseteq V_{n - 1}$

For all $n \in \N_{> 0}$, let:

$U_n = V_n \circ V_{n - 1}, \circ \cdots \circ V_1$

For each $n \in \N_{> 0}, x \in X$, let:

$\map {A_n} x = \map {U_n} x \setminus \ds \bigcup_{y \preccurlyeq x, y \ne x} \map {U_{n + 1}} y$
Then:

$\forall n \in \N_{> 0}, \forall y, z \in X : y \ne z \leadsto \map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$
Proof
Let $n \in \N_{> 0}$.
Let $y, z \in X : y \ne z$.

Case 1: $y \preccurlyeq z$
We have:














\(\ds V_{n + 1} \sqbrk {\map {A_n} y}\)

\(=\)







\(\ds V_{n + 1} \sqbrk {\map {U_n} y \setminus \bigcup_{w \preccurlyeq y, w \ne y} \map {U_{n + 1} } w}\)





Definition of $\map {A_n} y$














\(\ds \)

\(\subseteq\)







\(\ds V_{n + 1} \sqbrk {\map {U_n} y}\)





Set Difference is Subset and Image of Subset under Relation is Subset of Image














\(\ds \)

\(\subseteq\)







\(\ds \map {\paren{V_{n + 1} \circ U_n } } y\)





Image of Element under Composite Relation with Common Codomain and Domain














\(\ds \)

\(\subseteq\)







\(\ds \map {U_{n + 1} } y\)





Definition of $U_{n + 1}$














\(\ds \)

\(\subseteq\)







\(\ds \bigcup_{w \preccurlyeq z, w \ne z} \map {U_{n + 1} } w\)





Set is Subset of Union




From Set Intersection Preserves Subsets:














\(\ds \map {A_n} z \cap V_{n + 1} \sqbrk {\map {A_n} y}\)

\(\subseteq\)







\(\ds \map {A_n} z \cap \bigcup_{w \preccurlyeq z, w \ne z} \map {U_{n + 1} } w\)










From Set Difference Intersection with Second Set is Empty Set:














\(\ds \map {A_n} z \cap \bigcup_{w \preccurlyeq z, w \ne z} \map {U_{n + 1} } w\)

\(=\)







\(\ds \O\)










From Intersection is Empty Implies Intersection of Subsets is Empty:














\(\ds \map {A_n} z \cap V_{n + 1} \sqbrk {\map {A_n} y}\)

\(=\)







\(\ds \O\)









$\Box$

Case 2: $z \preccurlyeq y$
Applying the same argument used in Case 1 with $y$ and $z$ swapped around:

$(1):\quad\map {A_n} y \cap V_{n + 1} \sqbrk {\map {A_n} z} = \O$

We have:














\(\ds V_{n + 1} \sqbrk{\map {A_n} z \cap V_{n + 1} \sqbrk {\map {A_n} y} }\)

\(\subseteq\)







\(\ds V_{n + 1} \sqbrk {\map {A_n} z} \cap V_{n + 1} \sqbrk {V_{n + 1} \sqbrk {\map {A_n} y} }\)





Image of Intersection under Mapping














\(\ds \)

\(=\)







\(\ds V_{n + 1} \sqbrk {\map {A_n} z} \cap V_{n + 1} \sqbrk {V_{n + 1}^{-1} \sqbrk {\map {A_n} y} }\)





Definition of Symmetric Relation














\(\ds \)

\(=\)







\(\ds V_{n + 1} \sqbrk {\map {A_n} z} \cap \paren {V_{n + 1} \circ V_{n + 1}^{-1} } \sqbrk {\map {A_n} y}\)





Image of Element under Composite Relation with Common Codomain and Domain














\(\ds \)

\(\subseteq\)







\(\ds V_{n + 1} \sqbrk {\map {A_n} z} \cap \map {A_n} y\)





Image of Preimage under Relation is Subset














\(\ds \)

\(=\)







\(\ds \O\)





From Case $(1)$ above




Hence:

$V_{n + 1} \sqbrk{\map {A_n} z \cap V_{n + 1} \sqbrk {\map {A_n} y} } = \O$

From Image under Left-Total Relation is Empty iff Subset is Empty:

$\map {A_n} z \cap V_{n + 1} \sqbrk {\map {A_n} y} = \O$
$\Box$

In either case, we have:

$\map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$

Since $n$, $y$ and $z$ were arbitrary, we have:

$\forall n \in \N_{> 0}, \forall y, z \in X : y \ne z \leadsto \map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$
$\blacksquare$





