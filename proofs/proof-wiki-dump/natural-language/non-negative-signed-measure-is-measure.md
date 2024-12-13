# 

Source: https://proofwiki.org/wiki/Non-Negative_Signed_Measure_is_Measure



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$ such that: 

$\map \mu A \ge 0$
for each $A \in \Sigma$. 

Then $\mu$ is a measure on $\struct {X, \Sigma}$. 


Proof
We verify each of the conditions given in the definition of a measure.
From the definition of a signed measure, $\mu$ is a function $\Sigma \to \overline \R$.


Proof of $(1)$
By hypothesis we have: 

$\map \mu A \ge 0$
for each $A \in \Sigma$, so condition $(1)$ is satisfied.
$\Box$


Proof of $(2)$
From the definition of a signed measure, we also have that $\mu$ is countably additive, so condition $(2)$ is satisfied.
$\Box$


Proof of $(3')$
Finally, from the definition of a signed measure, we have: 

$\map \mu \O = 0$
$\Box$

So $\mu$ is a measure.
$\blacksquare$





