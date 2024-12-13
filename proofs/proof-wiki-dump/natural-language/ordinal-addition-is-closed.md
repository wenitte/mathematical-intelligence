# 

Source: https://proofwiki.org/wiki/Ordinal_Addition_is_Closed



Theorem
Let $\On$ be the class of all ordinals.

Then:

$\forall x, y \in \On: x + y \in \On$
That is: the sum $x+y$ is an ordinal.


Proof
Using Transfinite Induction on $y$:


Base Case













\(\ds x\)

\(\in\)







\(\ds \On\)














\(\ds \leadsto \ \ \)





\(\ds x + \O\)

\(\in\)







\(\ds \On\)





Definition of Ordinal Addition





Inductive Case













\(\ds x + y\)

\(\in\)







\(\ds \On\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x + y}^+\)

\(\in\)







\(\ds \On\)





Successor Set of Ordinal is Ordinal








\(\ds \leadsto \ \ \)





\(\ds x + y^+\)

\(\in\)







\(\ds \On\)





Definition of Ordinal Addition





Limit Case









\(\ds \forall z \in y: \, \)



\(\ds x + z\)

\(\in\)







\(\ds \On\)














\(\ds \leadsto \ \ \)





\(\ds \bigcup_{z \mathop \in y} \paren {x + z}\)

\(\in\)







\(\ds \On\)





Union of Set of Ordinals is Ordinal: Corollary








\(\ds \leadsto \ \ \)





\(\ds x + z\)

\(\in\)







\(\ds \On\)





Definition of Ordinal Addition



$\blacksquare$


This article needs to be linked to other articles.In particular: The meanings of "base case", "inductive case" and "limit case".You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.2$




