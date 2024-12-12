# 

Source: https://proofwiki.org/wiki/Affine_Coordinates_are_Well-Defined



Theorem
Let $\EE$ be an affine space with difference space $V$ over a field $k$.
Let $\RR = \left({p_0, e_1, \ldots, e_n}\right)$ be an affine frame in $\EE$.
Define a mapping $\Theta_\RR : k^n \to \EE$ by:

$\ds \map {\Theta_\RR} {\lambda_1, \ldots, \lambda_n} = p_0 + \sum_{i \mathop = 1}^n \lambda_i e_i$
Then $\Theta_\RR$ is a bijection.


Proof
Proof of Surjection
Let $p \in \EE$.
Let $v = p - p_0 \in V$.
Let $\tuple {\lambda_1, \ldots, \lambda_n}$ be coordinates of $v$ in the basis $\tuple {e_1, \ldots, e_n}$.
Then:














\(\ds p_0 + \sum_{i \mathop = 1}^n \lambda_ie_i\)

\(=\)







\(\ds p_0 + v\)




















\(\ds \)

\(=\)







\(\ds p_0 + \paren {p - p_0}\)




















\(\ds \)

\(=\)







\(\ds p\)









thus demonstrating that $\Theta_\RR$ is a surjection.


Proof of Injection
Let:

$\map {\Theta_\RR} {\lambda_1, \ldots, \lambda_n} = \map {\Theta_\RR} {\mu_1, \ldots, \mu_n}$
That is:

$\ds p_0 + \sum_{i \mathop = 1}^n \lambda_i e_i = p_0 + \sum_{i \mathop = 1}^n \mu_i e_i$
Then by $(3)$ of Properties of Affine Spaces:

$\ds \sum_{i \mathop = 1}^n \lambda_i e_i = \sum_{i \mathop = 1}^n \mu_i e_i$
By Expression of Vector as Linear Combination from Basis is Unique:

$\lambda_i = \mu_i$
for $i = 1, \ldots, n$.
Hence the result.
$\blacksquare$





