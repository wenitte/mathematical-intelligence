# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Complement/General_Case/Complement_of_Intersection



Theorem
Let $\mathbb T$ be a set of sets, all of which are subsets of a universal set $\mathbb U$.

Then:

$\ds \map \complement {\bigcap \mathbb T} = \bigcup_{H \mathop \in \mathbb T} \map \complement H$


Proof













\(\ds \map \complement {\bigcap \mathbb T}\)

\(=\)







\(\ds \mathbb U \setminus \paren {\bigcap \mathbb T}\)





Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \bigcup_{H \mathop \in \mathbb T} \paren {\mathbb U \setminus H}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \bigcup_{H \mathop \in \mathbb T} \map \complement H\)





Definition of Set Complement



$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.8$: Collections of Sets: Exercise $5$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 7.1 \ \text{(i)}$: Unions and Intersections




