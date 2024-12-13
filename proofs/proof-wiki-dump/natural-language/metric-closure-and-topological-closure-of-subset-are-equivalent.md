# 

Source: https://proofwiki.org/wiki/Metric_Closure_and_Topological_Closure_of_Subset_are_Equivalent

Theorem
Let $M = \struct{A, d}$ be a metric space.
Let $T = \struct{A, \tau}$ be the topological space with the topology induced by $d$.
Let $H \subseteq A$.

Then:

the metric closure of $H$ in $M$ equals the topological closure of $H$ in $T$


Proof
Let $H^i$ be the set of isolated points of $H$ in $M$.
From Isolated Point in Metric Space iff Isolated Point in Topological Space:

$H^i$ equals the set of isolated points of $H$ in the topological space $T$.

Let $H'$ be the set of limit points of $H$ in $M$.
From Limit Point in Metric Space iff Limit Point in Topological Space:

$H'$ equals the set of limit points of $H$ in the topological space $T$.

Let $H^-$ denote the closure of $H$ in the metric space $M$.
By definition of the closure of $H$ in the metric space $M$

$H^- = H' \cup H^i$

Let $\map \cl H$ denote the closure of $H$ in the topological space $T$.
By definition of the closure of $H$ in the topological space $T$

$\map \cl H = H' \cup H^i$

Thus:

$H^- = \map \cl H$
$\blacksquare$





