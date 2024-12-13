# 

Source: https://proofwiki.org/wiki/Set_Finite_iff_Surjection_from_Initial_Segment_of_Natural_Numbers



Theorem
Let $S$ be a set.

Then $S$ is finite if and only if for some $n \in \N$ there exists a surjection $f: \N_{<n} \to S$.
Here, $\N_{<n}$ denotes an initial segment of $\N$.


Proof
Necessary Condition
Suppose that $S$ is finite.
By definition, this means there exists a bijection $f: \N_{<n} \to S$.
Then $f$ is a fortiori also the sought surjection.
$\Box$


Sufficient Condition
Let $f: \N_{<n} \to S$ be a surjection.
Define $g: S \to \N_{<n}$ by:

$\map g s := \min \map {f^{-1} } s$
where $\map {f^{-1} } s$ is the preimage of $s$ under $f$.
Note that $\map {f^{-1} } s$ is not empty because $f$ is a surjection.
By the Well-Ordering Principle, $\map {f^{-1} } s \subseteq \N$ has a smallest element.
Hence $g$ is well-defined.

Next we show that $g$ is injective.
So suppose that $\map g s = \map g {s'}$ for some $s, s' \in S$:














\(\ds \map g s\)

\(=\)







\(\ds \map g {s'}\)














\(\ds \leadsto \ \ \)





\(\ds \map f {\map g s}\)

\(=\)







\(\ds \map f {\map g {s'} }\)














\(\ds \leadsto \ \ \)





\(\ds s\)

\(=\)







\(\ds s'\)





Definition of $g$



Hence $g$ is injective.
Then by Injection to Image is Bijection, $S$ is equivalent to a subset of $\N_{<n}$.
By Subset of Finite Set is Finite, it follows that $S$ is finite.
$\blacksquare$


Sources
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 6$: Finite Sets: Corollary $6.7$




