# 

Source: https://proofwiki.org/wiki/Functionally_Incomplete_Logical_Connectives/Conjunction_and_Disjunction

Theorem
The set of logical connectives:

$\set {\land, \lor}$: And and Or
is not functionally complete.


Proof
Let $v_T$ be the boolean interpretation that assigns $T$ to each propositional symbol.
Then it follows by the nature of the truth functions for $\land$ and $\lor$ that:

$\map {v_T} {\mathbf A} = T$
for each WFF $\mathbf A$ comprising only $\land$ and $\lor$.
On the other hand:

$\map {v_T} {\neg p} = F$
Therefore, $\neg p$ cannot be expressed in terms of $\land$ and $\lor$.

Hence, $\set {\land, \lor}$ is not functionally complete.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): truth function
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): truth function
2012: M. Ben-Ari: Mathematical Logic for Computer Science (3rd ed.) ... (previous) ... (next): $\S 2.10$: Exercise $2.11$




