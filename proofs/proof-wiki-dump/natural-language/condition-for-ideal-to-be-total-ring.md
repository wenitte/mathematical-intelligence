# 

Source: https://proofwiki.org/wiki/Condition_for_Ideal_to_be_Total_Ring


This article needs to be linked to other articles.In particular: Links to results usedYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\struct {A, +, \circ}$ be a commutative ring with unity.
Let $I$ be an ideal of $A$ such that the quotient ring $A / I$ is a field.

Let $J$ be an ideal of $A$ such that $I \subsetneq J$.
Then:

$A = J$


Proof
Let $A$ be a commutative ring with unity.
Let $I$ be an ideal of $A$ such that the quotient ring $A / I$ is a field.
Let $J$ be an ideal of $A$ such that $I \subsetneq J$.
From Ideal is Subring:

$J \subseteq A$
It remains to be proved that that $A \subseteq J$.
Let $a \in A$.
As $I \subsetneq J$, it follows from definition of proper subset that:

$\exists j \in J: j \notin I$
Consider the coset $j + I \in  A / I$.
As $A / I$ is a field:

$\exists C \in A / I: \paren {j + I} \circ C = 1 + I$
Let $j' \in A$ be such that $C = j' + I$.
Then:














\(\ds \paren {j + I} \circ \paren {j' + I}\)

\(=\)







\(\ds 1 + I\)














\(\ds \leadsto \ \ \)





\(\ds j \circ j' + I\)

\(=\)







\(\ds 1 + I\)














\(\ds \leadsto \ \ \)





\(\ds a \circ \paren {j \circ j'} + I\)

\(=\)







\(\ds a + I\)














\(\ds \leadsto \ \ \)

\(\ds \exists i, i' \in I: \, \)



\(\ds a \circ \paren {j \circ j'} + i\)

\(=\)







\(\ds a + i'\)














\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds a \circ j \circ j' + i - i'\)














\(\ds \leadsto \ \ \)





\(\ds a \circ j\)

\(\in\)







\(\ds J\)





Definition of Ideal of Ring








\(\ds \leadsto \ \ \)





\(\ds a \circ j \circ j'\)

\(\in\)







\(\ds J\)














\(\ds \leadsto \ \ \)





\(\ds a \cdot j \cdot j' + i - i'\)

\(\in\)







\(\ds J\)





Definition of Ideal of Ring and $I \subsetneq J$








\(\ds \leadsto \ \ \)





\(\ds a\)

\(\in\)







\(\ds J\)





Definition of Ideal of Ring and $I \subsetneq J$




By definition of subset:

$A \subseteq J$
Thus $A = J$ follows by definition of set equality.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Might be able to get there quicker by using Ideals of Field on the quotient ring $A / I$.Or, using Ideal is Unit Ideal iff Includes UnityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




