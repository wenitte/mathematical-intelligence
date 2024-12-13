# 

Source: https://proofwiki.org/wiki/Ring_of_Sets_is_Semiring_of_Sets

Theorem
Let $\RR$ be a ring of sets.

Then $\RR$ is also a semiring of sets.


Proof

This article, or a section of it, needs explaining.In particular: It is not clear which of the definitions in Definition:Ring of Sets is being used. In any case, this proof seems to just address axiom (3) in Definition:Semiring of Sets. An explanation (even if trivial) of why (1) and (2) hold is missing. Especially because the explanation depends on which definition of ring of sets is being used.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $A \in \RR$.
Suppose $A_1 \subseteq A$.
Let $A_2 = A \setminus A_1$, where $A \setminus A_1$ denotes set difference.
By definition, $A_2$ is then the relative complement of $A_1$ with respect to $A$.
From Union with Relative Complement it then follows that $A_1 \cup A_2 = A$.
By Ring of Sets Closed under Various Operations:

$A \setminus A_1 = A_2 \in \RR$
But by Set Difference Intersection with Second Set is Empty Set:

$\paren {A \setminus A_1} \cap A_1 = \O$
Hence for any given $A$ for which we have $A_1 \subseteq A$, we can represent $A$ as the finite expansion $A_1 \cup A_2$ such that $A_1 \cap A_2 = \O$ and $A_1, A_2 \in \RR$
Thus, by definition, $\RR$ is a semiring of sets.
$\blacksquare$





