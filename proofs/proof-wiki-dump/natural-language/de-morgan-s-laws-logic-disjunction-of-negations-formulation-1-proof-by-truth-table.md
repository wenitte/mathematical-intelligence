# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_1/Proof_by_Truth_Table

Theorem
$\neg p \lor \neg q \dashv \vdash \neg \paren {p \land q}$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||cccc|} \hline
\neg & p & \lor & \neg & q & \neg & (p & \land & q) \\
\hline
\T & \F & \T & \T & \F & \T & \F & \F & \F \\
\T & \F & \T & \F & \T & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \T & \F & \F \\
\F & \T & \F & \F & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Example $1.8 \ \text{(b)}$




