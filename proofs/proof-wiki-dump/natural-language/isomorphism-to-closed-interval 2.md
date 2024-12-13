# 

Source: https://proofwiki.org/wiki/Isomorphism_to_Closed_Interval

Theorem
Let $m, n \in \N$ such that $m < n$.
Let $\closedint {m + 1} n$ denote the integer interval from $m + 1$ to $n$.

Let $h: \N_{n - m} \to \closedint {m + 1} n$ be the mapping defined as:

$\forall x \in \N_{n - m}: \map h x = x + m + 1$
Let the orderings on $\closedint {m + 1} n$ and $\N_{n - m}$ be those induced by the ordering of $\N$.

Then $h$ a unique order isomorphism.


Proof
First note that the cardinality of $\closedint {m + 1} n$ is given by:

$\card {\closedint {m + 1} n} = n - m$

From Unique Isomorphism between Equivalent Finite Totally Ordered Sets, it suffices to show that $h$ is an order isomorphism.
To this end, remark that, for all $x, y \in \N_{n - m}$:














\(\ds \map h x\)

\(=\)







\(\ds \map h y\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x + m + 1\)

\(=\)







\(\ds y + m + 1\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Natural Number Addition is Cancellable



proving $h$ is an injection.
Hence from Equivalence of Mappings between Finite Sets of Same Cardinality, $h$ is also a bijection.

By Ordering on Natural Numbers is Compatible with Addition and Natural Number Addition is Cancellable for Ordering, it follows that:

$x \le y \iff \map h x \le \map h y$
so $h$ is an order isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Theorem $17.11$




