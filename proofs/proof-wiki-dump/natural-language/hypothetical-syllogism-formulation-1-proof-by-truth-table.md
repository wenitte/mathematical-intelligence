# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_1/Proof_by_Truth_Table

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)














\(\ds \vdash \ \ \)





\(\ds p\)

\(\implies\)







\(\ds r\)











Proof
We apply the Method of Truth Tables to the propositions in turn.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:
$\begin{array}{|ccccccc||ccc|} \hline
(p & \implies & q) & \land & (q & \implies & r) & p & \implies & r \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \T & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \F & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables




