# 

Source: https://proofwiki.org/wiki/Infinite_Set_has_Countably_Infinite_Subset/Proof_2

Theorem
Every infinite set has a countably infinite subset.


Proof
Let $S$ be an infinite set.
First an injection $f: \N \to S$ is constructed.
Let $g$ be a choice function on $\powerset S \setminus \set \O$.
Then define $f: \N \to S$ as follows:

$\forall n \in \N: \map f n = \begin {cases} \map g S & : n = 0 \\ \map g {S \setminus \set {\map f 0, \ldots, \map f {n - 1} } } & : n > 0 \end {cases}$
Since $S$ is infinite, $S \setminus \set {\map f 0, \ldots, \map f {n - 1} }$ is non-empty for each $n \in \N$.
Therefore $f \sqbrk \N$ is infinite.

To show that $f$ is injective, let $m, n \in \N$, say $m < n$.
Then:

$\map f m \in \set {\map f 0, \ldots, \map f {n - 1} }$
but:

$\map f n \in S \setminus \set {\map f 0, \ldots, \map f {n - 1} }$
Hence $\map f m \ne \map f n$.
Since $f$ is injective, it follows from Injection to Image is Bijection that $f$ is a bijection from $\N$ to $f \sqbrk \N$.
Thus $f \sqbrk \N$ is a countable subset of $S$.
$\blacksquare$


Axiom of Choice
This proof depends on the Axiom of Choice.
Because of some of its bewilderingly paradoxical implications, the Axiom of Choice is considered in some mathematical circles to be controversial.
Most mathematicians are convinced of its truth and insist that it should nowadays be generally accepted.
However, others consider its implications so counter-intuitive and nonsensical that they adopt the philosophical position that it cannot be true.





