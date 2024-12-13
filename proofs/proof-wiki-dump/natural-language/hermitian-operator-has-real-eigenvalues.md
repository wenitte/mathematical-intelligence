# 

Source: https://proofwiki.org/wiki/Hermitian_Operator_has_Real_Eigenvalues


It has been suggested that this page or section be merged into Eigenvalues of Hermitian Operator are Real.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The eigenvalues of a Hermitian operator are real.


Proof
Let $\hat H$ be a Hermitian operator on an inner product space $V$ over the field of complex numbers, $\C$. That is, $\hat H = \hat H^\dagger$.
Then for an eigenvector $\left\vert{x}\right\rangle \in V, \left\vert{x}\right\rangle \ne \left\vert{0}\right\rangle$ and eigenvalue $\lambda \in \C$:

$\left.{\hat H}\middle\vert{x}\right\rangle = \left.{\lambda}\middle\vert{x}\right\rangle$

We know for a general operator $\hat A$ on $V$, the following holds:

$\forall \left\vert{x}\right\rangle, \left\vert{y}\right\rangle \in V: \left\langle{x}\middle\vert{\hat A}\middle\vert{y}\right\rangle = \left\langle{y}\middle\vert{\hat A^\dagger}\middle\vert{x }\right\rangle^*$
where $^*$ denotes the complex conjugate.
Noting $\hat H = \hat H^\dagger$ gives:

$\left\langle{x}\middle\vert{\hat H}\middle\vert{y}\right\rangle = \left\langle{y}\middle\vert{\hat H}\middle\vert{x}\right\rangle^*$
Now we compute:














\(\ds \left\langle{x}\middle\vert{\hat H}\middle\vert{x}\right\rangle\)

\(=\)







\(\ds \left\langle{x}\middle\vert{ \left({\hat H}\middle\vert{x}\right\rangle}\right)\)




















\(\ds \)

\(=\)







\(\ds \left\langle{x}\middle\vert{\lambda}\middle\vert{x}\right\rangle\)




















\(\ds \)

\(=\)







\(\ds \lambda \left\langle{x}\middle\vert{x}\right\rangle\)









Using our previous result:














\(\ds \left\langle{x}\middle\vert{\hat H}\middle\vert{x}\right\rangle\)

\(=\)







\(\ds \left\langle{x}\middle\vert{\hat H}\middle\vert{x}\right\rangle^*\)




















\(\ds \)

\(=\)







\(\ds \left({\lambda \left\langle{x}\middle\vert{x}\right\rangle}\right)^*\)









Equating the two previous equations gives:

$\lambda \left\langle{x}\middle\vert{x}\right\rangle = \left({\lambda \left\langle{x}\middle\vert{x}\right\rangle}\right)^*$
Recalling the conjugate symmetry property of the inner product, we can see that:

$\left\langle{x}\middle\vert{x}\right\rangle = \left\langle{x}\middle\vert{x}\right\rangle^*$
which is true if and only if $\left\langle{x}\middle\vert{x}\right\rangle \in \R$.
So

$\lambda \left\langle{x}\middle\vert{x}\right\rangle = \lambda^* \left\langle{x}\middle\vert{x}\right\rangle$
and so:

$\lambda = \lambda^*$
Therefore $\lambda \in \R$.
$\blacksquare$


Also see
Hermitian Operator has Orthogonal Eigenvectors




