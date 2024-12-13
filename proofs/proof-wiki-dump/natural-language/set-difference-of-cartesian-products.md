# 

Source: https://proofwiki.org/wiki/Set_Difference_of_Cartesian_Products

Theorem
$\paren {S_1 \times S_2} \setminus \paren {T_1 \times T_2} = \paren {S_1 \times \paren {S_2 \setminus T_2} } \cup \paren {\paren {S_1 \setminus T_1} \times S_2}$


Proof
Let $\tuple {x, y} \in \paren {S_1 \times S_2} \setminus \paren {T_1 \times T_2}$.
Then:














\(\ds \tuple {x, y} \in S_1 \times S_2\)

\(\land\)







\(\ds \tuple {x, y} \notin T_1 \times T_2\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds x \in S_1 \land y \in S_2\)

\(\land\)







\(\ds \neg \paren {x \in T_1 \land y \in T_2}\)





Definition of Cartesian Product








\(\ds \leadstoandfrom \ \ \)





\(\ds x \in S_1 \land y \in S_2\)

\(\land\)







\(\ds \paren {x \notin T_1 \lor y \notin T_2}\)





De Morgan's Laws: Disjunction of Negations








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x \in S_1 \land y \in S_2 \land x \notin T_1}\)

\(\lor\)







\(\ds \paren {x \in S_1 \land y \in S_2 \land y \notin T_2}\)





Rule of Distribution








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x \in S_1 \setminus T_1 \land y \in S_2}\)

\(\lor\)







\(\ds \paren {x \in S_1 \land y \in S_2 \setminus T_2}\)





Definition of Set Difference








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {\tuple {x, y} \in \paren {S_1 \setminus T_1} \times S_2}\)

\(\lor\)







\(\ds \paren {\tuple {x, y} \in S_1 \times \paren {S_2 \setminus T_2} }\)





Definition of Cartesian Product








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \paren {S_1 \times \paren {S_2 \setminus T_2} } \cup \paren {\paren {S_1 \setminus T_1} \times S_2}\)





Definition of Set Union




The result follows from the definition of subset and set equality.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: The Notation and Terminology of Set Theory: $\S 9 \alpha$




