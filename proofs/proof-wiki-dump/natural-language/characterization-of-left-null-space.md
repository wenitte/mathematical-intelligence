# 

Source: https://proofwiki.org/wiki/Characterization_of_Left_Null_Space

Definition
Let $\mathbf A_{m \times n}$ be a matrix in the matrix space $\map {\MM_{m, n} } \R$.
Let $\map {\operatorname {N^\gets} } {\mathbf A}$ be used to denote the left null space of $\mathbf A$.

Then:

$\map {\operatorname {N^\gets} } {\mathbf A} = \set {\mathbf x \in \R^n: \mathbf x^\intercal \mathbf A = \mathbf 0^\intercal}$
where $\mathbf X^\intercal$ is the transpose of $\mathbf X$.


Proof
Let $\mathbf x = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix} \in \R^n$.














\(\ds \mathbf x \in \map {\operatorname {N^\gets} } {\mathbf A}\)

\(\leadstoandfrom\)







\(\ds \mathbf x \in \map {\operatorname N} {\mathbf A^\intercal}\)





Definition of Left Null Space








\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf A^\intercal \mathbf x\)

\(=\)







\(\ds \mathbf 0\)





Definition of Null Space








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\mathbf A^\intercal \mathbf x}^\intercal\)

\(=\)







\(\ds \mathbf 0^\intercal\)





taking the transpose of both sides








\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x^\intercal \paren {\mathbf A^\intercal}^\intercal\)

\(=\)







\(\ds \mathbf 0^\intercal\)





Transpose of Matrix Product








\(\ds \leadstoandfrom \ \ \)





\(\ds \mathbf x^\intercal \mathbf A\)

\(=\)







\(\ds \mathbf 0^\intercal\)





Transpose of Transpose of Matrix



We have that $\mathbf A^\intercal \mathbf x = \mathbf 0$ is equivalent to $\mathbf x^\intercal \mathbf A = \mathbf 0^\intercal$.
This implies that $\mathbf x \in \map {\operatorname N} {\mathbf A^\intercal} \iff \mathbf x^\intercal \mathbf A = \mathbf 0^\intercal$.
Recall that:

$\mathbf x \in \map {\operatorname N} {\mathbf A^\intercal} \iff \mathbf x \in \map {\operatorname {N^\gets} } {\mathbf A}$
Hence the result, by definition of set equality.
$\blacksquare$


Sources
For a video presentation of the contents of this page, visit the Khan Academy.




