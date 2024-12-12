# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Dilations_of_Balanced_Set

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a vector space over $\Bbb F$. 
Let $\lambda_1, \lambda_2, \ldots, \lambda_n$ be real numbers.
Let $W$ be a balanced set. 

Then: 

$\ds \bigcup_{i \mathop = 1}^n \lambda_i W = \lambda W$
where $\lambda \in \set {\lambda_1, \lambda_2, \ldots, \lambda_n}$ is picked so that $\cmod \lambda$ is maximized.


Proof
If $\lambda = 0$, then $\lambda_i = 0$ for each $i \in \set {1, 2, \ldots, n}$, so that:

$\ds \bigcup_{i \mathop = 1}^n \lambda_i W = \set {\mathbf 0_X} = \lambda W$
Now suppose that $\lambda \ne 0$.
Then for each $i$ we have:

$\ds \cmod {\frac {\lambda_i} \lambda} = \frac {\cmod {\lambda_i} } {\cmod \lambda} \le 1$
since we picked $\lambda$ among the $\lambda_i$ to maximise $\cmod \lambda$.
Since $W$ is balanced set, we then have:

$\ds \frac {\lambda_i} \lambda W \subseteq W$
so that:

$\lambda_i W \subseteq \lambda W$
for each $i$.
So, from Union of Subsets is Subset, we have:

$\ds \bigcup_{i \mathop = 1}^n \lambda_i W \subseteq \lambda W$
From Set is Subset of Union, we also have:

$\ds \lambda W \subseteq \bigcup_{i \mathop = 1}^n \lambda_i W$
From definition of set equality:

$\ds \bigcup_{i \mathop = 1}^n \lambda_i W = \lambda W$
$\blacksquare$





