# 

Source: https://proofwiki.org/wiki/Element_is_Loop_iff_Member_of_Closure_of_Empty_Set

Theorem
Let $M = \struct{S, \mathscr I}$ be a matroid.
Let $x \in S$.

Then:

$x$ is a loop if and only if $x \in \map \sigma \O$
where $\map \sigma \O$ denotes the closure of the empty set.


Proof
From Element is Loop iff Rank is Zero:

$x$ is a loop if and only if $\map \rho {\set x} = 0$
where $\rho$ is the rank function of $M$.

Now:














\(\ds \)

\(\)







\(\ds x \in \map \sigma \O\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds x \sim \O\)





Definition of Closure Operator








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \map \rho {\set x} = \map \rho \O\)





Definition of Depends Relation








\(\ds \leadstoandfrom \ \ \)





\(\ds \)

\(\)







\(\ds \map \rho {\set x} = 0\)





Rank of Empty Set is Zero




The result follows.
$\blacksquare$


Sources
1976: Dominic Welsh: Matroid Theory ... (previous) ... (next) Chapter $1.$ $\S 4.$ Loops and parallel elements




