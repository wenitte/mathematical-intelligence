# 

Source: https://proofwiki.org/wiki/Power_Set_of_Singleton

Theorem
Let $x$ be an object.

Then the power set of the singleton $\set x$ is:

$\powerset {\set x} = \set {\O, \set x}$


Proof
From Empty Set is Subset of All Sets:

$\O \in \powerset {\set x}$

Let $A \in \powerset {\set x}$ such that $A \ne \O$
That is:














\(\ds \)

\(\)







\(\ds A \subseteq \set x \land A \ne \O\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A \subseteq \set x \land \exists y : y \in A\)





Definition of Empty Set








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A \subseteq \set x \land \exists y : y \in A \land y \in \set x\)





Definition of Subset








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A \subseteq \set x \land \exists y : y \in A \land y = x\)





Definition of Singleton








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A \subseteq \set x \land x \in A\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A \subseteq \set x \land \set x \subseteq A\)





Singleton of Element is Subset








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds A = \set x\)





Definition of Set Equality




So a subset of $\set x$ is either $\O$ or $\set x$.
$\blacksquare$





