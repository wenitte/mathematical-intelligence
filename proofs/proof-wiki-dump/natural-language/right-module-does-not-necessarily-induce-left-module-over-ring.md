# 

Source: https://proofwiki.org/wiki/Right_Module_Does_Not_Necessarily_Induce_Left_Module_over_Ring



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct{G, +_G, \circ}$ be a right module over $\struct {R, +_R, \times_R}$.
Let $\circ' : R \times G \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: \lambda \circ' x = x \circ \lambda$

Then $\struct{G, +_G, \circ'}$ is not necessarily a left module over $\struct {R, +_R, \times_R}$


Proof
Proof by Counterexample:
Let $\struct {S, +, \times}$ be a ring with unity
Let $\struct {\map {\MM_S} 2, +, \times}$ denote the ring of square matrices of order $2$ over $S$.
From Ring of Square Matrices over Ring is Ring, $\struct {\map {\MM_S} 2, +, \times}$ is a ring.

Let $G = \set {\begin{bmatrix}
x & y \\
0 & 0
\end{bmatrix} : x, y \in S }$


Lemma
$G$ is a right ideal of $\struct {\map {\MM_S} 2, +, \times}$.
$\Box$

From Right Ideal is Right Module over Ring, $\struct {G, +, \times}$ is a right module over $\struct {\map {\MM_S} 2, +, \times}$.

Let $R = \map {\MM_S} 2$.
Let $\mathbf A = \begin{bmatrix}
1 & 1 \\
0 & 0
\end{bmatrix}, 
\mathbf B =  \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}, 
\mathbf C =  \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}$
Then:














\(\ds \mathbf A \times \paren {\mathbf B \times \mathbf C}\)

\(=\)







\(\ds \begin{bmatrix}
1 & 1 \\
0 & 0
\end{bmatrix} \times \paren {\begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix} }\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
1 & 1 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix}\)










And:














\(\ds \mathbf A \times \paren {\mathbf C \times \mathbf B}\)

\(=\)







\(\ds \begin{bmatrix}
1 & 1 \\
0 & 0
\end{bmatrix} \times \paren {\begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} }\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
1 & 1 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}\)











Hence for $\mathbf A, \mathbf B \in R,  \mathbf C \in G$:

$ \mathbf A \times \paren{\mathbf B \times \mathbf C} \neq \mathbf A \times \paren {\mathbf C \times \mathbf B}$

Let $\circ : G \times R \to R$ be the binary operation defined by:

$\forall \mathbf \Lambda \in R: \forall \mathbf X \in G: \mathbf \Lambda \circ \mathbf X = \mathbf X \times \mathbf \Lambda$
From Right Module induces Left Module over same Ring iff Actions are Commutative, $\struct {G, +, \circ}$ is not a left module over $\struct {R, +, \times}$
$\blacksquare$


Also see
Left Module Does Not Necessarily Induce Right Module over Ring




