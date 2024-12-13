# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Set_Difference_is_Union_of_Set_Difference_with_Intersection



Theorem
Let $R, S, T$ be sets.

Then:

$R \setminus \paren {S \setminus T} = \paren {R \setminus S} \cup \paren {R \cap T}$
where:

$S \setminus T$ denotes set difference
$S \cup T$ denotes set union
$S \cap T$ denotes set intersection.


Illustration by Venn Diagram
 


Corollary
$T \setminus \paren {S \setminus T} = T$


Proof
Consider $R, S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds R \setminus \paren {S \setminus T}\)

\(=\)







\(\ds R \cap \overline {\paren {S \cap \overline T} }\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds R \cap \paren {\overline S \cup \overline {\paren {\overline T} } }\)





De Morgan's Laws














\(\ds \)

\(=\)







\(\ds R \cap \paren {\overline S \cup T}\)





Complement of Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S} \cup \paren {R \cap T}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {R \setminus S} \cup \paren {R \cap T}\)





Set Difference as Intersection with Complement



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.4 \ \text{(d)}$




