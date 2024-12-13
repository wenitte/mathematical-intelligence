# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_2/Formulation_1



Theorem
$\neg p \implies q \dashv \vdash \neg q \implies p$

This can be expressed as two separate theorems:

Forward Implication
$\neg p \implies q \vdash \neg q \implies p$
Reverse Implication
$q \implies \neg p \vdash p \implies \neg q$


Proof 1
Proof of Forward Implication
By the tableau method of natural deduction:


$\neg p \implies q \vdash \neg q \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies q$

Premise

(None)




2


2

$\neg q$

Assumption

(None)




3


1, 2

$\neg \neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1, 2

$p$

Double Negation Elimination: $\neg \neg \EE$

3




5


1

$\neg q \implies p$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof of Reverse Implication
By the tableau method of natural deduction:


$\neg q \implies p \vdash \neg p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies p$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$\neg \neg q$

Modus Tollendo Tollens (MTT)

1, 2




4


1, 2

$q$

Double Negation Elimination: $\neg \neg \EE$

3




5


1

$\neg p \implies q$

Rule of Implication: $\implies \II$

2 – 4

Assumption 2 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.



Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||cccc|} \hline
\neg & p & \implies & q & \neg & q & \implies & p \\
\hline
\T & \F & \T & \F & \T & \F & \T & \F \\
\T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$





