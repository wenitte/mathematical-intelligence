# 

Source: https://proofwiki.org/wiki/Power_Structure_Operation_on_Set_of_Singleton_Subsets_is_Closed

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\struct {\powerset S, \circ_\PP}$ be the power structure of $S$.
Let $S'$ denote the set of singleton elements of $\powerset S$.

Then the algebraic structure $\struct {S', \circ_\PP}$ is closed.


Proof
Let $A, B \in S'$.
Then:

$\exists a, b \in S: A = \set a, B = \set b$
Hence:














\(\ds A \circ_\PP B\)

\(=\)







\(\ds \set {x \circ y: x \in A, y \in B}\)




















\(\ds \)

\(=\)







\(\ds \set {a \circ b}\)




















\(\ds \)

\(\in\)







\(\ds S'\)









Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.5$




