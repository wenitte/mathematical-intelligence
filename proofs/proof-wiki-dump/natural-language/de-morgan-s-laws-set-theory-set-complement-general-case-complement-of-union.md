# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Complement/General_Case/Complement_of_Union



Theorem
Let $\mathbb T$ be a set of sets, all of which are subsets of a universal set $\mathbb U$.

Then:

$\ds \map \complement {\bigcup \mathbb T} = \bigcap_{H \mathop \in \mathbb T} \map \complement H$


Proof













\(\ds \map \complement {\bigcup \mathbb T}\)

\(=\)







\(\ds \mathbb U \setminus \paren {\bigcup \mathbb T}\)





Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb T} \paren {\mathbb U \setminus H}\)





De Morgan's Laws for Set Difference: Difference with Union














\(\ds \)

\(=\)







\(\ds \bigcap_{H \mathop \in \mathbb T} \map \complement H\)





Definition of Set Complement



$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.8$: Collections of Sets: Exercise $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 7.1 \ \text{(ii)}$: Unions and Intersections




