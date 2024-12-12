# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Integral_Domain

Theorem
The ring of Gaussian integers $\struct {\Z \sqbrk i, +, \times}$ is an integral domain.


Proof
The set of complex numbers $\C$ forms a field, which is by definition a division ring.
We have that $\Z \sqbrk i \subset \C$.
So from Cancellable Element is Cancellable in Subset, all non-zero elements of $\Z \sqbrk i$ are cancellable for complex multiplication.
The identity element for complex multiplication is $1 + 0 i$ which is in $\Z \sqbrk i$.
We also have that Complex Multiplication is Commutative.
From Identity of Cancellable Monoid is Identity of Submonoid, the identity element of $\struct {\Z \sqbrk i^*, \times}$ is the same as for $\struct {\C^*, \times}$.

So we have that:

$\struct {\Z \sqbrk i, +, \times}$ is a commutative ring with unity
All non-zero elements of $\struct {\Z \sqbrk i, +, \times}$ are cancellable.
Hence the result from definition of integral domain.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 26$. Divisibility: Example $50$




