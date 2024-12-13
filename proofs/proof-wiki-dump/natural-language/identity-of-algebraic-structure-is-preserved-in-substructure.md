# 

Source: https://proofwiki.org/wiki/Identity_of_Algebraic_Structure_is_Preserved_in_Substructure

Theorem
Let $\struct {S, \circ}$ be an algebraic structure with identity $e$.
Let $\struct {T, \circ}$ be a algebraic substructure of $\struct {S, \circ}$.
That is, let $T \subseteq S$.
Let $e \in T$.

Then $e$ is an identity of $\struct {T, \circ}$.


Proof
Let $x \in T$.
By the definition of subset, $x \in S$.
Since $e$ is an identity of $\struct {S, \circ}$:

$e \circ x = x \circ e = x$
Since this holds for all $x \in T$, $e$ is an identity of $\struct {T, \circ}$.
$\blacksquare$





