# 

Source: https://proofwiki.org/wiki/Factor_Principles/Disjunction_on_Right/Formulation_1



Theorem
$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r}$


Proof 1
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r} $


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




$r \implies r$

Theorem Introduction

(None)

Law of Identity: Formulation 2


3


1

$\paren {p \lor r} \implies \paren {q \lor r}$

Sequent Introduction

1, 2

Constructive Dilemma

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r} $


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


2

$p \lor r$

Assumption

(None)




3


3

$r$

Assumption

(None)




4


3

$q \lor r$

Rule of Addition: $\lor \II_2$

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

$q \lor r$

Rule of Addition: $\lor \II_1$

6




8


1, 2

$q \lor r$

Proof by Cases: $\text{PBC}$

2, 5 – 7, 3 – 4

Assumptions 5 and 3 have been discharged


9


1

$\paren {p \lor r} \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

2 – 8

Assumption 2 has been discharged

$\blacksquare$


Proof 3
By the tableau method of natural deduction:


$p \implies q \vdash \paren {p \lor r} \implies \paren {q \lor r} $


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


2

$p \lor r$

Assumption

(None)




3


2

$r \lor p$

Sequent Introduction

2

Disjunction is Commutative


4


1

$\paren {r \lor p} \implies \paren {r \lor q}$

Sequent Introduction

1

Factor Principles/Disjunction on Left/Formulation 1


5


1,2

$r \lor q$

Modus Ponendo Ponens: $\implies \mathcal E$

4, 3




6


1,2

$q \lor r$

Sequent Introduction

5

Disjunction is Commutative


7


1

$\paren {p \lor r} \implies \paren {q \lor r}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Proof 4
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $T$, that under the one on the right hand side is also $T$:


$\begin{array}{|ccc||ccc||ccccccc|} \hline
p & q & r & (p & \implies & q) & (p & \lor & r) & \implies & (q & \lor & r) \\
\hline
F & F & F & F & T & F & F & F & F & T & F & F & F \\
F & F & T & F & T & F & F & T & T & T & F & T & T \\ 
F & T & F & F & T & T & F & F & F & T & T & T & F \\
F & T & T & F & T & T & F & T & T & T & T & T & T \\
T & F & F & T & F & F & T & T & F & F & F & F & F \\
T & F & T & T & F & F & T & T & T & T & F & T & T \\
T & T & F & T & T & T & T & T & F & T & T & T & F \\
T & T & T & T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





