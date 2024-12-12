# 

Source: https://proofwiki.org/wiki/Constructive_Dilemma/Formulation_1/Proof_by_Truth_Table

Theorem













\(\ds p \implies q\)

\(\)







\(\ds \)




















\(\ds r \implies s\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds p \lor r \implies q \lor s\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:

$\begin{array}{|ccccccc||ccccccc|} \hline
(p & \implies & q) & \land & (r & \implies & s) & (p & \lor & r) & \implies & (q & \lor & s) \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \F & \F & \T & \F & \T & \T \\
\F & \T & \F & \F & \T & \F & \F & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\F & \T & \T & \T & \F & \T & \F & \F & \F & \F & \T & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \F & \F & \F & \T & \T & \T & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \T & \T & \T & \T & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \T & \T & \T & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \T & \F & \F & \F & \F & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \T & \F & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F & \T & \T & \T & \F & \F & \F & \F \\
\T & \F & \F & \F & \T & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \T & \T & \T & \F & \T & \F & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.
$\blacksquare$





