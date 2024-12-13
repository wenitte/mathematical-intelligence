# 

Source: https://proofwiki.org/wiki/Orthogonal_Set_is_Linearly_Independent_Set

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over a real or complex subfield $\mathbb F$.
Let $S \subseteq V$ be an orthogonal set.
Let $\mathbf 0 \notin S$, where $\mathbf 0$ denotes the zero vector of $V$.

Then $S$ is a linearly independent set.


Proof
Let $n \in \N$.
Let $\lambda_1, \ldots, \lambda_n \in \mathbb F$, and let $u_1, \ldots, u_n \in S$ such that:

$\ds \sum_{i \mathop= 1}^n \lambda_i u_1 = \mathbf 0$

To prove that $S$ is a linearly independent set, we must show that $\lambda_k = 0$ for all $k \in \set { 1, \ldots, n}$.
We calculate:














\(\ds \mathbf 0\)

\(=\)







\(\ds \ds \sum_{i \mathop= 1}^n \lambda_i u_1\)














\(\ds \leadsto \ \ \)





\(\ds \innerprod {\mathbf 0}{u_k}\)

\(=\)







\(\ds \ds \innerprod {\sum_{i \mathop= 1}^n \lambda_i u_i }{u_k}\)





take the inner product with $u_k$ on both sides








\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \ds \innerprod {\sum_{i \mathop= 1}^n \lambda_i u_i }{u_k}\)





Inner Product with Zero Vector














\(\ds \)

\(=\)







\(\ds \ds \sum_{i \mathop= 1}^n \lambda_i \innerprod {u_i}{u_k}\)





Inner Product Axiom $\text N 2$: Linearity in first argument














\(\ds \)

\(=\)







\(\ds \lambda_k \innerprod {u_k}{u_k}\)





as $\innerprod {u_i}{u_k} = 0$ for $i \ne k$




As $u_k \ne \mathbf 0$ by assumption, it follows by Inner Product Axiom $\text N 3$: Non-Negative Definiteness that $\innerprod {u_k}{u_k} \ne 0$.
From Field has no Proper Zero Divisors, it follows that $0 = \lambda_k$ for all $k \in \set {1, \ldots, n}$.
$\blacksquare$


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 4.4$




