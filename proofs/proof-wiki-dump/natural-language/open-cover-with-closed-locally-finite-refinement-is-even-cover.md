# 

Source: https://proofwiki.org/wiki/Open_Cover_with_Closed_Locally_Finite_Refinement_is_Even_Cover


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \struct {X, \tau}$ be a topological Space.
Let $\UU$ be an open cover of $T$ with a closed locally finite refinement.

Then:

$\UU$ is an even cover


Proof
Let $\AA$ be a closed locally finite refinement of $\UU$.

By definition of refinement:

$\forall A \in \AA : \exists U \in \UU : A \subseteq U$
For each $A \in \AA$, let $U_A \in \UU$ such that $A \subseteq U_A$.

Let $T \times T = \struct {X \times X, \tau_{X \times X} }$  denote the product space of $T$ with itself.
For each $A \in \AA$, let:

$V_A = \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A} }$

Let:

$V = \ds \bigcap_{A \mathop \in \AA} V_A$
For each $x \in X$, let:

$\map V x = \set {y \in X : \tuple {x, y} \in V}$
where:

$V$ is seen as a relation on $X \times X$
$\map V x$ denotes the image of $x$ under $V$.


Lemma 1
$\set {\map V x : x \in X}$ is a refinement of $\UU$.
$\Box$


Lemma 2
$V$ is a neighborhood of the diagonal $\Delta_X$ in $T \times T$.
$\Box$

It follows that $\UU$ is an even cover by definition.
$\blacksquare$





