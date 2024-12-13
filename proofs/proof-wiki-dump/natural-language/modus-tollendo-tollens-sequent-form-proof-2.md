# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Tollens/Sequent_Form/Proof_2

Theorem
The Modus Tollendo Tollens can be symbolised by the sequent:














\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds \neg q\)

\(\)







\(\ds \)














\(\ds \vdash \ \ \)





\(\ds \neg p\)

\(\)







\(\ds \)











Proof
By the tableau method of natural deduction:


$p \implies q, \neg q \vdash \neg p$


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

$\neg q$

Premise

(None)




3


3

$p$

Assumption

(None)

Assume $p$ ...


4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3

... and derive $q$ ...


5


1, 2, 3

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 2

... demonstrating a contradiction


6


1, 2

$\neg p$

Proof by Contradiction: $\neg \II$

3 – 5

Assumption 3 has been discharged
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $55$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.2$: Derived rules




