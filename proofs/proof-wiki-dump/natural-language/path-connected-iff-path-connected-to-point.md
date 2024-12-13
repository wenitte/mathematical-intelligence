# 

Source: https://proofwiki.org/wiki/Path-Connected_iff_Path-Connected_to_Point



Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $U \subseteq S$ be a non-empty subset of $T$.

Then $U$ is path-connected if and only if:

$\exists p \in U: \forall q \in U: \exists f: \left[{0 \,.\,.\, 1}\right] \to U: f$ continuous, $f \left({0}\right) = p$ and $f \left({1}\right) = q$


Proof
Necessary Condition
When $U$ is path-connected, any $p \in U$ satisfies the assertion.
Because $U$ is non-empty, such a $p$ exists.
$\Box$


Sufficient Condition
Suppose $p$ is such a point.
For $q \in U$, denote $p \sim q$ when $p$ and $q$ are path-connected.
To show that $U$ is path-connected, we have to show:

$\forall q, r \in U: q \sim r$
We already know that $p \sim q$ and $p \sim r$.
From Path-Connectedness is Equivalence Relation, we find that hence $q \sim p$ by symmetry of $\sim$.
Subsequently, we conclude $q \sim r$ from transitivity of $\sim$.
Hence the result.
$\blacksquare$


Notes
One might think that this gives an equivalent definition for path-connectedness. 
However, the definition given incorporates the empty set by vacuous truth, whilst the condition given on this page does not. 
When desired, this may be overcome by handling the empty set separately.





