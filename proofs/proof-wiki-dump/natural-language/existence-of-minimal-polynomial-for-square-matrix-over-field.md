# 

Source: https://proofwiki.org/wiki/Existence_of_Minimal_Polynomial_for_Square_Matrix_over_Field

Theorem
Let $K$ be a field.
Let $n$ be a natural number.
Let $K^{n \times n}$ be the set of $n \times n$ matrices over $K$. 
Let $A \in K^{n \times n}$.

Then the minimal polynomial of $A$ exists and has degree at most $n^2$.


Proof
By Matrices over Field form Vector Space:

$K^{n \times n}$ forms a vector space under usual matrix addition and scalar multiplication.
By Dimension of Vector Space of Matrices:

$K^{n \times n}$ has dimension $n^2$.
Consider the collection of vectors: 

$I, A, A^2, \ldots, A^{n^2}$
Since this is a collection of $n^2 + 1$ vectors, and $K^{n \times n}$ has dimension $n^2$, we have by Size of Linearly Independent Subset is at Most Size of Finite Generator:

$I, A, A^2, \ldots, A^{n^2}$ are linearly dependent.
That is, there exists $\alpha_0, \alpha_1, \ldots, \alpha_{n^2} \in K$ not all zero such that: 

$\ds \sum_{i \mathop = 0}^{n^2} \alpha_i A^i = 0$
That is, the polynomial: 

$\ds \sum_{i \mathop = 0}^{n^2} \alpha_i X^i \in K \sqbrk X$
has $\map P A = 0$, and degree at most $n^2$. 
Let: 

$S = \set {P \in K \sqbrk X \setminus \set 0 \mid \map P A = 0}$
$S$ is certainly non-empty since we have found such an element in the computation above. 
Now consider the set: 

$D = \set {\deg P \mid P \in S}$
Since $D$ is a subset of the natural numbers, it contains a least element $N$ by the Well-Ordering Principle.
Since the polynomial we constructed has degree at most $n^2$, we have $N \le n^2$.
Let $Q \in S$ be of degree $N$.
Let $a_N$ be the coefficient of the $X^N$ term in $Q$. 
Then $\mu = \dfrac 1 {a_N} Q$ is a monic polynomial of minimum degree with $\map \mu A = 0$. 
So $\mu$ is a minimal polynomial for $A$. 
$\blacksquare$





