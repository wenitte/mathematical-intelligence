# 

Source: https://proofwiki.org/wiki/Independence_System_Induced_from_Set_of_Subsets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $S$ be a finite set.
Let $\mathscr A$ be a non-empty set of subsets of $S$.
Let $\mathscr I = \set{X \subseteq S : \exists A \in \mathscr A : X \subseteq A}$.

Then:

$\struct{S, \mathscr I}$ is an independence system
Proof
It is shown that $\mathscr I$ satisfies the independence system axioms.

Independence Axiom $(\text I 1)$
We have $\mathscr A$ is non-empty.
Let $A \in \mathscr A$.
From Empty Set is Subset of All Sets:

$\O \subseteq A$
By definition of $\mathscr I$:

$\O \in \mathscr I$
It follows that $\mathscr I$ satisfies the independence system axiom $(\text I 1)$ by definition.
$\Box$

Independence Axiom $(\text I 2)$
Let $X \in \mathscr I$.
Let $Y \subseteq X$.
By definition of $\mathscr I$:

$\exists A \in \mathscr A : X \subseteq A$
From Subset Relation is Transitive:

$Y \subseteq A$
By definition of $\mathscr I$:

$Y \in \mathscr I$
It follows that $\mathscr I$ satisfies the independence system axiom $(\text I 2)$ by definition.
$\Box$

Hence $\mathscr I$ satisfies the independence system axioms and so $\struct{S, \mathscr I}$ is an independence system by definition.
$\blacksquare$





