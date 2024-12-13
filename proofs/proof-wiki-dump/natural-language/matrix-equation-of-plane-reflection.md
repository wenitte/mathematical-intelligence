# 

Source: https://proofwiki.org/wiki/Matrix_Equation_of_Plane_Reflection

Theorem
Let $\LL$ be a straight line through the origin $O$ of a cartesian plane.
Let the angle between $\LL$ and the $x$-axis be $\alpha$.
Let $\phi_\alpha$ denote the reflection in the plane whose axis is $\LL$.

Let $\LL$ reflect an arbitrary point in the plane $P = \tuple {x, y}$ onto $P' = \tuple {x', y'}$.
Then:

$\begin {bmatrix} x' \\ y' \end {bmatrix} = \begin {bmatrix} \cos 2 \alpha & \sin 2 \alpha \\ \sin 2 \alpha & -\cos 2 \alpha \end {bmatrix} \begin {bmatrix} x \\ y \end {bmatrix}$


Proof
Let the coordinates of $P'$ be encoded as the elements of a $2 \times 1$ matrix.
We have:














\(\ds \begin {bmatrix} x' \\ y' \end {bmatrix}\)

\(=\)







\(\ds P'\)




















\(\ds \)

\(=\)







\(\ds \phi_\alpha\)





Definition of Plane Reflection














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} x \cos 2 \alpha + y \sin 2 \alpha \\ x \sin 2 \alpha - y \cos 2 \alpha \end {bmatrix}\)





Equation defining Plane Reflection














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \cos 2 \alpha & \sin 2 \alpha \\ \sin 2 \alpha & -\cos 2 \alpha \end {bmatrix} \begin {bmatrix} x \\ y \end {bmatrix}\)





Definition of Matrix Product (Conventional)



Hence the result.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Also see
Determinant of Plane Reflection Matrix
Inverse of Plane Reflection Matrix




