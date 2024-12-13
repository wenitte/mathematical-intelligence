# 

Source: https://proofwiki.org/wiki/Law_of_Excluded_Middle/Sequent_Form



Theorem
The Law of Excluded Middle can be symbolised by the sequent:

$\vdash p \lor \neg p$


Proof 1
By the tableau method of natural deduction:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$p \lor \neg p$

Law of Excluded Middle

(None)



$\blacksquare$


Proof 2
This proof is derived in the context of the following proof system: Instance 2 of the Hilbert-style systems.By the tableau method:


$\vdash p \lor \neg p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$

Theorem Introduction

(None)

Hypothetical Syllogism


2




$\paren {\paren {p \lor p} \implies p} \implies \paren {\paren {p \implies \paren {p \lor p} } \implies \paren {p \implies p} }$

Rule $\text {RST} 1$

1

$p \lor p \, / \, q$, $p \, / \, r$


3




$\paren {p \lor p} \implies p$

Axiom $\text A 1$






4




$\paren {p \implies \paren {p \lor p} } \implies \paren {p \implies p}$

Rule $\text {RST} 3$

2, 3




5




$p \implies \paren {p \lor p}$

Axiom $\text A 2$, Rule $\text {RST} 1$



$p \, / \, q$


6




$p \implies p$

Rule $\text {RST} 3$

4, 5




7




$\neg p \lor p$

Rule $\text {RST} 2 \, (2)$

6




8




$\paren {p \lor q} \implies \paren {q \lor p}$

Axiom $\text A 3$






9




$\paren {\neg p \lor p} \implies \paren {p \lor \neg p}$

Rule $\text {RST} 1$

8

$p \, / \, q$, $\neg p \, / \, p$


10




$p \lor \neg p$

Rule $\text {RST} 3$

7, 9



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition $\vdash p \lor \neg p$.
As can be seen by inspection, the truth value of the main connective, that is $\lor$, is $\T$ for each boolean interpretation for $p$.

$\begin{array}{|c|c|cc|} \hline
p & \lor & \neg & p \\
\hline
\F & \T & \T & \F \\
\T & \T & \F & \T \\
\hline
\end{array}$
$\blacksquare$


Sources
1946: Alfred Tarski: Introduction to Logic and to the Methodology of Deductive Sciences (2nd ed.) ... (previous) ... (next): $\S \text{II}.13$: Symbolism of sentential calculus
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 2$
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 4.7$: The Derivation of Formulae: $D \, 3$
1964: Donald Kalish and Richard Montague: Logic: Techniques of Formal Reasoning ... (previous) ... (next): $\text{II}$: 'AND', 'OR', 'IF AND ONLY IF': $\S 5$: Theorem $\text{T59}$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




