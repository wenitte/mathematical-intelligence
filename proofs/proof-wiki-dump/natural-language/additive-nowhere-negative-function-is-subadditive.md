# 

Source: https://proofwiki.org/wiki/Additive_Nowhere_Negative_Function_is_Subadditive

Theorem
Let $\AA$ be an algebra of sets.
Let $f: \AA \to \overline \R$ be an additive function such that:

$\forall A \in \AA: \map f A \ge 0$

Then $f$ is subadditive.


Proof
If $f$ is additive then by Additive Function is Strongly Additive:

$\forall A, B \in \AA: \map f {A \cup B} = \map f A + \map f B - \map f {A \cap B}$

As $\map f {A \cap B} \ge 0$, the result follows by definition of subadditive:

$\forall A, B \in \AA: \map f {A \cup B} \le \map f A + \map f B$
$\blacksquare$





