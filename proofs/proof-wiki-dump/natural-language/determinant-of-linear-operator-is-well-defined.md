# 

Source: https://proofwiki.org/wiki/Determinant_of_Linear_Operator_is_Well_Defined

Theorem
Let $V$ be a nontrivial finite dimensional vector space over a field $K$.
Let $A: V \to V$ be a linear operator of $V$.

Then the determinant $\det A$ of $A$ is well defined, that is, does not depend on the choice of a basis of $V$.


Proof
Let $A_\BB$ and $A_\CC$ be the matrices of $A$ relative to $\BB$ and $\CC$ respectively.
Let $\det$ also denote the determinant of a matrix.
We are required to show that $\det A_\BB = \det A_\CC$.

Let $P$ be the change of basis matrix from $\BB$ to $\CC$.
By Change of Coordinate Vectors Under Linear Mapping and since $A_\BB$ and $A_\CC$ represent the same linear operator with respect to different bases, the following diagram commutes:



Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Replace the above diagram with an xyplotYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
where $u \in V$, and $\sqbrk u_\BB$ indicates the coordinate vector of $u$ with respect to $\BB$, and similarly for $\sqbrk u_\CC$.
That is, $P A_\BB = A_\CC P$.
From Change of Basis Matrix is Nonsingular:

$A_\BB = P^{-1} A_\CC P$
So:














\(\ds \map \det {A_\BB}\)

\(=\)







\(\ds \map \det {P^{-1} A_\CC P}\)




















\(\ds \)

\(=\)







\(\ds \map \det {P^{-1} } \map \det {A_\CC} \map \det P\)





Determinant of Matrix Product














\(\ds \)

\(=\)







\(\ds \map \det P^{-1} \map \det {A_\CC} \map \det P\)





Determinant of Inverse Matrix














\(\ds \)

\(=\)







\(\ds \map \det {A_\CC}\)









Hence the result.
$\blacksquare$





