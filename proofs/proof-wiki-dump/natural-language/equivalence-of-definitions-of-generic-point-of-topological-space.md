# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Generic_Point_of_Topological_Space


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $x \in S$ be an element of $S$.

The following definitions of the concept of Generic Point of Topological Space are equivalent:

Definition 1
The point $x$ is a generic point of $T$ if and only if the closure of the singleton $\set x$ is $S$.


Definition 2
The point $x$ is a generic point of $T$ if and only if $x$ is contained in every non-empty open subset of $T$.


Proof
Let $\set x^-$ denote the closure of $\set x$ in $T$.
Let $\map \UU x$ denote the system of open neighborhoods of $x$.

We have:














\(\ds \)

\(\)







\(\ds \set x^- = S\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds S \setminus \set x^- = \O\)





Set Difference with Superset is Empty Set








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \bigcup \set{U \in \tau : U \notin \map \UU x} = \O\)





Union of Open Sets Not in System of Open Neighborhoods is Complement of Singleton Closure








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \set{U \in \tau : U \notin \map \UU x} = \set {U \in \tau : U = \O}\)





Set is Subset of Union and Subset of Empty Set iff Empty








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \forall U \in \tau : U \ne \O \implies U \in \map \UU x\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \forall U \in \tau : U \ne \O \implies x \in U\)





Definition of System of Open Neighborhoods




The result follows.
$\blacksquare$





