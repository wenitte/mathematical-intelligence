# 

Source: https://proofwiki.org/wiki/Reflexive_Relation/Examples/Reflexive_Relation_on_Cartesian_Plane



Examples of Use of Symmetric and Transitive Relation is not necessarily Reflexive
The subset of the Cartesian plane defined as:

$\RR := \set {\tuple {x, y} \in \R^2: x \le y \le x + 1}$
determines a relation on $\R^2$ which is reflexive, but neither symmetric nor transitive.


Proof
Reflexive Relation
We note that, by definition:

$\forall x \in \R: \tuple {x, y} \in \RR$ such that $x = y$
and so:

$\forall x \in \R: \tuple {x, x} \in \RR$
Hence $\RR$ is reflexive.
$\Box$


Non-Symmetric Relation
Proof by Counterexample:














\(\ds 0 \le 0 + 1\)

\(\le\)







\(\ds 0 + 1\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {0, 1}\)

\(\in\)







\(\ds \RR\)









But:

$1 > 0$
and so:

$\tuple {1, 0} \notin \RR$
thus demonstrating that $\RR$ is not symmetric.
$\Box$


Non-Transitive Relation
Proof by Counterexample:














\(\ds \tuple {0, 1}\)

\(\in\)







\(\ds \RR\)


















\(\, \ds \land \, \)

\(\ds \tuple {1, 2}\)

\(\in\)







\(\ds \RR\)









but

$\tuple {0, 2} \notin \RR$
thus demonstrating that $\RR$ is not transitive.
$\Box$

The relation $\RR$ is illustrated below:


$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Relations




