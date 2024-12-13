# 

Source: https://proofwiki.org/wiki/Set_is_Closed_iff_Equals_Topological_Closure/Proof_2

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Then $H$ is closed in $T$ if and only if:

$H = \map \cl H$


Proof
Let $H^\complement$ denote the relative complement of $H$ in $T$.

By definition, we have that $H$ is closed in $T$ if and only if $H^\complement$ is open in $T$.
By Set is Open iff Neighborhood of all its Points, this is equivalent to:

$\forall x \in H^\complement: \exists U \in \tau: x \in U \subseteq H^\complement$
By Empty Intersection iff Subset of Complement, we have that:

$U \subseteq H^\complement \iff U \cap H = \O$
By Condition for Point being in Closure, it follows that $H^{\complement}$ is open in $T$ if and only if:

$\forall x \in H^\complement: x \notin \map \cl H$
By the Rule of Transposition, this is equivalent to $\map \cl H \subseteq H$.
From Set is Subset of its Topological Closure, we have that $H \subseteq \map \cl H$.
By definition of set equality, this is equivalent to:

$H = \map \cl H$
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.15 \ \text{(a)}$




