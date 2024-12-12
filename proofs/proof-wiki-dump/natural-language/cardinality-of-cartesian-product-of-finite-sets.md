# 

Source: https://proofwiki.org/wiki/Cardinality_of_Cartesian_Product_of_Finite_Sets



Theorem
Let $S \times T$ be the cartesian product of two finite sets $S$ and $T$.

Then:

$\card {S \times T} = \card S \times \card T$
where $\card S$ denotes cardinality.
This is convenient, given the symbology.


Corollary
$\card {S \times T} = \card {T \times S}$


General Result
Let $\ds \prod_{k \mathop = 1}^n S_k$ be the cartesian product of a (finite) sequence of sets $\sequence {S_n}$.

Then:

$\ds \card {\prod_{k \mathop = 1}^n S_k} = \prod_{k \mathop = 1}^n \card {S_k}$


Proof
Let $\card S = n$ and $\card T = m$.

If either $n = 0$ or $m = 0$, then from Cartesian Product is Empty iff Factor is Empty:

$S \times T = \O$
and the result holds, as $n m = 0 = \card \O$ from Cardinality of Empty Set.

So, we assume that $n > 0$ and $m > 0$.
For each $a \in S$, we define the mapping $g_a: T \to \set a \times T$ such that:

$\forall y \in T: \map {g_a} y = \tuple {a, y}$
The mapping $g_a$ is a bijection, so:

$\card {\set a \times T} = m$

Now let:

$\mathbb T = \set {\set a \times T: a \in S}$
We define the mapping $h: S \to \mathbb T$:

$\forall a \in S: \map h a = \set a \times T$
The mapping $h$ is a bijection, so $\card {\mathbb T} = n$.

Thus $\mathbb T$ is a partition of $S \times T$ containing $n$ sets.
Hence from Number of Elements in Partition:

$\card {S \times T} = n m$
and the result follows.
$\blacksquare$


Examples
Sets with $3$ and $5$ Elements
Let $S$ be a set whose cardinality is $3$.
Let $T$ be a set whose cardinality is $5$.
Then the cardinality of $S \times T$ is $15$.


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 2$: Product sets, mappings
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 13$: Arithmetic
1964: William K. Smith: Limits and Continuity ... (previous) ... (next): $\S 2.1$: Sets: Exercise $\text{C} \ 3$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.7$. Pairs. Product of sets: Example $22$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory: Exercise $1.2$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 19$: Combinatorial Analysis: Theorem $19.3$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Exercise $\text{N}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 15 \gamma$
1971: Robert H. Kasriel: Undergraduate Topology ... (previous) ... (next): $\S 1.9$: Cartesian Product: Exercise $5$
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 5$: Products of Sets: Exercise $2$
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Appendix $\text{A}.2$: Cartesian Products and Relations
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 8.1$: Cartesian product of sets
1979: John E. Hopcroft and Jeffrey D. Ullman: Introduction to Automata Theory, Languages, and Computation ... (previous) ... (next): Chapter $1$: Preliminaries: $1.4$ Set Notation: Example $1.2$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.2$: Sets: Exercise $3$
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 7$ Cartesian products: Remark




