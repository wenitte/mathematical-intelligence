# 

Source: https://proofwiki.org/wiki/Normality_Relation_is_not_Transitive/Proof_2

Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $K$ be a normal subgroup of $N$.

Then it is not necessarily the case that $K$ is a normal subgroup of $G$.


Proof
Proof by Counterexample:
Let $D_4$ denote the dihedral group $D_4$.

Let $D_4$ be presented in matrix representation:
Let $\mathbf I, \mathbf A, \mathbf B, \mathbf C$ denote the following four elements of the matrix space $\map {\MM_\Z} 2$:

$\mathbf I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
\qquad
\mathbf A = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}
\qquad
\mathbf B = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}
\qquad
\mathbf C = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$

The set:

$D_4 = \set {\mathbf I, -\mathbf I, \mathbf A, -\mathbf A, \mathbf B, -\mathbf B, \mathbf C, -\mathbf C}$
under the operation of conventional matrix multiplication, forms the dihedral group $D_4$.

Its Cayley table is given as:

$\begin{array}{r|rrrrrrrr}
          &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C \\

\hline

\mathbf I &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C \\
\mathbf A &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B \\
\mathbf B &  \mathbf B &  \mathbf C & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A \\
\mathbf C &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I \\

-\mathbf I & -\mathbf I & -\mathbf A & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A &  \mathbf B &  \mathbf C \\
-\mathbf A & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I & -\mathbf C & -\mathbf B \\
-\mathbf B & -\mathbf B & -\mathbf C &  \mathbf I &  \mathbf A &  \mathbf B & -\mathbf C & -\mathbf I & -\mathbf A \\
-\mathbf C & -\mathbf C & -\mathbf B & -\mathbf A & -\mathbf I &  \mathbf C &  \mathbf B &  \mathbf A &  \mathbf I
\end{array}$

Consider the subgroup $H$ whose underlying set is:

$H = \set {\mathbf I, \mathbf A, -\mathbf I, -\mathbf A}$
From Subgroup of Index 2 is Normal, $H$ is normal in $D_4$.
Consider the subgroup $H$ whose underlying set is:

$K = \set {\mathbf I, \mathbf A} = \gen {\mathbf A}$
From Subgroup of Index 2 is Normal, $K$ is normal in $H$.

It remains to be demonstrated that $K$ is not normal in $D_4$.
From the Cayley table:

$\mathbf C \mathbf A \mathbf C^{-1} = \mathbf B \mathbf C = -\mathbf A \notin K$
Hence $K$ is not normal in $D_4$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 11$: Quotient Structures: Exercise $11.6$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $10$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Example $7.7$




