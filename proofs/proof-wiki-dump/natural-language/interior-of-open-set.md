# 

Source: https://proofwiki.org/wiki/Interior_of_Open_Set



Theorem
Let $T = \left({S, \tau}\right)$ be a topological space.
Let $U \subseteq T$ be open in $T$.

Then:

$U^\circ = U \iff U \in \tau$
where $U^\circ$ is the interior of $U$.
That is, a subset of $S$ is open in $T$ if and only if it equals its interior.


Proof
Necessary Condition
Let $U \subseteq T$ be open in $T$.
From Set Interior is Largest Open Set:

$U \subseteq U^\circ$
But by definition of interior:

$U^\circ \subseteq U$
Hence $U^\circ = U$.
$\Box$


Sufficient Condition
Suppose $U^\circ = U$.
By definition $U^\circ$ is the union of all subsets of $U$ which are open in $U$.
By the definition of a topology, that means $U$ itself must also be open.
$\blacksquare$





