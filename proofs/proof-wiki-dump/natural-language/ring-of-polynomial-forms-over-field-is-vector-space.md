# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_over_Field_is_Vector_Space



Theorem
Let $\struct {F, +, \times}$ be a field whose unity is $1_F$.
Let $F \sqbrk X$ be the ring of polynomials over $F$.

Then $F \sqbrk X$ is an vector space over $F$.


Corollary
Let $S \subseteq F \sqbrk X$ denote the subset of $F \sqbrk X$ defined as:

$S = \set {\mathbf x \in F \sqbrk X: \map \deg {\mathbf x} < d}$
for some $d \in \Z_{>0}$.
Then $S$ is an vector space over $F$.


Proof
Let the operation $\times': F \to F \sqbrk X$ be defined as follows.
Let $x \in F$.
Let $\mathbf y \in F \sqbrk X$ be defined as:

$\mathbf y = \ds \sum_{k \mathop = 0}^n y_k X^k$
where $n = \map \deg {\mathbf y}$ denotes the degree of $\mathbf y$
Thus:

$x \times' \mathbf y := \ds x \sum_{k \mathop = 0}^n y_k X^k = \sum_{k \mathop = 0}^n \paren {x \times y_k} X^k$
We have that $\times': F \to F \sqbrk X$ is an instance of polynomial multiplication where the multiplier $x$ is a polynomial of degree $0$.

Hence, let the supposed vector space over $F$ in question be denoted in full as:

$\mathbf V = \struct {F \sqbrk X, +', \times'}_F$
where:

$+': F \sqbrk X \to F \sqbrk X$ denotes polynomial addition
$\times': F \to F \sqbrk X$ denotes the operation as defined above.
We already have that $F \sqbrk X$ is an integral domain.
Thus vector space axioms $\text V 0$ to $\text V 4$ are fulfilled.
By definition of $\times'$, it is seen that the remaining vector space axioms are fulfilled as follows:

Let $\lambda, \mu \in F$.
Let $\mathbf x, \mathbf y \in F \sqbrk X$ such that $\map \deg {\mathbf x} = m$ and $\map \deg {\mathbf y} = n$.


Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition













\(\ds \paren {\lambda + \mu} \times' \mathbf x\)

\(=\)







\(\ds \paren {\lambda + \mu} \times' \sum_{k \mathop = 0}^m x_k X^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^m \paren {\lambda + \mu} \times x_k X^k\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^m \paren {\lambda \times x_k X^k + \mu \times x_k X^k}\)





Field Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^m \lambda \times x_k X^k + \sum_{k \mathop = 0}^m \mu \times x_k X^k\)




















\(\ds \)

\(=\)







\(\ds \lambda \times' \mathbf x + \mu \times' \mathbf x\)





Definition of $\times'$



$\Box$


Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition













\(\ds \lambda \times' \paren {\mathbf x + \mathbf y}\)

\(=\)







\(\ds \lambda \times' \paren {\sum_{j \mathop = 0}^m x_j X^j + \sum_{k \mathop = 0}^n y_k X^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^m \lambda \times x_j X^j + \sum_{k \mathop = 0}^n \lambda \times y_k X^k\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\max \set {m, n} } \paren {\lambda \times x_k + \lambda \times y_k} X^k\)





Definition of Polynomial Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\max \set {m, n} } \lambda \times \paren {x_k + y_k} X^k\)





Field Axiom $\text D$: Distributivity of Product over Addition














\(\ds \)

\(=\)







\(\ds \lambda \times' \mathbf x + \lambda \times' \mathbf y\)









$\Box$


Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication













\(\ds \lambda \times' \paren {\mu \times' \mathbf x}\)

\(=\)







\(\ds \lambda \times' \paren {\mu \times' \sum_{k \mathop = 0}^n x_k X^k}\)




















\(\ds \)

\(=\)







\(\ds \lambda \times' \paren {\sum_{k \mathop = 0}^n \mu \times x_k X^k}\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \lambda \times \paren {\mu \times x_k} X^k\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {\lambda \times \mu} \times x_k X^k\)





Field Axiom $\text M1$: Associativity of Product














\(\ds \)

\(=\)







\(\ds \paren {\lambda \times \mu} \times' \sum_{k \mathop = 0}^n x_k X^k\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \paren {\lambda \times \mu} \times' \mathbf x\)









$\Box$


Vector Space Axiom $(\text V 8)$: Identity for Scalar Multiplication













\(\ds 1_F \times' \mathbf x\)

\(=\)







\(\ds 1_F \times' \sum_{k \mathop = 0}^n x_k X^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n 1_F \times x_k X^k\)





Definition of $\times'$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n x_k X^k\)





Field Axiom $\text M3$: Identity  for Product














\(\ds \)

\(=\)







\(\ds \mathbf x\)









$\Box$

All vector space axioms are hence seen to be fulfilled.
Hence the result.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 32$. Definition of a Vector Space: Example $63$




