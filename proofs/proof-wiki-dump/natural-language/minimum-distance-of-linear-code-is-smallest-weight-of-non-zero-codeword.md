# 

Source: https://proofwiki.org/wiki/Minimum_Distance_of_Linear_Code_is_Smallest_Weight_of_Non-Zero_Codeword

Theorem
Let $C$ be a linear $\tuple {n, k}$-code whose master code is $\map V {n, p}$.
Let $\map d C$ denote the minimum distance of $C$.

Then:

$\map d C = \ds \min_{u \mathop \in C} \map w u$
where $\map w u$ denotes the weight of $u$.


Proof
Let $f := \ds \min_{u \mathop \in C} \map w u$.
Let $\mathbf 0$ denote the codeword in $\map V {n, p}$ consisting of all zeroes.
As $C$ is a subspace of $\map V {n, p}$, we have that $\mathbf 0 \in C$.

Let $w$ be a codeword with weight $f$.
Then:

$\map d {w, \mathbf 0} = f$
so $f \ge \map d C$.

Let $u, v \in C$ such that $\map d {u, v} = \map d C$.
We have that $C$ is a linear code.
Therefore:

$u - v \in C$
where $u - v$ denotes the difference between $u$ and $v$.
But $u - v$ has weight $\map d C$.
Thus:

$\map d C \ge f$
and it follows that $\map d C = f$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $6$: Error-correcting codes: Proposition $6.9$




