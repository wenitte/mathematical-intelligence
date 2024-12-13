# 

Source: https://proofwiki.org/wiki/Index_of_Proper_Subgroup_of_Symmetric_Group

Theorem
Let $n \in \N$ be a natural number such that $n > 4$.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $A_n$ denote the alternating group on $n$ letters.

$A_n$ is the only proper subgroup of $S_n$ whose index is less than $n$.


Proof
From Normal Subgroup of Symmetric Group on More than 4 Letters is Alternating Group:

$A_n$ is the only proper non-trivial normal subgroup of $S_n$.

Suppose $H$ is a subgroup of $S_n$ whose index $\index {S_n} H$ is less than $n$.
If $\index {S_n} H = 2$ then from Subgroup of Index 2 is Normal $H$ is normal.
Hence $H = A_n$.

Suppose $\index {S_n} H > 2$.
Then $A_n \nsubseteq H$.
Thus the hypotheses of Isomorphism of Finite Group with Permutations of Quotient with Subgroup are fulfilled.
Thus $S_n$ is isomorphic to a subgroup of the group of permutations $\map \Gamma {S_n / H}$ of $S_n / H$.
However:














\(\ds \order {\map \Gamma {S_n / H} }\)

\(=\)







\(\ds \index {S_n} H !\)




















\(\ds \)

\(<\)







\(\ds n!\)





as $\index {S_n} H < n$ by hypothesis














\(\ds \)

\(=\)







\(\ds \order {S_n}\)









which is a contradiction.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 85$




