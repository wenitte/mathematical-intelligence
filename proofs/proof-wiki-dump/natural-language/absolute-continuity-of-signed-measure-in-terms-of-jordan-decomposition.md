# 

Source: https://proofwiki.org/wiki/Absolute_Continuity_of_Signed_Measure_in_terms_of_Jordan_Decomposition

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $\nu$ be a signed measure on $\struct {X, \Sigma}$.
Let $\tuple {\nu^+, \nu^-}$ be the Jordan decomposition of $\nu$.

Then $\nu$ is absolutely continuous with respect to $\mu$ if and only if:

$\nu^+$ and $\nu^-$ are absolutely continuous with respect to $\mu$.


Proof
We have that $\nu$ is absolutely continuous with respect to $\mu$ if and only if:

$\size \nu$ is absolutely continuous with respect to $\mu$
where $\size \nu$ is the variation of $\nu$.
From the definition of variation, we have: 

$\size \nu = \nu^+ + \nu^-$

Suppose that $\nu$ is absolutely continuous with respect to $\mu$. 
Then: 

$\nu^+ + \nu^-$ absolutely continuous with respect to $\mu$.
That is:

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu^+} A + \map {\nu^-} A = 0$.
Since $\nu^+ \ge 0$ and $\nu^-$, we have that: 

$\map {\nu^+} A + \map {\nu^-} A = 0$ implies that $\map {\nu^+} A = 0$ and $\map {\nu^-} A = 0$.
So:

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu^+} A = 0$
so:

$\nu^+$ is absolutely continuous with respect to $\mu$.
We also have: 

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu^-} A = 0$
so:

$\nu^-$ is absolutely continuous with respect to $\mu$.
So:

if $\nu$ is absolutely continuous with respect to $\mu$ then $\nu^+$ and $\nu^-$ are absolutely continuous with respect to $\mu$.
$\Box$

Suppose that: 

$\nu^+$ and $\nu^-$ are absolutely continuous with respect to $\mu$.
Then: 

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu^+} A = 0$ and $\map {\nu^-} A = 0$.
So:

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu^+} A + \map {\nu^-} A = 0$
giving: 

$\nu^+ + \nu^-$ is absolutely continuous with respect to $\mu$.
That is: 

$\size \nu$ is absolutely continuous with respect to $\mu$.
So:

if $\nu^+$ and $\nu^-$ are absolutely continuous with respect to $\mu$ then $\nu$ is absolutely continuous with respect to $\mu$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.2$: Absolute Continuity




