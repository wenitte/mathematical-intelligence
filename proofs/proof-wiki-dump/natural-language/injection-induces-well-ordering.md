# 

Source: https://proofwiki.org/wiki/Injection_Induces_Well-Ordering

Theorem
Let $\left({T, \le}\right)$ be a well-ordered set.
Let $S$ be a set.
Let $f: S \to T$ be an injection.

Then $\le_f$, the ordering induced by $f$, is a well-ordering.


Proof
By Ordering Induced by Injection is Ordering, $\le_f$ is an ordering.
Let $S' \subseteq S$ be non-empty.
Then as $\le$ is a well-ordering, the set:

$f \left({S'}\right) = \left\{{f \left({s}\right): s \in S'}\right\}$
has a minimal element, say $f \left({s_0}\right)$.

That is, for all $s \in S', f \left({s_0}\right) \le f \left({s}\right)$.
By definition of $\le_f$, this implies:

$\forall s \in S': s_0 \le_f s$

That is, $s_0$ is a minimal element of $S'$.
Hence $\le_f$ is a well-ordering, as $S'$ was arbitrary.
$\blacksquare$





