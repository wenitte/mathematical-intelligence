# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_Union/Examples/3_Arbitrary_Sets

Example of Use of Cardinality of Set Union
Let $A_1, A_2, A_3$ be finite sets.
Let:














\(\ds \card {A_1}\)

\(=\)







\(\ds 10\)




















\(\ds \card {A_2}\)

\(=\)







\(\ds 15\)




















\(\ds \card {A_3}\)

\(=\)







\(\ds 20\)




















\(\ds \card {A_1 \cap A_2}\)

\(=\)







\(\ds 8\)




















\(\ds \card {A_2 \cap A_3}\)

\(=\)







\(\ds 9\)









Then:

$26 \le \card {A_1 \cup A_2 \cup A_3} \le 28$


Proof
We have that:














\(\ds A_1\)

\(=\)







\(\ds \paren {A_1 \setminus A_2} \cup \paren {A_1 \cap A_2}\)





Set Difference Union Intersection








\(\ds \leadsto \ \ \)





\(\ds \card {A_1}\)

\(=\)







\(\ds \card {A_1 \setminus A_2} + \card {A_1 \cap A_2} - \card {\paren {A_1 \setminus A_2} \cap \paren {A_1 \cap A_2} }\)





Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \card {A_1 \setminus A_2} + \card {A_1 \cap A_2}\)





as $\paren {A_1 \setminus A_2} \cap \paren {A_1 \cap A_2} = \O$








\(\ds \leadsto \ \ \)





\(\ds 10\)

\(=\)







\(\ds \card {A_1 \setminus A_2} + 8\)





substituting values








\(\ds \leadsto \ \ \)





\(\ds \card {A_1 \setminus A_2}\)

\(=\)







\(\ds 2\)










and:














\(\ds A_3\)

\(=\)







\(\ds \paren {A_3 \setminus A_2} \cup \paren {A_2 \cap A_3}\)





Set Difference Union Intersection








\(\ds \leadsto \ \ \)





\(\ds \card {A_3}\)

\(=\)







\(\ds \card {A_3 \setminus A_2} + \card {A_2 \cap A_3} - \card {\paren {A_3 \setminus A_2} \cap \paren {A_2 \cap A_3} }\)





Cardinality of Set Union














\(\ds \)

\(=\)







\(\ds \card {A_3 \setminus A_2} + \card {A_2 \cap A_3}\)





as $\paren {A_3 \setminus A_2} \cap \paren {A_2 \cap A_3} = \O$








\(\ds \leadsto \ \ \)





\(\ds 20\)

\(=\)







\(\ds \card {A_1 \setminus A_2} + 9\)





substituting values








\(\ds \leadsto \ \ \)





\(\ds \card {A_3 \setminus A_2}\)

\(=\)







\(\ds 11\)










Then:














\(\ds \card {\paren {A_1 \cup A_3} \setminus A_2}\)

\(=\)







\(\ds \card {A_1 \setminus A_2} + \card {A_3 \setminus A_2} - \card {\paren {A_1 \cap A_3} \setminus A_2}\)




















\(\ds \)

\(=\)







\(\ds 2 + 11 - \card {\paren {A_1 \cap A_3} \setminus A_2}\)





substituting values














\(\ds \)

\(=\)







\(\ds 13 - \card {\paren {A_1 \cap A_3} \setminus A_2}\)









But as $\card {A_1 \setminus A_2} = 2$, we have that:

$\card {\paren {A_1 \cap A_3} \setminus A_2} \le 2$
and so:

$11 \le \card {\paren {A_1 \cup A_3} \setminus A_2} \le 13$
and so:

$11 + \card {A_2} \le \card {\paren {A_1 \cup A_3} \setminus A_2} + \card {A_2} \le 13 + \card {A_2}$
We have that:

$A_1 \cup A_2 \cup A_3 = \paren {\paren {A_1 \cup A_3} \setminus A_2} + \cup A_2$
As $\card {A_2} = 15$ the result follows.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $1$. Sets: Exercise $5$




