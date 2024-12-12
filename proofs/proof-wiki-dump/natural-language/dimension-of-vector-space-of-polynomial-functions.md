# 

Source: https://proofwiki.org/wiki/Dimension_of_Vector_Space_of_Polynomial_Functions

Theorem
Let $\struct {F, +, \times}$ be a field whose unity is $1_F$.
Let $F_n \sqbrk X$ be the ring of polynomials over $F$ whose degree is less than $n$.

Then the dimension of the vector space $F_n \sqbrk X$ is $n$.


Proof
Let $B$ be the set of all the identity functions $I^k$ on $F_n \sqbrk X$ where $n \in \Z_{\ge 0}$.
By definition, every element of $F_n \sqbrk X$ is a linear combination of $B$.

Suppose:

$\ds \sum_{k \mathop = 0}^m \alpha_k I^k = 0, \alpha_m \ne 0$
Then by differentiating $m$ times, we obtain from Nth Derivative of Nth Power:

$m! \alpha_m = 0$
whence $\alpha_m = 0$ which is a contradiction.

Hence $B$ is linearly independent and therefore is a basis for $F_n \sqbrk X$.
The result follows from Linearly Independent Set is Basis iff of Same Cardinality as Dimension.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 34$. Dimension: Example $67$




