# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Conjunction_of_Negations/Formulation_2



Theorem
$\vdash \paren {\neg p \land \neg q} \iff \paren {\neg \paren {p \lor q} }$

This can be expressed as two separate theorems:

Forward Implication
$\paren {\neg p \land \neg q} \implies \paren {\neg \paren {p \lor q} }$
Reverse Implication
$\paren {\neg \paren {p \lor q} } \implies \paren {\neg p \land \neg q}$


Proof 1
By the tableau method of natural deduction:


$\vdash \left({\neg p \land \neg q}\right) \iff \left({\neg \left({p \lor q}\right)}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \land \neg q$

Assumption

(None)




2


1

$\neg \left({p \lor q}\right)$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


3




$\left({\neg p \land \neg q}\right) \implies \left({\neg \left({p \lor q}\right)}\right)$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \left({p \lor q}\right)$

Assumption

(None)




5


4

$\neg p \land \neg q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


6




$\left({\neg \left({p \lor q}\right)}\right) \implies \left({\neg p \land \neg q}\right)$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\left({\neg p \land \neg q}\right) \iff \left({\neg \left({p \lor q}\right)}\right)$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|cccc|} \hline
\neg & p & \land & \neg & q & \iff & \neg & (p & \lor & q) \\
\hline
\T & \F & \T & \T & \F & \T & \T & \F & \F & \F \\
\T & \F & \F & \F & \T & \T & \F & \F & \T & \T \\
\F & \T & \F & \T & \F & \T & \F & \T & \T & \F \\
\F & \T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T66}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $10.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $13$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(2) \ \text{(v)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (9)$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1$: You have a logical mind if... $\text{(d)}$
(referring to it as one of the laws of negation)




