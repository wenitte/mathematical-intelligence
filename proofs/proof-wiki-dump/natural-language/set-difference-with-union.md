# 

Source: https://proofwiki.org/wiki/Set_Difference_with_Union



Theorem
Let $R, S, T$ be sets.

Then:

$R \setminus \paren {S \cup T} = \paren {R \cup T} \setminus \paren {S \cup T} = \paren {R \setminus S} \setminus T = \paren {R \setminus T} \setminus S$
where:

$R \setminus S$ denotes set difference
$R \cup T$ denotes set union.


Illustration by Venn Diagram
  


Proof
Consider $R, S, T \subseteq \mathbb U$, where $\mathbb U$ is considered as the universal set.















\(\ds \paren {R \cup T} \setminus \paren {S \cup T}\)

\(=\)







\(\ds \paren {R \cup T} \cap \overline {\paren {S \cup T} }\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cup T} \cap \paren {\overline S \cap \overline T}\)





De Morgan's Laws: Complement of Union














\(\ds \)

\(=\)







\(\ds \paren {\paren {R \cup T} \cap \overline T} \cap \overline S\)





Intersection is Associative and Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {\paren {R \cup T} \setminus T} \setminus S\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \setminus T} \setminus S\)





Set Difference with Union is Set Difference



$\Box$

Then:














\(\ds R \setminus \paren {S \cup T}\)

\(=\)







\(\ds R \cap \overline {\paren {S \cup T} }\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds R \cap \paren {\overline S \cap \overline T}\)





De Morgan's Laws: Complement of Union














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S} \cap \overline T\)





Intersection is Associative














\(\ds \)

\(=\)







\(\ds \paren {R \setminus S} \setminus  T\)





Set Difference as Intersection with Complement



$\Box$

Then:














\(\ds R \setminus \paren {S \cup T}\)

\(=\)







\(\ds R \setminus \paren {T \cup S}\)





Union is Commutative














\(\ds \)

\(=\)







\(\ds \paren {R \setminus T} \setminus S\)





from above



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.4 \ \text{(c)}$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $1 \ \text{(ii)}$




