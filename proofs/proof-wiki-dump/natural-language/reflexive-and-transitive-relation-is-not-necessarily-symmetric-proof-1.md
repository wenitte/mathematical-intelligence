# 

Source: https://proofwiki.org/wiki/Reflexive_and_Transitive_Relation_is_not_necessarily_Symmetric/Proof_1

Theorem
Let $S$ be a set.
Let $\alpha \subseteq S \times S$ be a relation on $S$.
Let $\alpha$ be both reflexive and transitive.

Then it is not necessarily the case that $\alpha$ is also symmetric.


Proof
Proof by Counterexample:
Let $S = \set {a, b, c}$.
Let:

$\alpha = \set {\tuple {a, a}, \tuple {b, b}, \tuple {c, c}, \tuple {a, b}, \tuple {b, c}, \tuple {a, c} }$
By inspection it is seen that $\alpha$ is both reflexive and transitive.
However, we have:

$a \mathrel \alpha b$
but it is not the case that $b \mathrel \alpha a$.
Hence $\alpha$ is both reflexive and transitive but not symmetric.
$\blacksquare$





