# 

Source: https://proofwiki.org/wiki/Absolute_Continuity_of_Measures_is_Transitive_Relation

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$, $\nu$ and $\lambda$ be measures on $\struct {X, \Sigma}$ such that: 

$\mu$ is absolutely continuous with respect to $\nu$
and:

$\nu$ is absolutely continuous with respect to $\lambda$.
That is: 

$\mu \ll \nu$
and:

$\nu \ll \lambda$

Then:

$\mu$ is absolutely continuous with respect to $\lambda$.
That is: 

$\mu \ll \lambda$
In other words:

$\ll$ is a transitive relation.


Proof
Let $A \in \Sigma$ be such that $\map \lambda A = 0$. 
Then, since $\nu \ll \lambda$ we have $\map \nu A = 0$ from the definition of absolute continuity.
Since $\mu \ll \nu$ we similarly have $\map \mu A = 0$ again applying the definition of absolute continuity.
So, whenever $A \in \Sigma$ is such that $\map \lambda A = 0$ we have $\map \mu A = 0$.
So $\mu$ is absolutely continuous with respect to $\lambda$.
$\blacksquare$





