# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Union_is_Set_Difference

Theorem
The set difference between two sets is the same as the set difference between their union and the second of the two sets:

Let $S, T$ be sets.

Then:

$\paren {S \cup T} \setminus T = S \setminus T$


Proof
Consider $S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds \paren {S \cup T} \setminus T\)

\(=\)







\(\ds \paren {S \cup T} \cap \overline T\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {S \cap \overline T} \cup \paren {T \cap \overline T}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T} \cup \paren {T \setminus T}\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T} \cup \O\)





Set Difference with Self is Empty Set














\(\ds \)

\(=\)







\(\ds S \setminus T\)





Union with Empty Set



$\blacksquare$





