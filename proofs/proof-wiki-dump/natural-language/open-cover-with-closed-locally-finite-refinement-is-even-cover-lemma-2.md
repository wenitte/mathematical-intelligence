# 

Source: https://proofwiki.org/wiki/Open_Cover_with_Closed_Locally_Finite_Refinement_is_Even_Cover/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct {X, \tau}$ be a topological Space.

Let $\UU$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\UU$.
For each $A \in \AA$, let $U_A \in \UU$ such that $A \subseteq U_A$.

Let $T \times T = \struct {X \times X, \tau_{X \times X} }$  denote the product space of $T$ with itself.
For each $A \in \AA$, let:

$V_A = \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A} }$
Let:

$V = \ds \bigcap_{A \mathop \in \AA} V_A$

Let $\Delta_X$ denote the diagonal on $X$.

Then:

$V$ is a neighborhood of the diagonal $\Delta_X$ in $T \times T$.


Proof
Let $x \in X$.

By definition of locally finite:

$\exists W \in \tau : x \in W : \set {A \in \AA : W \cap A \ne \O}$ is finite.

Let:

$A \in \AA : W \cap A = \O$
From Subset of Set Difference iff Disjoint Set:

$W \subseteq X \setminus A$
From Cartesian Product of Subsets:

$W \times W \subseteq \paren {X \setminus A} \times \paren {X \setminus A} \subseteq V_A$
Since $A$ was arbitrary, we have established:

$\forall A \in \AA : W \cap A = \O \leadsto W \times W \subseteq V_A$
From Set is Subset of Intersection of Supersets:

$W \times W \subseteq \bigcap \set {V_A : A \in \AA : W \cap A = \O}$
From Intersection with Subset is Subset:

$(1): \quad W \times W = \paren {W \times W} \cap \bigcap \set {V_A : A \in \AA : W \cap A = \O}$

We have:














\(\ds \paren {W \times W} \cap V\)

\(=\)







\(\ds \paren {W \times W} \cap \bigcap \set {V_A : A \in \AA}\)





Definition of $V$














\(\ds \)

\(=\)







\(\ds \paren {W \times W}\)




















\(\ds \)

\(\)







\(\ds \cap \bigcap \set {V_A : A \in \AA : W \cap A = \O}\)




















\(\ds \)

\(\)







\(\ds \cap \bigcap \set {V_A : A \in \AA : W \cap A \ne \O}\)




















\(\ds \)

\(=\)







\(\ds \paren {W \times W} \cap \bigcap \set {V_A : A \in \AA : W \cap A \ne \O}\)





from $(1)$




By definition of product topology:

$W \times W$ is open in $T \times T$


Lemma 4
$\forall A \in \AA : V_A$ is an open neighborhood of the diagonal $\Delta_X$ in $T \times T$
$\Box$

Recall:

$\set{A \in \AA : W \cap A \ne \O}$ is finite
By Open Set Axiom $\paren {\text O 2 }$: Pairwise Intersection of Open Sets:

$\paren{W \times W} \cap V$ is open in $T \times T$

By definition of Cartesian product:

$\tuple{x, x} \in W \times W$
By definition of diagonal $\Delta_X$:

$\tuple{x, x} \in \Delta_X$
By definition of open neighborhood:

$\forall A \in \AA : \tuple{x, x} \in \Delta_X \subseteq V_A$
By definition of set intersection:

$\tuple{x, x} \in \paren{W \times W} \cap V$
Hence:

$V$ is a neighborhood of $\tuple{x, x}$ in $T \times T$ by definition.

Since $x \in X$ was arbitrary, then:

$\forall x \in X : V$ is a neighborhood of $\tuple {x, x}$ in $T \times T$
From Set is Neighborhood of Subset iff Neighborhood of all Points of Subset:

$V$ is a neighborhood of the diagonal $\Delta_X$ in $T \times T$.
$\blacksquare$





