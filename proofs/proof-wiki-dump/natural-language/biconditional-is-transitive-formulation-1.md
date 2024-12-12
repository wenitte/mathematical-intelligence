# 

Source: https://proofwiki.org/wiki/Biconditional_is_Transitive/Formulation_1



Theorem
The biconditional operator is transitive:

$p \iff q, q \iff r \vdash p \iff r$


Proof 1
By the tableau method of natural deduction:


$p \iff q, q \iff r \vdash p \iff r$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Premise

(None)




2


2

$q \iff r$

Premise

(None)




3


1

$p \implies q$

Biconditional Elimination: $\iff \EE_1$

1




4


2

$q \implies r$

Biconditional Elimination: $\iff \EE_1$

2




5


1, 2

$p \implies r$

Sequent Introduction

1, 2

Hypothetical Syllogism: Formulation 1


6


1

$q \implies p$

Biconditional Elimination: $\iff \EE_2$

1




7


2

$r \implies q$

Biconditional Elimination: $\iff \EE_2$

2




8


1, 2

$r \implies p$

Sequent Introduction

7, 6

Hypothetical Syllogism: Formulation 1


9


1, 2

$p \iff r$

Biconditional Introduction: $\iff \II$

5, 8


$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side is $T$, that under the one on the right hand side is also $T$:
$\begin{array}{|ccccccc||ccc|} \hline
(p & \iff & q) & \land & (q & \iff & r) & p & \iff & r \\
\hline
F & T & F & T & F & T & F & F & T & F \\
F & T & F & F & F & F & T & F & F & T \\
F & F & T & F & T & F & F & F & T & F \\
F & F & T & F & T & T & T & F & F & T \\
T & F & F & F & F & T & F & T & F & F \\
T & F & F & F & F & F & T & T & T & T \\
T & T & T & F & T & F & F & T & F & F \\
T & T & T & T & T & T & T & T & T & T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.13$: Tableau Problems (TAB1): EQUIV




