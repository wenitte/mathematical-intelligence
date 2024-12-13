# 

Source: https://proofwiki.org/wiki/Power_Structure_of_Subset_is_Closed_iff_Subset_is_Closed



Theorem
Let $\struct {S, \circ}$ be a magma.
Let $\circ_\PP$ be the operation induced on $\powerset S$, the power set of $S$.
Let $T \subseteq S$.

Then:

the algebraic structure $\struct {\powerset T, \circ_\PP}$ is closed
if and only if:

the algebraic structure $\struct {T, \circ}$ is closed.


Proof
Sufficient Condition
Let $\struct {\powerset T, \circ_\PP}$ be closed.
Then:










\(\ds \forall X, Y \in \powerset T: \, \)



\(\ds X \circ_\PP Y\)

\(\in\)







\(\ds \powerset T\)





Definition of Closed Algebraic Structure














\(\ds \set {x \circ y: x \in X, y \in Y}\)

\(\subseteq\)







\(\ds T\)





Definition of Operation Induced on Power Set








\(\ds \leadsto \ \ \)

\(\ds \forall x \in X, y \in Y: \, \)



\(\ds x \circ y\)

\(\in\)







\(\ds T\)





Definition of Subset



That is, $\struct {T, \circ}$ is closed.
$\Box$


Necessary Condition
Let $\struct {T, \circ}$ be closed.
Then by definition $\struct {T, \circ}$ is a magma.
From Power Structure of Magma is Magma it follows that $\struct {\powerset T, \circ_\PP}$ is likewise a magma.
That is, the algebraic structure $\struct {\powerset T, \circ_\PP}$ is closed.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets: Exercise $9.8$




