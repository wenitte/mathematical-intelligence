# 

Source: https://proofwiki.org/wiki/Condition_for_Vectors_to_have_Same_Syndrome

Theorem
Let $C$ be a linear $\tuple {n, k}$-code whose master code is $\map V {n, p}$
Let $G$ be a (standard) generator matrix for $C$.
Let $P$ be a standard parity check matrix for $C$.

Let $u, v \in \map V {n, p}$.

Then $u$ and $v$ have the same syndrome if and only if they are in the same coset of $C$.


Proof
Let $u, v \in \map V {n, p}$.
Let $\map S u$ denote the syndrome of $u$.

Then:














\(\ds \map S u\)

\(=\)







\(\ds \map S v\)














\(\ds \leadstoandfrom \ \ \)





\(\ds P u^\intercal\)

\(=\)







\(\ds P v^\intercal\)





Definition of Syndrome








\(\ds \leadstoandfrom \ \ \)





\(\ds P \paren {u^\intercal - v^\intercal}\)

\(=\)







\(\ds \mathbf 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds P \paren {u - v}^\intercal\)

\(=\)







\(\ds \mathbf 0\)














\(\ds \leadstoandfrom \ \ \)





\(\ds u - v\)

\(\in\)







\(\ds C\)





Syndrome is Zero iff Vector is Codeword



Hence the result from Elements in Same Coset iff Product with Inverse in Subgroup.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Corollary $6.21$




