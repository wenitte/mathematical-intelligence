# 

Source: https://proofwiki.org/wiki/Absorption_Laws_(Logic)/Disjunction_Absorbs_Conjunction



Theorem
$p \lor \paren {p \land q} \dashv \vdash p$

This can be expressed as two separate theorems:

Forward Implication
$p \lor \paren {p \land q} \vdash p$
Reverse Implication
$p \vdash p \lor \paren {p \land q}$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the appropriate truth values match for all boolean interpretations.
$\begin{array}{|ccccc||c|} \hline
p & \lor & (p & \land & q) & p \\
\hline
\F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \F \\
\T & \T & \T & \F & \F & \T \\
\T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Proof 2













\(\ds p \lor \paren {p \land q}\)

\(=\)







\(\ds \paren {p \land \top} \lor \paren {p \land q}\)





Conjunction with Tautology














\(\ds \)

\(=\)







\(\ds p \land \paren {\top \lor q}\)





Conjunction is Left Distributive over Disjunction














\(\ds \)

\(=\)







\(\ds p \land \top\)





Disjunction with Tautology














\(\ds \)

\(=\)







\(\ds p\)





Conjunction with Tautology



$\blacksquare$


Also see
Absorption Laws (Set Theory)
Absorption Laws (Lattice Theory)


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $32$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.5$




