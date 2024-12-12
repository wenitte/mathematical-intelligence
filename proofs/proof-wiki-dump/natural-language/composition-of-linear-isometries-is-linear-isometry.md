# 

Source: https://proofwiki.org/wiki/Composition_of_Linear_Isometries_is_Linear_Isometry

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$, $\struct {Y, \norm \cdot_Y}$ and $\struct {Z, \norm \cdot_Z}$ be normed vector spaces over $\GF$.
Let $T : X \to Y$ and $S : Y \to Z$ be linear isometries.

Then $S T$ is a linear isometry.


Proof
From Composition of Linear Transformations is Linear Transformation, $S T$ is a linear transformation. 
For $x \in X$, we have:














\(\ds \norm {S T x}_Z\)

\(=\)







\(\ds \norm {T x}_Y\)





$S$ is a linear isometry














\(\ds \)

\(=\)







\(\ds \norm x_X\)





$T$ is a linear isometry



So $S T$ is a linear isometry.
$\blacksquare$





