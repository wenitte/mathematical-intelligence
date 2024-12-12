# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Relations

Theorem
Let $S$ and $T$ be finite sets.
Let $\card S = n$ and $\card T = m$, where $\card {\, \cdot \,}$ denotes cardinality (that is, the number of elements).
Let $\RR$ denote the set of all relations from $S$ to $T$.

Then the cardinality of $\RR$ is given by:

$\card \RR = 2^{n m}$


Proof
By definition, a relation from $S$ to $T$ is a subset of the cartesian product $S \times T$ of $S$ and $T$.
From Cardinality of Cartesian Product of Finite Sets, we have:

$\card {S \times T} = n m$
The number of subsets of $S \times T$ is the cardinality of the power set $\powerset {S \times T}$ of $S \times T$.
From Cardinality of Power Set of Finite Set:

$\card {\powerset {S \times T} } = 2^{\card {S \times T} } = 2^{n m}$
Hence the result.
$\blacksquare$





