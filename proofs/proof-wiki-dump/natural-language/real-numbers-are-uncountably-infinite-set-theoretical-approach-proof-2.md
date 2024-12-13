# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Set-Theoretical_Approach:_Proof_2

Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
By Cantor's Theorem there is no surjection:

$\N \twoheadrightarrow \powerset \N$
Additionally, we have Power Set of Natural Numbers is not Countable.
Therefore, if we can show that $\powerset \N$ injects into $\R$ then there is no injection $\R \hookrightarrow \N$ and $\R$ is uncountable.

To prove the theorem we construct an injection $f: \powerset \N \to \R$.

For a subset $S \subseteq \N$, let $\chi_S$ be the characteristic function of $S$, and let $d_i = \map {\chi_S} i$ for all $i \in \N$.
By the definition of characteristic function, $\sequence {d_i}_{i \mathop \in \N}$ is an infinite sequence of $1$s and $0$s.

There are two cases: $\sequence {d_i}_{i \mathop \in \N}$ terminates in an infinite sequence of $1$s, or it does not.

Suppose $\sequence {d_i}_{i \mathop \in \N}$ does not terminate in an infinite sequence of $1$s.
Then $\map f S$ is the binary expansion of the following number in $\hointr 0 1$:

$0.d_1 d_2 d_3 d_4 \ldots$

Otherwise $\sequence {d_i}_{i \mathop \in \N}$ does terminate in an infinite sequence of $1$s.
Then $\map f S$ is the integer expressed in binary as:

$1 d_1 d_2 d_3 \ldots d_k$
where $d_k$ is the last member of the sequence not equal to $1$.

In either case, every subset of $\N$, that is, element of $\powerset \N$, is mapped to an element of $\R$.
That $f$ is an injection follows from the uniqueness statement of Existence of Base-N Representation.
$\blacksquare$





