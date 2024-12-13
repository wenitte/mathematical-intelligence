# 

Source: https://proofwiki.org/wiki/Principle_of_Commutation/Formulation_1



Theorem
$p \implies \paren {q \implies r} \dashv \vdash q \implies \paren {p \implies r}$

This can of course be expressed as two separate theorems:

Forward Implication
$p \implies \left({q \implies r}\right) \vdash q \implies \left({p \implies r}\right)$
Reverse Implication
$q \implies \paren {p \implies r} \vdash p \implies \paren {q \implies r}$


Proof 1
Proof of Forward Implication
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


Proof of Reverse Implication
By the tableau method of natural deduction:


$q \implies \left({p \implies r}\right) \vdash p \implies \left({q \implies r}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$q \implies \left({p \implies r}\right)$

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


1, 3

$p \implies r$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1, 2

$q \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged


7


1

$p \implies \left({q \implies r}\right)$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$


Proof 2
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccccc||ccccc|} \hline
p & \implies & (q & \implies & r) & q & \implies & (p & \implies & r) \\
\hline
F & T & F & T & F & F & T & F & T & F \\
F & T & F & T & T & F & T & F & T & T \\
F & T & T & F & F & T & T & F & T & F \\
F & T & T & T & T & T & T & F & T & T \\
T & T & F & T & F & F & T & T & F & F \\
T & T & F & T & T & F & T & T & T & T \\
T & F & T & F & F & T & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
$\blacksquare$





