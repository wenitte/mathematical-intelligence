# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_17


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

For each $n \in \N_{> 0}$, let:

$\AA_n = \set{\map {A_n} x : x \in X}$

Then:

$\forall n \in \N_{> 0} : \AA_n$ is a discrete set of subsets.


Proof
Lemma 16
$\forall n \in \N_{> 0}, \forall y, z \in X : y \ne z \leadsto \map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$

Let $n \in \N_{> 0}$.

Let $x \in X$.

Case: $\forall y : \map {V_{n+1} } x \cap \map {A_n} y = \O$
For all $y \in X$, let:

$\map {V_{n+1} } x \cap \map {A_n} y = \O$

From Image of Point under Neighborhood of Diagonal is Neighborhood of Point:

$\map {V_{n+1} } x$ is a neighborhood of $x$ in $T$ that intersects no element of $\AA_n$
$\Box$

Case: $\exists y : \map {V_{n+1} } x \cap \map {A_n} y \ne \O$
Let $y \in X$:

$\map {V_{n+1} } x \cap \map {A_n} y \ne \O$

From Image under Left-Total Relation is Empty iff Subset is Empty:

$V_{n + 1} \sqbrk {\map {V_{n+1} } x \cap \map {A_n} y} \ne \O$

We have:














\(\ds V_{n + 1} \sqbrk {\map {V_{n+1} } x \cap \map {A_n} y}\)

\(\subseteq\)







\(\ds V_{n + 1} \sqbrk {\map {V_{n+1} } x } \cap V_{n + 1} \sqbrk {\map {A_n} y}\)





Image of Intersection under Relation














\(\ds \)

\(=\)







\(\ds V_{n + 1} \sqbrk {\map {V_{n+1}^{-1} } x } \cap V_{n + 1} \sqbrk {\map {A_n} y}\)





Definition of Symmetric Relation














\(\ds \)

\(=\)







\(\ds \map {\paren{V_{n + 1} \circ V_{n+1}^{-1} } } x \cap V_{n + 1} \sqbrk {\map {A_n} y}\)





Image of Element under Composite Relation with Common Codomain and Domain














\(\ds \)

\(=\)







\(\ds \paren{V_{n + 1} \circ V_{n+1}^{-1} } \sqbrk {\set x} \cap V_{n + 1} \sqbrk {\map {A_n} y}\)





Image of Singleton under Relation














\(\ds \)

\(\subseteq\)







\(\ds \set x \cap V_{n + 1} \sqbrk {\map {A_n} y}\)





Image of Preimage under Relation is Subset




From Subset of Empty Set:

$\set x \cap V_{n + 1} \sqbrk {\map {A_n} y} \ne \O$

Hence:

$\set x \subseteq V_{n + 1} \sqbrk {\map {A_n} y}$

We have:














\(\ds V_{n + 1} \sqbrk {\set x}\)

\(\subseteq\)







\(\ds V_{n + 1} \sqbrk {V_{n + 1} \sqbrk {\map {A_n} y} }\)





Image of Subset under Relation is Subset of Image














\(\ds \)

\(=\)







\(\ds V_{n + 1} \sqbrk {V_{n + 1}^{-1} \sqbrk {\map {A_n} y} }\)





Definition of Symmetric Relation














\(\ds \)

\(=\)







\(\ds \paren{V_{n + 1} \circ V_{n + 1}^{-1} } \sqbrk {\map {A_n} y}\)





Image of Element under Composite Relation with Common Codomain and Domain














\(\ds \)

\(\subseteq\)







\(\ds \map {A_n} y\)





Image of Preimage under Relation is Subset








\(\ds \leadsto \ \ \)





\(\ds \map {V_{n + 1} } x\)

\(\subseteq\)







\(\ds \map {A_n} y\)





Image of Singleton under Relation








\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \map {V_{n + 1} } x \subseteq \map {A_n} y\)





Definition of Reflexive Relation




From Image of Subset under Neighborhood of Diagonal is Neighborhood of Subset:

$V_{n + 1} \sqbrk {\map {A_n} y}$ is a neighborhood of $\map {A_n} y$

From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$V_{n + 1} \sqbrk {\map {A_n} y}$ is a neighborhood of $x$

From Lemma 16:

$\forall z \in X : y \ne z \leadsto \map {A_n} z \cap V_{n+1} \sqbrk {\map {A_n} y} = \O$

Hence $V_{n+1} \sqbrk {\map {A_n} y}$ is a neighborhood of $x$ in $T$ that intersects at most one element of $\AA_n$.
$\Box$

In either case:

there exists a neighborhood of $x$ in $T$ that intersects at most one element of $\AA_n$.

Since $x$ was arbitrary:

For all $x \in X$ there exists a neighborhood of $x$ in $T$ that intersects at most one element of $\AA_n$.

Hence $\AA_n$ is a discrete set of subsets by definition.

Since $n$ was arbitrary:

$\forall n \in \N_{>0} : \AA_n$ is a discrete set of subsets
$\blacksquare$





