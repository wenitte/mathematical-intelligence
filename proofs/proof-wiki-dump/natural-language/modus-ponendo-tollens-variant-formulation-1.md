# 

Source: https://proofwiki.org/wiki/Modus_Ponendo_Tollens/Variant/Formulation_1



Theorem
If two statements can not both be true, and one of them is true, it follows that the other one is not true.

$\neg \left({p \land q}\right) \dashv \vdash p \implies \neg q$

This theorem is known as the modus ponendo tollens.

Its abbreviation in a tableau proof is $\mathrm {MPT}$.

This can be expressed as two separate theorems:

Forward Implication
$\neg \paren {p \land q} \vdash p \implies \neg q$
Reverse Implication
$p \implies \neg q \vdash \neg \paren {p \land q}$


Proof
As can be seen by inspection, the truth values under the main connectives match for all boolean interpretations.
$\begin{array}{|cccc||cccc|} \hline
\neg & (p & \land & q) & p & \implies & \neg & q \\
\hline
T & F & F & F & F & T & T & F \\
T & F & F & T & F & T & F & T \\
T & T & F & F & T & T & T & F \\
F & T & T & T & T & F & F & T \\
\hline
\end{array}$
$\blacksquare$





