# 

Source: https://proofwiki.org/wiki/Nonzero_Eigenvalue_of_Compact_Operator_has_Finite_Dimensional_Eigenspace

Theorem
Let $H$ be a Hilbert space.
Let $T \in \map {B_0} H$ be a compact operator.
Let $\lambda \in \map {\sigma_p} T, \lambda \ne 0$ be a nonzero eigenvalue of $T$.

Then the eigenspace for $\lambda$ has finite dimension.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
$\def \sequence#1{\left({#1}\right)}$
Note that in the following, the notation for a sequence of terms in the form $e_n$ has been changed for this particular page to be $\sequence {e_n}$ rather than the $\mathsf{Pr} \infty \mathsf{fWiki}$ standard $\left\langle{e_n}\right\rangle$.
This is in order to avoid potential confusion with the notation $\innerprod {\lambda e_{n_k} } {\lambda e_{n_p} }$ for inner product.

Assume that there is an infinite orthonormal sequence $\sequence {e_j}$ in my eigenspace for the eigenvalue $\lambda$.
That is:

$\sequence {e_j: j \in J} \subset \map \ker {T - \lambda}$
Since $\norm {e_j} = 1$, then $\sequence {T e_n}$ will be in the closure image of $T$ of the closed unit ball.
Since the closure of this image is compact by assumption, then there is a subsequence $\sequence {T e_{n_k} }$ that converges, hence $\sequence {T e_{n_k} }$ is Cauchy.
Notice that

$\norm {T e_{n_k} - Te_{n_p} }^2 = \norm {\lambda e_{n_k} - \lambda e_{n_p} }^2 = 2 \size \lambda^2 > 0$
for $k \ne p$, we are using the fact that $\lambda \ne 0$ and $\innerprod {\lambda e_{n_k} } {\lambda e_{n_p} } = 0$ (since $\sequence {e_j}$ is an orthonormal sequence).
Since $\lambda$ is constant, then it contradicts the fact that $\sequence {e_{n_k} }$ is Cauchy.
Thus $\map \ker {T - \lambda}$ is finite-dimensional.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text{II}.4.13$




