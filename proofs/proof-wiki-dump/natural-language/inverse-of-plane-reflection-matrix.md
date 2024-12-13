# 

Source: https://proofwiki.org/wiki/Inverse_of_Plane_Reflection_Matrix

Theorem
Let $\mathbf R$ be the matrix associated with a reflection in the plane.


$\mathbf R = \begin{bmatrix}
\cos 2\alpha & \sin 2\alpha \\
\sin 2\alpha & -\cos 2\alpha
\end{bmatrix}$

Then its inverse matrix $\mathbf R^{-1}$ is itself.


Proof
Consider $\mathbf R \mathbf R$:














\(\ds \mathbf R \mathbf R\)

\(=\)







\(\ds \begin {bmatrix} \cos 2 \alpha & \sin 2 \alpha \\ \sin 2 \alpha & -\cos 2 \alpha \end {bmatrix} \begin {bmatrix} \cos 2 \alpha & \sin 2 \alpha \\ \sin 2 \alpha & -\cos 2 \alpha \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \map \cos {2 \alpha} \map \cos {2 \alpha} + \map \sin {2 \alpha} \map \sin {2 \alpha} & \map \cos {2 \alpha} \map \sin {2 \alpha} - \map \sin {2 \alpha} \map \cos {2 \alpha} \\ \map \sin {2 \alpha} \map \cos {2 \alpha} - \map \cos {2 \alpha} \map \sin {2 \alpha} & \map \sin {2 \alpha} \map \sin {2 \alpha} + \map \cos {2 \alpha} \map \cos {2 \alpha} \end {bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin {bmatrix} \cos^2 2 \alpha + \sin^2 2 \alpha & 0 \\ 0 & \sin^2 2 \alpha + \cos^2 2 \alpha \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {bmatrix} 1 & 0 \\ 0 & 1 \end {bmatrix}\)





Sum of Squares of Sine and Cosine



Hence, by the definition of the inverse matrix, $\mathbf R$ is the inverse matrix of $\mathbf R$.
$\blacksquare$





