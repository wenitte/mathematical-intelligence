# 

Source: https://proofwiki.org/wiki/Non-Equivalence_as_Disjunction_of_Conjunctions/Formulation_1/Proof_2

Theorem
$\neg \left ({p \iff q}\right) \dashv \vdash \left({\neg p \land q}\right) \lor \left({p \land \neg q}\right)$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.

$\begin{array}{|cccc||ccccccccc|} \hline
\neg & (p & \iff & q) & (\neg & p & \land & q) & \lor & (p & \land & \neg & q) \\
\hline
F & F & T & F & T & F & F & F & F & F & F & T & F \\
T & F & F & T & T & F & T & T & T & F & F & F & T  \\
T & T & F & F & F & T & F & F & T & T & T & T & F  \\
F & T & T & T & F & T & F & T & F & T & F & F & T  \\
\hline
\end{array}$
$\blacksquare$





