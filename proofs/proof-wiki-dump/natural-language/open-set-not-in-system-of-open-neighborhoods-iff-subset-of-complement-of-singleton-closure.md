# 

Source: https://proofwiki.org/wiki/Open_Set_Not_in_System_of_Open_Neighborhoods_Iff_Subset_of_Complement_of_Singleton_Closure


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $x \in S$.
Let $\map \UU x$ denote the system of open neighborhoods of $x$.
Let $\set x^-$ denote the topological closure of $\set x$.

Then for all $U \in \tau$:

$U \notin \map \UU x$ if and only if $U \subseteq S \setminus \set x^-$
Proof
First note that by definition of closed set:

$S \setminus U$ is a closed set

We have:














\(\ds U \notin \map \UU x\)

\(\leadstoandfrom\)







\(\ds x \notin U\)





Definition of System of Open Neighborhoods














\(\ds \)

\(\leadstoandfrom\)







\(\ds \set x \subseteq S \setminus U\)





Definition of Relative Complement














\(\ds \)

\(\leadstoandfrom\)







\(\ds \set x^- \subseteq S \setminus U\)





Closure of Subset of Closed Set of Topological Space is Subset














\(\ds \)

\(\leadstoandfrom\)







\(\ds U \subseteq S \setminus \set x^-\)





Relative Complement inverts Subsets of Relative Complement



$\blacksquare$





