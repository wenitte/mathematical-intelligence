# 

Source: https://proofwiki.org/wiki/Left_Operation_is_Closed_for_All_Subsets



Theorem
Let $S$ be a set.
Let $\leftarrow$ be the left operation on $S$.
That is:

$\forall x, y \in S: x \leftarrow y = x$
Let $\powerset S$ be the power set of $S$.

Then for all $T \in \powerset S$, $\leftarrow$ is closed on $T$.

That is, for all $T \in \powerset S$:

$\struct {T, \leftarrow}$ is a subsemigroup of $\struct {S, \leftarrow}$.


Proof
From Structure under Left Operation is Semigroup we have that $\struct {S, \leftarrow}$ is a semigroup, whatever the nature of $S$.
Let $T \in \powerset S$.
Then:

From Structure under Left Operation is Semigroup, $\struct {T, \leftarrow}$ is a semigroup, and therefore a subsemigroup of $\struct {S, \leftarrow}$.
This applies whatever $S$ is and whatever the subset $T$ is.
$\blacksquare$


Also see
Right Operation is Closed for All Subsets


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Exercise $8.1$




