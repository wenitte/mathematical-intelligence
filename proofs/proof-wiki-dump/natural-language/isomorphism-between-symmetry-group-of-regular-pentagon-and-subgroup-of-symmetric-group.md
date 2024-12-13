# 

Source: https://proofwiki.org/wiki/Isomorphism_between_Symmetry_Group_of_Regular_Pentagon_and_Subgroup_of_Symmetric_Group

Theorem
Let $\PP = ABCDE$ denote a regular pentagon.
Let $\struct {\PP, \circ}$ be the symmetry group of $\PP$, where the various symmetries are identified as:

the identity mapping $e$
the rotations $r, r^2, r^3, r^4$ of $72^\circ, 144^\circ, 216^\circ, 288^\circ$ around the center of $\PP$ anticlockwise respectively
the reflections $t_A, t_B, t_C, t_D, t_E$ about the lines through the center of $\PP$ and the vertices $A$ to $E$ respectively.


Let $\struct {S_5, \circ}$ denote the symmetry group on $5$ letters.

Then $\PP$ is isomorphic to a subgroup of $\struct {S_5, \circ}$ of order $10$.


Proof
Let the $A$, $B$, $C$, $D$ and $E$ of $\PP$ be identified with the integers $1$, $2$, $3$, $4$ and $5$ of $S_5$.
Let each of the symmetries of $\PP$ be identified with permutations of $S_n$ according to where the symmetry moves the vertices of $\PP$.
We express these in two-row notation, which we construct by inspection:














\(\ds e\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ A & B & C & D & E \end {pmatrix}\)





Definition of Identity Mapping














\(\ds r\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ B & C & D & E & A \end {pmatrix}\)





Definition of $r$














\(\ds r^2\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ C & D & E & A & B \end {pmatrix}\)





Definition of $r^2$














\(\ds r^3\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ D & E & A & B & C \end {pmatrix}\)





Definition of $r^3$














\(\ds r^4\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ E & A & B & C & D \end {pmatrix}\)





Definition of $r^4$














\(\ds t_A\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ A & E & D & C & B \end {pmatrix}\)





Definition of $t_A$














\(\ds t_B\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ C & B & A & E & D \end {pmatrix}\)





Definition of $t_B$














\(\ds t_C\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ E & D & C & B & A \end {pmatrix}\)





Definition of $t_C$














\(\ds t_D\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ B & A & E & D & C \end {pmatrix}\)





Definition of $t_D$














\(\ds t_E\)

\(=\)







\(\ds \begin {pmatrix} A & B & C & D & E \\ D & C & B & A & E \end {pmatrix}\)





Definition of $t_E$




These are now identified with permutations of $S_5$ and hence elements of $\struct {S_5, \circ}$, which we express in cycle notation:














\(\ds \begin {pmatrix} A & B & C & D & E \\ A & B & C & D & E \end {pmatrix}\)

\(=\)







\(\ds \paren 1 \paren 2 \paren 3 \paren 4 \paren 5\)





Definition of Identity Mapping














\(\ds \begin {pmatrix} A & B & C & D & E \\ B & C & D & E & A \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 2 & 3 & 4 & 5 \end {pmatrix}\)





Definition of $r$














\(\ds \begin {pmatrix} A & B & C & D & E \\ C & D & E & A & B \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 3 & 5 & 2 & 4 \end {pmatrix}\)





Definition of $r^2$














\(\ds \begin {pmatrix} A & B & C & D & E \\ D & E & A & B & C \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 4 & 2 & 5 & 3 \end {pmatrix}\)





Definition of $r^3$














\(\ds \begin {pmatrix} A & B & C & D & E \\ E & A & B & C & D \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 5 & 4 & 3 & 2 \end {pmatrix}\)





Definition of $r^4$














\(\ds \begin {pmatrix} A & B & C & D & E \\ A & E & D & C & B \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 2 & 5 \end {pmatrix} \begin {pmatrix} 3 & 4 \end {pmatrix}\)





Definition of $t_A$














\(\ds \begin {pmatrix} A & B & C & D & E \\ C & B & A & E & D \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 3 \end {pmatrix} \begin {pmatrix} 4 & 5 \end {pmatrix}\)





Definition of $t_B$














\(\ds \begin {pmatrix} A & B & C & D & E \\ E & D & C & B & A \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 5 \end {pmatrix} \begin {pmatrix} 2 & 4 \end {pmatrix}\)





Definition of $t_C$














\(\ds \begin {pmatrix} A & B & C & D & E \\ B & A & E & D & C \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 2 \end {pmatrix} \begin {pmatrix} 3 & 5 \end {pmatrix}\)





Definition of $t_D$














\(\ds \begin {pmatrix} A & B & C & D & E \\ D & C & B & A & E \end {pmatrix}\)

\(=\)







\(\ds \begin {pmatrix} 1 & 4 \end {pmatrix} \begin {pmatrix} 2 & 3 \end {pmatrix}\)





Definition of $t_E$



The isomorphism is implicit in the construction.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.5$




