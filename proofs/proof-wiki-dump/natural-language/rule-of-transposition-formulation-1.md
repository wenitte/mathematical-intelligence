# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_1



Theorem
A statement and its contrapositive have the same truth value:

$p \implies q \dashv \vdash \neg q \implies \neg p$

Its abbreviation in a tableau proof is $\textrm {TP}$.

This can be expressed as two separate theorems:

Forward Implication













\(\ds p\)

\(\implies\)







\(\ds q\)














\(\ds \vdash \ \ \)





\(\ds \neg q\)

\(\implies\)







\(\ds \neg p\)









Reverse Implication
$\neg q \implies \neg p \vdash p \implies q$


Proof 1
Proof of Forward Implication
By the tableau method of natural deduction:


$p \implies q \vdash \neg q \implies \neg p$


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

Assumption

(None)




3


1, 2

$\neg p$

Modus Tollendo Tollens (MTT)

1, 2




4


1

$\neg q \implies \neg p$

Rule of Implication: $\implies \II$

2 – 3

Assumption 2 has been discharged

$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\neg q \implies \neg p \vdash p \implies q$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies \neg p$

Premise

(None)




2


2

$p$

Assumption

(None)




3


2

$\neg \neg p$

Double Negation Introduction: $\neg \neg \II$

2




4


1, 2

$\neg \neg q$

Modus Tollendo Tollens (MTT)

1, 3




5


1, 2

$q$

Double Negation Elimination: $\neg \neg \EE$

4




6


1

$p \implies q$

Rule of Implication: $\implies \II$

2 – 5

Assumption 2 has been discharged



Law of the Excluded Middle
The proof of the reverse implication depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates the proof of the reverse implication from an intuitionistic perspective.


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccc|} \hline
p & \implies & q & \neg & q & \implies & \neg & p \\
\hline
\F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \T & \F & \F & \F & \T \\
\T & \T & \T & \F & \T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Also known as
The Rule of Transposition is also known as:

the Law of Transposition
the Rule of Contraposition
the Law of Contraposition.


Also see
Definition:Contrapositive Statement


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Introduction: Logic
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 4$: The implies sign ($\Rightarrow$): $4.1$
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Exercise $6 \ \text{(a)}$
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.4$: Provable equivalence
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




