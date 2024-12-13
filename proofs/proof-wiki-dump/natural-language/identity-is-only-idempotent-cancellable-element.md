# 

Source: https://proofwiki.org/wiki/Identity_is_only_Idempotent_Cancellable_Element

Theorem
Let $e_S$ be the identity of an algebraic structure $\struct {S, \circ}$.
Then $e_S$ is the only cancellable element of $\struct {S, \circ}$ that is idempotent.


Proof
By Identity Element is Idempotent, $e_S$ is idempotent.
Let $x$ be a cancellable idempotent element of $\struct {S, \circ}$.














\(\ds x \circ x\)

\(=\)







\(\ds x\)





$x$ is idempotent














\(\ds \)

\(=\)







\(\ds x \circ e_S\)





Definition of Identity Element




So $x \circ x = x \circ e_S$.
But because $x$ is also by hypothesis cancellable, it follows that $x = e_S$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.2$




