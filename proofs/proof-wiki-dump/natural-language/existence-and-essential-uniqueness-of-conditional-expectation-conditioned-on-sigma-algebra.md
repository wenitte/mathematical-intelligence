# 

Source: https://proofwiki.org/wiki/Existence_and_Essential_Uniqueness_of_Conditional_Expectation_Conditioned_on_Sigma-Algebra



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable on $\struct {\Omega, \Sigma, \Pr}$.
Let $\GG \subseteq \Sigma$ be a sub-$\sigma$-algebra of $\Sigma$.

Then there exists an integrable random variable $Z$ on $\struct {\Omega, \GG, \Pr}$ such that: 

$\ds \int_G Z \rd \Pr = \int_G X \rd \Pr$ for each $G \in \GG$.
Further, if $Z$ and $Z'$ are two integrable random variables satisfying this condition, we have: 

$Z = Z'$ almost everywhere.


Proof 1
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


Proof 2
Observe that:

$\map {L^2} {\Omega, \GG, \Pr} \subseteq \map {L^2} {\Omega, \Sigma, \Pr}$
is a closed linear space.
Let:

$P : \map {L^2} {\Omega, \Sigma, \Pr} \to \map {L^2} {\Omega, \GG, \Pr}$
be the orthogonal projection.
Observe that for all $f \in \map {L^2} {\Omega, \Sigma, \Pr}$ and $g \in \map {L^2} {\Omega, \GG, \Pr}$:














\(\ds \int \map P f g \rd \Pr\)

\(=\)







\(\ds \int f g \rd \Pr + \int \paren {\map P f - f} g \rd \Pr\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \int f g \rd \Pr\)





as $\map P f - f \in \map {L^2} {\Omega, \GG, \Pr}^\perp$




Let $f \in \map {L^2} {\Omega, \Sigma, \Pr}$.
Let:

$\ds g := \chi_{\set {P f \ge 0} } - \chi_{\set {P f < 0} }$
so that:

$\size {\map P f} = \map P f g$
Since $g \in \map {L^2} {\Omega, \GG, \Pr}$, we have:














\(\ds \int \size {\map P f} \rd \Pr\)

\(=\)







\(\ds \int \map P f g\rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int f g \rd \Pr\)





by $(1)$














\(\ds \)

\(\le\)







\(\ds \int \size f \rd \Pr\)





as $\size g \le 1$



On the other hand, by Cauchy inequality and  the density of simple functions:

$\map {L^2} {\Omega, \Sigma, \Pr} \subseteq \map {L^1} {\Omega, \Sigma, \Pr}$
is a dense subspace.
Therefore, we can extend:

$P : \map {L^1} {\Omega, \Sigma, \Pr} \to \map {L^1} {\Omega, \GG, \Pr}$
so that:

$\ds \forall f \in \map {L^1} {\Omega, \Sigma, \Pr} : \norm {P f}_{\map {L^1} {\Omega, \Sigma, \Pr} } \le \norm f_{\map {L^1} {\Omega, \GG, \Pr} }$

Let $X \in \map {L^1} {\Omega, \Sigma, \Pr}$.
Let $\sequence {X_n} \subseteq \map {L^2} {\Omega, \Sigma, \Pr}$ such that:

$\ds \lim_{n \mathop \to \infty} \norm {X_n - X}_{\map {L^1} {\Omega, \Sigma, \Pr} }$
Then for each $G \in \GG$:














\(\ds \int_G \map P X \rd \Pr\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_G \map P {X_n} \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_G X_n \rd \Pr\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \int_G X \rd \Pr\)









Hence we can choose $Z = \map P X$.
$\Box$
Now let $Z'$ be another integrable random variable that is $\GG$-measurable with: 

$\ds \int_A X \rd \Pr = \int_A Z' \rd \Pr$
for all $A \in \GG$.
Then:














\(\ds \int \size {Z - Z'} \rd \Pr\)

\(=\)







\(\ds \int \paren {Z - Z'} \paren {\chi_{\set {Z \ge Z'} } - \chi_{\set {Z < Z'} } } \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_{\set {Z \ge Z'} } Z \rd \Pr - \int_{\set {Z < Z'} } Z \rd \Pr - \int_{\set {Z \ge Z'} } Z' \rd \Pr + \int_{\set {Z < Z'} } Z' \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \int_{\set {Z \ge Z'} } X \rd \Pr - \int_{\set {Z < Z'} } X \rd \Pr - \int_{\set {Z \ge Z'} } X \rd \Pr + \int_{\set {Z < Z'} } X \rd \Pr\)





by hypothesis














\(\ds \)

\(=\)







\(\ds 0\)









By Measurable Function Zero A.E. iff Absolute Value has Zero Integral:

$Z = Z'$ almost everywhere
$\blacksquare$


Sources
1991: David Williams: Probability with Martingales ... (previous) ... (next): $9.2$




