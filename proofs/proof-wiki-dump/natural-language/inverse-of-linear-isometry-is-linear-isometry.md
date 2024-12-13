# 

Source: https://proofwiki.org/wiki/Inverse_of_Linear_Isometry_is_Linear_Isometry

Theorem
Let $\struct {X, \norm \cdot_X}$ and $\struct {Y, \norm \cdot_Y}$ be normed vector spaces.
Let $T : X \to Y$ be an invertible (in the sense of a mapping) linear isometry with inverse $T^{-1} : Y \to X$. 

Then $T^{-1}$ is a linear isometry.


Proof
From Inverse of Linear Transformation is Linear Transformation, we have: 

$T^{-1}$ is a linear transformation.
Since $T$ is a linear isometry, we have: 

$\norm {T x}_Y = \norm x_X$
for each $x \in X$.
Note that for each $y \in Y$, we have $T^{-1} y \in X$. 
We then have: 














\(\ds \norm {T^{-1} y}_X\)

\(=\)







\(\ds \norm {\map T {T^{-1} y} }_Y\)




















\(\ds \)

\(=\)







\(\ds \norm {\map {\paren {T \circ T^{-1} } } y}_Y\)




















\(\ds \)

\(=\)







\(\ds \norm y_Y\)





Definition of Inverse Mapping



So $T$ is a linear transformation with: 

$\norm {T^{-1} y}_X = \norm y_Y$
for each $y \in Y$.
So $T^{-1}$ is a linear isometry.
$\blacksquare$





