# 

Source: https://proofwiki.org/wiki/Rule_of_Addition/Sequent_Form/Formulation_2



Theorem
The Rule of Addition can be symbolised by the sequents:




\(\text {(1)}: \quad\)









\(\ds \vdash p\)

\(\implies\)







\(\ds \paren {p \lor q}\)










\(\text {(2)}: \quad\)









\(\ds \vdash q\)

\(\implies\)







\(\ds \paren {p \lor q}\)











Form 1
$\vdash p \implies \paren {p \lor q}$
Form 2
$\vdash q \implies \left({p \lor q}\right)$


Proof 1
Form 1
By the tableau method of natural deduction:


$p \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_1$

1




3




$p \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Form 2
By the tableau method of natural deduction:


$q \implies \paren {p \lor q} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q$

Premise

(None)




2


1

$p \lor q$

Rule of Addition: $\lor \II_2$

1




3




$q \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

1 – 3

Assumption 1 has been discharged

$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives are $T$ for all boolean interpretations.
$\begin{array}{|c|c|ccccc|ccccc|} \hline
p & q & p & \implies & (p & \lor & q) & q & \implies & (p & \lor & q) \\
\hline
\F & \F & \F & \T & \F & \F & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \T & \F & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \T & \T & \T & \T & \F & \F & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





