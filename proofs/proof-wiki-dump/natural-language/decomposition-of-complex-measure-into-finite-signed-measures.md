# 

Source: https://proofwiki.org/wiki/Decomposition_of_Complex_Measure_into_Finite_Signed_Measures



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 

Then there exists unique finite signed measures $\mu_R$ and $\mu_I$ such that: 

$\mu = \mu_R + i \mu_I$


Proof
Existence
For each $A \in \Sigma$ define the function $\mu_R : X \to \R$ by: 

$\map {\mu_R} A = \map \Re {\map \mu A}$
Similarly, for each $A \in \Sigma$ define the function $\mu_I : X \to \R$ by: 

$\map {\mu_I} A = \map \Im {\map \mu A}$
Clearly we have: 














\(\ds \map \mu A\)

\(=\)







\(\ds \map \Re {\map \mu A} + i \map \Im {\map \mu A}\)





Definition of Real Part, Definition of Imaginary Part














\(\ds \)

\(=\)







\(\ds \map {\mu_R} A + i \map {\mu_I} A\)









for each $A \in \Sigma$.
So:

$\mu = \mu_R + \mu_I$
It remains to show that $\mu_R$ and $\mu_I$ are finite signed measures.

We verify both of the conditions for a signed measure in turn. 
We have: 

$\map \mu \O = 0$
so:

$\map {\mu_R} A = \map \Re 0 = 0$
and:

$\map {\mu_I} A = \map \Im 0 = 0$
verifying $(1)$ for $\mu_R$ and $\mu_I$. 
Let $\sequence {D_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma$-measurable sets. 
Then: 














\(\ds \map {\mu_R} {\bigcup_{n \mathop = 1}^\infty D_n}\)

\(=\)







\(\ds \map \Re {\map \mu {\bigcup_{n \mathop = 1}^\infty D_n} }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\sum_{n \mathop = 1}^\infty \map \mu {D_n} }\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \Re {\map \mu {D_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\mu_R} {D_n}\)









and:














\(\ds \map {\mu_I} {\bigcup_{n \mathop = 1}^\infty D_n}\)

\(=\)







\(\ds \map \Im {\map \mu {\bigcup_{n \mathop = 1}^\infty D_n} }\)




















\(\ds \)

\(=\)







\(\ds \map \Im {\sum_{n \mathop = 1}^\infty \map \mu {D_n} }\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map \Im {\map \mu {D_n} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\mu_I} {D_n}\)









verifying $(2)$ for $\mu_R$ and $\mu_I$.
So $\mu_R$ and $\mu_I$ are signed measures. 

Since $\mu$ is a complex-valued function, we have: 

$\cmod {\map \mu X} < \infty$
We then have, from Modulus Larger than Real Part: 

$\size {\map \Re {\map \mu X} } < \infty$
so:

$\size {\map {\mu_R} X} < \infty$
Similarly, from Modulus Larger than Imaginary Part:

$\size {\map \Im {\map \mu X} } < \infty$
so:

$\size {\map {\mu_I} X} < \infty$
So:

$\mu_R$ and $\mu_I$ are finite.
$\Box$


Uniqueness
Suppose that $\mu_R^{(1)}$, $\mu_R^{(2)}$, $\mu_I^{(1)}$, $\mu_I^{(2)}$ are finite signed measures with: 

$\mu = \mu_R^{(1)} + i \mu_I^{(1)} = \mu_R^{(2)} + i \mu_I^{(2)}$
Then for each $A \in \Sigma$, we have: 

$\map {\mu_R^{(1)} } A - \map {\mu_R^{(2)} } A = i \paren {\map {\mu_I^{(2)} } A - \map {\mu_I^{(1)} } A}$
The left hand side is real, while the right hand side is imaginary, so: 

$\map {\mu_R^{(1)} } A - \map {\mu_R^{(2)} } A = i \paren {\map {\mu_I^{(2)} } A - \map {\mu_I^{(1)} } A} = 0$
so:

$\map {\mu_R^{(1)} } A = \map {\mu_R^{(2)} } A$
and:

$\map {\mu_I^{(1)} } A = \map {\mu_I^{(2)} } A$
Since $A \in \Sigma$ was arbitrary, we have: 

$\mu_R^{(1)} = \mu_R^{(2)}$
and:

$\mu_I^{(1)} = \mu_I^{(2)}$
so we obtain the desired uniqueness.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.1$: Signed and Complex Measures




