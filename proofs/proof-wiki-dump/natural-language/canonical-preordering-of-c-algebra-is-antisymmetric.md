# 

Source: https://proofwiki.org/wiki/Canonical_Preordering_of_C*-Algebra_is_Antisymmetric

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\le_A$ be the canonical preordering of $A$.
Let $a, b \in A$ such that:

$a \le_A b$
and:

$b \le_A a$

Then $a = b$.
That is, $\le_A$ is antisymmetric and hence $\le_A$ is a partial ordering.


Proof
From the definition of $\le_A$ we have:

$b - a$ is positive.
Hence $b - a$ is Hermitian and:

$\map {\sigma_A} {b - a} \subseteq \hointr 0 \infty$
From the Spectral Mapping Theorem for Polynomials, we also have:

$\map {\sigma_A} {a - b} = \set {-t : t \in \map {\sigma_A} {a - b} } \subseteq \hointl {-\infty} 0$
Again from the definition of $\le_A$ we have:

$a - b$ is positive.
Hence:

$\map {\sigma_A} {a - b} \subseteq \hointr 0 \infty$
Hence we have:

$\map {\sigma_A} {a - b} \subseteq \hointr 0 \infty \cap \hointl {-\infty} 0 = \set 0$
From Spectrum of Element of Banach Algebra is Non-Empty, we have $\map {\sigma_A} {a - b} \ne \O$.
Hence $\map {\sigma_A} {a - b} = \set 0$.
So $\map {r_A} {a - b} = 0$ where $r_A$ denotes spectral radius.
Hence from Spectral Radius of Normal Element of C*-Algebra Equal to Norm: Corollary we have $a - b = {\mathbf 0}_A$.
Hence $a = b$.
$\blacksquare$





