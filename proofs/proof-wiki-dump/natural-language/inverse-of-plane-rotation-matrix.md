# 

Source: https://proofwiki.org/wiki/Inverse_of_Plane_Rotation_Matrix

Theorem
Let $\mathbf R$ be the matrix associated with a rotation of the plane about the origin through an angle of $\alpha$:

$\mathbf R = \begin{bmatrix}
\cos \alpha & -\sin \alpha \\
\sin \alpha & \cos \alpha
\end{bmatrix}$

Then its inverse matrix $\mathbf R^{-1}$ is:

$\mathbf R^{-1} = \begin{bmatrix}
\cos \alpha & \sin \alpha \\
-\sin \alpha & \cos \alpha
\end{bmatrix}$


Proof
Let:

$\mathbf A = \begin{bmatrix}
\cos \alpha & \sin \alpha \\
-\sin \alpha & \cos \alpha
\end{bmatrix}$

Consider $\mathbf R \mathbf A$:














\(\ds \mathbf R \mathbf A\)

\(=\)







\(\ds \begin{bmatrix}
\cos \alpha & -\sin \alpha \\
\sin \alpha & \cos \alpha
\end{bmatrix} \begin{bmatrix}
\cos \alpha & \sin \alpha \\
-\sin \alpha & \cos \alpha
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
\map \cos {\alpha} \map \cos {\alpha} + \map \sin {\alpha} \map \sin {\alpha} & \map \cos {\alpha} \map \sin {\alpha} - \map \sin {\alpha} \map \cos {\alpha} \\
\map \sin {\alpha} \map \cos {\alpha} - \map \cos {\alpha} \map \sin {\alpha} & \map \sin {\alpha} \map \sin {\alpha} + \map \cos {\alpha} \map \cos {\alpha}
\end{bmatrix}\)






Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
\cos^2\alpha + \sin^2\alpha & 0 \\
0 & \sin^2\alpha + \cos^2\alpha
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\)






Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \mathbf {I_2}\)





Definition of Unit Matrix



$\Box$

Now consider $\mathbf A \mathbf R$:














\(\ds \mathbf A \mathbf R\)

\(=\)







\(\ds \begin{bmatrix}
\cos \alpha & \sin \alpha \\
-\sin \alpha & \cos \alpha
\end{bmatrix} \begin{bmatrix}
\cos \alpha & -\sin \alpha \\
\sin \alpha & \cos \alpha
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
\map \cos {\alpha} \map \cos {\alpha} + \map \sin {\alpha} \map \sin {\alpha} & -\map \cos {\alpha} \map \sin {\alpha} + \map \sin {\alpha} \map \cos {\alpha} \\
-\map \sin {\alpha} \map \cos {\alpha} + \map \cos {\alpha} \map \sin {\alpha} & \map \sin {\alpha} \map \sin {\alpha} + \map \cos {\alpha} \map \cos {\alpha}
\end{bmatrix}\)






Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
\cos^2\alpha + \sin^2\alpha & 0 \\
0 & \sin^2\alpha + \cos^2\alpha
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
1 & 0 \\
0 & 1
\end{bmatrix}\)






Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \mathbf {I_2}\)





Definition of Unit Matrix



$\Box$

Hence, by the definition of the inverse matrix, $\mathbf A$ is the inverse matrix of $\mathbf R$.
$\blacksquare$





