# 

Source: https://proofwiki.org/wiki/Set_Intersection_Distributes_over_Set_Difference

Theorem
Set intersection is distributive over set difference.

Let $R, S, T$ be sets.

Then:

$\paren {R \setminus S} \cap T = \paren {R \cap T} \setminus \paren {S \cap T}$
$R \cap \paren {S \setminus T} = \paren {R \cap S} \setminus \paren {R \cap T}$
where:

$R \setminus S$ denotes set difference
$R \cap T$ denotes set intersection.


Proof













\(\ds \paren {R \cap T} \setminus \paren {S \cap T}\)

\(=\)







\(\ds \paren {\paren {R \cap T} \setminus S} \cup \paren {\paren {R \cap T} \setminus T}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {\paren {R \cap T} \setminus S} \cup \O\)





Set Difference of Intersection with Set is Empty Set














\(\ds \)

\(=\)







\(\ds \paren {R \cap T} \setminus S\)





Union with Empty Set














\(\ds \)

\(=\)







\(\ds \paren {R \setminus S} \cap T\)





Intersection with Set Difference is Set Difference with Intersection



$\Box$

Then:














\(\ds R \cap \paren {S \setminus T}\)

\(=\)







\(\ds \paren {S \setminus T} \cap R\)





Intersection is Commutative














\(\ds \)

\(=\)







\(\ds \paren {S \cap R} \setminus \paren {T \cap R}\)





from above














\(\ds \)

\(=\)







\(\ds \paren {R \cap S} \setminus \paren {R \cap T}\)





Intersection is Commutative



$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1$: Sets and Functions: Problem $4 \ \text{(a)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts: Exercise $1.2 \ \text{(g)}$




