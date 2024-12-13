# 

Source: https://proofwiki.org/wiki/Norm_of_Non-Negative_Increasing_Continuous_Function_applied_to_Positive_Element_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be positive.
Let $\map {\sigma_A} x \subseteq \hointr 0 \infty$ be the spectrum of $x$ in $A$.
Let $f : \map {\sigma_A} x \to \hointr 0 \infty$ be an increasing continuous function.
Let $\map f x$ be obtained from the continuous functional calculus.

Then we have:

$\norm {\map f x} = \map f {\norm x}$


Proof
From Continuous Function applied to Normal Element of Unital C*-Algebra is Positive iff Function is Non-Negative:

$\map f x$ is positive.
We then have:














\(\ds \norm {\map f x}\)

\(=\)







\(\ds \sup \set {\cmod \mu : \mu \in \map {\sigma_A} {\map f x} }\)





Spectral Radius of Normal Element of C*-Algebra Equal to Norm














\(\ds \)

\(=\)







\(\ds \sup \set {\mu : \mu \in \map {\sigma_A} {\map f x} }\)





Definition of Positive Element of C*-Algebra, $\map {\sigma_A} {\map f x} \subseteq \hointr 0 \infty$














\(\ds \)

\(=\)







\(\ds \sup \set {\mu : \mu \in f \sqbrk {\map {\sigma_A} x} }\)





Spectral Mapping Theorem














\(\ds \)

\(=\)







\(\ds \sup \set {\map f \lambda : \lambda \in \map {\sigma_A} x}\)




















\(\ds \)

\(=\)







\(\ds \map f {\sup \set {\lambda : \lambda \in \map {\sigma_A} x} }\)





since $f$ is increasing














\(\ds \)

\(=\)







\(\ds \map f {\sup \set {\cmod \lambda : \lambda \in \map {\sigma_A} x} }\)





Definition of Positive Element of C*-Algebra, $\map {\sigma_A} x \subseteq \hointr 0 \infty$














\(\ds \)

\(=\)







\(\ds \map f {\norm x}\)





Spectral Radius of Normal Element of C*-Algebra Equal to Norm



$\blacksquare$





