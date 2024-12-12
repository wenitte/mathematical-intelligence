# 

Source: https://proofwiki.org/wiki/Continuous_Functional_Calculus_of_Reciprocal_is_Inverse_Element

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be normal and invertible.
Let $\map {\sigma_A} x$ be the spectrum of $x$ in $A$.
Let $\Theta_x$ be the continuous functional calculus for $x$.
Let $\iota : \map {\sigma_A} x \to \C$ be the inclusion.
Define $1/\iota : \map {\sigma_A} x \to \C$ by:

$\map {\paren {1/\iota} } z = \dfrac 1 z$
for each $z \in \map {\sigma_A} x$.

Then:

$\map {\Theta_x} {1/\iota} = x^{-1}$


Proof
Since $x$ is invertible, we have that $0 \not \in \map {\sigma_A} x$ and indeed $1/\iota$ is well-defined.
We have:














\(\ds x \map {\Theta_x} {1/\iota}\)

\(=\)







\(\ds \map {\Theta_x} \iota \map {\Theta_x} {1/\iota}\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \map {\Theta_x} 1\)





since $\Theta_x$ is an algebra homomorphism














\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A\)





since $\Theta_x$ is unital



and:














\(\ds \map {\Theta_x} {1/\iota} x\)

\(=\)







\(\ds \map {\Theta_x} {1/\iota} \map {\Theta_x} \iota\)





Definition of Continuous Functional Calculus














\(\ds \)

\(=\)







\(\ds \map {\Theta_x} 1\)





since $\Theta_x$ is an algebra homomorphism














\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A\)





since $\Theta_x$ is unital



Hence we have:

$\map {\Theta_x} {1/\iota} = x^{-1}$
$\blacksquare$





