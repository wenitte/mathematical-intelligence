# 

Source: https://proofwiki.org/wiki/Projections_on_Direct_Product_of_Normed_Vector_Spaces_define_Bounded_Linear_Transformations

Theorem
Let $\Bbb F$ be a subfield of $\C$. 
Let $\struct {X, \norm {\, \cdot \,}_X}$ and $\struct {Y, \norm {\, \cdot \,}_Y}$ be normed vector spaces over $\Bbb F$.
Let $V = X \times Y$ be the direct product of the vector spaces $X$ and $Y$ together with induced component-wise operations.
Let $\norm {\, \cdot \,}_{X \times Y}$ be the direct product norm.
Define the maps $\Pi_X : X \times Y \to X$ and $\Pi_Y : X \times Y \to Y$ by: 

$\map {\Pi_X} {x, y} = x$
and:

$\map {\Pi_Y} {x, y} = y$
for all $x \in X$, $y \in Y$.

Then $\Pi_X$ and $\Pi_Y$ are bounded linear transformations.


Proof
Let $\tuple {x_1, y_1}, \tuple {x_2, y_2} \in X \times Y$ and $\lambda \in \Bbb F$.
Then we have: 














\(\ds \map {\Pi_X} {\tuple {x_1, y_1} + \lambda \tuple {x_2, y_2} }\)

\(=\)







\(\ds \map {\Pi_X} {x_1 + \lambda x_2, y_1 + \lambda y_2}\)




















\(\ds \)

\(=\)







\(\ds x_1 + \lambda x_2\)




















\(\ds \)

\(=\)







\(\ds \map {\Pi_X} {x_1, y_1} + \lambda \map {\Pi_X} {x_2, y_2}\)









and: 














\(\ds \map {\Pi_Y} {\tuple {x_1, y_1} + \lambda \tuple {x_2, y_2} }\)

\(=\)







\(\ds \map {\Pi_Y} {x_1 + \lambda x_2, y_1 + y_2}\)




















\(\ds \)

\(=\)







\(\ds y_1 + \lambda y_2\)




















\(\ds \)

\(=\)







\(\ds \map {\Pi_Y} {x_1, y_1} + \lambda \map {\Pi_Y} {x_2, y_2}\)









So $\Pi_X$ and $\Pi_Y$ are linear. 
We now show that they are bounded.
Let $\tuple {x, y} \in X \times Y$.
Then:














\(\ds \norm {\map {\Pi_X} {x, y} }_X\)

\(=\)







\(\ds \norm x_X\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm x_X, \norm y_Y}\)





Definition of Max Operation














\(\ds \)

\(=\)







\(\ds \norm {\tuple {x, y} }_{X \times Y}\)





Definition of Direct Product Norm



and:














\(\ds \norm {\map {\Pi_Y} {x, y} }_Y\)

\(=\)







\(\ds \norm y_Y\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm x_X, \norm y_Y}\)





Definition of Max Operation














\(\ds \)

\(=\)







\(\ds \norm {\tuple {x, y} }_{X \times Y}\)





Definition of Direct Product Norm



So $\Pi_X$ and $\Pi_Y$ are bounded.
$\blacksquare$





