# 

Source: https://proofwiki.org/wiki/Characterization_of_Null_Sets_of_Variation_of_Signed_Measure

Theorem
Let $\struct {X, \Sigma}$ be measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $\size \mu$ be the variation of $\mu$. 

Then $A \in \Sigma$ is such that $\map {\size \mu} A = 0$ if and only if:

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$.


Proof
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.
Then, from the definition of variation: 

$\size \mu = \mu^+ + \mu^-$

Suppose that $A \in \Sigma$ is such that $\map {\size \mu} A = 0$.
Then: 

$\map {\mu^+} A + \map {\mu^-} A = 0$
Since $\mu^+ \ge 0$ and $\mu^- \ge 0$ we have: 

$\map {\mu^+} A = 0 $ and $\map {\mu^-} A = 0$
From Null Sets Closed under Subset, we then have: 

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map {\mu^+} B = 0$
and:

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map {\mu^-} B = 0$
So, for each $\Sigma$-measurable set $B \subseteq A$, we have: 

$\map {\mu^+} B - \map {\mu^-} B = 0$
From the definition of the Jordan decomposition, we therefore have: 

$\map \mu B = 0$
for each $\Sigma$-measurable set $B \subseteq A$.
$\Box$

Now suppose that: 

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$.
Let $\tuple {P, N}$ be a Hahn decomposition of $\mu$. 
From the definition of Jordan decomposition, and Uniqueness of Jordan Decomposition, we have: 

$\map {\mu^+} A = \map \mu {P \cap A}$
and:

$\map {\mu^+} A = -\map \mu {N \cap A}$
From Intersection is Subset, we have: 

$P \cap A \subseteq A$
and:

$N \cap A \subseteq A$
So, we have: 

$\map \mu {P \cap A} = 0$
and:

$\map \mu {N \cap A} = 0$
from the assumption.
That is: 

$\map {\mu^+} A = 0$
and:

$\map {\mu^-} A = 0$
So:

$\map {\size \mu} A = \map {\mu^+} A + \map {\mu^-} A = 0$
So, if: 

for each $\Sigma$-measurable set $B \subseteq A$, we have $\map \mu B = 0$
then:

$\map {\size \mu} A = 0$
$\blacksquare$





