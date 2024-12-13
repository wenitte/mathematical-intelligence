# 

Source: https://proofwiki.org/wiki/Relative_Complement_of_Decreasing_Sequence_of_Sets_is_Increasing

Theorem
Let $X$ be a set.
Let $\sequence {E_n}_{n \mathop \in \N}$ be a decreasing sequence of sets in $X$. 

Then $\sequence {X \setminus E_n}_{n \mathop \in \N}$ is an increasing sequence of sets in $X$. 


Proof
Since $\sequence {E_n}_{n \mathop \in \N}$ is decreasing, we have: 

$E_{n + 1} \subseteq E_n$ for each $n \in \N$.
From Relative Complement inverts Subsets, we then have: 

$X \setminus E_n \subseteq X \setminus E_{n + 1}$ for each $n \in \N$.
So $\sequence {X \setminus E_n}_{n \mathop \in \N}$ is an increasing sequence of sets in $X$.
$\blacksquare$





