# 

Source: https://proofwiki.org/wiki/Point_Spectrum_of_Symmetric_Densely-Defined_Linear_Operator_is_Real

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$. 
Let $\struct {\map D T, T}$ be a symmetric densely-defined linear operator.
Let $\map {\sigma_p} T$ be the point spectrum of $\struct {\map D T, T}$.

Then: 

$\map {\sigma_p} T \subseteq \R$


Proof
If $\map {\sigma_p} T = \O$, the result is immediate.
Let $\lambda \in \map {\sigma_p} T$. 
Then, from Point Spectrum of Densely-Defined Linear Operator consists of its Eigenvalues, there exists $x \in \HH \setminus \set 0$ such that: 

$T x = \lambda x$
Then, we have: 

$\innerprod {T x} x = \innerprod {\lambda x} x = \lambda \innerprod x x$
and: 














\(\ds \innerprod {T x} x\)

\(=\)







\(\ds \innerprod x {T x}\)





Definition of Symmetric Densely-Defined Linear Operator














\(\ds \)

\(=\)







\(\ds \innerprod x {\lambda x}\)




















\(\ds \)

\(=\)







\(\ds \overline \lambda \innerprod x x\)





Inner Product is Sesquilinear



So, we have: 

$\paren {\lambda - \overline \lambda} \innerprod x x = 0$
Since $x \ne 0$, we have $\innerprod x x \ne 0$, so:

$\lambda = \overline \lambda$
From Complex Number equals Conjugate iff Wholly Real, we then have: 

$\lambda \in \R$
So:

$\map {\sigma_p} T \subseteq \R$
from the definition of set inclusion.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.3$: The Spectrum of Closed Unbounded Self-Adjoint Operators




