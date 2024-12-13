# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_1/Formulation_1



Theorem
$p \implies \neg q \dashv \vdash q \implies \neg p$

This can be expressed as two separate theorems:

Forward Implication
$p \implies \neg q \vdash q \implies \neg p$
Reverse Implication
$q \implies \neg p \vdash \neg p \implies q$


Proof 1
Proof of Forward Implication
By the tableau method of natural deduction:


$p \implies \neg q \vdash q \implies \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \neg q$

Premise

(None)




2


2

$q$

Assumption

(None)




3


2

$\neg \neg q$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$q \implies \neg p \vdash p \implies \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg q$

Modus Tollendo Tollens (MTT)

1, 3




5


1

$p \implies \neg q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccc|} \hline
p & \implies & \neg & q & q & \implies & \neg & p \\
\hline
F & T & T & F & F & T & T & F \\
F & T & F & T & T & T & T & F \\
T & F & T & F & F & F & F & T \\
T & T & F & T & T & T & F & T \\
\hline
\end{array}$
$\blacksquare$





