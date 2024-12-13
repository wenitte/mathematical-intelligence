# 

Source: https://proofwiki.org/wiki/Multiple_of_Identity_Element_of_Unital_C*-Algebra_is_Positive_iff_Coefficient_is_Non-Negative_Real_Number

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\lambda \in \C$.

Then $\lambda {\mathbf 1}_A$ is positive if and only if $\lambda \in \R_{\ge 0}$. 


Corollary
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\lambda, \mu \in \R$.
Let $\le_A$ be the canonical preordering of $A$.

Then $\lambda {\mathbf 1}_A \le_A \mu {\mathbf 1}_A$ if and only if $\lambda \le \mu$. 


Proof
First we have:

$\tuple {\lambda {\mathbf 1}_A}^\ast = \overline \lambda {\mathbf 1}_A$
by the definition of an involution and Identity Element in Unital *-Algebra is Hermitian.
Since:

$\lambda \overline \lambda {\mathbf 1}_A = \overline \lambda \lambda {\mathbf 1}_A$
Hence $\lambda {\mathbf 1}_A$ is normal.
From the Spectral Mapping Theorem for Polynomials and Spectrum of Identity Element of Unital Algebra, we have:

$\map {\sigma_A} {\lambda {\mathbf 1}_A} = \set \lambda$
Hence by Normal Element of C*-Algebra is Hermitian iff Spectrum is Real, we have that $\lambda {\mathbf 1}_A$ is Hermitian if $\set \lambda \subseteq \R$.
That is, $\lambda \in \R$.
From the definition of a positive element, we then have that $\lambda {\mathbf 1}_A$ is positive if and only if $\set \lambda \subseteq \hointr 0 \infty$.
That is, $\lambda \in \R_{\ge 0}$. 
$\blacksquare$





