# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1/Forward_Implication



Theorem
$p \implies q \vdash \neg p \lor q$


Proof
By the tableau method of natural deduction:


$p \implies q \vdash \neg p \lor q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Premise

(None)




2




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$\neg p$

Assumption

(None)




4


3

$\neg p \lor q$

Rule of Addition: $\lor \II_1$

3




5


5

$p$

Assumption

(None)




6


1, 5

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 5




7


1, 5

$\neg p \lor q$

Rule of Addition: $\lor \II_2$

6




8


1

$\neg p \lor q$

Proof by Cases: $\text{PBC}$

2, 3 – 4, 5 – 7

Assumptions 3 and 5 have been discharged

$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text {(i)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Exercises $1.5: \ 2 \ \text{(h)}$




