# 

Source: https://proofwiki.org/wiki/Identity_of_Submonoid_is_not_necessarily_Identity_of_Monoid



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $\struct {T, \circ}$ be a submonoid of $\struct {S, \circ}$ whose identity is $e_T$.

Then it is not necessarily the case that $e_T = e_S$.


Proof
Let $\struct {S, \times}$ be the semigroup formed by the set of order $2$ square matrices over the real numbers $R$ under (conventional) matrix multiplication.
Let $T$ be the subset of $S$ consisting of the matrices of the form $\begin{bmatrix} x & 0 \\ 0 & 0 \end{bmatrix}$ for $x \in \R$.
From Matrices of the Form $\begin{bmatrix} x & 0 \\ 0 & 0 \end{bmatrix}$ we have that $\struct {T, \times}$ is a subsemigroup of $\struct {S, \times}$.
From (some result somewhere) $\struct {S, \times}$ has an identity $\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$ which is not in $\struct {T, \times}$.


This article, or a section of it, needs explaining.In particular: Find that resultYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

However, note that:














\(\ds \begin{bmatrix} x & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}\)

\(=\)







\(\ds \begin{bmatrix} x & 0 \\ 0 & 0 \end{bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix} \begin{bmatrix} x & 0 \\ 0 & 0 \end{bmatrix}\)









demonstrating that $\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}$ is the identity of $\struct {T, \times}$.
$\blacksquare$


Also see
Identity of Cancellable Monoid is Identity of Submonoid


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 32.2$ Identity element and inverses




