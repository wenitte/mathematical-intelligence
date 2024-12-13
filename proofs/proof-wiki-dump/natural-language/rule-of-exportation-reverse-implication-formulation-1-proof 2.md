# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Reverse_Implication/Formulation_1/Proof

Theorem
$p \implies \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Proof
By the tableau method of natural deduction:


$p \implies \paren {q \implies r} \vdash \paren {p \land q} \implies r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies \paren {q \implies r}$

Premise

(None)




2


2

$p \land q$

Assumption

(None)




3


2

$p$

Rule of Simplification: $\land \EE_1$

2




4


2

$q$

Rule of Simplification: $\land \EE_2$

2




5


1, 2

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




6


1, 2

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

5, 4




7


1

$\paren {p \land q} \implies r$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $16$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.14$




