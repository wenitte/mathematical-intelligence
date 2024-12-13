# 

Source: https://proofwiki.org/wiki/Isolated_Point_of_Closure_of_Subset_is_Isolated_Point_of_Subset

Theorem
Let $\struct {T, \tau}$ be a topological space.
Let $H \subseteq T$ be a subset of $T$.
Let $\map \cl H$ denote the closure of $H$.
Let $x \in \map \cl H$ be an isolated point of $\map \cl H$.

Then $x$ is also an isolated point of $H$.


Proof 1
Let $x \in \map  \cl H$ be an isolated point of $\map \cl H$.
Aiming for a contradiction, suppose that $x$ is not an isolated point of $H$.

Then by the definition of a limit point, it follows that $x$ must be a limit point of $H$.
From Set is Subset of its Topological Closure:

$H \subseteq \map \cl H$
So by Limit Point of Subset is Limit Point of Set it follows that $x$ is a limit point of $\map \cl H$.

But then $x$ cannot be an isolated point of $\map \cl H$.
This is a contradiction.
Therefore every isolated point of $\map \cl H$ is also an isolated point of $H$.
$\blacksquare$


Proof 2
Let $x \in \map \cl H$ be isolated in $\map \cl H$.

By definition of isolated point, $x$ is not a limit point of $\map \cl H$.
From Set is Subset of its Topological Closure:

$H \subseteq \map \cl H$
We have that Limit Point of Subset is Limit Point of Set.
But $x$ is not a limit point of $\map \cl H$ .
So by the Rule of Transposition, $x$ cannot be a limit point of $H$.
As $x$ is not a limit point of $H$, it follows that $x$ must be an isolated point of $H$.
$\blacksquare$





