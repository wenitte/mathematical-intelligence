# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Concentration_of_Complex_Measure_on_Measurable_Set



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.

The following definitions of the concept of Concentration of Complex Measure on Measurable Set are equivalent:

Definition 1
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 
Let $\size \mu$ be the variation of $\mu$. 
Let $E \in \Sigma$.

We say that $\mu$ is concentrated on $E$ if and only if:

$\map {\size \mu} {E^c} = 0$
Definition 2
Let $\mu$ be a complex measure on $\struct {X, \Sigma}$. 
Let $E \in \Sigma$.

We say that $\mu$ is concentrated on $E$ if and only if:

for every $\Sigma$-measurable set $A \subseteq E^c$, we have $\map \mu A = 0$.


Proof
From Characterization of Null Sets of Variation of Complex Measure, we have that: 

$\map {\size \mu} {E^c} = 0$ if and only if:
for each $\Sigma$-measurable set $A \subseteq E^c$, we have $\map \mu A = 0$.
Hence the desired equivalence. 
$\blacksquare$





