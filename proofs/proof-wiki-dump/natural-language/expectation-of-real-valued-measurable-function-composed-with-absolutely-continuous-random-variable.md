# 

Source: https://proofwiki.org/wiki/Expectation_of_Real-Valued_Measurable_Function_composed_with_Absolutely_Continuous_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be an absolutely continuous random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $P_X$ be the probability distribution of $X$.
Let $\map \BB \R$ be the Borel $\sigma$-algebra of $\R$.
Let $h : \R \to \R$ be a $\map \BB \R$-measurable function.
Let $f_X$ be a probability density function for $X$.
Let $\lambda$ be the Lebesgue measure on $\struct {\R, \map \BB \R}$.

Then $\map h X$ is integrable if and only if:

$\ds \int_\R \size {\map h x} \map {f_X} x \rd \map \lambda x < \infty$
and in this case: 

$\ds \expect {\map h X} = \int_\R \map h x \map {f_X} x \rd \map \lambda x$


Proof
From Composition of Measurable Mappings is Measurable:

$\map h X$ is $\Sigma$-measurable.
So:

$\map h X$ is a real-valued random variable.
From Characterization of Integrable Functions, we have that:

$\map h X$ is integrable if and only if $\size {\map h X}$ is integrable.
We have:














\(\ds \int \size {\map h X} \rd \Pr\)

\(=\)







\(\ds \int \size h \circ X \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_\R \size {\map h x} \rd \map {P_X} x\)





Integral with respect to Pushforward Measure, Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \int_\R \size {\map h x} \map {f_X} x \rd \map \lambda x\)





Change of Measures Formula for Integrals, Definition of Probability Density Function



Then: 

$\ds \int \size {\map h X} \rd \Pr$ if and only if $\ds \int_\R \size {\map h x} \map {f_X} x \rd \map \lambda x < \infty$
so:

$\size {\map h X}$ is integrable if and only if $\ds \int_\R \size {\map h x} \map {f_X} x \rd \map \lambda x < \infty$.
So:

$\map h X$ is integrable if and only if $\ds \int_\R \size {\map h x} \map {f_X} x \rd \map \lambda x < \infty$.
If $\map h X$ is integrable, then we have:














\(\ds \expect {\map h X}\)

\(=\)







\(\ds \int \map h X \rd \Pr\)





Definition of Expectation














\(\ds \)

\(=\)







\(\ds \int_\R \map h x \rd \map {P_X} x\)





Integral with respect to Pushforward Measure, Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \int_\R \map h x \map {f_X} x \rd \map \lambda x\)





Change of Measures Formula for Integrals: Corollary



$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $6.12$: The 'elementary formula' for expectation




