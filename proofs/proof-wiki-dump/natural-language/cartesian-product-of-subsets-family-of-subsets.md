# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Subsets/Family_of_Subsets

Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets where $I$ is an arbitrary index set.
Let $S = \ds \prod_{i \mathop \in I} S_i$ be the Cartesian product of $\family {S_i}_{i \mathop \in I}$.

Let $\family {T_i}_{i \mathop \in I}$ be a family of sets.
Let $T = \ds \prod_{i \mathop \in I} T_i$ be the Cartesian product of $\family {T_i}_{i \mathop \in I}$.

Then:

$\paren {\forall i \in I: T_i \subseteq S_i} \implies T \subseteq S$.


Nonempty Subsets
Let $T_i \ne \O$ for all $i \in I$.

Then:

$T \subseteq S \iff \forall i \in I: T_i \subseteq S_i$.


Proof
Let $T_i \subseteq S_i$ for all $i \in I$.
Then:














\(\ds \family {x_i}\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds x_i\)

\(\in\)







\(\ds T_i\)





Definition of Cartesian Product of Family








\(\ds \leadsto \ \ \)

\(\ds \forall i \in I: \, \)



\(\ds x_i\)

\(\in\)







\(\ds S_i\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \family {x_i}\)

\(\in\)







\(\ds S\)





Definition of Cartesian Product of Family



Thus $T \subseteq S$ by the definition of a subset.
$\blacksquare$





