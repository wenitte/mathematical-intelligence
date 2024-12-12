# 

Source: https://proofwiki.org/wiki/Barycenter_Exists_and_is_Well_Defined

Theorem
Let $\EE$ be an affine space over a field $k$.
Let $p_1, \ldots, p_n \in \EE$ be points.
Let $\lambda_1, \ldots, \lambda_n \in k$ such that $\ds \sum_{i \mathop = 1}^n \lambda_i = 1$.

Then the barycentre of $p_1, \ldots, p_n$ with weights $\lambda_1, \ldots, \lambda_n$ exists and is unique.


Proof
Let $r$ be any point in $\EE$.
Set:

$\ds q = r + \sum_{i \mathop = 1}^n \lambda_i \vec{r p_i}$
We are required to prove that for any other point $m \in \EE$:

$\ds q = m + \sum_{i \mathop = 1}^n \lambda_i \vec{m p_i}$

So:














\(\ds m + \sum_{i \mathop = 1}^n \lambda_i \vec{m p_i}\)

\(=\)







\(\ds m + \sum_{i \mathop = 1}^n \lambda_i \paren {\vec{m r} + \vec{r p_i} }\)





Chasles' Relation














\(\ds \)

\(=\)







\(\ds m + \paren {\sum_{i \mathop = 1}^n \lambda_i} \vec {m r} + \sum_{i \mathop = 1}^n \lambda_i \vec {r p_i}\)




















\(\ds \)

\(=\)







\(\ds m + \vec {m r} + \sum_{i \mathop = 1}^n \lambda_i \vec{r p_i}\)





by the assumption $\ds \sum_{i \mathop = 1}^n \lambda_i = 1$














\(\ds \)

\(=\)







\(\ds r + \sum_{i \mathop = 1}^n \lambda_i \vec{r p_i}\)





Axiom $(1)$ for an affine space














\(\ds \)

\(=\)







\(\ds q\)





Definition of $q$



Hence the result.
$\blacksquare$





