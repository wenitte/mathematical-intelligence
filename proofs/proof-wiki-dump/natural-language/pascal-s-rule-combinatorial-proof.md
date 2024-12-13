# 

Source: https://proofwiki.org/wiki/Pascal%27s_Rule/Combinatorial_Proof



Theorem
For positive integers $n, k$ with $1 \le k \le n$:

$\dbinom n {k - 1} + \dbinom n k = \dbinom {n + 1} k$
This is also valid for the real number definition:

$\forall r \in \R, k \in \Z: \dbinom r {k - 1} + \dbinom r k = \dbinom {r + 1} k$


Proof
Suppose you were a member of a club with $n + 1$ members (including you).
Suppose it were time to elect a committee of $k$ members from that club.
From Cardinality of Set of Subsets, there are $\dbinom {n + 1} k$ ways to select the members to form this committee.

Now, you yourself may or may not be elected a member of this committee.

Suppose that, after the election, you are not a member of this committee.
Then, from Cardinality of Set of Subsets, there are $\dbinom n k$ ways to select the members to form such a committee.

Now suppose you are a member of the committee. Apart from you, there are $k - 1$ such members.
Again, from Cardinality of Set of Subsets, there are $\dbinom n {k - 1}$ ways of selecting the other $k - 1$ members so as to form such a committee.

In total, then, there are $\dbinom n k + \dbinom n {k - 1}$ possible committees.
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Blaise Pascal.


Sources
1925: George Pólya and Gábor Szegő: Problems and Theorems in Analysis I: $\S 1.2$: Problem $31.1$
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text I$. Algebra: Permutations and Combinations: Two important relations
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 0.6$: Theorem $8: \ 3$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {3-1}$ Permutations and Combinations: Exercise $3$




