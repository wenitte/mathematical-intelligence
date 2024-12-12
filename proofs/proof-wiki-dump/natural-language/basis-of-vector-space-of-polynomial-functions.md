# 

Source: https://proofwiki.org/wiki/Basis_of_Vector_Space_of_Polynomial_Functions

Theorem
Let $B$ be the set of all the identity functions $I^n$ on $\R^n$ where $n \in \N^*$.

Then $B$ is a basis of the $\R$-vector space $\map P \R$ of all polynomial functions on $\R$.


Proof
By definition, every real polynomial function is a linear combination of $B$.

Suppose:

$\ds \sum_{k \mathop = 0}^m \alpha_k I^k = 0, \alpha_m \ne 0$
Then by differentiating $m$ times, we obtain from Nth Derivative of Nth Power:

$m! \alpha_m = 0$
whence $\alpha_m = 0$ which is a contradiction.

Hence $B$ is linearly independent and therefore is a basis for $\map P \R$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Example $27.7$




