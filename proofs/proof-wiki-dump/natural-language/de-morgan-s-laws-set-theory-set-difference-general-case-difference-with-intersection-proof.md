# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Difference/General_Case/Difference_with_Intersection/Proof



Theorem
$\ds S \setminus \bigcap \mathbb T = \bigcup_{T' \mathop \in \mathbb T} \paren {S \setminus T'}$
where:

$\ds \bigcap \mathbb T := \set {x: \forall T' \in \mathbb T: x \in T'}$
that is, the intersection of $\mathbb T$


Proof
Suppose:

$\ds x \in S \setminus \bigcap \mathbb T$
Note that by Set Difference is Subset we have that $x \in S$ (we need this later).
Then:














\(\ds x\)

\(\in\)







\(\ds S \setminus \bigcap \mathbb T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\notin\)







\(\ds \bigcap \mathbb T\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)

\(\ds \neg \leftparen {\forall T' \in \mathbb T}: \, \)



\(\ds x\)

\(\in\)







\(\ds \rightparen {T'}\)





Definition of Intersection of Set of Sets








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists T' \in \mathbb T: \, \)



\(\ds x\)

\(\notin\)







\(\ds T'\)





Denial of Universality








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists T' \in \mathbb T: \, \)



\(\ds x\)

\(\in\)







\(\ds S \setminus T'\)





Definition of Set Difference: note $x \in S$ from above








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\in\)







\(\ds \bigcup_{T' \mathop \in \mathbb T} \paren {S \setminus T'}\)





Definition of Union of Set of Sets




Therefore:

$\ds S \setminus \bigcap \mathbb T = \bigcup_{T' \mathop \in \mathbb T} \paren {S \setminus T'}$
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text I$: Sets and Functions: Exercise $\text{D}$




