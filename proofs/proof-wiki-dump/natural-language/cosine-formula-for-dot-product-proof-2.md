# 

Source: https://proofwiki.org/wiki/Cosine_Formula_for_Dot_Product/Proof_2

Theorem
Let $\mathbf v, \mathbf w$ be two non-zero vectors in $\R^n$.
The dot product of $\mathbf v$ and $\mathbf w$ can be calculated by:

$\mathbf v \cdot \mathbf w = \norm {\mathbf v} \norm {\mathbf w} \cos \theta$
where:

$\norm {\, \cdot \,}$ denotes vector length and
$\theta$ is the angle between $\mathbf v$ and $\mathbf w$.


Proof
Let $\mathbf v$ and $\mathbf w$ be considered to be embedded in a Cartesian plane $\CC$.
By Dot Product is Invariant under Coordinate Rotation, we may rotate $\CC$ arbitrarily, and $\mathbf v \cdot \mathbf w$ will not change.
So, let us rotate $\CC$ to $\CC'$ such that the $x$-axis is parallel to $\mathbf v$.
Hence $\mathbf v$ can be expressed as:














\(\ds \mathbf v\)

\(=\)







\(\ds \norm {\mathbf v} \mathbf i + 0 \mathbf j + 0 \mathbf k\)




















\(\ds \mathbf w\)

\(=\)







\(\ds \norm {\mathbf w} \cos \theta \mathbf i + \norm {\mathbf w} \sin \theta \mathbf j + 0 \mathbf k\)









Hence: by definition of dot product:














\(\ds \mathbf v \cdot \mathbf w\)

\(=\)







\(\ds \norm {\mathbf v} \times \norm {\mathbf w} \cos \theta + 0 \times \norm {\mathbf w} \sin \theta + 0 \times 0\)





Definition of Dot Product














\(\ds \)

\(=\)







\(\ds \norm {\mathbf v} \norm {\mathbf w} \cos \theta\)









Hence the result.
$\blacksquare$


Sources
1970: George Arfken: Mathematical Methods for Physicists (2nd ed.) ... (previous) ... (next): Chapter $1$ Vector Analysis $1.3$ Scalar or Dot Product: $(1.23)$




