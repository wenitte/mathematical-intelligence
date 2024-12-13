# 

Source: https://proofwiki.org/wiki/Isomorphisms_between_Additive_Group_of_Integers_Modulo_4_and_Reduced_Residue_System_Modulo_5_under_Multiplication

Theorem
Let $\struct {\Z_4, +_4}$ denote the additive group of integers modulo $4$.
Let $\struct {\Z'_5, \times_5}$ denote the multiplicative group of reduced residues modulo $5$.

There are $2$ (group) isomorphisms from $\struct {\Z_4, +_4}$ onto $\struct {\Z'_5, \times_5}$.


Proof
Let us recall the Cayley table of $\struct {\Z_4, +_4}$:
$\quad \begin {array} {r|rrrr}
\struct {\Z_4, +_4} & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4 \\
\hline
\eqclass 0 4 & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4
\\
\eqclass 1 4 & \eqclass 1 4 & \eqclass 2 4 & \eqclass 3 4 & \eqclass 0 4 
\\
\eqclass 2 4 & \eqclass 2 4 & \eqclass 3 4 & \eqclass 0 4 & \eqclass 1 4
\\
\eqclass 3 4 & \eqclass 3 4 & \eqclass 0 4 & \eqclass 1 4 & \eqclass 2 4
\\
\end{array}$

and the Cayley Table of $\struct {\Z'_5, \times_5}$:
$\quad \begin {array} {r|rrrr}
\times_5 & \eqclass 1 5 & \eqclass 2 5 & \eqclass 3 5 & \eqclass 4 5 \\
\hline
\eqclass 1 5 & \eqclass 1 5 & \eqclass 2 5 & \eqclass 3 5 & \eqclass 4 5 \\
\eqclass 2 5 & \eqclass 2 5 & \eqclass 4 5 & \eqclass 1 5 & \eqclass 3 5 \\
\eqclass 3 5 & \eqclass 3 5 & \eqclass 1 5 & \eqclass 4 5 & \eqclass 2 5 \\
\eqclass 4 5 & \eqclass 4 5 & \eqclass 3 5 & \eqclass 2 5 & \eqclass 1 5 \\
\end {array}$

By arranging the rows and columns into a different order, its cyclic nature becomes clear:
$\quad \begin {array} {r|rrrr}
\times_5 & \eqclass 1 5 & \eqclass 2 5 & \eqclass 4 5 & \eqclass 3 5 \\
\hline
\eqclass 1 5 & \eqclass 1 5 & \eqclass 2 5 & \eqclass 4 5 & \eqclass 3 5 \\
\eqclass 2 5 & \eqclass 2 5 & \eqclass 4 5 & \eqclass 3 5 & \eqclass 1 5 \\
\eqclass 4 5 & \eqclass 4 5 & \eqclass 3 5 & \eqclass 1 5 & \eqclass 2 5 \\
\eqclass 3 5 & \eqclass 3 5 & \eqclass 1 5 & \eqclass 2 5 & \eqclass 4 5 \\
\end {array}$

Each of these is the cyclic group of order $4$.
Each has $2$ generators, each of $1$ element.
Hence you can get an isomorphism from $\struct {\Z_4, +_4}$ to $\struct {\Z'_5, \times_5}$ by setting up the mappings:

$\phi: \struct {\Z_4, +_4} \to \struct {\Z'_5, \times_5}: \forall x \in \Z_4: \map \phi x = \begin {cases} \eqclass 4 0 & : x = \eqclass 5 1 \\ \eqclass 4 1 & : x = \eqclass 5 2 \\ \eqclass 4 2 & : x = \eqclass 5 4 \\ \eqclass 4 3 & : x = \eqclass 5 3 \end {cases}$
$\psi: \struct {\Z_4, +_4} \to \struct {\Z'_5, \times_5}: \forall x \in \Z_4: \map \psi x = \begin {cases} \eqclass 4 0 & : x = \eqclass 5 1 \\ \eqclass 4 1 & : x = \eqclass 5 3 \\ \eqclass 4 2 & : x = \eqclass 5 4 \\ \eqclass 4 3 & : x = \eqclass 5 2 \end {cases}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.5$




