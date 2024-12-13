# 

Source: https://proofwiki.org/wiki/Set_Difference_is_not_Associative



Theorem
Let $R, S, T$ be sets.

The expression:

$\paren {R \setminus S} \setminus T = R \setminus \paren {S \setminus T}$
holds exactly when $R \cap T = \O$.
Here $R \setminus S$ denotes set difference.
Thus, set difference is not associative.


Proof
We assume a universal set $\mathbb U$ such that $R, S, T \subseteq \mathbb U$.

We have the identity Set Difference as Intersection with Complement:

$R \setminus S = R \cap \overline S$
where $\overline S$ is the set complement of $S$:

$\overline S = \relcomp {\Bbb U} S$

Thus we can represent the two expressions as follows:














\(\ds \paren {R \setminus S} \setminus T\)

\(=\)







\(\ds \paren {R \cap \overline S} \cap \overline T\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds R \cap \overline S \cap \overline T\)





Intersection is Associative




For the second:














\(\ds \)

\(\)







\(\ds R \setminus \paren {S \setminus T}\)




















\(\ds \)

\(=\)







\(\ds R \cap \overline {\paren {S \cap \overline T} }\)





Set Difference as Intersection with Complement














\(\ds \)

\(=\)







\(\ds R \cap \paren {\overline S \cup \overline {\paren {\overline T} } }\)





De Morgan's Laws: Complement of Intersection














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







\(\ds \paren {R \cap \overline S \cap \mathbb U} \cup \paren {R \cap \mathbb U \cap T}\)





Intersection with Universal Set














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap \paren {T \cup \overline T} } \cup \paren {R \cap \paren {S \cup \overline S} \cap T}\)





Union with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap T} \cup \paren {R \cap \overline S \cap \overline T}\)


















\(\, \ds \cup \, \)

\(\ds \)

\(\)







\(\ds \paren {R \cap S \cap T} \cup \paren {R \cap \overline S \cap T}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap T} \cup \paren {R \cap \overline S \cap \overline T} \cup \paren {R \cap S \cap T}\)





Set Union is Idempotent














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap \overline T} \cup \paren {R \cap \paren {S \cup \overline S} \cap T}\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap \overline T} \cup \paren {R \cap \mathbb U \cap T}\)





Union with Complement














\(\ds \)

\(=\)







\(\ds \paren {R \cap \overline S \cap \overline T} \cup \paren {R \cap T}\)





Intersection with Universal Set




As can be seen, this full expansion of the second expression can be expressed:

$R \setminus \paren {S \setminus T} = \paren {\paren {R \setminus S} \setminus T} \cup \paren {R \cap T}$

It directly follows from Intersection with Empty Set that:

$R \setminus \paren {S \setminus T} = \paren {R \setminus S} \setminus T \iff R \cap T = \O$
$\blacksquare$


Also see
Intersection is Associative
Union is Associative
Symmetric Difference is Associative


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems: Exercise $15$




