# 

Source: https://proofwiki.org/wiki/Biconditional_as_Disjunction_of_Conjunctions/Formulation_2



Theorem
$\vdash \paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} } $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \iff q$

Assumption

(None)




2


1

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Sequent Introduction

1

Biconditional as Disjunction of Conjunctions: Formulation 1


3




$\paren {p \iff q} \implies \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$\paren {p \land q} \lor \paren {\neg p \land \neg q}$

Assumption

(None)




5


4

$p \iff q$

Sequent Introduction

4

Biconditional as Disjunction of Conjunctions: Formulation 1


6




$\paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} } \implies \paren {p \iff q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \iff q} \iff \paren {\paren {p \land q} \lor \paren {\neg p \land \neg q} }$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, in all cases the truth values under the main connective is true for all boolean interpretations.
$\begin{array}{|ccc|c|ccccccccc|} \hline
(p & \iff & q) & \iff & ((p & \land & q) & \lor & (\neg & p & \land & \neg & q)) \\
\hline
\F & \T & \F & \T & \F & \F & \F & \T & \T & \F & \T & \T & \F \\
\F & \F & \T & \T & \F & \F & \T & \F & \T & \F & \F & \F & \T \\
\T & \F & \F & \T & \T & \F & \F & \F & \F & \T & \F & \T & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \F & \T & \F & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T83}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms: Exercise $\text{II}. \ 8$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $17.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2):$: The remaining rules of inference: $17$



