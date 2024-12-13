# 

Source: https://proofwiki.org/wiki/Reductio_ad_Absurdum/Variant_2



Theorem
If, by making an assumption $\neg p$, we can infer a contradiction as a consequence, then we may infer $p$:

$\neg p \implies \paren {q \land \neg q} \vdash p$


Proof 1
By the tableau method of natural deduction:


$\neg p \implies \left({q \land \neg q}\right) \vdash p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \implies \left({q \land \neg q}\right)$

Premise

(None)




2


2

$\neg p$

Assumption

(None)




3


1, 2

$q \land \neg q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4


1, 2

$q$

Rule of Simplification: $\land \EE_1$

3




5


1, 2

$\neg q$

Rule of Simplification: $\land \EE_2$

3




6


1, 2

$\bot$

Principle of Non-Contradiction: $\neg \EE$

4, 5




7


1

$\neg \neg p$

Proof by Contradiction: $\neg \II$

2 – 6

Assumption 2 has been discharged


8


1

$p$

Double Negation Elimination: $\neg \neg \EE$

7



$\blacksquare$


Proof by Truth Table
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccccccc||c|} \hline
\neg & p & \implies & (q & \land & \neg & q) & p \\
\hline
\T & \F & \F & \F & \F & \T & \F & \F \\
\T & \F & \F & \T & \F & \F & \T & \F \\
\F & \T & \T & \F & \F & \T & \F & \T \\
\F & \T & \T & \T & \F & \F & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Linguistic Note
Reductio ad Absurdum is Latin for reduction to an absurdity.


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.12$: Valid Arguments




