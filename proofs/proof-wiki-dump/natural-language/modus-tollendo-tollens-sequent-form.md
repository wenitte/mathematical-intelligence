# 

Source: https://proofwiki.org/wiki/Modus_Tollendo_Tollens/Sequent_Form



Proof Rule
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











Proof 1
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


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 2



$\blacksquare$


Proof 2
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


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen for all boolean interpretations by inspection, where the truth value under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:

$\begin{array}{|cccccc||cc|} \hline
(p & \implies & q) & \land & \neg & q & \neg & p \\
\hline
\F & \T & \F & \T & \T & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \T & \F \\
\T & \F & \F & \F & \T & \F & \F & \T \\
\T & \T & \T & \F & \F & \T & \F & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$

Note that the two formulas are not equivalent, as the relevant columns do not match exactly.


Sources
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $2.$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $17 \ \text{(i)}$




