# 

Source: https://proofwiki.org/wiki/Inverse_of_Non-Transitive_Relation_is_Non-Transitive

Theorem
Let $\RR$ be a relation on a set $S$.

If $\RR$ is non-transitive, then so is $\RR^{-1}$.


Proof
Let $\RR$ be non-transitive.
Then:

$\exists x_1, y_1, z_1 \in S: \tuple {x_1, y_1}, \tuple {y_1, z_1} \in \RR, \tuple {x_1, z_1} \in \RR$
$\exists x_2, y_2, z_2 \in S: \tuple {x_2, y_2}, \tuple {y_2, z_2} \in \RR, \tuple {x_2, z_2} \notin \RR$

So:

$\exists x_1, y_1, z_1 \in S: \tuple {y_1, x_1}, \tuple {z_1, y_1} \in \RR^{-1}, \tuple {z_1, x_1} \in \RR^{-1}$
$\exists x_2, y_2, z_2 \in S: \tuple {y_2, x_2}, \tuple {z_2, y_2} \in \RR^{-1}, \tuple {z_2, x_2} \notin \RR^{-1}$
So $\RR^{-1}$ is non-transitive.
$\blacksquare$





