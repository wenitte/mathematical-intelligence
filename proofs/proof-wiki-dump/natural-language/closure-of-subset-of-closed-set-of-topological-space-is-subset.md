# 

Source: https://proofwiki.org/wiki/Closure_of_Subset_of_Closed_Set_of_Topological_Space_is_Subset

Theorem
Let $T$ = $\struct {S, \tau}$ be a topological space.
Let $F$ be a closed set of $T$.
Let $H \subseteq F$ be a subset of $F$.
Let $H^-$ denote the closure of $H$.

Then $H^- \subseteq F$.


Proof 1













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


Proof 2
Let $x \notin F$.
Then $x$ is in the open set $S \setminus F$.
From Set Difference with Subset is Superset of Set Difference:

$S \setminus F \subseteq S \setminus H$
From Subsets of Disjoint Sets are Disjoint:

$S \setminus F \cap H = \O$
From Set is Open iff Neighborhood of all its Points:

$S \setminus F$ is an neighborhood of $x$
By definition of the closure of $H$:

$x \notin H^-$
We have shown that:

$S \setminus F \subseteq S \setminus H^-$
From Set Difference with Subset is Superset of Set Difference:

$H^- \subseteq F$
$\blacksquare$





