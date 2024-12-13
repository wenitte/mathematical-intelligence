# 

Source: https://proofwiki.org/wiki/Left_Module_Does_Not_Necessarily_Induce_Right_Module_over_Ring/Lemma



Theorem
Let $\struct {S, +, \times}$ be a ring with unity.
Let $\struct {\map {\MM_S} 2, +, \times}$ denote the ring of square matrices of order $2$ over $S$.

Let:

$G = \set {\begin{bmatrix}
x & 0 \\
y & 0
\end{bmatrix} : x, y \in S }$

Then:

$G$ is a left ideal of $\struct {\map {\MM_S} 2, +, \times}$.


Proof
From Test for Left Ideal, the following need to be proved:

$(1): \quad G \ne \O$
$(2): \quad \forall \mathop {\mathbf X}, \mathop {\mathbf Y} \in G: \mathbf X + \paren {-\mathbf Y} \in G$
$(3): \quad \forall \mathop{\mathbf J} \in G, \mathop {\mathbf R} \in \map {\MM_S} 2: \mathbf R \times \mathbf J \in G$


Condition $(1): \quad G \ne \O$
By definition of $G$:

$\quad \begin{bmatrix}
0 & 0 \\
0 & 0
\end{bmatrix} \in G$
$\Box$


Condition $(2): \quad \forall \mathop {\mathbf X}, \mathop{\mathbf Y} \in G: \mathbf X + \paren {-\mathbf Y} \in G$
Let:

$\quad \mathbf X = \begin{bmatrix}
x_1 & 0 \\
x_2 & 0
\end{bmatrix}, \quad \mathbf Y  = \begin{bmatrix}
y_1 & 0 \\
y_2 & 0
\end{bmatrix} \in G$

Then:

$\quad \mathbf X - \mathbf Y = \begin{bmatrix}
x_1 - y_1 & 0 \\
x_2 - y_2 & 0
\end{bmatrix} \in G$
$\Box$


Condition $(3): \quad \forall \mathop{\mathbf J} \in G, \mathop{\mathbf R} \in \map {\MM_S} 2: \mathbf R \times \mathbf J \in G$
Let:

$\quad \mathbf J = \begin{bmatrix}
j_1 & 0 \\
j_2 & 0
\end{bmatrix} \in G, \quad \mathbf R = \begin{bmatrix}
r_{1 1} & r_{2 1} \\
r_{1 2} & r_{2 2}
\end{bmatrix} \in \map {\MM_S} 2$

Then:

$\quad \mathbf R \times \mathbf J = \begin{bmatrix}
r_{1 1} \times j_1 + r_{2 1} \times j_2 & 0 \\
r_{1 2} \times j_1 + r_{2 2} \times j_2 & 0
\end{bmatrix} \in G$
$\blacksquare$





