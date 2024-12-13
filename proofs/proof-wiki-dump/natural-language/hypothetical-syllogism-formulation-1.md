# 

Source: https://proofwiki.org/wiki/Hypothetical_Syllogism/Formulation_1



Theorem













\(\ds p\)

\(\implies\)







\(\ds q\)




















\(\ds q\)

\(\implies\)







\(\ds r\)














\(\ds \vdash \ \ \)





\(\ds p\)

\(\implies\)







\(\ds r\)











Proof 1
By the tableau method of natural deduction:


$p \implies q, q \implies r \vdash p \implies r$


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

$q \implies r$

Premise

(None)




3


3

$p$

Assumption

(None)




4


1, 3

$q$

Modus Ponendo Ponens: $\implies \mathcal E$

1, 3




5


1, 2, 3

$r$

Modus Ponendo Ponens: $\implies \mathcal E$

2, 4




6


1, 2

$p \implies r$

Rule of Implication: $\implies \II$

3 – 5

Assumption 3 has been discharged

$\blacksquare$


Proof 2
This proof uses $\mathscr H_2$, Instance 2 of the Hilbert proof systems.
Recall the sequent form of the Hypothetical Syllogism:

$\vdash \paren {q \implies r} \implies \paren {\paren {p \implies q} \implies \paren {p \implies r} }$
Applying the Rule of Detachment $\text {RST} 3$ twice, we obtain:

$\vdash \paren {p \implies q} \implies \paren {p \implies r}$
and subsequently:

$\vdash p \implies r$
as desired.
$\blacksquare$


Proof by Truth Table
We apply the Method of Truth Tables to the propositions in turn.
As can be seen for all boolean interpretations by inspection, where the truth values under the main connective on the left hand side is $\T$, that under the one on the right hand side is also $\T$:
$\begin{array}{|ccccccc||ccc|} \hline
(p & \implies & q) & \land & (q & \implies & r) & p & \implies & r \\
\hline
\F & \T & \F & \T & \F & \T & \F & \F & \T & \F \\
\F & \T & \F & \T & \F & \T & \T & \F & \T & \T \\
\F & \T & \T & \F & \T & \F & \F & \F & \T & \F \\
\F & \T & \T & \T & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \F & \T & \F & \T & \F & \F \\
\T & \F & \F & \F & \F & \T & \T & \T & \T & \T \\
\T & \T & \T & \F & \T & \F & \F & \T & \F & \F \\
\T & \T & \T & \T & \T & \T & \T & \T & \T & \T \\
\hline
\end{array}$
Hence the result.
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $2$ Conditionals and Negation: Exercise $1 \ \text{(i)}$
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $2$ Arguments Containing Compound Statements: $2.3$: Argument Forms and Truth Tables
1973: Irving M. Copi: Symbolic Logic (4th ed.) ... (previous) ... (next): $3$: The Method of Deduction: $3.1$: Formal Proof of Validity: Rules of Inference: $3.$
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 1$. Sets; inclusion; intersection; union; complementation; number systems
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{II}$: The Logic of Statements $(2): \ 1$: Decision procedures and proofs: $6$
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.13$: Tableau Problems (TAB1): Example $2$




