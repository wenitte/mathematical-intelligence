# 

Source: https://proofwiki.org/wiki/Intersection_Measures_preserve_Absolute_Continuity

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $A \in \Sigma$.
Let $\mu$ and $\nu$ be measures such that:

$\mu$ is absolutely continuous with respect to $\nu$.
Let $\mu_A$ be the intersection measure of $\mu$ with respect to $A$.

Then $\mu_A$ is absolutely continuous with respect to $\nu$.


Proof
Let $B \in \Sigma$ be such that:

$\map \nu B = 0$
From Null Sets Closed under Subset, we have that $\map \nu {A \cap B} = 0$.
Hence since $\mu$ is absolutely continuous with respect to $\nu$, we have $\map \mu {A \cap B} = 0$.
That is, $\map {\mu_A} B = 0$. 
Hence whenever $B \in \Sigma$ is a $\nu$-null set, it is a $\mu_A$-null set.
Hence $\mu_A$ is absolutely continuous with respect to $\nu$.
$\blacksquare$





