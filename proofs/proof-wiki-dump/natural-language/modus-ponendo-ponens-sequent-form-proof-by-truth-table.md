# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Sequent_Form/Proof_by_Truth_Table

Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds p\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds q\)

\(\)







\(\ds \)











Proof
We apply the Method of Truth Tables.
$\begin{array}{|c|ccc||c|} \hline
p & p & \implies & q & q\\
\hline
\F & \F & \T & \F & \F \\
\F & \F & \T & \T & \T \\
\T & \T & \F & \F & \F \\
\T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen, when $p$ is true, and so is $p \implies q$, then $q$ is also true.
$\blacksquare$


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.3$: Rules for manipulation and substitution: Proposition $1.9$




