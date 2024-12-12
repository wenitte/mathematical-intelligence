# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_1



Theorem
$\neg p \land \neg q \dashv \vdash \neg \paren {p \lor q}$

This can be expressed as two separate theorems:

Forward Implication
$\neg p \land \neg q \vdash \neg \paren {p \lor q}$
Reverse Implication
$\neg \paren {p \lor q} \vdash \neg p \land \neg q$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccc||cccc|} \hline
\neg & p & \land & \neg & q & \neg & (p & \lor & q) \\
\hline
\T & \F & \T & \T & \F & \T & \F & \F & \F \\
\T & \F & \F & \F & \T & \F & \F & \T & \T \\
\F & \T & \F & \T & \F & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text {(f)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.4$: Provable equivalence




