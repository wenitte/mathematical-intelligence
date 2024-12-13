# 

Source: https://proofwiki.org/wiki/Normal_Element_of_C*-Algebra_is_Hermitian_iff_Spectrum_is_Real



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $x \in A$ be normal. 
Let $\map {\sigma_A} x$ denote the spectrum of $x$ in $A$.

Then $x$ is Hermitian if and only if:

$\map {\sigma_A} x \subseteq \R$


Proof
We first take $A$ unital.


Necessary Condition: Unital Case
Let $x \in A$ be Hermitian.
From Spectrum of Hermitian Element in Unital C*-Algebra is Real, we have:

$\map {\sigma_A} x \subseteq \R$
$\Box$


Sufficient Condition: Unital Case
Suppose that $x \in A$ has:

$\map {\sigma_A} x \subseteq \R$
Let $\Theta_x$ be the continuous functional calculus for $x$.
Let $\iota : \map {\sigma_A} x \to \C$ be the inclusion mapping.
Since $\map {\sigma_A} x \subseteq \R$, we have:

$z = \overline z$ for each $z \in \map {\sigma_A} x$
from Complex Number equals Conjugate iff Wholly Real. 
Hence we have $\iota = \overline \iota$.
We then have: 














\(\ds x^\ast\)

\(=\)







\(\ds \paren {\map {\Theta_x} \iota}^\ast\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \map {\Theta_x} {\overline \iota}\)





Definition of *-Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \map {\Theta_x} \iota\)




















\(\ds \)

\(=\)







\(\ds x\)









$\Box$


General Case
Let $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ be the unitization of $A$ as a $\text C^\ast$-algebra given by Existence of Unitization of C*-Algebra.
By the definition of the spectrum, we have:

$\map {\sigma_A} x = \map {\sigma_{A_+} } {\tuple {x, 0} } \cup \set 0$
and hence:

$\map {\sigma_A} x \subseteq \R$ if and only if $\map {\sigma_{A_+} } {\tuple {x, 0} } \subseteq \R$
By the unital case, we have:

$\map {\sigma_{A_+} } {\tuple {x, 0} } \subseteq \R$ if and only if $\tuple {x, 0}$ is Hermitian.
That is, if and only if $\tuple {x, 0}^\ast = \tuple {x, 0}$.
We have $\tuple {x, 0}^\ast = \tuple {x^\ast, 0}$, hence this is equivalent to $x = x^\ast$.
So $\map {\sigma_A} x \subseteq \R$ if and only if $x$ is Hermitian.
$\blacksquare$





