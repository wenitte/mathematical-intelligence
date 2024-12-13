# 

Source: https://proofwiki.org/wiki/Rule_of_Idempotence/Disjunction/Formulation_1



Theorem
The disjunction operation is idempotent:

$p \dashv \vdash p \lor p$

This can be expressed as two separate theorems:

Forward Implication
$p \vdash p \lor p$
Reverse Implication
$p \lor p \vdash p$


Proof
We apply the Method of Truth Tables.
As can be seen by inspection, the truth values under the main connectives match for each boolean interpretations.
$\begin{array}{|c||ccc|} \hline
p & p & \lor & p \\
\hline
\T & \T & \T & \T \\
\F & \F & \F & \F \\
\hline
\end{array}$
$\blacksquare$


Technical Note
When invoking this version of the Rule of Idempotence in a tableau proof, use the Idempotence template:

{{Idempotence|line|pool|statement|depends|type}}
where:

line is the number of the line on the tableau proof where Rule of Idempotence is to be invoked
pool is the pool of assumptions (comma-separated list)
statement is the statement of logic that is to be displayed in the Formula column, without the $ ... $ delimiters
depends is the line (or lines) of the tableau proof upon which this line directly depends
type is the type of Rule of Idempotence whose link will be displayed in the Notes column: in this instance Disjunction.


Sources
1965: E.J. Lemmon: Beginning Logic ... (previous) ... (next): Chapter $1$: The Propositional Calculus $1$: $5$ Further Proofs: Résumé of Rules: Theorem $33$
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.3.3$




