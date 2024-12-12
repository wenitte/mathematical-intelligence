# 

Source: https://proofwiki.org/wiki/Empty_Mapping_is_Mapping

Theorem
For each set $T$, the empty mapping, where the domain is the empty set, is a mapping.


Proof
Let $e: \O \to T$ be the empty mapping.
Vacuously:

$\forall x \in \O: \exists y \in T: \tuple {x, y} \in e$
thus showing that $e$ is left-total.
Also vacuously:

$\forall x \in \O: \forall y_1, y_2 \in T: \tuple {x, y_1} \in e \land \tuple {x, y_2} \in e \implies y_1 = y_2$
thus showing that $e$ is many-to-one.
Hence the result, from the definition of a mapping.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Functions




