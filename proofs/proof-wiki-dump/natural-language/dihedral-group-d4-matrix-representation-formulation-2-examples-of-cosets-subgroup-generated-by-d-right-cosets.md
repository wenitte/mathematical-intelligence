# 

Source: https://proofwiki.org/wiki/Dihedral_Group_D4/Matrix_Representation/Formulation_2/Examples_of_Cosets/Subgroup_Generated_by_D/Right_Cosets

Examples of Right Cosets of Subgroups of Dihedral Group $D_4$
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

Let $H \subseteq D_4$ be defined as:

$H = \gen {\mathbf D}$
where $\gen {\mathbf D}$ denotes the subgroup generated by $\mathbf D$.
From Dihedral Group D4: Examples of Generated Subgroups: $\gen {\mathbf D}$ we have:

$\gen {\mathbf D} = \set {\mathbf I, \mathbf D}$

The right cosets of $H$ are:














\(\ds H \mathbf I\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf D\)




















\(\ds \)

\(=\)







\(\ds H\)
























\(\ds H \mathbf A\)

\(=\)







\(\ds \set {\mathbf A, \mathbf G}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf G\)
























\(\ds H \mathbf B\)

\(=\)







\(\ds \set {\mathbf B, \mathbf F}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf F\)
























\(\ds H \mathbf C\)

\(=\)







\(\ds \set {\mathbf C, \mathbf E}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf E\)











Proof
The Cayley table of $D_4$ is presented as:

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

Thus:














\(\ds H \mathbf I\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf I\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I^2, \mathbf D \mathbf I}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I, \mathbf D}\)




















\(\ds \)

\(=\)







\(\ds H\)
























\(\ds H \mathbf D\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf D\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf D, \mathbf D^2}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf D, \mathbf I}\)




















\(\ds \)

\(=\)







\(\ds H\)
























\(\ds H \mathbf A\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf A, \mathbf D \mathbf A}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf A, \mathbf G}\)
























\(\ds H \mathbf G\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf G\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf G, \mathbf D \mathbf G}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf G, \mathbf A}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf A\)
























\(\ds H \mathbf B\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf B\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf B, \mathbf D \mathbf B}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf B, \mathbf F}\)
























\(\ds H \mathbf F\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf F\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf F, \mathbf D \mathbf F}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf F, \mathbf B}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf B\)
























\(\ds H \mathbf C\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf C\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf C, \mathbf D \mathbf C}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf C, \mathbf E}\)
























\(\ds H \mathbf E\)

\(=\)







\(\ds \set {\mathbf I, \mathbf D} \mathbf E\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf I \mathbf E, \mathbf D \mathbf E}\)




















\(\ds \)

\(=\)







\(\ds \set {\mathbf E, \mathbf C}\)




















\(\ds \)

\(=\)







\(\ds H \mathbf C\)









$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Exercise $1 \ \text {(c)}$




