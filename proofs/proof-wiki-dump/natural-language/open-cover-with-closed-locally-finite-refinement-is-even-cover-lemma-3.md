# 

Source: https://proofwiki.org/wiki/Open_Cover_with_Closed_Locally_Finite_Refinement_is_Even_Cover/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
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

Then:

$\forall A \in \AA, x \in A : \map {V_A} x = U_A$


Proof
We have:










\(\ds \forall A \in \AA, x \in A: \, \)



\(\ds \map {V_A} x\)

\(=\)







\(\ds \set {y \in X : \tuple{x, y} \in V_A}\)





Definition of $\map {V_A} x$














\(\ds \)

\(=\)







\(\ds \set {y \in X : \tuple {x, y} \in \paren {U_A \times U_A} \cup \paren {\paren {X \setminus A} \times \paren {X \setminus A} } }\)





Definition of $V_A$














\(\ds \)

\(=\)







\(\ds \set {y \in X : \tuple {x, y} \in U_A \times U_A \text{ or } \tuple {x, y} \in \paren {X \setminus A} \times \paren {X \setminus A} }\)





Definition of Set Union














\(\ds \)

\(=\)







\(\ds \set {y \in X : \tuple {x, y} \in U_A \times U_A}\)





as $x \in A$














\(\ds \)

\(=\)







\(\ds \set {y \in X : y \in U_A}\)





Definition of Cartesian Product














\(\ds \)

\(=\)







\(\ds U_A\)





Definition of Set



$\blacksquare$





