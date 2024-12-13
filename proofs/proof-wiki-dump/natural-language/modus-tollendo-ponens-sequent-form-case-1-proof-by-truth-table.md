# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Sequent_Form/Case_1/Proof_by_Truth_Table

Theorem













\(\ds p \lor q\)

\(\)







\(\ds \)




















\(\ds \neg p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables to the proposition.
$\begin{array}{|ccc|cc||c|} \hline
p & \lor & q & \neg & p & q\\
\hline
\F & \F & \F & \T & \F & \F \\
\F & \T & \T & \T & \F & \T \\
\T & \T & \F & \F & \T & \F \\
\T & \T & \T & \F & \T & \T \\
\hline
\end{array}$
As can be seen, when $p \lor q$ is true, and so is $\neg p$, then $q$ is also true.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables




