# 

Source: https://proofwiki.org/wiki/Boolean_Interpretation_is_Well-Defined/Proof_1

Theorem
Let $\LL_0$ be the language of propositional logic.
Let $v: \LL_0 \to \set {\T, \F}$ be a boolean interpretation.

Then $v$ is well-defined.


Proof
By Language of Propositional Logic has Unique Parsability, $\LL_0$ is uniquely parsable.
Therefore, the Principle of Definition by Structural Induction can be applied to $\LL_0$.

By inspection, we see that the definition of the boolean interpretation $v$ follows the bottom-up specification of propositional logic.
Hence the Principle of Definition by Structural Induction implies that $v$ is well-defined.
$\blacksquare$





