# 

Source: https://proofwiki.org/wiki/Factor_Principles/Conjunction_on_Left/Formulation_1



Theorem
$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q}$


Proof 1
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q} $


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

Law of Identity

(None)

This is a theorem so depends on nothing


3


1

$\paren {r \implies r} \land \paren {p \implies q}$

Rule of Conjunction: $\land \II$

2, 1




4


1

$\paren {r \land p} \implies \paren {r \land q}$

Sequent Introduction

3

Praeclarum Theorema

$\blacksquare$


Proof 2
By the tableau method of natural deduction:


$p \implies q \vdash \paren {r \land p} \implies \paren {r \land q} $


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

$r \land p$

Assumption

(None)




3


1, 2

$p$

Rule of Simplification: $\land \EE_2$

2




4


1, 2

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2

$r$

Rule of Simplification: $\land \EE_1$

2




6


1, 2

$r \land q$

Rule of Conjunction: $\land \II$

5, 4




7


1

$\paren {r \land p} \implies \paren {r \land q}$

Rule of Implication: $\implies \II$

2 – 6

Assumption 2 has been discharged

$\blacksquare$



This article is complete as far as it goes, but it could do with expansion.In particular: Derive the this rule from from Factor Principles: Conjunction on Right by applying Conjunction is Commutative on the right hand side.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding this information.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Expand}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $3$ Conjunction and Disjunction: Theorem $18$




