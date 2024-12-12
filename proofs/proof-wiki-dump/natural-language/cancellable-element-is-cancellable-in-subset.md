# 

Source: https://proofwiki.org/wiki/Cancellable_Element_is_Cancellable_in_Subset

Theorem
Let $\struct {S, \circ}$ be an algebraic structure.
Let $\struct {T, \circ} \subseteq \struct {S, \circ}$.
Let $x \in T$ be cancellable in $S$.

Then $x$ is also cancellable in $T$.


Proof
Let $x \in T$ be cancellable in $S$.
Then by definition, $x \in T$ is left cancellable in $S$.
It follows from Left Cancellable Element is Left Cancellable in Subset that $x \in T$ is left cancellable in $T$.

Again by definition, $x \in T$ is right cancellable in $S$.
It follows from Right Cancellable Element is Right Cancellable in Subset that $x \in T$ is right cancellable in $T$.

Thus $x$ is also both left cancellable and right cancellable in $T$.
So by definition, $x$ is cancellable in $T$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets




