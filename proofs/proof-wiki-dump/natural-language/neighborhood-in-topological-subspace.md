# 

Source: https://proofwiki.org/wiki/Neighborhood_in_Topological_Subspace



Theorem
Let $\struct {X, \tau}$ be a topological space.
Let $S \subseteq X$ be a subset of $X$.
Let $\tau_S$ denote the subspace topology on $S$.
Let $x \in S$ be an arbitrary point of $S$.
Let $E \subseteq S$.

Then:

$E$ is a neighborhood of $x$ in $\struct {S, \tau_S}$
if and only if:

$\exists D \subseteq X$ such that:
$D$ is a neighborhood of $x$ in $X$
$E = D \cap S$.


Proof
Necessary Condition
Let $E$ be a neighborhood of $x$ in $\struct {S, \tau_S}$. 
By the definition of neighborhood:

$\exists U \in \tau_S : x \in U \subseteq E$
Now, by the definition of the subspace topology:

$\exists V \in \tau: U = V \cap S$
Take $D := V \cup E$.
We have that:

$V \subseteq D$
and:

$V \in \tau$
Thus $D$ is a neighborhood of $x$ in $X$.
Therefore it holds true that:

$D \cap S = \paren {V \cap S} \cup \paren {E \cap S} = U \cup E = E$
$\Box$


Sufficient Condition
Let $\exists D \subseteq X$ such that $D$ is a neighborhood of $x$ in $\struct {X, \tau}$.
Let $E = D \cap S$
Then, by the definition of neighborhood:

$\exists V \in \tau: x \in V \subseteq D$
By the definition of the subspace topology:

$V \cap S \in \tau_S$
As a consequence:

$E = D \cap S \supseteq V \cap S \in \tau_S$
That is:

$E$ is a neighborhood of $x$ in $\struct {S, \tau_S}$.
$\blacksquare$


Also see
Closed Set in Topological Subspace




