# 

Source: https://proofwiki.org/wiki/Non-Zero_Vectors_are_Orthogonal_iff_Perpendicular



Theorem
Let $\mathbf u$, $\mathbf v$ be non-zero vectors in the real Euclidean space $\R^n$.

Then $\mathbf u$ and $\mathbf v$ are orthogonal if and only if they are perpendicular.


Proof
Necessary Condition
When $\theta$ denotes the angle between $\mathbf u$ and $\mathbf v$ measured in radians, we have:














\(\ds 0\)

\(=\)







\(\ds \mathbf u \cdot \mathbf v\)





Definition of Orthogonal Vectors














\(\ds \)

\(=\)







\(\ds \norm {\mathbf u} \norm {\mathbf v} \cos \theta\)





Cosine Formula for Dot Product



where $\norm {\,\cdot\,}$ denotes the Euclidean norm.
As $\mathbf u, \mathbf v$ are non-zero vectors, it follows from the norm axiom of positive definiteness that $\norm {\mathbf u} \ne 0$, and $\norm {\mathbf v} \ne 0$.
Then $\cos \theta = 0$.
It follows from Zeroes of Sine and Cosine that $\theta = \dfrac \pi 2$, given that $\theta \in \closedint 0 \pi$ by the convention of the definition of angle between vectors.
Then $\mathbf u$ and $\mathbf v$ are perpendicular by the measurement of a right angle.
$\Box$


Sufficient Condition
If $\mathbf u$ and $\mathbf v$ are perpendicular, then the angle between them measures $\dfrac \pi 2$ in radians.
Then $\cos \theta = 0$, and the calculations above show that $\mathbf u \cdot \mathbf v = 0$.
Hence, $\mathbf u$ and $\mathbf v$ are orthogonal.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 2.$ Orthogonality




