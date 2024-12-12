# 

Source: https://proofwiki.org/wiki/Existence_and_Essential_Uniqueness_of_Conditional_Expectation_Conditioned_on_Sigma-Algebra/Proof_1

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.

Then there exists an integrable random variable $Z$ on $\struct {\Omega, \GG, \Pr}$ such that: 

$\ds \int_G Z \rd \Pr = \int_G X \rd \Pr$ for each $G \in \GG$.
Further, if $Z$ and $Z'$ are two integrable random variables satisfying this condition, we have: 

$Z = Z'$ almost everywhere.


Proof
First take $X \ge 0$. 
Define a function $\mu : \GG \to \R$ by: 

$\ds \map \mu A = \int_A X \rd \Pr$
for each $A \in \GG$.
From Integral of Integrable Function over Measurable Set is Well-Defined, this is well-defined. 
From Measure with Density is Measure, $\mu$ is a measure.
Note that if $\map \Pr A = 0$ for $A \in \GG$, we have $\map \mu A = 0$ from Integral of Integrable Function over Null Set.
So $\mu$ is absolutely continuous with respect to $\Pr \restriction_\GG$.
So by the Radon-Nikodym Theorem, there exists a $\Pr \restriction_\GG$-integrable function $Z \ge 0$ that is $\GG$-measurable such that: 

$\ds \map \mu A = \int_A Z \rd \Pr \restriction_\GG$
for each $A \in \GG$.
Then from Integral of Positive Measurable Function with respect to Restricted Measure, we have: 

$\ds \map \mu A = \int_A Z \rd \Pr$
for each $A \in \GG$.
That is: 

$\ds \int_A X \rd \Pr = \int_A Z \rd \Pr$
for each $A \in \GG$.
Finally, we have that: 

$\ds \int Z \rd \Pr = \int X \rd \Pr < \infty$
so $Z$ is integrable.
So to conclude, $Z$ is a $\GG$-measurable integrable random variable with: 

$\ds \int_A X \rd \Pr = \int_A Z \rd \Pr$
for all $A \in \GG$. 
$\Box$

Now take $X$ a general integrable random variable. 
Then from Positive Part of Real-Valued Random Variable is Real-Valued Random Variable, Negative Part of Real-Valued Random Variable is Real-Valued Random Variable and the definition of an integrable random variable:

$X^+$ and $X^-$ are integrable random variables.
Since $X^+ \ge 0$ and $X^- \ge 0$, by our previous work there exists integrable random variables $Z_1$, $Z_2$ with: 

$\ds \int_A X^+ \rd \Pr = \int_A Z_1 \rd \Pr$
and:

$\ds \int_A X^- \rd \Pr = \int_A Z_2 \rd \Pr$
for all $A \in \GG$, with $Z_1$ and $Z_2$ $\GG$-measurable. 
Then from Integral of Integrable Function is Additive: Corollary 2 and Linear Combination of Real-Valued Random Variables is Real-Valued Random Variable, we have: 

$Z_1 - Z_2$ is an integrable random variable that is $\GG$-measurable.
Then, we have: 














\(\ds \int_A \paren {Z_1 - Z_2} \rd \Pr\)

\(=\)







\(\ds \int_A Z_1 \rd \Pr - \int_A Z_2 \rd \Pr\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(=\)







\(\ds \int_A X^+ \rd \Pr - \int_A X^- \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_A X \rd \Pr\)





Definition of Integral of Integrable Function



So setting $Z = Z_1 - Z_2$, we have: 

$\ds \int_A X \rd \Pr = \int_A Z \rd \Pr$
for all $A \in \GG$.
$\Box$

Now let $Z'$ be another integrable random variable that is $\GG$-measurable with: 

$\ds \int_A X \rd \Pr = \int_A Z' \rd \Pr$
for all $A \in \GG$.
Then: 

$\ds \int_A Z \rd \Pr = \int_A Z' \rd \Pr$
for all $A \in \GG$.
Then, from Measurable Functions with Equal Integrals on Sub-Sigma-Algebra are A.E. Equal, we have that: 

$Z = Z'$ almost everywhere
completing the proof.
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.2$




