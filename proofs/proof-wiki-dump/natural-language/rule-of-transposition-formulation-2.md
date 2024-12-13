# 

Source: https://proofwiki.org/wiki/Rule_of_Transposition/Formulation_2



Theorem
$\vdash \paren {p \implies q} \iff \paren {\neg q \implies \neg p}$


Proof 1
Proof of Forward Implication
By the tableau method of natural deduction:


$\vdash \paren {p \implies q} \implies \paren {\neg q \implies \neg p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \implies q$

Assumption

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


5




$\paren {p \implies q} \implies \paren {\neg q \implies \neg p}$

Rule of Implication: $\implies \II$

1 – 4

Assumption 1 has been discharged
$\blacksquare$


Proof of Reverse Implication
By the tableau method of natural deduction:


$\vdash \left({\neg q \implies \neg p}\right) \implies \left({p \implies q}\right)$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\neg q \implies \neg p$

Assumption

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


7




$\left({\neg q \implies \neg p}\right) \implies \left({p \implies q}\right)$

Rule of Implication: $\implies \II$

1 – 6

Assumption 1 has been discharged

$\blacksquare$

Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle, by way of Double Negation Elimination.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.



Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|ccc|c|ccccc|} \hline
p & \implies & q) & \iff & (\neg & q & \implies & \neg & p) \\
\hline
\F & \T & \F & \T & \T & \F & \T & \T & \F \\
\F & \T & \T & \T & \F & \T & \T & \T & \F \\
\T & \F & \F & \T & \T & \F & \F & \F & \T \\
\T & \T & \T & \T & \F & \T & \T & \F & \T \\
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
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $\text {RF} \, 16$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $\text D \, 18 - 20$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T111}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.4$: Statement Forms: Exercise $\text{II}. \ 2$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $15.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2)$: The remaining rules of inference: $15$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(3)$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.13$: Tableau Problems (TAB1): CONTR




