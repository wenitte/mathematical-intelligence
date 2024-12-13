# 

Source: https://proofwiki.org/wiki/Right_Operation_is_Closed_for_All_Subsets



Theorem
Let $S$ be a set.
Let $\rightarrow$ be the right operation on $S$.
That is:

$\forall x, y \in S: x \rightarrow y = y$
Let $\powerset S$ be the power set of $S$.

Then for all $T \in \powerset S$, $\rightarrow$ is closed on $T$.

Thus, for all $T \in \powerset S$:

$\struct {T, \rightarrow}$  is a subsemigroup of $\struct {S, \rightarrow}$.


Proof
From Structure under Right Operation is Semigroup we have that $\struct {S, \rightarrow}$ is a semigroup, whatever the nature of $S$.
Let $T \in \powerset S$.
Then:

From Structure under Right Operation is Semigroup, $\struct {T, \rightarrow}$ is a semigroup, and therefore a subsemigroup of $\struct {S, \rightarrow}$.
This applies whatever $S$ is and whatever the subset $T$ is.
$\blacksquare$


Also see
Left Operation is Closed for All Subsets


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.1$




