# 

Source: https://proofwiki.org/wiki/Ordering_Induced_by_Injection_is_Ordering



Theorem
Let $\left({T, \le}\right)$ be an ordered set, and let $S$ be a set.
Let $f: S \to T$ be an injection.

Then $\le_f$, the ordering induced by $f$, is an ordering.


Proof
To establish that $\le_f$ is an ordering on $S$, we need to show that it is reflexive, antisymmetric and transitive.
So, checking in turn each of the criteria for an ordering:


Reflexivity
For all $s \in S$, one has $f \left({s}\right) \le f \left({s}\right)$ as $\le$ is an ordering.
Hence, by definition of $\le_f$, $s \le_f s$ for all $s \in S$.
So $\le_f$ is reflexive.
$\Box$


Antisymmetry
Suppose that for some $s_1, s_2 \in S$, one has both $s_1 \le_f s_2$ and $s_2 \le_f s_1$.
This is equivalent to $f \left({s_1}\right) \le f \left({s_2}\right)$ and $f \left({s_2}\right) \le f \left({s_1}\right)$.
As $\le$ is an ordering, this implies $f \left({s_1}\right) = f \left({s_2}\right)$.
That $f$ is an injection now implies that $s_1 = s_2$.
Hence $\le_f$ is antisymmetric.
$\Box$


Transitivity
Suppose that for some $s_1, s_2, s_3 \in S$, one has both $s_1 \le_f s_2$ and $s_2 \le_f s_3$.
This is equivalent to $f \left({s_1}\right) \le f \left({s_2}\right)$ and $f \left({s_2}\right) \le f \left({s_3}\right)$.
As $\le$ is an ordering, this implies $f \left({s_1}\right) \le f \left({s_3}\right)$.
The definition of $\le_f$ now implies that $s_1 \le_f s_3$.
So $\le_f$ is transitive.
$\Box$

So we have shown that $\le_f$ is an ordering on $S$.
$\blacksquare$





