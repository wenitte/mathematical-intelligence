# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Set_Theory)/Set_Difference/Difference_with_Intersection/Corollary

Corollary to De Morgan's Laws: Difference with Intersection
Let $S, T_1, T_2$ be sets.
Suppose that $T_1 \subseteq S$.

Then:

$S \setminus \paren {T_1 \cap T_2} = \paren {S \setminus T_1} \cup \paren {T_1 \setminus T_2}$


Proof













\(\ds S \setminus \paren {T_1 \cap T_2}\)

\(=\)







\(\ds \paren {S \setminus T_1} \cup \paren {S \setminus T_2}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T_1} \cup \paren {\paren {\paren {S \setminus T_1} \cup \paren {S \cap T_1} } \setminus T_2}\)





Set Difference Union Intersection














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T_1} \cup \paren {\paren {S \setminus T_1} \setminus T_2} \cup \paren {\paren {S \cap T_1} \setminus T_2}\)





Set Difference is Right Distributive over Union














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T_1} \cup \paren {\paren {S \setminus T_1} \setminus T_2} \cup \paren {T_1 \setminus T_2}\)





Intersection with Subset is Subset: $T_1 \subseteq S$














\(\ds \)

\(=\)







\(\ds \paren {S \setminus T_1} \cup \paren {T_1 \setminus T_2}\)





Set Difference Union First Set is First Set



$\blacksquare$





