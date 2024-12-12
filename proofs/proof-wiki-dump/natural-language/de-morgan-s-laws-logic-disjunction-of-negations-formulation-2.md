# 

Source: https://proofwiki.org/wiki/De_Morgan%27s_Laws_(Logic)/Disjunction_of_Negations/Formulation_2



Theorem
$\vdash \paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg p \lor \neg q$

Assumption

(None)




2


1

$\neg \paren {p \land q}$

Sequent Introduction

1

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


3




$\paren {\neg p \lor \neg q} \implies \paren {\neg \paren {p \land q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\neg \paren {p \land q}$

Assumption

(None)




5


4

$\neg p \lor \neg q$

Sequent Introduction

4

De Morgan's Laws (Logic): Disjunction of Negations: Formulation 1


6




$\paren {\neg \paren {p \land q} } \implies \paren {\neg p \lor \neg q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {\neg p \lor \neg q} \iff \paren {\neg \paren {p \land q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|cccc|} \hline
\neg & p & \lor & \neg & q & \iff & \neg & (p & \land & q) \\
\hline
\T & \F & \T & \T & \F & \T & \T & \F & \F & \F \\
\T & \F & \T & \F & \T & \T & \T & \F & \F & \T \\
\F & \T & \T & \T & \F & \T & \T & \T & \F & \F \\
\F & \T & \F & \F & \T & \T & \F & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T65}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $10.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $13$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(2) \ \text{(iv)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (10)$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1$: You have a logical mind if... $\text{(c)}$
(referring to it as one of the laws of negation)




