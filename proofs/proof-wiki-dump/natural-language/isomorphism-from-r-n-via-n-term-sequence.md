# 

Source: https://proofwiki.org/wiki/Isomorphism_from_R%5En_via_n-Term_Sequence

Theorem
Let $G$ be a unitary $R$-module.
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be an ordered basis of $G$.
Let $R^n$ be the $R$-module $R^n$.

Let $\psi: R^n \to G$ be defined as:

$\ds \map \psi {\sequence {\lambda_k}_{1 \mathop \le k \mathop \le n} } = \sum_{k \mathop = 1}^n \lambda_k a_k$

Then $\psi$ is an isomorphism.


Proof
By Unique Representation by Ordered Basis, $\psi$ is a bijection.

We have:














\(\ds \sum_{k \mathop = 1}^n \lambda_k a_k + \sum_{k \mathop = 1}^n \mu_k a_k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\lambda_k a_k + \mu_k a_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\lambda_k + \mu_k} a_k\)









and we have:














\(\ds \beta \sum_{k \mathop = 1}^n \lambda_k a_k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \beta \paren {\lambda_k a_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\beta \lambda_k} a_k\)









thus proving that $\psi$ is also a homomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Theorem $27.5$




