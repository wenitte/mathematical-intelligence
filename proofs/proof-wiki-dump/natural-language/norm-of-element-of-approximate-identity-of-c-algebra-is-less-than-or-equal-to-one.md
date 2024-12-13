# 

Source: https://proofwiki.org/wiki/Norm_of_Element_of_Approximate_Identity_of_C*-Algebra_is_Less_Than_or_equal_to_One

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $\family {e_\lambda}_{\lambda \in \Lambda}$ be an approximate identity of $A$.

Then for each $\lambda \in \Lambda$ we have:

$\norm {e_\lambda} \le 1$


Proof
From the definition of an approximate identity, for each $\lambda \in \Lambda$ we have:

$\map {\sigma_A} {e_\lambda} \subseteq \closedint 0 1$
So that, from the definition of spectral radius:

$\map {r_A} {e_\lambda} \le 1$
By definition, each $e_\lambda$ is positive and hence Hermitian.
Hence from Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have $\norm {e_\lambda} = \map {r_A} {e_\lambda} \le 1$ for each $\lambda \in \Lambda$.
$\blacksquare$





