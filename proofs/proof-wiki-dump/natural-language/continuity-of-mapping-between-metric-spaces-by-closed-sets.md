# 

Source: https://proofwiki.org/wiki/Continuity_of_Mapping_between_Metric_Spaces_by_Closed_Sets



Theorem
Let $M_1 = \struct {A_1, d_1}$ and $M_2 = \struct {A_2, d_2}$ be metric spaces.
Let $f: A_1 \to A_2$ be a mapping.

Then $f$ is continuous if and only if:

for every $V \subseteq A_2$ which is closed in $M_2$, $f^{-1} \sqbrk V$ is closed in $M_1$.


Proof
First the following is established.
Let $W \in A_2$.
We note that:

$f^{-1} \sqbrk {A_2} = A_1$
Hence, from Preimage of Set Difference under Mapping:

$f^{-1} \sqbrk {A_2 \setminus W} = A_1 \setminus f^{-1} \sqbrk W$


Necessary Condition
Suppose that:

for every $V \subseteq A_2$ which is closed in $M_2$, $f^{-1} \sqbrk V$ is closed in $M_1$.

Let $U$ be open in $M_2$.
Then by definition $A_2 \setminus U$ is closed in $M_2$.
By hypothesis, $f^{-1} \sqbrk {A_2 \setminus U} = A_1 \setminus f^{-1} \sqbrk U$ is closed in $M_1$.
So $f^{-1} \sqbrk U$ is open in $M_1$.
This is true for any $U \in A_2$ as $U$ is arbitrary.
It follows by definition that $f$ is continuous.
$\Box$


Sufficient Condition
Now let $f$ be continuous.
Let $V$ be closed in $M_2$.
Then $A_2 \setminus V$ is open in $M_2$.
As $f$ is continuous, $f^{-1} \sqbrk {A_2 \setminus V} = A_1 \setminus f^{-1} \sqbrk V$ is open in $M_1$.
So $f^{-1} \sqbrk V$ is closed in $M_1$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 6$: Open Sets and Closed Sets: Theorem $6.10$




