# 

Source: https://proofwiki.org/wiki/Rings_of_Polynomials_in_Ring_Elements_are_Isomorphic



Theorem
Let $R_1, R_2$ be commutative rings with unity.
Let $D$ be an integral subdomain of both $R_1$ and $R_2$.
Let $X_1, X_2 \in R$ be transcendental over $D$.
Let $D \sqbrk {X_1}, D \sqbrk {X_2}$ be the rings of polynomials in $X_1$ and $X_2$ over $D$.

Then $D \sqbrk {X_1}$ is isomorphic to $D \sqbrk {X_2}$.


Proof
First it is shown that the mapping $\phi: D \sqbrk {X_1} \to D \sqbrk {X_2}$ given by:

$\ds \map \phi {\sum_{k \mathop = 0}^n a_k \circ X_1^k} = \sum_{k \mathop = 0}^n a_k \circ X_2^k$
is a bijection.

Let $p, q \in \phi: D \sqbrk {X_1}$.
Suppose $\map \phi p = \map \phi q$.
Then the coefficients of $\map \phi p$ and $\map \phi q$ are equal, and $p_1 = q_1$.
Thus, by definition, $\phi$ is an injection.

By the same argument, the mapping $\psi: D \sqbrk {X_2} \to D \sqbrk {X_1}$ defined as:

$\ds \map \psi {\sum_{k \mathop = 0}^n a_k \circ X_2^k} = \sum_{k \mathop = 0}^n a_k \circ X_1^k$
is similarly an injection.
Thus by Injection is Bijection iff Inverse is Injection, $\phi$ is a bijection.

It remains to show that $\phi$ is a ring homomorphism. 
Let $\ds p = \sum_{k \mathop = 0}^n a_k \circ X_1^k, q = \sum_{k \mathop = 0}^n b_k \circ X_2^k \in D \sqbrk {X_1}$. 
For convenience we set $a_k = 0$, $k > n$ and $b_k = 0$, $k > m$.
We have:














\(\ds \map \phi {p + q}\)

\(=\)







\(\ds \map \phi {\sum_{k \mathop = 0}^\infty \paren {a_k + b_k} X_1^k}\)





Definition of Polynomial Addition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \left({a_k + b_k}\right) X_2^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^m a_k X_2^k + \sum_{k \mathop = 0}^n b_k X_2^k\)




















\(\ds \)

\(=\)







\(\ds \map \phi p + \map \phi q\)










Similarly for multiplication:














\(\ds \map \phi {p q}\)

\(=\)







\(\ds \map \phi {\sum_{k \mathop = 0}^{m n} \sum_{i + j = k} a_i b_j X_1^k}\)





Definition of Multiplication of Polynomials














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{m n} \sum_{i + j \mathop = k} a_i b_j X_2^k\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 0}^n a_k \circ X_1^k} \paren {\sum_{k \mathop = 0}^n b_k \circ X_2^k}\)




















\(\ds \)

\(=\)







\(\ds \map \phi p \map \phi q\)









This completes the proof.
$\blacksquare$


Motivation
Thus we see that the ring in which an integral domain is embedded is (to a certain extent) irrelevant -- it is only the integral domain itself which is important.


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 64.4$ Polynomial rings over an integral domain




