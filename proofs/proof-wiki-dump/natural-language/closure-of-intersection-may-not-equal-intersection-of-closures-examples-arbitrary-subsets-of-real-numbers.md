# 

Source: https://proofwiki.org/wiki/Closure_of_Intersection_may_not_equal_Intersection_of_Closures/Examples/Arbitrary_Subsets_of_Real_Numbers

Examples of Closure of Intersection may not equal Intersection of Closures
Let $H$ and $K$ be subsets of the set of real numbers $\R$ defined as:














\(\ds H\)

\(=\)







\(\ds \openint 0 2 \cup \openint 3 4\)




















\(\ds K\)

\(=\)







\(\ds \openint 1 3\)










Let $\map \cl H$ denote the closure of $H$.

Then:

$H \cap \map \cl K$
$\map \cl H \cap K$
$\map \cl H \cap \map \cl K$
$\map \cl {H \cap K}$
are all different.


Proof
From Closure of Open Real Interval is Closed Real Interval:














\(\ds \map \cl H\)

\(=\)







\(\ds \closedint 0 2 \cup \closedint 3 4\)




















\(\ds \map \cl K\)

\(=\)







\(\ds \closedint 1 3\)










Hence by definition of set intersection:














\(\ds H \cap \map \cl K\)

\(=\)







\(\ds \paren {\openint 0 2 \cup \openint 3 4} \cap \closedint 1 3\)

\(\ds = \hointr 1 2\)


















\(\ds \map \cl H \cap K\)

\(=\)







\(\ds \paren {\closedint 0 2 \cup \closedint 3 4} \cap \openint 1 3\)

\(\ds = \hointl 1 2\)


















\(\ds \map \cl H \cap \map \cl K\)

\(=\)







\(\ds \paren {\closedint 0 2 \cup \closedint 3 4} \cap \closedint 1 3\)

\(\ds = \closedint 1 2 \cup \set 3\)


















\(\ds \map \cl {H \cap K}\)

\(=\)







\(\ds \map \cl {\openint 0 2 \cup \openint 3 4} \cap \openint 1 3\)




















\(\ds \)

\(=\)







\(\ds \map \cl {\openint 1 2}\)




















\(\ds \)

\(=\)







\(\ds \closedint 1 2\)









All defined sets, as can be seen, are different.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 24$




