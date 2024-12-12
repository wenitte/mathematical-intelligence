# 

Source: https://proofwiki.org/wiki/Condition_for_Existence_of_Expectation_of_Real-Valued_Measurable_Function_composed_with_Absolutely_Continuous_Random_Variable

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be an absolutely continuous random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $P_X$ be the probability distribution of $X$.
Let $\map \BB \R$ be the Borel $\sigma$-algebra of $\R$.
Let $h : \R \to \R$ be a $\map \BB \R$-measurable function.
Let $\lambda$ be the Lebesgue measure on $\struct {\R, \map \BB \R}$.

Then $\map h X$ is integrable if and only if $h$ is $\lambda$-integrable function.
In this case: 

$\ds \expect {\map h X} = \int_\R \map h x \rd \map {P_X} x$
where $\expect {\map h X}$ denotes the expectation of $\map h X$.


Proof
From Composition of Measurable Mappings is Measurable, we have: 

$\map h X$ is $\Sigma$-measurable.
So:

$\map h X$ is a real-valued random variable.
From the definition of the probability distribution, we have: 

$P_X = X_\ast \Pr$
where $X_\ast \Pr$ denotes the pushforward measure of $\Pr$ under $X$.
Since $X$ is an absolutely continuous random variable, it is $\Sigma$-measurable.
So, from Integral with respect to Pushforward Measure: Corollary:

$\map h X$ is integrable if and only if $h$ is $\lambda$-integrable function.
If $\map h X$ is integrable, Integral with respect to Pushforward Measure: Corollary gives: 

$\ds \int \map h X \rd \Pr = \int_\R \map h x \rd \map {P_X} x$
that is: 

$\ds \expect {\map h X} = \int_\R \map h x \rd \map {P_X} x$
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $6.12$: The 'elementary formula' for expectation




