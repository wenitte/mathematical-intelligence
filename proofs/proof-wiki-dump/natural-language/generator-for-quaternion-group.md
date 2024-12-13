# 

Source: https://proofwiki.org/wiki/Generator_for_Quaternion_Group

Theorem
The Quaternion Group can be generated by the matrices:

$\mathbf a = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}
\qquad
\mathbf b = \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}$
where $i$ is the imaginary unit:

$i^2 = -1$


Proof
Note that:

$\mathbf I = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$
is the identity for (conventional) matrix multiplication of order $2$.

We have:














\(\ds \mathbf a^2\)

\(=\)







\(\ds \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \times 0 + 1 \times \paren {-1} & 0 \times 1 + 1 \times 0 \\ \paren {-1} \times 0 + 0 \times \paren {-1} & \paren {-1} \times 1 + 0 \times 0 \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)









and so:














\(\ds \mathbf a^4\)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \paren {-1} \times \paren {-1} + 0 \times 0 & \paren {-1} \times 0 + 0 \times \paren {-1} \\ 0 \times \paren {-1} + \paren {-1} \times 0 & 0 \times 0 + \paren {-1} \times \paren {-1} \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf I\)









Next we have:














\(\ds \mathbf b^2\)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \times 0 + i \times i & 0 \times i + i \times 0 \\ \paren i \times 0 + 0 \times i & i \times i + 0 \times 0 \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)









and so:

$\mathbf b^2 = \mathbf a^2$

Then we have:














\(\ds \mathbf a \mathbf b \mathbf a\)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \paren {-1} \times 0 + 0 \times i & \paren {-1} \times i + 0 \times 0 \\ \paren 0 \times 0 + \paren {-1} \times i & 0 \times i + \paren {-1} \times 0 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & -i \\ -i & 0 \end{bmatrix} \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 \times \paren {-1} + \paren {-i} \times 0 & 0 \times 0 + \paren {-i} \times \paren {-1} \\ \paren {-i} \times \paren {-1} + 0 \times 0 & \paren {-i} \times 0 + 0 \times \paren {-1} \end{bmatrix}\)





Definition of Matrix Product (Conventional)














\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf b\)









Thus $\gen {\mathbf a = \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix}, \mathbf b = \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} }$ fulfils the conditions for the group presentation of $\Dic 2$:

$\Dic 2 = \gen {a, b: a^4 = e, b^2 = a^2, a b a = b}$

Hence the result.
$\blacksquare$




