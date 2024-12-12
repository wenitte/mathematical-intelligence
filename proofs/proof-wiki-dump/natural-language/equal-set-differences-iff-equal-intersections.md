# 

Source: https://proofwiki.org/wiki/Equal_Set_Differences_iff_Equal_Intersections



Theorem
$R \setminus S = R \setminus T \iff R \cap S = R \cap T$


Proof 1













\(\ds R \setminus S\)

\(=\)







\(\ds R \setminus T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \set {x \in R: x \notin S}\)

\(=\)







\(\ds \set {x \in R: x \notin T}\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in R: \, \)



\(\ds x \notin S\)

\(\iff\)







\(\ds x \notin T\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \forall x \in R: \, \)



\(\ds x \in S\)

\(\iff\)







\(\ds x \in T\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \set {\paren {x \in R} \land \paren {x \in S} }\)

\(=\)







\(\ds \set {\paren {x \in R} \land \paren {x \in T} }\)














\(\ds \leadstoandfrom \ \ \)





\(\ds R \cap S\)

\(=\)







\(\ds R \cap T\)





Definition of Set Intersection



$\blacksquare$


Proof 2
From Set Difference and Intersection form Partition:

$\paren {R \setminus S} \cup \paren {R \cap S} = R = \paren {R \setminus T} \cup \paren {R \cap T}$
$\paren {R \cap S} \cap \paren {R \setminus S} = \O = \paren {R \cap T} \cap \paren {R \setminus T}$
whatever $R, S, T$ might be.

Let $R \setminus S = R \setminus T$.
Then:














\(\ds \paren {\paren {R \setminus S} \cup \paren {R \cap S} } \setminus \paren {R \setminus S}\)

\(=\)







\(\ds \paren {\paren {R \setminus T} \cup \paren {R \cap T} } \setminus \paren {R \setminus T}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {R \cap S} \setminus \paren {R \setminus S}\)

\(=\)







\(\ds \paren {R \cap T} \setminus \paren {R \setminus T}\)





Set Difference with Union is Set Difference




Now, we have from Set Difference with Disjoint Set:

$S \cap T = \O \iff S \setminus T = S$
and so:

$\paren {R \cap S} \setminus \paren {R \setminus S} = R \cap S$
and:

$\paren {R \cap T} \setminus \paren {R \setminus T} = R \cap T$
So:

$R \cap S = R \cap T$

We can use exactly the same reasoning if we assume $R \cap S = R \cap T$:














\(\ds \paren {\paren {R \setminus S} \cup \paren {R \cap S} } \setminus \paren {R \cap S}\)

\(=\)







\(\ds \paren {\paren {R \setminus T} \cup \paren {R \cap T} } \setminus \paren {R \cap T}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {R \setminus S} \setminus \paren {R \cap S}\)

\(=\)







\(\ds \paren {R \setminus T} \setminus \paren {R \cap T}\)





Set Difference with Union is Set Difference



and then because of Set Difference with Disjoint Set as above:

$\paren {R \setminus S} \setminus \paren {R \cap S} = R \setminus S$
and:

$\paren {R \setminus T} \setminus \paren {R \cap T} = R \setminus T$

So:

$R \setminus S = R \setminus T$
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \ \text{(c)}$




