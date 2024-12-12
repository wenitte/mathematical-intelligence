# 

Source: https://proofwiki.org/wiki/Biconditional_is_Reflexive



Theorem
The biconditional operator, considered as a relation, is reflexive:

$\vdash p \iff p$

This can otherwise be stated as that equivalence destroys copies of itself.


Proof 1
By the tableau method of natural deduction:


$\vdash p \iff p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$p \implies p$

Theorem Introduction

(None)

Law of Identity: Formulation 2


2




$p \iff p$

Biconditional Introduction: $\iff \II$

1, 1


$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connective match for both boolean interpretations.
$\begin{array}{|ccc|} \hline
p & \iff & p \\
\hline
F & T & F \\
T & T & T \\
\hline
\end{array}$
$\blacksquare$


Sources
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 23$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T91}$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




