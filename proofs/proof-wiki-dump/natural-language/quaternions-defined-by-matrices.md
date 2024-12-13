# 

Source: https://proofwiki.org/wiki/Quaternions_Defined_by_Matrices

Theorem
Let $\mathbf 1, \mathbf i, \mathbf j, \mathbf k$ denote the following four elements of the matrix space $\map {\MM_\C} 2$:

$\mathbf 1 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}
\qquad
\mathbf i = \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}
\qquad
\mathbf j = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}
\qquad
\mathbf k = \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}
$
where $\C$ is the set of complex numbers.

Then $\mathbf 1, \mathbf i, \mathbf j, \mathbf k$ are related to each other in the following way:














\(\ds \mathbf i \mathbf j = - \mathbf j \mathbf i\)

\(=\)







\(\ds \mathbf k\)




















\(\ds \mathbf j \mathbf k = - \mathbf k \mathbf j\)

\(=\)







\(\ds \mathbf i\)




















\(\ds \mathbf k \mathbf i = - \mathbf i \mathbf k\)

\(=\)







\(\ds \mathbf j\)




















\(\ds \mathbf i^2 = \mathbf j^2 = \mathbf k^2 = \mathbf i \mathbf j \mathbf k\)

\(=\)







\(\ds -\mathbf 1\)











Proof
This is demonstrated by straightforward application of conventional matrix multiplication:















\(\ds \mathbf i \mathbf j\)

\(=\)







\(\ds \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} i \cdot 0 + 0 \cdot -1 & i \cdot 1 + 0 \cdot 0 \\ 0 \cdot 0 + -i \cdot -1 & 0 \cdot 1 + -i \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf k\)
























\(\ds -\mathbf j \mathbf i\)

\(=\)







\(\ds -\begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 0 \cdot i + 1 \cdot 0 & 0 \cdot 0 + 1 \cdot -i \\ -1 \cdot i + 0 \cdot 0 & -1 \cdot 0 + 0 \cdot -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 0 & -i \\ -i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf k\)



























\(\ds \mathbf j \mathbf k\)

\(=\)







\(\ds \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \cdot 0 + 1 \cdot i & 0 \cdot i + 1 \cdot 0 \\ -1 \cdot 0 + 0 \cdot i & -1 \cdot i + 0 \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf i\)
























\(\ds -\mathbf k \mathbf j\)

\(=\)







\(\ds -\begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 0 \cdot 0 + i \cdot -1 & 0 \cdot 1 + i \cdot 0 \\ i \cdot 0 + 0 \cdot -1 & i \cdot 1 + 0 \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} -i & 0 \\ 0 & i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf i\)



























\(\ds \mathbf k \mathbf i\)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \cdot i + i \cdot 0 & 0 \cdot 0 + i \cdot -i \\ i \cdot i + 0 \cdot 0 & i \cdot 0 + 0 \cdot -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf j\)
























\(\ds -\mathbf i \mathbf k\)

\(=\)







\(\ds -\begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} i \cdot 0 + 0 \cdot i & i \cdot i + 0 \cdot 0 \\ 0 \cdot 0 + -i \cdot i & 0 \cdot i + -i \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf j\)



























\(\ds \mathbf i^2\)

\(=\)







\(\ds \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix} \begin{bmatrix} i & 0 \\ 0 & -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} i \cdot i + 0 \cdot 0 & i \cdot 0 + 0 \cdot -i \\ 0 \cdot i + -i \cdot 0 & -i \cdot 0 + -i \cdot -i \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)
























\(\ds \mathbf j^2\)

\(=\)







\(\ds \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \cdot 0 + 1 \cdot -1 & 0 \cdot 1 + 1 \cdot 0 \\ -1 \cdot 0 + 0 \cdot -1 & -1 \cdot 1 + 0 \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)
























\(\ds \mathbf k^2\)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \cdot 0 + i \cdot i & 0 \cdot i + i \cdot 0 \\ i \cdot 0 + 0 \cdot i & i \cdot i + 0 \cdot 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds -\mathbf 1\)



























\(\ds \mathbf i \mathbf j \mathbf k\)

\(=\)







\(\ds \paren {\mathbf i \mathbf j} \mathbf k\)





Matrix Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \mathbf k \mathbf k\)





from above: $\mathbf i \mathbf j = \mathbf k$














\(\ds \)

\(=\)







\(\ds -\mathbf 1\)





from above: $\mathbf k^2 = - \mathbf 1$




$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): Chapter $1$: Rings - Definitions and Examples: $2$: Some examples of rings: Ring Example $9$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 34$. Examples of groups: $(6) \ \text{(ii)}$




