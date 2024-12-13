# 

Source: https://proofwiki.org/wiki/Set_Finite_iff_Injection_to_Initial_Segment_of_Natural_Numbers



Theorem
Let $S$ be a set.

Then $S$ is finite if and only if for some $n \in \N$ there exists an injection $f: S \to \N_{< n}$.
Here, $\N_{< n}$ denotes an initial segment of $\N$.


Proof
Necessary Condition
Suppose that $S$ is finite.
By definition, this means there exists a bijection $f: S \to \N_{< n}$.
Then $f$ is a fortiori also the sought injection.
$\Box$


Sufficient Condition
Let $f: S \to \N_{< n}$ be an injection.
Then by Injection to Image is Bijection, $S$ is equivalent to a subset of $\N_{<n}$.
By Subset of Finite Set is Finite, it follows that $S$ is finite.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.7$




