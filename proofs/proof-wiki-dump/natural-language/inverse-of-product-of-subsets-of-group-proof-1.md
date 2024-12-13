# 

Source: https://proofwiki.org/wiki/Inverse_of_Product_of_Subsets_of_Group/Proof_1

Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y \subseteq G$.

Then:

$\paren {X \circ Y}^{-1} = Y^{-1} \circ X^{-1}$
where $X^{-1}$ is the inverse of $X$.


Proof
First, note that:














\(\ds \)

\(\)







\(\ds x \in X, y \in Y\)




















\(\ds \)

\(\leadsto\)







\(\ds x^{-1} \in X^{-1}, y^{-1} \in Y^{-1}\)





Definition of Inverse of Subset of Group














\(\ds \)

\(\leadsto\)







\(\ds y^{-1} \circ x^{-1} \in Y^{-1} \circ X^{-1}\)





Definition of Subset Product




Now:














\(\ds x \circ y\)

\(\in\)







\(\ds X \circ Y\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y}^{-1}\)

\(\in\)







\(\ds \paren {X \circ Y}^{-1}\)





Definition of Inverse of Subset of Group








\(\ds \leadsto \ \ \)





\(\ds y^{-1} \circ x^{-1}\)

\(\in\)







\(\ds \paren {X \circ Y}^{-1}\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds Y^{-1} \circ X^{-1}\)

\(\subseteq\)







\(\ds \paren {X \circ Y}^{-1}\)





Definition of Subset




By a similar argument we see that $\paren {X \circ Y}^{-1} \subseteq Y^{-1} \circ X^{-1}$.

Hence the result.
$\blacksquare$





