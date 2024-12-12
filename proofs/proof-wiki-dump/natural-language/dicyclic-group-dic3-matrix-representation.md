# 

Source: https://proofwiki.org/wiki/Dicyclic_Group_Dic3/Matrix_Representation

Matrix Representation of Dicyclic Group $\Dic 3$
Let $\omega$ denote the complex number $\map \exp {\dfrac {2 \pi i} 6}$, so that $\omega^6 = 1$.
Let $\mathbf X$ be the matrix defined as:

$\mathbf X = \begin{bmatrix} \omega & 0 \\ 0 & \omega^{-1} \end{bmatrix}$
Let $\mathbf Y$ be the matrix defined such that:

$\mathbf X \mathbf Y = \mathbf Y \mathbf X^{-1}$
and:

$\mathbf Y^2 = \mathbf X^3$

Then the set:

$G = \set {\mathbf X^i, \mathbf Y \mathbf X^j: 1 \le i, j \le 6}$
defines the dicyclic group $\Dic 3$.


Proof
By calculation, we have:














\(\ds \mathbf X^3\)

\(=\)







\(\ds \begin{bmatrix} \omega & 0 \\ 0 & \omega^{-1} \end{bmatrix}^3\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \omega^2 & 0 \\ 0 & \omega^{-2} \end{bmatrix} \begin{bmatrix} \omega & 0 \\ 0 & \omega^{-1} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \omega^3 & 0 \\ 0 & \omega^{-3} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \map \exp {3 \times \dfrac {2 \pi i} 6} & 0 \\ 0 & \map \exp {-3 \times \dfrac {2 \pi i} 6} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} \map \exp {\pi i} & 0 \\ 0 & \map \exp {-\pi i} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} -1 & 0 \\ 0 & -1 \end{bmatrix}\)










and it is seen that:

$\mathbf X^{-1} = \begin{bmatrix} \omega^{-1} & 0 \\ 0 & \omega \end{bmatrix}$

Now consider $\mathbf Y = \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}$
We have:














\(\ds \mathbf X \mathbf Y\)

\(=\)







\(\ds \begin{bmatrix} \omega^{-1} & 0 \\ 0 & \omega \end{bmatrix} \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & i \omega^{-1} \\ i \omega & 0\end{bmatrix}\)










and:














\(\ds \mathbf Y \mathbf X^{-1}\)

\(=\)







\(\ds \begin{bmatrix} 0 & i \\ i & 0 \end{bmatrix} \begin{bmatrix} \omega & 0 \\ 0 & \omega^{-1} \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 0 & i \omega^{-1} \\ i \omega & 0\end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \mathbf X \mathbf Y\)









Thus $\mathbf X$ and $\mathbf Y$ fulfil the criteria given.
$\blacksquare$


This needs considerable tedious hard slog to complete it.In particular: Yes there's a lot of work to be done yet on dicyclic groups. Not to be confused (like I did) with dihedral groups.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $8$




