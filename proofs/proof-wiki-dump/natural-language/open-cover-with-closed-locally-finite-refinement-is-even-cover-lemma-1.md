# 

Source: https://proofwiki.org/wiki/Open_Cover_with_Closed_Locally_Finite_Refinement_is_Even_Cover/Lemma_1

Theorem
Let $T = \struct {X, \tau}$ be a topological Space.

Let $\UU$ be an open cover of $T$.

Let $\AA$ be a closed locally finite refinement of $\UU$.
For each $A \in \AA$, let $U_A \in \UU$ such that $A \subseteq U_A$.
For each $A \in \AA$, let:

$V_A = \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A} }$
For each $x \in X, A \in \AA$, let:

$\map {V_A} x = \set {y \in X : \tuple {x, y} \in V_A}$
where:

$V_A$ is seen as a relation on $X \times X$
$\map {V_A} x$ denotes the image of $x$ under $V_A$.

Let:

$V = \ds \bigcap_{A \mathop \in \AA} V_A$
For each $x \in X$, let:

$\map V x = \set {y \in X : \tuple {x, y} \in V}$
where:

$V$ is seen as a relation on $X \times X$
$\map V x$ denotes the image of $x$ under $V$.

Then:

$\set {\map V x : x \in X}$ is a refinement of $\UU$.


Proof
Let $x \in X$.

By definition of refinement:

$\AA$ is a cover of $X$
By definition of cover:

$\exists A \in \AA : x \in A$


Lemma 3
$\forall A \in \AA, x \in A : \map {V_A} x = U_A$
$\Box$

From lemma 3

$\map V x \subseteq \map {V_A} x = U_A \in \UU$

Since $x$ was arbitrary, then:

$\forall x \in X : \exists U \in \UU : \map V x \subseteq U$
Also, we have:

$\forall x \in X : x \in \map V x$

It follows that $\set {\map V x : x \in X}$ is a refinement of $\UU$ by definition.
$\blacksquare$





