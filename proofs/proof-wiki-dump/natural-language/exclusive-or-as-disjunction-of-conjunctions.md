# 

Source: https://proofwiki.org/wiki/Exclusive_Or_as_Disjunction_of_Conjunctions



Theorem
$p \oplus q \dashv \vdash \paren {\neg p \land q} \lor \paren {p \land \neg q}$


Proof 1













\(\ds p \oplus q\)

\(\dashv \vdash\)







\(\ds \neg \left ({p \iff q}\right)\)





Exclusive Or is Negation of Biconditional














\(\ds \)

\(\dashv \vdash\)







\(\ds \left({\neg p \land q}\right) \lor \left({p \land \neg q}\right)\)





Non-Equivalence as Disjunction of Conjunctions



$\blacksquare$


Proof 2
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|ccc||ccccccccc|} \hline
p & \oplus & q & (\neg & p & \land & q) & \lor & (p & \land & \neg & q) \\
\hline
F & F & F & T & F & F & F & F & F & F & T & F \\
F & T & T & T & F & T & T & T & F & F & F & T  \\
T & T & F & F & T & F & F & T & T & T & T & F  \\
T & F & T & F & T & F & T & F & T & F & F & T  \\
\hline
\end{array}$
$\blacksquare$


Sources
1980: D.J. O'Connor and Betty Powell: Elementary Logic ... (previous) ... (next): $\S \text{I}: 12$: Material Equivalence and Alternation




