# 

Source: https://proofwiki.org/wiki/Orthogonal_Matrix/Examples/2x2_Reflection_Matrix

Example of Orthogonal Matrix
The reflection matrix for a plane reflection in the line $y = x \tan \dfrac \theta 2$:

$\mathbf Q = \begin {pmatrix} \cos \theta & \sin \theta \\ \sin \theta & -\cos \theta \end {pmatrix}$
is an orthogonal matrix.


Proof
From Matrix Equation of Plane Reflection we have that $\mathbf Q$ is indeed the reflection matrix for a plane reflection in the line $y = x \tan \dfrac \theta 2$.
Then we see that:














\(\ds \mathbf Q^\intercal \mathbf Q\)

\(=\)







\(\ds \begin {pmatrix} \cos \theta & \sin \theta \\ \sin \theta & -\cos \theta \end {pmatrix} \begin {pmatrix} \cos \theta & \sin \theta \\ \sin \theta & -\cos \theta \end {pmatrix}\)





Definition of Orthogonal Matrix: $\mathbf Q^\intercal$ denotes the transpose of $\mathbf Q$














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \cos^2 \theta + \sin^2 \theta & \cos \theta \sin \theta + \sin \theta \paren {-\cos \theta} \\ \sin \theta \cos \theta + \paren {-\cos \theta} \sin \theta & \sin^2 \theta + \paren {-\cos \theta}^2 \end {pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin {pmatrix} 1 & 0 \\ 0 & 1 \end {pmatrix}\)





Sum of Squares of Sine and Cosine














\(\ds \)

\(=\)







\(\ds \mathbf I\)





Definition of Identity Matrix



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): orthogonal matrix
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): orthogonal matrix




