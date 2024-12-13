# 

Source: https://proofwiki.org/wiki/Relativisation_is_Standard_Model


This article needs to be linked to other articles.In particular: to definitions throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $P$ be a well-formed formula.
Let $A$ be a finite set such that $x \in A$ if and only if $x$ is a free variable in $P$.

Then:

$A \subseteq B \implies \paren {B \models P \iff P^B}$

This article, or a section of it, needs explaining.In particular: Definition of $P^B$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
The proof proceeds by Induction on Well-Formed Formulas of $P$.
$P$ must be of the form:

$x \in y$
$\paren {Q \land R}$
$\neg Q$
or:

$\forall x: Q$
for some propositions $Q$ and $R$.


Atoms
Let $P$ be of the form $x \in y$.
Then:

$A = \set {x, y}$
By definition of standard structure:

$B \models P \iff \paren {x \in y \land x \in B \land y \in B}$
By definition of relativisation:

$P^B \iff x \in y$
If $A \subseteq B$, then:

$x \in B \land y \in B$
and the two statements are equivalent.


Inductive Step for $\neg$
Let $P$ be of the form $\neg Q$ and that the statement holds for $Q$.
Then the free variables in $Q$ are precisely those in $P$.














\(\ds A \subseteq B\)

\(\leadsto\)







\(\ds \paren {B \models Q \iff Q^B}\)





Inductive Hypothesis














\(\ds \)

\(\leadsto\)







\(\ds \paren {\neg B \models Q \iff \neg Q^B}\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {B \models P \iff P^B}\)





Definition of $P$





Inductive Step for $\implies$
Suppose $P$ is of the form $\paren {Q \implies R}$.
Suppose, further, that the statement holds for $Q$ and $R$.
The free variables of $Q$ and $R$ have to all be members of $A$, and thus are members of $B$ since $A \subseteq B$.














\(\ds A \subseteq B\)

\(\leadsto\)







\(\ds \paren {B \models Q \iff Q^B} \land \paren {B \models R \iff R^B}\)





Inductive Hypothesis














\(\ds \)

\(\leadsto\)







\(\ds \paren {\paren {B \models Q \land B \models R} \iff \paren {Q^B \land R^B} }\)




















\(\ds \)

\(\leadsto\)







\(\ds \paren {B \models P \iff P^B}\)





Definition of Standard Structure and Definition of Relativisation





Inductive Step for $\forall x:$
Let $P$ be of the form:

$\forall x: Q$
Let the statement hold for $Q$.
Then the free variables of $Q$ are either in $A$ or $x$.
Furthermore, $x \notin A$ because:

$x \in A \implies x$ is a free variable in $\forall x: Q$
which is a contradiction.














\(\ds A \subseteq B \land x \in B\)

\(\leadsto\)







\(\ds \paren {B \models Q \iff Q^B}\)





Inductive Hypothesis














\(\ds A \subseteq B\)

\(\leadsto\)







\(\ds \paren {\paren {x \in B \implies B \models Q} \iff \paren {x \in B \implies Q^B} }\)





Propositional logic manipulation














\(\ds \)

\(\leadsto\)







\(\ds \paren {\forall x \in B: B \models Q \iff \forall x \in B: Q^B}\)





Universal Generalization














\(\ds \)

\(\leadsto\)







\(\ds \paren {B \models P \iff P^B}\)





Definition of Standard Structure and Definition of Relativisation



$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 12.5$




