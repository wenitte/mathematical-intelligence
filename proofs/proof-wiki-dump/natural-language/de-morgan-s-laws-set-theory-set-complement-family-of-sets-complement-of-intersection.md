# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Complement/Family_of_Sets/Complement_of_Intersection



Theorem
Let $\family {S_i}_{i \mathop \in I}$ be a family of sets, all of which are subsets of a universal set $\mathbb U$.

Then:

$\ds \map \complement {\bigcap_{i \mathop \in I} S_i} = \bigcup_{i \mathop \in I} \map \complement {S_i}$


Proof













\(\ds \map \complement {\bigcap_{i \mathop \in I} S_i}\)

\(=\)







\(\ds \mathbb U \setminus \paren {\bigcap_{i \mathop \in I} S_i}\)





Definition of Set Complement














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \paren {\mathbb U \setminus S_i}\)





De Morgan's Laws for Set Difference: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \bigcup_{i \mathop \in I} \map \complement {S_i}\)





Definition of Set Complement



$\blacksquare$


Also see
De Morgan's Laws (Set Theory)/Set Complement/Family of Sets/Complement of Union


Source of Name
This entry was named for Augustus De Morgan.


Sources
1970: Avner Friedman: Foundations of Modern Analysis ... (previous) ... (next): $\S 1.1$: Rings and Algebras
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets: Theorem $4.2$




