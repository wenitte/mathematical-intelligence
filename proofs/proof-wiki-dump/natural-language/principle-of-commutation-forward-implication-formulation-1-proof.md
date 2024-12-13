# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Forward_Implication/Formulation_1/Proof

Theorem
$p \implies \left({q \implies r}\right) \vdash q \implies \left({p \implies r}\right)$


Proof
By the tableau method of natural deduction:


$p \implies \paren {q \implies r} \vdash q \implies \paren {p \implies r} $


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

$q$

Assumption

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1, 2

$p \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


1

$q \implies \paren {p \implies r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation: Theorem $10$
Metamath: Theorem com12: Commuting antecedents in an implication




