# 

Source: https://proofwiki.org/wiki/Inverse_is_Mapping_implies_Mapping_is_Surjection/Proof_1

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ be a mapping.
Let the inverse $f^{-1} \subseteq T \times S$ itself be a mapping.

Then $f$ is a surjection.


Proof
Let $f^{-1}: T \to S$ be a mapping.
Aiming for a contradiction, suppose $f$ is not a surjection.
That is:

$\exists y \in T: \neg \exists x \in S: \tuple {x, y} \in f$
By definition of inverse of mapping:

$\exists y \in T: \neg \exists x \in S: \tuple {y, x} \in f^{-1}$
which would mean that $f^{-1}$ is not a mapping.
From this contradiction it follows that $f$ is a surjection.
$\blacksquare$





