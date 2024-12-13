# 

Source: https://proofwiki.org/wiki/NOR_is_not_Associative



Theorem
Let $\downarrow$ signify the NOR operation.

Then there exist propositions $p,q,r$ such that:

$p \downarrow \paren {q \downarrow r} \not \vdash \paren {p \downarrow q} \downarrow r$
That is, NOR is not associative.


Proof 1
By the tableau method of natural deduction:


$\neg \paren {p \downarrow \paren {q \downarrow r} \implies \paren {p \downarrow q} \downarrow r} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \land r$

Assumption

(None)




2


1

$\neg p$

Rule of Simplification: $\land \EE_1$

1




3


1

$r$

Rule of Simplification: $\land \EE_2$

1




4


1

$q \lor r$

Rule of Addition: $\lor \II_2$

3




5


1

$\neg \neg \paren {q \lor r}$

Double Negation Introduction: $\neg \neg \II$

4




6


1

$\neg \paren {q \downarrow r}$

Sequent Introduction

5

Definition of Logical NOR


7


1

$\neg p \land \neg \paren {q \downarrow r}$

Rule of Conjunction: $\land \II$

2, 6




8


1

$\neg \paren {p \lor \paren {q \downarrow r} }$

Sequent Introduction

7

De Morgan's Laws: Conjunction of Negations


9


1

$p \downarrow \paren {q \downarrow r}$

Sequent Introduction

8

Definition of Logical NOR


10


1

$\paren {p \downarrow q} \lor r$

Rule of Addition: $\lor \II_2$

3




11


1

$\neg \neg \paren {\paren {p \downarrow q} \lor r}$

Double Negation Introduction: $\neg \neg \II$

10




12


1

$\neg \paren {\paren {p \downarrow q} \downarrow r}$

Sequent Introduction

11

Definition of Logical NOR


13


1

$\neg \neg \paren {p \downarrow \paren {q \downarrow r} }$

Double Negation Introduction: $\neg \neg \II$

9




14


1

$\paren {\neg \neg \paren {p \downarrow \paren {q \downarrow r} } } \land \paren {\neg \paren {\paren {p \downarrow q} \downarrow r} }$

Rule of Conjunction: $\land \II$

13, 12




15


1

$\neg \paren {\neg \paren {p \downarrow \paren {q \downarrow r} } \lor \paren {\paren {p \downarrow q} \downarrow r} }$

Sequent Introduction

14

De Morgan's Laws: Conjunction of Negations


16


1

$\neg \paren {p \downarrow \paren {q \downarrow r} \implies \paren {p \downarrow q} \downarrow r}$

Sequent Introduction

15

Rule of Material Implication

Taking $p = \bot$ and $r = \top$, we have $\vdash \neg p \land r$, discharging the last assumption.
Hence the result.
$\blacksquare$


Proof by Truth Table
Apply the Method of Truth Tables:

$\begin{array}{|ccccc||ccccc|} \hline
p & \downarrow & (q & \downarrow & r) & (p & \downarrow & q) & \downarrow & r \\
\hline
\F & \F & \F & \T & \F & \F & \T & \F & \F & \F \\
\F & \T & \F & \F & \T & \F & \T & \F & \F & \T \\
\F & \T & \T & \F & \F & \F & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \F & \F & \T & \F & \T \\
\T & \F & \F & \T & \F & \T & \F & \F & \T & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \F & \T \\
\T & \F & \T & \F & \F & \T & \F & \T & \T & \F \\
\T & \F & \T & \F & \T & \T & \F & \T & \F & \T \\
\hline
\end{array}$
As can be seen by inspection, the truth values under the main connectives do not match for all boolean interpretations.
$\blacksquare$


Also see
NAND is not Associative


Sources
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.13$



