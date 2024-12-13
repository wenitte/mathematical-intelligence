# 

Source: https://proofwiki.org/wiki/Rule_of_Material_Implication/Formulation_1

  This article was Featured Proof between 16 November 2012 and 13 January 2013.


Theorem
$p \implies q \dashv \vdash \neg p \lor q$

This can be expressed as two separate theorems:

Forward Implication
$p \implies q \vdash \neg p \lor q$
Reverse Implication
$\neg p \lor q \vdash p \implies q$


Proof by Truth Table
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin {array} {|ccc||cccc|} \hline
p & \implies & q & \neg & p & \lor & q \\
\hline
\F & \T & \F & \T & \F & \T & \F \\
\F & \T & \T & \T & \F & \T & \T \\
\T & \F & \F & \F & \T & \F & \F \\
\T & \T & \T & \F & \T & \T & \T \\
\hline
\end {array}$
$\blacksquare$


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $2$: The Propositional Calculus $2$: $2$: Theorems and Derived Rules: Theorem $49$
1988: Alan G. Hamilton: Logic for Mathematicians (2nd ed.) ... (previous) ... (next): $\S 1$: Informal statement calculus: $\S 1.2$: Truth functions and truth tables: Exercise $4$
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.1$: What is a Set?
2000: Michael R.A. Huth and Mark D. Ryan: Logic in Computer Science: Modelling and reasoning about systems ... (previous) ... (next): $\S 1.2.4$: Provable equivalence
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.3$




