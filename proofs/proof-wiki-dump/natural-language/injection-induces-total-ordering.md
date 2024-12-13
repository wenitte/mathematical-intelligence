# 

Source: https://proofwiki.org/wiki/Injection_Induces_Total_Ordering

Theorem
Let $\left({T, \le}\right)$ be a totally ordered set, and let $S$ be a set.
Let $f: S \to T$ be an injection.

Then $\le_f$, the ordering induced by $f$, is a total ordering.


Proof
By Ordering Induced by Injection is Ordering, $\le_f$ is an ordering.
Let $s_1, s_2 \in S$.
Then as $\le$ is a total ordering, at least one of the following holds:

$(1): \qquad f \left({s_1}\right) \le f \left({s_2}\right)$
$(2): \qquad f \left({s_2}\right) \le f \left({s_1}\right)$

If $(1)$ holds, the definition of $\le_f$ implies that $s_1 \le s_2$.
Similarly, if $(2)$ holds, $s_2 \le s_1$.

This leads to the conclusion that at least one of $s_1 \le s_2$ and $s_2 \le s_1$ holds.
Hence $\le_f$ is a total ordering.
$\blacksquare$





