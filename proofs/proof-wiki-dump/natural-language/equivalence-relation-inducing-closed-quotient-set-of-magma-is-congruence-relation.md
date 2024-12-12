# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_inducing_Closed_Quotient_Set_of_Magma_is_Congruence_Relation

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\circ_\PP$ be the operation induced by $\circ$ on $\powerset S$, the power set of $S$.
Let $\RR$ be an equivalence relation on $S$.
Let $S / \RR$ denote the quotient set of $S$ induced by $\RR$.

Let the algebraic structure $\struct {S / \RR, \circ_\PP}$ be closed.
Then:

$\RR$ is a congruence relation for $\circ$
and:

the operation $\circ_\RR$ induced on $S / \RR$ by $\circ$ is the operation induced on $S / \RR$ by $\circ_\PP$.


Proof
Let $x_1, y_1, x_2, y_2 \in S$ be arbitrary, such that:














\(\ds x_1\)

\(\RR\)







\(\ds x_2\)




















\(\ds y_1\)

\(\RR\)







\(\ds y_2\)









To demonstrate that $\RR$ is a congruence relation for $\circ$, we need to show that:

$\paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$

We have:














\(\ds x_1, x_2\)

\(\in\)

\(\, \ds \eqclass {x_1} \RR \, \)

\(\, \ds \in \, \)



\(\ds S / \RR\)




















\(\ds y_1, y_2\)

\(\in\)

\(\, \ds \eqclass {x_1} \RR \, \)

\(\, \ds \in \, \)



\(\ds S / \RR\)










Since $\struct {S / \RR, \circ_\PP}$ is closed:

$\eqclass {x_1} \RR \circ_\PP \eqclass {y_1} \RR \in S / \RR$
From the definition of a quotient set:

$\eqclass {x_1} \RR \circ_\PP \eqclass {y_1} \RR = \eqclass z \RR$ for some $z \in S$
From the definition of an operation induced on $\powerset S$:

$\eqclass z \RR = \set {a \circ b: a \in \eqclass {x_1} \RR, b \in \eqclass {y_1} \RR}$
hence:

$x_1 \circ y_1, x_2 \circ y_2 \in \eqclass z \RR$
From the definition of an equivalence class:

$\paren {x_1 \circ y_1} \mathrel \RR \paren {x_2 \circ y_2}$
This shows that $\RR$ is a congruence relation for $\circ$.

We also have, by the equivalence of statements $(2)$ and $(4)$ in Equivalence Class Equivalent Statements:

$\eqclass {x_1 \circ y_1} \RR = \eqclass z \RR = \eqclass {x_1} \RR \circ_\PP \eqclass {y_1} \RR$
This shows that the operation induced on $S / \RR$ by $\circ_\PP$ is the operation $\circ_\RR$ induced on $S / \RR$ by $\circ$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.10$




