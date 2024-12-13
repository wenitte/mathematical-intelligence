# 

Source: https://proofwiki.org/wiki/Normal_Subgroup_of_Symmetric_Group_on_More_than_4_Letters_is_Alternating_Group

Theorem
Let $n \in \N$ be a natural number such that $n > 4$.
Let $S_n$ denote the symmetric group on $n$ letters.
Let $A_n$ denote the alternating group on $n$ letters.

$A_n$ is the only proper non-trivial normal subgroup of $S_n$.


Proof
From Alternating Group is Normal Subgroup of Symmetric Group, $A_n$ is seen to be normal in $S_n$.
It remains to be shown that $A_n$ is the only such normal subgroup of $S_n$.

Aiming for a contradiction, suppose $N$ is a proper non-trivial normal subgroup of $S_n$ such that $N$ is a proper subset of $A_n$.
From Intersection with Normal Subgroup is Normal, we have that:

$A_n \cap N$ is a normal subgroup of $A_n$.
As $N \subseteq A_n$, from Intersection with Subset is Subset‎ we have that:

$A_n \cap N = N$
That is:

$N$ is a normal subgroup of $A_n$.
But from Alternating Group is Simple except on 4 Letters, $A_n$ has no proper non-trivial normal subgroup.
So $N$ cannot be a normal subgroup of $A_n$.
Hence by Proof by Contradiction it follows that $N$ cannot be a normal subgroup of $S_n$.
So $S_n$ has no proper non-trivial normal subgroup apart from $A_n$.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 84 \beta$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): alternating group
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): alternating group




