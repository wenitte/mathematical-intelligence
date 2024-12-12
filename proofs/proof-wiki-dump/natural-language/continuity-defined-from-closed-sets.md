# 

Source: https://proofwiki.org/wiki/Continuity_Defined_from_Closed_Sets



Theorem
Let $T_1$ and $T_2$ be topological spaces.
Let $f: T_1 \to T_2$ be a mapping.

Then $f$ is continuous if and only if for all $V$ closed in $T_2$, $f^{-1} \sqbrk V$ is closed in $T_1$.


Proof
First we show the following.
Let $W \in T_2$.
We note that $f^{-1} \sqbrk {T_2} = T_1$.
Hence, from Preimage of Set Difference under Mapping, we have:

$f^{-1} \sqbrk {T_2 \setminus W} = T_1 \setminus f^{-1} \sqbrk W$


Necessary Condition
Suppose the condition on closed sets holds.
Let $U$ be open in $T_2$.
By Relative Complement of Relative Complement, $T_2 \setminus \paren { T_2 \setminus U } = U$.
Therefore $T_2 \setminus \paren { T_2 \setminus U }$ is open in $T_2$.
Then $T_2 \setminus U$ is closed in $T_2$.
By hypothesis, $f^{-1} \sqbrk {T_2 \setminus U} = T_1 \setminus f^{-1} \sqbrk U$ is closed in $T_1$.
So $f^{-1} \sqbrk U$ is open in $T_1$.
This is true for any $U \in T_2$.
Hence $f$ is continuous.
$\Box$


Sufficient Condition
Now let $f$ be continuous.
Let $V$ be closed in $T_2$.
Then $T_2 \setminus V$ is open in $T_2$.
As $f$ is continuous, $f^{-1} \sqbrk {T_2 \setminus V} = T_1 \setminus f^{-1} \sqbrk V$ is open in $T_1$.
So $f^{-1} \sqbrk V$ is closed in $T_1$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Proposition $3.7.8$
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




