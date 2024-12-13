# 

Source: https://proofwiki.org/wiki/Groups_of_Order_21/Matrix_Representation_of_Non-Abelian_Instance

Theorem
Let $G$ be the group of order $21$ whose group presentation is:

$\gen {x, y: x^7 = e = y^3, y x y^{-1} = x^2}$

Then $G$ can be instantiated by the following pair of matrices over $\Z_7$:

$X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \qquad Y = \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}$


Proof
We calculate the powers of $X$ and $Y$ in turn:














\(\ds X^2\)

\(=\)







\(\ds \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\)






















\(\ds X^3\)

\(=\)







\(\ds \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}\)









and so on to:














\(\ds X^7\)

\(=\)







\(\ds \begin{pmatrix} 1 & 6 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}\)





as $7 \equiv 0 \pmod 7$




Thus we have:

$X^7 = \mathbf I$
where $\mathbf I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ is the identity matrix.

Then:














\(\ds Y^2\)

\(=\)







\(\ds \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}\)






















\(\ds Y^3\)

\(=\)







\(\ds \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}\)










Thus we have:

$Y^3 = \mathbf I$
and:

$Y^{-1} = \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}$.

Then:














\(\ds Y X Y^{-1}\)

\(=\)







\(\ds \begin{pmatrix} 4 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 4 & 4 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 2 & 0 \\ 0 & 4 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\)




















\(\ds \)

\(=\)







\(\ds X^2\)









and the result is apparent.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $12$: Applications of Sylow Theory: $(2)$ Groups of order $21$




