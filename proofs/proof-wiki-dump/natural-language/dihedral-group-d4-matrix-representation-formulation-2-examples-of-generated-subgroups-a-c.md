# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4/Matrix_Representation/Formulation_2/Examples_of_Generated_Subgroups/A,_C

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

The generated subgroup $\gen {\mathbf A, \mathbf C}$ is the cyclic group of order $4$:

$\set {\mathbf I, \mathbf A, \mathbf B, \mathbf C}$


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














\(\ds \mathbf A^2\)

\(=\)







\(\ds \mathbf B\)




















\(\ds \mathbf A \mathbf B\)

\(=\)







\(\ds \mathbf C\)




















\(\ds \mathbf A \mathbf C\)

\(=\)







\(\ds \mathbf I\)









Thus:

$\gen {\mathbf A, \mathbf D} = \set {\mathbf I, \mathbf A, \mathbf B, \mathbf C}$

That this is a cyclic group follows by definition, and that:

$\gen {\mathbf A, \mathbf D} = \gen {\mathbf A}$
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Exercise $3$




