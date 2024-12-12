# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Difference/Difference_with_Union



Theorem
Let $S, T_1, T_2$ be sets.

Then:

$S \setminus \paren {T_1 \cup T_2} = \paren {S \setminus T_1} \cap \paren {S \setminus T_2}$
where:

$T_1 \cap T_2$ denotes set intersection
$T_1 \cup T_2$ denotes set union.


Illustration by Venn Diagram



Proof













\(\ds \)

\(\)







\(\ds x \in S \setminus \paren {T_1 \cup T_2}\)




















\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S} \land \paren {x \notin \paren {T_1 \cup T_2} }\)





Definition of Set Difference














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S} \land \paren {\neg \paren {x \in T_1 \lor x \in T_2} }\)





Definition of Set Union














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S} \land \paren {x \notin T_1 \land x \notin T_2}\)





De Morgan's Laws: Conjunction of Negations














\(\ds \)

\(\leadstoandfrom\)







\(\ds \paren {x \in S \land x \notin T_1} \land \paren {x \in S \land x \notin T_2}\)





Rules of Idempotence, Commutation and Association














\(\ds \)

\(\leadstoandfrom\)







\(\ds x \in \paren {S \setminus T_1} \cap \paren {S \setminus T_2}\)





Definition of Set Intersection and Definition of Set Difference



By definition of set equality:

$S \setminus \paren {T_1 \cup T_2} = \paren {S \setminus T_1} \cap \paren {S \setminus T_2}$
$\blacksquare$


Source of Name
This entry was named for Augustus De Morgan.


Sources
1955: John L. Kelley: General Topology ... (previous) ... (next): Chapter $0$: Subsets and Complements; Union and Intersection: Theorem $2 \ \text{(e)}$
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 1.1$: Theorem $1.8$
1964: Steven A. Gaal: Point Set Topology ... (previous) ... (next): Introduction to Set Theory: $1$. Elementary Operations on Sets
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.6$. Difference and complement: Example $21$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.4 \ \text{(a)}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 8 \ \text{(f)}$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.6$: Set Identities and Other Set Relations: Exercise $2 \ \text{(h)}$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 2$: Problem $1 \ \text{(v)}$
2011: Robert G. Bartle and Donald R. Sherbert: Introduction to Real Analysis (4th ed.) ... (previous) ... (next): $\S 1.1$: Sets and Functions




