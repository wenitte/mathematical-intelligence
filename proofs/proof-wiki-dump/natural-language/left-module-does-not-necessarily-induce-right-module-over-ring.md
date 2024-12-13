# 

Source: https://proofwiki.org/wiki/Left_Module_Does_Not_Necessarily_Induce_Right_Module_over_Ring



Theorem
Let $\struct {R, +_R, \times_R}$ be a ring.
Let $\struct{G, +_G, \circ}$ be a left module over $\struct {R, +_R, \times_R}$.
Let $\circ' : G \times R \to G$ be the binary operation defined by:

$\forall \lambda \in R: \forall x \in G: x \circ' \lambda = \lambda \circ x$

Then $\struct{G, +_G, \circ'}$ is not necessarily a right module over $\struct {R, +_R, \times_R}$


Proof
Proof by Counterexample:
Let $\struct {S, +, \times}$ be a ring with unity
Let $\struct {\map {\MM_S} 2, +, \times}$ denote the ring of square matrices of order $2$ over $S$.
From Ring of Square Matrices over Ring is Ring, $\struct {\map {\MM_S} 2, +, \times}$ is a ring.

Let $G = \set {\begin{bmatrix}
x & 0 \\
y & 0
\end{bmatrix} : x, y \in S }$


Lemma
$G$ is a left ideal of $\struct {\map {\MM_S} 2, +, \times}$.
$\Box$

From Left Ideal is Left Module over Ring, $\struct {G, +, \times}$ is a left module over $\struct {\map {\MM_S} 2, +, \times}$.

Let $R = \map {\MM_S} 2$
Let $\mathbf A = \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix}, 
\mathbf B =  \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix}, 
\mathbf C =  \begin{bmatrix}
1 & 0 \\
1 & 0
\end{bmatrix}$
Then:














\(\ds \paren {\mathbf A \times \mathbf B} \times \mathbf C\)

\(=\)







\(\ds \paren { \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix} } \times \begin{bmatrix}
1 & 0 \\
1 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix} \times \begin{bmatrix}
1 & 0 \\
1 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix}\)










and:














\(\ds \paren {\mathbf B \times \mathbf A} \times \mathbf C\)

\(=\)







\(\ds \paren { \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix} \times \begin{bmatrix}
1 & 0 \\
0 & 0
\end{bmatrix} } \times \begin{bmatrix}
1 & 0 \\
1 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix} \times \begin{bmatrix}
1 & 0 \\
1 & 0
\end{bmatrix}\)





















\(\ds \)

\(=\)







\(\ds \begin{bmatrix}
0 & 0 \\
1 & 0
\end{bmatrix}\)











Hence for $\mathbf A, \mathbf B \in R,  \mathbf C \in G$:

$ \paren {\mathbf A \times \mathbf B} \times \mathbf C \neq \paren {\mathbf B \times \mathbf A} \times \mathbf C$

Let $\circ : G \times R \to R$ be the binary operation defined by:

$\forall \mathbf \Lambda \in R: \forall \mathbf X \in G: \mathbf X \circ \mathbf \Lambda = \mathbf \Lambda \times \mathbf X$
From Left Module induces Right Module over same Ring iff Actions are Commutative, $\struct {G, +, \circ}$ is not a right module over $\struct {R, +, \times}$
$\blacksquare$


Also see
Right Module Does Not Necessarily Induce Left Module over Ring




