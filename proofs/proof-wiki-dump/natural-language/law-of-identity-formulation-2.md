# 

Source: https://proofwiki.org/wiki/Law_of_Identity/Formulation_2



Theorem
Every proposition entails itself:

$\vdash p \implies p$


Proof 1
By the tableau method of natural deduction:


$\vdash p \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$p$

Premise

(None)




2




$p \implies p$

Rule of Implication: $\implies \II$

1 – 1

Assumption 1 has been discharged
$\blacksquare$


Proof 2
Using a tableau proof for instance 1 of a Hilbert proof system:


$p \implies p$


Line


Pool

Formula

Rule

Depends upon

Notes


1




$\paren {p \implies \paren {\paren {p \implies p} \implies p} } \implies \paren {\paren {p \implies \paren {p \implies p} } \implies \paren {p \implies p} }$

Axiom 2



$\mathbf A = p, \mathbf B = p \implies p, \mathbf C = p$


2




$p \implies \paren {\paren {p \implies p} \implies p}$

Axiom 1



$\mathbf A = p, \mathbf B = p \implies p$


3




$\paren {p \implies \paren {p \implies p} } \implies \paren {p \implies p}$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 2




4




$p \implies \paren {p \implies p}$

Axiom 1



$\mathbf A = p, \mathbf B = p$


5




$p \implies p$

Modus Ponendo Ponens: $\implies \mathcal E$

3, 4



$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the proposition.
As can be seen by inspection, the truth value under the main connective is $\T$ throughout.
$\begin{array}{|ccc|} \hline
p & \implies & p \\
\hline
\F & \T & \F \\
\T & \T & \T \\
\hline
\end{array}$
$\blacksquare$


Also see
Some sources, for example 1980: D.J. O'Connor and Betty Powell: Elementary Logic, use the statement:

$\vdash p \implies p$
to be the defining property of a tautology.


Sources
1910: Alfred North Whitehead and Bertrand Russell: Principia Mathematica: Volume $\text { 1 }$ ... (previous) ... (next): Chapter $\text{I}$: Preliminary Explanations of Ideas and Notations
1959: A.H. Basson and D.J. O'Connor: Introduction to Symbolic Logic (3rd ed.) ... (previous) ... (next): $\S 3.6$: Reference Formulae: $RF \, 3$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 3$: Logical Constants $(2)$
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.3$: Rules for manipulation and substitution




