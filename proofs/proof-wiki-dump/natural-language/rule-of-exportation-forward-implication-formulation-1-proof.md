# 

Source: https://proofwiki.org/wiki/Rule_of_Exportation/Forward_Implication/Formulation_1/Proof

Theorem
$\paren {p \land q} \implies r \vdash p \implies \paren {q \implies r}$


Proof
By the tableau method of natural deduction:


$\paren {p \land q} \implies r \vdash p \implies \paren {q \implies r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {p \land q} \implies r$

Premise

(None)




2


2

$p$

Assumption

(None)




3


3

$q$

Assumption

(None)




4


2, 3

$p \land q$

Rule of Conjunction: $\land \II$

2, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 4




6


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


1

$p \implies \paren {q \implies r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $13$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.1$: Rules for natural deduction: Example $1.13$




