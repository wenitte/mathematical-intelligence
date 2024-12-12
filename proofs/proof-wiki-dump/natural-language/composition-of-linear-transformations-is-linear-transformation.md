# 

Source: https://proofwiki.org/wiki/Composition_of_Linear_Transformations_is_Linear_Transformation

Theorem
Let $K$ be a field.
Let $X, Y, Z$ be vector spaces over $K$.
Let $T_1 : X \to Y$ and $T_2 : Y \to Z$ be linear transformations.

Then the composition $T_2 \circ T_1 : X \to Z$ is a linear transformation.


Proof
Let $\lambda \in K$ and $u, v \in X$. 
Then, we have: 














\(\ds \map {\paren {T_2 \circ T_1} } {\lambda u + v}\)

\(=\)







\(\ds \map {T_2} {\map {T_1} {\lambda u + v} }\)




















\(\ds \)

\(=\)







\(\ds \map {T_2} {\lambda T_1 u + T_1 v}\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \lambda \paren {T_2 T_1} u + \paren {T_2 T_1} v\)




















\(\ds \)

\(=\)







\(\ds \lambda \paren {T_2 \circ T_1} u + \paren {T_2 \circ T_1} v\)









so $T_2 \circ T_1 : X \to Z$ is a linear transformation.
$\blacksquare$





