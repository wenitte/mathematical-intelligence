# 

Source: https://proofwiki.org/wiki/NAND_as_Disjunction_of_Negations



Theorem
$p \uparrow q \dashv \vdash \neg p \lor \neg q$


Proof 1













\(\ds p \uparrow q\)

\(\dashv \vdash\)







\(\ds \map \neg {p \land q}\)





Definition of Logical NAND














\(\ds \)

\(\dashv \vdash\)







\(\ds \neg p \lor \neg q\)





De Morgan's Laws: Disjunction of Negations



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccc|} \hline
p & \uparrow & q & \neg & p & \lor & \neg & q \\
\hline
\F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \F & \T  \\
\T & \T & \F & \F & \T & \T & \T & \F  \\
\T & \F & \T & \F & \T & \F & \F & \T  \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants




