# 

Source: https://proofwiki.org/wiki/Group_of_Units_of_Submonoid_is_Subgroup

Theorem
Let $T$ be a monoid.
Let $S$ be a submonoid of $T$.
Let $\map G T$ and $\map G S$ be the groups of units of $T$ and $S$ respectively.

Then $\map G S \subseteq \map G T$ and $\map G S$ is a subgroup of $\map G T$.


Proof
Let $x \in \map G S$.
Then $x \in S$ and there exists $y \in S$ such that $x y = y x = e$.
Since $S \subseteq T$, we have $y \in T$. 
So $x \in \map G T$.
So we have $\map G S \subseteq \map G T$.
From Group of Units is Group, $\map G S$ is a group. 
So $\map G S$ is a subgroup of $\map G T$.
$\blacksquare$





