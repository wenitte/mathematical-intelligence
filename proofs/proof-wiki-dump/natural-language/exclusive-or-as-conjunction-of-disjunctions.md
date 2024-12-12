# 

Source: https://proofwiki.org/wiki/Exclusive_Or_as_Conjunction_of_Disjunctions



Theorem
$p \oplus q \dashv \vdash \left({p \lor q}\right) \land \left({\neg p \lor \neg q}\right)$


Proof 1













\(\ds p \oplus q\)

\(\dashv \vdash\)







\(\ds \paren {p \lor q} \land \neg \paren {p \land q}\)





Definition of Exclusive Or














\(\ds \)

\(\dashv \vdash\)







\(\ds \paren {p \lor q} \land \paren {\neg p \lor \neg q}\)





De Morgan's Laws: Disjunction of Negations



$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccccccc|} \hline
p & \oplus & q & (p & \lor & q) & \land & (\neg & p & \lor & \neg & q) \\
\hline
F & F & F & F & F & F & F & T & F & T & T & F \\
F & T & T & F & T & T & T & T & F & T & F & T  \\
T & T & F & T & T & F & T & F & T & T & T & F  \\
T & F & T & T & T & T & F & F & T & F & F & T  \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 2.5$: Further Logical Constants




