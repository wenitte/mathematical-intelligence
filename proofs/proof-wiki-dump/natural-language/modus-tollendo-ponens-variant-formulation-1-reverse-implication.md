# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Ponens/Variant/Formulation_1/Reverse_Implication



Theorem
$\neg p \implies q \vdash p \lor q$


Proof
By the tableau method of natural deduction:


$\neg p \implies q \vdash p \lor q$


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




$p \lor \neg p$

Law of Excluded Middle

(None)




3


3

$p$

Assumption

(None)




4


3

$p \lor q$

Rule of Addition: $\lor \II_1$

3




5


5

$\neg p$

Assumption

(None)




6


1, 5

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 5




7


1, 5

$p \lor q$

Rule of Addition: $\lor \II_2$

6




8


1

$p \lor q$

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
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Exercise $1 \ \text {(j)}$




