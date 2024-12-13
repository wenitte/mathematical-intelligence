# 

Source: https://proofwiki.org/wiki/Normal_Element_of_C*-Algebra_is_Projection_iff_Spectrum_contains_only_Zero_and_One



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $p \in A$ be normal. 
Let $\map {\sigma_A} p$ denote the spectrum of $p$ in $A$.

Then $p$ is a projection if and only if:

$\map {\sigma_A} p \subseteq \set {0, 1}$


Proof
We first take $A$ unital.


Necessary Condition: Unital Case
Let $p \in A$ be a projection.
Then from Spectrum of Projection in *-Algebra:

$\map {\sigma_A} p \subseteq \set {0, 1}$
$\Box$


Sufficient Condition: Unital Case
Suppose that:

$\map {\sigma_A} p \subseteq \set {0, 1}$
From Normal Element of C*-Algebra is Hermitian iff Spectrum is Real, $p$ is Hermitian. 
Let $\Theta_p$ be the continuous functional calculus for $x$.
Let $\iota : \map {\sigma_A} p \to \C$ be the inclusion mapping.
Since $\map {\sigma_A} p \subseteq \set {0, 1}$, we have:

$z^2 = z$ for each $z \in \map {\sigma_A} p$
We then have:














\(\ds p^2\)

\(=\)







\(\ds \paren {\map {\Theta_p} \iota}^2\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \map {\Theta_p} {\iota^2}\)





Definition of Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \map {\Theta_p} \iota\)




















\(\ds \)

\(=\)







\(\ds p\)









$\Box$


General Case
Let $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ be the unitization of $A$ as a $\text C^\ast$-algebra given by Existence of Unitization of C*-Algebra.
By the definition of the spectrum, we have:

$\map {\sigma_A} p = \map {\sigma_{A_+} } {\tuple {p, 0} } \cup \set 0$
Note that $\tuple {p, 0}^2 = \tuple {p^2, 0}$ and $\tuple {p, 0}^\ast = \tuple {p^\ast, 0}$.
Hence $\tuple {p, 0}$ is a projection on $A_+$ if and only if $p$ is a projection on $A$.
By the unital case, we have that $\tuple {p, 0}$ is a projection on $A_+$ if and only if $\map {\sigma_{A_+} } {\tuple {p, 0} } \subseteq \set {0, 1}$. 
That is, if and only if $\map {\sigma_A} p \subseteq \set {0, 1}$.
So $p$ is a projection on $A$ if and only if $\map {\sigma_A} p \subseteq \set {0, 1}$. 
$\blacksquare$





