# 

Source: https://proofwiki.org/wiki/Orthogonal_Matrix/Examples/2x2_Rotation_Matrix

Example of Orthogonal Matrix
The rotation matrix for a plane rotation about the origin through an angle $\theta$:

$\mathbf P = \begin {pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end {pmatrix}$
is an orthogonal matrix.


Proof
From Matrix Equation of Plane Rotation we have that $\mathbf P$ is indeed the rotation matrix for a plane rotation about the origin through an angle $\theta$.
Then we see that:














\(\ds \mathbf P^\intercal \mathbf P\)

\(=\)







\(\ds \begin {pmatrix} \cos \theta & \sin \theta \\ -\sin \theta & \cos \theta \end {pmatrix} \begin {pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end {pmatrix}\)





Definition of Orthogonal Matrix: $\mathbf P^\intercal$ denotes the transpose of $\mathbf P$














\(\ds \)

\(=\)







\(\ds \begin {pmatrix} \cos^2 \theta + \sin^2 \theta & \cos \theta \paren {-\sin \theta} + \sin \theta \cos \theta \\ \paren {-\sin \theta} \cos \theta + \cos \theta \sin \theta & \paren {-\sin \theta}^2 + \cos^2 \theta \end {pmatrix}\)




















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




