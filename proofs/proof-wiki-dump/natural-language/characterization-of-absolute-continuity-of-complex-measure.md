# 

Source: https://proofwiki.org/wiki/Characterization_of_Absolute_Continuity_of_Complex_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $\nu$ be a complex measure on $\struct {X, \Sigma}$.

Then $\nu$ is absolutely continuous with respect to $\mu$ if and only if: 

for all $A \in \Sigma$ with $\map \mu A = 0$, we have $\map \nu A = 0$.


Proof
Let $\tuple {\nu_1, \nu_2, \nu_3, \nu_4}$ be the Jordan decomposition of $\nu$. 
Let $\size \nu$ be the variation of $\nu$.


Sufficient Condition
Suppose that: 

for all $A \in \Sigma$ with $\map \mu A = 0$, we have $\map \nu A = 0$.
We aim to show that: 

for all $A \in \Sigma$ with $\map \mu A = 0$, we have $\map {\size \nu} A = 0$
which will give: 

$\size \nu$ is absolutely continuous with respect to $\mu$
from which we will obtain: 

$\nu$ is absolutely continuous with respect to $\mu$.

Suppose that $A \in \Sigma$ has $\map \mu A = 0$. 
From Null Sets Closed under Subset, we have: 

$\map \mu B = 0$ for each $\Sigma$-measurable $B \subseteq A$.
Using the assumption on each such $B$, we have: 

for each $\Sigma$-measurable $B \subseteq A$ we have $\map \nu B = 0$.
From Characterization of Null Sets of Variation of Complex Measure, this implies that: 

$\map {\size \nu} A = 0$
So:

for all $A \in \Sigma$ with $\map \mu A = 0$, we have $\map {\size \nu} A = 0$
$\Box$


Necessary Condition
Suppose that $\nu$ is absolutely continuous with respect to $\mu$.
Then from Absolute Continuity of Complex Measure in terms of Jordan Decomposition, we have: 

$\nu_1$, $\nu_2$, $\nu_3$ and $\nu_4$ are absolutely continuous with respect to $\mu$.
So:

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map {\nu_1} A = \map {\nu_2} A = \map {\nu_3} A = \map {\nu_4} A = 0$
From the definition of the Jordan decomposition, this implies: 

$\map \nu A = \map {\nu_1} A - \map {\nu_2} A + i \paren {\map {\nu_3} A - \map {\nu_4} A} = 0$
So:

for all $A \in \Sigma$ with $\map \mu A = 0$ we have $\map \nu A = 0$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.2$: Absolute Continuity




