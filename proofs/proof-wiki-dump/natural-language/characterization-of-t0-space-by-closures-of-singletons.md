# 

Source: https://proofwiki.org/wiki/Characterization_of_T0_Space_by_Closures_of_Singletons



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Then

$T$ is a $T_0$ space if and only if:
$\forall x, y \in S: x \ne y \implies x \notin \set y^- \lor y \notin \set x^-$
where $\set y^-$ denotes the closure of $\set y$.


Proof
Sufficient Condition
Let $T$ be a $T_0$ space.
Let $x, y \in S$ such that

$x \ne y$

Aiming for a contradiction, suppose

$x \in \set y^- \land y \in \set x^-$
Then:














\(\ds x\)

\(\in\)







\(\ds \set y^-\)


















\(\, \ds \land \, \)

\(\ds \set y\)

\(\subseteq\)







\(\ds \set x^-\)














\(\ds \leadsto \ \ \)





\(\ds \set x\)

\(\subseteq\)







\(\ds \set y^-\)





Definition of Singleton












\(\, \ds \land \, \)

\(\ds \set y\)

\(\subseteq\)







\(\ds \set x^-\)














\(\ds \leadsto \ \ \)





\(\ds \set x^-\)

\(\subseteq\)







\(\ds \paren {\set y^-}^-\)





Topological Closure of Subset is Subset of Topological Closure












\(\, \ds \land \, \)

\(\ds \set y^-\)

\(\subseteq\)







\(\ds \paren {\set x^-}^-\)














\(\ds \leadsto \ \ \)





\(\ds \set x^-\)

\(\subseteq\)







\(\ds \set y^-\)





Closure of Topological Closure equals Closure












\(\, \ds \land \, \)

\(\ds \set y^-\)

\(\subseteq\)







\(\ds \set x^-\)














\(\ds \leadsto \ \ \)





\(\ds \set x^-\)

\(=\)







\(\ds \set y^-\)





Definition 2 of Set Equality




By Characterization of $T_0$ Space by Distinct Closures of Singletons:

$\set x^- \ne \set y^-$
This contradicts the equality.
Thus the result by Proof by Contradiction
$\Box$


Necessary Condition
Assume that:

$(1): \quad \forall x, y \in S: x \ne y \implies x \notin \set y^- \lor y \notin \set x^-$
By Characterization of $T_0$ Space by Distinct Closures of Singletons it suffices to prove

$\forall x, y \in S: x \ne y \implies \set x^- \ne \set y^-$
Let $x, y \in S$ such that $x \ne y$.
Aiming for a contradiction, suppose

$(2): \quad \set x^- = \set y^-$
Then:














\(\ds x\)

\(\in\)







\(\ds \set x\)





Definition of Singleton












\(\, \ds \land \, \)

\(\ds y\)

\(\in\)







\(\ds \set y\)




















\(\ds \set x\)

\(\subseteq\)







\(\ds \set x^-\)





Set is Subset of its Topological Closure












\(\, \ds \land \, \)

\(\ds \set y\)

\(\subseteq\)







\(\ds \set y^-\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \set x^-\)





Definition of Subset












\(\, \ds \land \, \)

\(\ds y\)

\(\in\)







\(\ds \set y^-\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\in\)







\(\ds \set y^-\)





by hypothesis: $(2)$












\(\, \ds \land \, \)

\(\ds y\)

\(\in\)







\(\ds \set x^-\)









This contradicts the assumption $(1)$.
Thus the result by Proof by Contradiction.
$\blacksquare$


Sources
1989: Ryszard Engelking: General Topology (revised and completed ed.)
Mizar article TSP_1:def 6




