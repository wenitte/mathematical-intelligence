# 

Source: https://proofwiki.org/wiki/Set_is_Closed_iff_Equals_Topological_Closure

Theorem
Let $T$ be a topological space.
Let $H \subseteq T$.

Then $H$ is closed in $T$ if and only if:

$H = \map \cl H$

That is, a closed set equals its closure (which makes semantic sense).


Proof 1
Let $H'$ denote the derived set of $H$.

By Closed Set iff Contains all its Limit Points, $H$ is closed in $T$ if and only if $H' \subseteq H$.
By Union with Superset is Superset, $H' \subseteq H$ if and only if $H = H \cup H'$.
The result follows from the definition of closure.
$\blacksquare$


Proof 2
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





