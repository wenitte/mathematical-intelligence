# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4/Matrix_Representation/Formulation_2/Examples_of_Generated_Subgroups/D

Examples of Generated Subgroups of Dihedral Group $D_4$
Let the dihedral group $D_4$ be represented by the set of square matrices:

$D_4 = \set {\mathbf I, \mathbf A, \mathbf B, \mathbf C, \mathbf D, \mathbf E, \mathbf F, \mathbf G}$

under the operation of conventional matrix multiplication, where:

$\mathbf I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
\qquad
\mathbf A = \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}
\qquad
\mathbf B = \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}
\qquad
\mathbf C = \begin{bmatrix} -i & 0 \\ 0 & i \end{bmatrix}$
$\mathbf D = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}
\qquad
\mathbf E = \begin{bmatrix} 0 & i \\ -i & 0 \end{bmatrix}
\qquad
\mathbf F = \begin{bmatrix} 0 & -1 \\ -1 & 0 \end{bmatrix}
\qquad
\mathbf G = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$

The generated subgroup $\gen {\mathbf D}$ is the (cyclic) group of order $2$:

$\set {\mathbf I, \mathbf D}$


Proof
The Cayley table of $D_4$ is as follows:

$\begin{array}{r|rrrrrrrr}
          & \mathbf I & \mathbf A & \mathbf B & \mathbf C & \mathbf D & \mathbf E & \mathbf F & \mathbf G \\
\hline
\mathbf I & \mathbf I & \mathbf A & \mathbf B & \mathbf C & \mathbf D & \mathbf E & \mathbf F & \mathbf G \\
\mathbf A & \mathbf A & \mathbf B & \mathbf C & \mathbf I & \mathbf E & \mathbf F & \mathbf G & \mathbf D \\
\mathbf B & \mathbf B & \mathbf C & \mathbf I & \mathbf A & \mathbf F & \mathbf G & \mathbf D & \mathbf E \\
\mathbf C & \mathbf C & \mathbf I & \mathbf A & \mathbf B & \mathbf G & \mathbf D & \mathbf E & \mathbf F \\
\mathbf D & \mathbf D & \mathbf G & \mathbf F & \mathbf E & \mathbf I & \mathbf C & \mathbf B & \mathbf A \\
\mathbf E & \mathbf E & \mathbf D & \mathbf G & \mathbf F & \mathbf A & \mathbf I & \mathbf C & \mathbf B \\
\mathbf F & \mathbf F & \mathbf E & \mathbf D & \mathbf G & \mathbf B & \mathbf A & \mathbf I & \mathbf C \\
\mathbf G & \mathbf G & \mathbf F & \mathbf E & \mathbf D & \mathbf C & \mathbf B & \mathbf A & \mathbf I
\end{array}$

We have:














\(\ds \mathbf D^2\)

\(=\)







\(\ds \mathbf I\)









Thus:

$\gen {\mathbf D} = \set {\mathbf I, \mathbf D}$

and its Cayley table is:

$\begin{array}{r|rr}
          & \mathbf I & \mathbf D \\
\hline
\mathbf I & \mathbf I & \mathbf D \\
\mathbf D & \mathbf D & \mathbf I \\
\end{array}$
This is seen to be the (cyclic) group of order $2$.
$\blacksquare$





