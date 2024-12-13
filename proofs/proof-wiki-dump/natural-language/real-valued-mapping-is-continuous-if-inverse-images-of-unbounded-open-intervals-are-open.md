# 

Source: https://proofwiki.org/wiki/Real-Valued_Mapping_is_Continuous_if_Inverse_Images_of_Unbounded_Open_Intervals_are_Open



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let the real number line $\R$ be considered as a topology under the usual (Euclidean) topology.
Let $f: T \to \R$ be a real-valued function on $T$.

Then:

$f$ is continuous
if and only if

for all $a \in \R$: $f^{-1} \openint \gets a$ and $f^{-1} \openint a \to$ are open in $T$.


Proof 1
Sufficient Condition
Let $f$ be a continuous mapping.
From the corollary to Open Real Interval is Open Set, both $\openint \gets a$ and $\openint a \to$ are open in $\R$.
Then by definition of continuous mapping, $f^{-1} \openint \gets a$ and $f^{-1} \openint a \to$ are both open in $T$.
$\Box$


Necessary Condition
Let $f$ be such that:

for all $a \in \R$: $f^{-1} \openint \gets a$ and $f^{-1} \openint a \to$ are open in $T$.
Let $a, b \in \R$ be arbitrary.
From Sub-Basis for Real Number Line:

$\set {\openint \gets a, \openint b \to: a, b \in \R}$ is a sub-basis for $\R$.
Hence:

$\forall a, b \in \R: \openint \gets a \cap \openint b \to$ is open in $T$.
Let $A = \openint \gets a$ and $B = \openint b \to$.
From Preimage of Intersection under Mapping:

$f^{-1} \sqbrk {A \cap B} = f^{-1} \sqbrk A \cap f^{-1} \sqbrk B$
We have been given that $T$ is a topological space.
By assertion:

$f^{-1} \sqbrk A$ and $f^{-1} \sqbrk B$ are open in $T$.
Then:

$f^{-1} \sqbrk A \cap f^{-1} \sqbrk B$ is open in $T$.
That is:

$f^{-1} \sqbrk {A \cap B}$ is open in $T$.
But:

$A \cap B = \openint a b$
Hence:

$f^{-1} \openint a b$ is open in $T$.
$a$ and $b$ are arbitrary.
Hence the preimage of an open real interval is open in $T$.

Let $\family {U_i}_{i \mathop \in I}$ be a family of open intervals of $\R$.
Then from Preimage of Union under Mapping: Family of Sets:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in I} U_i} = \bigcup_{i \mathop \in I} f^{-1} \sqbrk {U_i}$
where:

$\ds \bigcup_{i \mathop \in I} U_i$ denotes the union of $\family {U_i}_{i \mathop \in I}$
$f^{-1} \sqbrk {U_i}$ denotes the preimage of $U_i$ under $f$.
Each of $U_i$ is an open interval in $\R$.
Hence from above each of $f^{-1} \sqbrk {U_i}$ is open in $T$.
As $T$ is a topological space:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in I} U_i}$ is open in $T$.

From Open Sets in Real Number Line, the  open sets of $\R$ are:

open intervals
countable unions of pairwise disjoint open intervals.
It has been shown that all subsets of $\R$ of this form have preimages under $f$ which are open in $T$.
That is:

$f$ is a continuous mapping.
$\blacksquare$


Proof 2
From Sub-Basis for Real Number Line:

$\set {\openint \gets a, \openint b \to: a, b \in \R}$ is a sub-basis for $\R$.

The result follows from Continuity Test using Sub-Basis.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: Exercise $3.9: 7$




