# 

Source: https://proofwiki.org/wiki/Expansion_of_Included_Set_Topology



Theorem
Let $S$ be a set.
Let $A_1 \subseteq S$ and $A_2 \subseteq S$.
Let $T_1 = \struct {S, \tau_{A_1} }$ and $T_2 = \struct {S, \tau_{A_2} }$ be included set spaces on $S$.

Then:

$(1): \quad T_1 \ge T_2 \iff A_1 \subseteq A_2$
$(2): \quad T_1 > T_2 \iff A_1 \subsetneq A_2$
where:

$T_1 \ge T_2$ denotes that $T_1$ is finer than $T_2$
$T_1 > T_2$ denotes that $T_1$ is strictly finer than $T_2$.


Proof
Let $T_1 = \struct {S, \tau_{A_1} }$ and $T_2 = \struct {S, \tau_{A_2} }$ be included set spaces on $S$.


Necessary Condition
Let $T_1 \ge T_2$.
We have that $A_2 \in \tau_{A_2}$ by definition of included set topology.
But by definition of finer topology, $A_2 \in \tau_{A_1}$.
So by definition of included set topology, $A_1 \subseteq A_2$.

Now suppose that $T_1 > T_2$.
That is, $T_1 \ge T_2$ and $T_1 \ne T_2$.
It follows that $\exists X \in \tau_{A_1}: X \notin \tau_{A_2}$.
Then  $A_1 \subseteq X \subsetneq A_2$ from which it follows that $A_1 \subsetneq A_2$.
$\Box$


Sufficient Condition
Let $A_1 \subseteq A_2$.

Then:














\(\ds U\)

\(\in\)







\(\ds \tau_{A_2}\)














\(\ds \leadsto \ \ \)





\(\ds A_2\)

\(\subseteq\)







\(\ds U\)





Definition of Included Set Topology








\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(\subseteq\)







\(\ds U\)





Subset Relation is Transitive








\(\ds \leadsto \ \ \)





\(\ds U\)

\(\in\)







\(\ds \tau_{A_1}\)





Definition of Included Set Topology



So $T_1 \ge T_2$ by definition of finer topology.

Now suppose that $A_1 \subsetneq A_2$.
Then $A_2 \nsubseteq A_1$ and so $A_1 \notin \tau_{A_2}$.
Thus $\tau_{A_1} \nsubseteq \tau_{A_2}$ and so $T_1 > T_2$.
$\Box$

Both necessity and sufficiency have been proved, hence the result.
$\blacksquare$


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Chapter $\text {I}$: Topological Spaces: $1$. Open Sets and Closed Sets: Exercise $1 \ \text{(a)}$




