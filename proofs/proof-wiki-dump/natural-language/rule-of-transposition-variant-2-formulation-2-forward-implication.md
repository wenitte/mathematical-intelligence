# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Variant_2/Formulation_2/Forward_Implication

Theorem
$\vdash \paren {\neg p \implies q} \implies \paren {\neg q \implies p}$


Proof
By the tableau method of natural deduction:


$\vdash \paren {\neg p \implies q} \implies \paren {\neg q \implies p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies q$

Assumption

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


6




$\paren {\neg p \implies q} \implies \paren {\neg q \implies p}$

Rule of Implication: $\implies \II$

1 – 5

Assumption 1 has been discharged
$\blacksquare$
Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.





