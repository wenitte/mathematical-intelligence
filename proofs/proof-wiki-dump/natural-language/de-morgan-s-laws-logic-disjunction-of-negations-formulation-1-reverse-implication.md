# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_1/Reverse_Implication



Theorem
$\neg \paren {p \land q} \vdash \neg p \lor \neg q$


Proof
By the tableau method of natural deduction:


$\neg \paren {p \land q} \vdash \neg p \lor \neg q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg \paren {p \land q}$

Premise

(None)




2


2

$\neg \paren {\neg p \lor \neg q}$

Assumption

(None)




3


3

$\neg p$

Assumption

(None)




4


3

$\neg p \lor \neg q$

Rule of Addition: $\lor \II_1$

3




5


2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 2




6


2

$p$

Reductio ad Absurdum

3 – 5

Assumption 3 has been discharged


7


7

$\neg q$

Assumption

(None)




8


7

$\neg p \lor \neg q$

Rule of Addition: $\lor \II_2$

7




9


2, 7

$\bot$

Principle of Non-Contradiction: $\neg \EE$

8, 2




10


2

$q$

Reductio ad Absurdum

7 – 9

Assumption 7 has been discharged


11


2

$p \land q$

Rule of Conjunction: $\land \II$

6, 10




12


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

11, 1




13


1

$\neg p \lor \neg q$

Reductio ad Absurdum

2 – 12

Assumption 2 has been discharged
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Reductio ad Absurdum.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.5$: An aside: proof by contradiction: Exercises $1.6: \ 1 \ \text{(e)}$




