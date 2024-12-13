# 

Source: https://proofwiki.org/wiki/Matrix_Equation_of_Plane_Rotation

Theorem
Let $r_\alpha$ be a rotation of the plane about the origin through an angle of $\alpha$.
Let $r_\alpha$ rotate an arbitrary point in the plane $P = \tuple {x, y}$ onto $P' = \tuple {x', y'}$

Then the rotation matrix representing $r_\alpha$ can be presented as:

$\begin {bmatrix} x' \\ y' \end {bmatrix} = \begin {bmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end {bmatrix} \begin {bmatrix} x \\ y \end {bmatrix}$


Proof
Let the coordinates of $P'$ be encoded as the elements of a $2 \times 1$ matrix.
We have:














\(\ds \begin {bmatrix} x' \\ y' \end {bmatrix}\)

\(=\)







\(\ds P'\)




















\(\ds \)

\(=\)







\(\ds \map {r_\alpha} P\)





Definition of Plane Rotation














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} x \cos \alpha - y \sin \alpha \\ x \sin \alpha + y \cos \alpha \end {bmatrix}\)





Equation defining Plane Rotation














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \cos \alpha & -\sin \alpha \\ \sin \alpha & \cos \alpha \end {bmatrix} \begin {bmatrix} x \\ y \end {bmatrix}\)





Definition of Matrix Product (Conventional)



Hence the result.
$\blacksquare$


Also see
Determinant of Plane Rotation Matrix
Inverse of Plane Rotation Matrix




