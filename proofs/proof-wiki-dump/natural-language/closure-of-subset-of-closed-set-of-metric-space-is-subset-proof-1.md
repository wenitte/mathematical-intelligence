# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Closed_Set_of_Metric_Space_is_Subset/Proof_1

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $F$ be a closed set of $M$.
Let $H \subseteq F$ be a subset of $F$.
Let $H^-$ denote the closure of $H$.

Then $H^- \subseteq F$.


Proof
From Metric Induces Topology, the topology $\tau$ induced by the metric $d$ is a topology on $M$.
From Metric Closure and Topological Closure of Subset are Equivalent, it is sufficient to show that the topological closure of $H$ is contained in $F$.
From Set is Closed in Metric Space iff Closed in Induced Topological Space:

$F$ is closed in the topological space $\struct{A, \tau}$ induced by the metric $d$.

We have:














\(\ds H\)

\(\subseteq\)







\(\ds F\)














\(\ds \leadsto \ \ \)





\(\ds H^-\)

\(\subseteq\)







\(\ds F^-\)





Topological Closure of Subset is Subset of Topological Closure














\(\ds \)

\(=\)







\(\ds F\)





Set is Closed iff Equals Topological Closure



$\blacksquare$





