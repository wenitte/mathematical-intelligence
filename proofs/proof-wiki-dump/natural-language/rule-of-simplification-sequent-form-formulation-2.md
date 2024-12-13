# 

Source: https://proofwiki.org/wiki/Rule_of_Simplification/Sequent_Form/Formulation_2



Theorem
The Rule of Simplification can be symbolised by the sequents:

$(1): \quad \vdash p \land q \implies p$
$(2): \quad \vdash p \land q \implies q$


Form 1
$\vdash p \land q \implies p$
Form 2
$\vdash p \land q \implies q$


Proof 1
Form 1
By the tableau method of natural deduction:


$\vdash p \land q \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$p$

Rule of Simplification: $\land \EE_1$

1




3




$p \land q \implies p$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged
$\blacksquare$


Form 2
By the tableau method of natural deduction:


$\vdash p \land q \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \land q$

Assumption

(None)




2


1

$q$

Rule of Simplification: $\land \EE_2$

1




3




$p \land q \implies q$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective are true for all boolean interpretations.

$\begin{array}{|ccc|c|c||c|c|} \hline
p & \land & q & p & q & p \land q \implies p & p \land q \implies q \\
\hline
\F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \T & \T & \T \\
\T & \F & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





