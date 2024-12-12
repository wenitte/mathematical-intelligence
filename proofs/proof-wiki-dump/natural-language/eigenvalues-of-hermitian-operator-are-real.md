# 

Source: https://proofwiki.org/wiki/Eigenvalues_of_Hermitian_Operator_are_Real


It has been suggested that this page or section be merged into Hermitian Operator has Real Eigenvalues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\HH$ be a Hilbert space.
Let $A \in \map B \HH$ be a Hermitian operator.

Then all eigenvalues of $A$ are real.


Proof
Let $\lambda$ be an eigenvalue of $A$.
Let $v \in H$ be an eigenvector for $\lambda$.
That is:

$A v = \lambda v$

Now compute:














\(\ds \lambda \innerprod v v\)

\(=\)







\(\ds \innerprod {\lambda v} v\)





Property $(2)$ of an inner product














\(\ds \)

\(=\)







\(\ds \innerprod {A v} v\)





$v$ is an eigenvector














\(\ds \)

\(=\)







\(\ds \innerprod v {A v}\)





$A$ is Hermitian














\(\ds \)

\(=\)







\(\ds \overline {\innerprod {A v} v}\)





Property $(1)$ of an inner product














\(\ds \)

\(=\)







\(\ds \overline {\innerprod {\lambda v} v}\)





$v$ is an eigenvector














\(\ds \)

\(=\)







\(\ds \bar \lambda \innerprod v v\)





Properties $(2)$, $(4)$ of an inner product



Now $v$, being an eigenvector, is non-zero.
By property $(5)$ of an inner product, this implies $\innerprod v v \ne 0$.
Thence, dividing out $\innerprod v v$, obtain $\lambda = \bar \lambda$.
From Complex Number equals Conjugate iff Wholly Real, $\lambda \in \R$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {II}.5.8$




