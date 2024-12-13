# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_3



Theorem
$\vdash \paren {\paren {p \implies q} \land p} \implies q$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\paren {p \implies q} \land p} \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \implies q} \land p$

Assumption

(None)




2


1

$p \implies q$

Rule of Simplification: $\land \EE_1$

1




3


1

$p$

Rule of Simplification: $\land \EE_2$

1




4


1

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 3




5




$\paren {\paren {p \implies q} \land p} \implies q$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.
$\begin{array}{|ccccc|c|c|} \hline
((p & \implies & q) & \land & p) & \implies & q \\
\hline
\F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T \\
\T & \F & \F & \F & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 20$




