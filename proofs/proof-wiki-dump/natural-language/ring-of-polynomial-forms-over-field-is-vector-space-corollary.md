# 

Source: https://proofwiki.org/wiki/Ring_of_Polynomial_Forms_over_Field_is_Vector_Space/Corollary

Theorem
Let $\struct {F, +, \times}$ be a field whose unity is $1_F$.
Let $F \sqbrk X$ be the ring of polynomials over $F$.

Let $S \subseteq F \sqbrk X$ denote the subset of $F \sqbrk X$ defined as:

$S = \set {\mathbf x \in F \sqbrk X: \map \deg {\mathbf x} < d}$
for some $d \in \Z_{>0}$.
Then $S$ is an vector space over $F$.


Proof
From Ring of Polynomial Forms over Field is Vector Space we note that $\struct {F, +, \times}$ is a vector space over $F$.
The remaining question is that $S$ remains closed under polynomial addition and scalar multiplication.

Let $\mathbf x, \mathbf y \in S$ such that $\map \deg {\mathbf x} = m$ and $\map \deg {\mathbf y} = n$.
We have:














\(\ds \mathbf x + \mathbf y\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m x_j X^j + \sum_{k \mathop = 0}^n y_k X^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{\max \set {m, n} } \paren {x_k + y_k} X^k\)





Definition of Polynomial Addition



As both $m < d$ and $n < d$ by dint of them belonging to $S$, it follows that $\max \set {m, n} < d$.
Hence $\mathbf x + \mathbf y \in S$ and so $S$ is closed under polynomial addition.

Let the operation $\times': F \to F \sqbrk X$ be defined as follows.
Let $\lambda \in F$.
Let $\mathbf x \in F \sqbrk X$ be defined as:

$\mathbf x = \ds \sum_{k \mathop = 0}^n x_k X^k$
where $n = \map \deg {\mathbf x}$ denotes the degree of $\mathbf x$.
Thus:

$\lambda \times' \mathbf x := \ds \lambda \times' \sum_{k \mathop = 0}^n x_k X^k = \sum_{k \mathop = 0}^n \paren {\lambda \times x_k} X^k$
We have that $\times': F \to F \sqbrk X$ is an instance of polynomial multiplication where the multiplier $\lambda$ is a polynomial of degree $0$.

By definition of polynomial multiplication:














\(\ds \map \deg {\lambda \times' \mathbf x}\)

\(=\)







\(\ds \map \deg \lambda + \map \deg {\mathbf x}\)




















\(\ds \)

\(=\)







\(\ds 0 + \map \deg {\mathbf x}\)




















\(\ds \)

\(<\)







\(\ds d\)





as $\mathbf x \in S$



The result follows.
$\blacksquare$


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 32$. Definition of a Vector Space: Example $63$




