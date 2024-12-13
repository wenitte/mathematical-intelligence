# 

Source: https://proofwiki.org/wiki/Infimum_of_Subset



Theorem
Let $\struct {U, \preceq}$ be an ordered set.
Let $S \subseteq U$.
Let $T \subseteq S$.
Let $\struct {S, \preceq}$ admit an infimum in $U$.

If $T$ also admits an infimum in $U$, then $\map \inf S \preceq \map \inf T$.


Proof
Let $B = \map \inf S$.
Then $B$ is a lower bound for $S$.
As $T \subseteq S$, it follows by the definition of a subset that $x \in T \implies x \in S$.
Because $x \in S \implies B \preceq x$ (as $B$ is a lower bound for $S$) it follows that $x \in T \implies B \preceq x$.
So $B$ is a lower bound for $T$.
Therefore $B$ precedes the infimum of $T$ in $U$.
Hence the result.
$\blacksquare$


Also see
Supremum of Subset


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (3)$




