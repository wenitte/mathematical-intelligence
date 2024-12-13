# 

Source: https://proofwiki.org/wiki/Set_Difference_is_Subset_of_Union_of_Differences

Theorem
Let $R, S, T$ be sets.

Then:

$R \setminus S \subseteq \paren {R \setminus T} \cup \paren {T \setminus S}$
where:

$S \subseteq T$ denotes subset
$S \setminus T$ denotes set difference
$S \cup T$ denotes set union.


Proof
Consider $R, S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds R \setminus S\)

\(=\)







\(\ds R \cap \overline S\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S} \cap \mathbb U\)





Intersection with Universal Set














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S} \cap \paren {\overline T \cup T}\)





Union with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap \overline T} \cup \paren {T \cap R \cap \overline S}\)





Intersection Distributes over Union














\(\ds \)

\(\subseteq\)







\(\ds \paren {R \cap \overline T} \cup \paren {T \cap \overline S}\)





Union of Intersections‎














\(\ds \)

\(=\)







\(\ds \paren {R \setminus T} \cup \paren {T \setminus S}\)





Set Difference as Intersection with Complement



$\blacksquare$





