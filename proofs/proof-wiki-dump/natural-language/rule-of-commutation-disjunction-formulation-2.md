# 

Source: https://proofwiki.org/wiki/Rule_of_Commutation/Disjunction/Formulation_2



Theorem
$\vdash \paren {p \lor q} \iff \paren {q \lor p}$


Forward Implication
$\vdash \left({p \lor q}\right) \implies \left({q \lor p}\right)$


Proof 1
By the tableau method of natural deduction:


$\vdash \paren {p \lor q} \iff \paren {q \lor p} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p \lor q$

Assumption

(None)




2


1

$q \lor p$

Sequent Introduction

1

Disjunction is Commutative


3




$\paren {p \lor q} \implies \paren {q \lor p}$

Rule of Implication: $\implies \II$

1 – 2

Assumption 1 has been discharged


4


4

$q \lor p$

Assumption

(None)




5


4

$p \lor q$

Sequent Introduction

4

Disjunction is Commutative


6




$\paren {q \lor p} \implies \paren {p \lor q}$

Rule of Implication: $\implies \II$

4 – 5

Assumption 4 has been discharged


7




$\paren {p \lor q} \iff \paren {q \lor p}$

Biconditional Introduction: $\iff \II$

3, 6



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective match for all boolean interpretations.
$\begin{array}{|ccc|c|ccc|} \hline
(p & \lor & q) & \iff & (q & \lor & p) \\
\hline
\F & \F & \F & \T & \F & \F & \F \\
\F & \T & \T & \T & \T & \T & \F \\
\T & \T & \F & \T & \F & \T & \T \\
\T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 9$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 14$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T53}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.2$: The Rule of Replacement: $11.$
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 6$: Using logical equivalences: $10$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.1$: The need for logic: Exercise $(1) \ \text{(iv)}$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.14$: Exercise $12 \ (5)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): or
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): or




