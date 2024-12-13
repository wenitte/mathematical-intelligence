# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Ponens/Variant_2

Theorem
$\vdash p \implies \paren {\paren {p \implies q} \implies q}$


Proof 1
By the tableau method of natural deduction:


$\vdash p \implies \paren {\paren {p \implies q} \implies q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Assumption

(None)




2


2

$p \implies q$

Assumption

(None)




3


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 1




4


1

$\paren {p \implies q} \implies q$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged


5




$p \implies \paren {\paren {p \implies q} \implies q}$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
$\begin{array}{|c|c|ccccc|} \hline
p & \implies & ((p & \implies & q) & \implies & q)\\
\hline
\F & \T & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
As can be seen by inspection, the main connective is true throughout.
$\blacksquare$





