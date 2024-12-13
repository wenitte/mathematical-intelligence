# 

Source: https://proofwiki.org/wiki/Rule_of_Distribution/Disjunction_Distributes_over_Conjunction/Left_Distributive/Formulation_2



Theorem
$\vdash \paren {p \lor \paren {q \land r} } \iff \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Forward Implication
$\vdash \paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$


Reverse Implication
$\vdash \paren {\paren {p \lor q} \land \paren {p \lor r} } \implies \paren {p \lor \paren {q \land r} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \lor \paren {q \land r} } \iff \paren {\paren {p \lor q} \land \paren {p \lor r} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor \paren {q \land r}$

Assumption

(None)




2


1

$\paren {p \lor q} \land \paren {p \lor r}$

Sequent Introduction

1

Disjunction is Left Distributive over Conjunction: Formulation 1


3




$\paren {p \lor \paren {q \land r} } \implies \paren {\paren {p \lor q} \land \paren {p \lor r} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \lor q} \land \paren {p \lor r}$

Assumption

(None)




5


4

$p \lor \paren {q \land r}$

Sequent Introduction

4

Disjunction is Left Distributive over Conjunction: Formulation 1


6




$\paren {\paren {p \lor q} \land \paren {p \lor r} } \implies \paren {p \lor \paren {q \land r} }$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor \paren {q \land r} } \iff \paren {\paren {p \lor q} \land \paren {p \lor r} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccccc|c|ccccccc|} \hline
p & \lor & (q & \land & r) & \iff & (p & \lor & q) & \land & (p & \lor & r) \\
\hline
\F & \F & \F & \F & \F & \T & \F & \F & \F & \F & \F & \F & \F \\
\F & \F & \F & \F & \T & \T & \F & \F & \F & \F & \F & \T & \T \\
\F & \F & \T & \F & \F & \T & \F & \T & \T & \F & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \F & \T & \T & \T & \F & \T & \T \\
\T & \T & \F & \F & \F & \T & \T & \T & \F & \T & \T & \T & \F \\
\T & \T & \F & \F & \T & \T & \T & \T & \F & \T & \T & \T & \T \\
\T & \T & \T & \F & \F & \T & \T & \T & \T & \T & \T & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 13$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 33$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T62}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $13.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $12$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(viii)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (7)$
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $1$: Elementary, my dear Watson: $\S 1.1$: You have a logical mind if... $\text{(b)}$
(erroneously referring to it as one of De Morgan's Laws)




