# 

Source: https://proofwiki.org/wiki/User:CircuitCraft/Emulation_Theorem/Lemma

Theorem
Let $M = \struct {S, \vdash}$ be an abstract machine.
Let $a, b \in S$ such that $b$ is reachable from $a$ in $M$.
Then there exists a pairwise distinct sequence $\sequence {s_0, s_1, \dotsc, s_n}$ such that:

$a = s_0 \vdash s_1 \vdash \dotso \vdash s_n = b$
Proof
Aiming for a contradiction, suppose there is no such pairwise distinct sequence.
Let $\map P m$ be the proposition:

There exists a sequence:
$a = t_0 \vdash t_1 \vdash \dotso \vdash t_n = b$
with $m$ pairs $\tuple {i, j}$, with $i < j$, such that $t_i = t_j$.

Suppose $\map P {m_\alpha}$ holds.
By hypothesis, $\map P 0$ does not hold, so $m_\alpha \ne 0$.
Therefore, there exist $i < j$ such that $t_i = t_j$.
But since $t_j \vdash t_{j + 1}$, it follows that $t_i \vdash t_{j + 1}$.
Thus:

$a = t_0 \vdash \dotso \vdash t_{i - 1} \vdash t_i \vdash t_{j + 1} \vdash \dotso \vdash t_n = b$
Let the number of identical pairs in the new sequence be $m_\beta$.
As a pair $i < j$ was removed from the sequence, and no new elements were introduced:

$m_\beta < m_\alpha$
Therefore, $\map P {m_\beta}$ holds.

Thus, by the Method of Infinite Descent:

$\map P m$ is false for every $m \in \N$

But by the definition of reachable, there exists a sequence:

$a = r_0 \vdash \dotso \vdash r_n = b$
Let $m_r$ be the number of pairs $i < j$ such that $r_i = r_j$.
It follows that $\map P {m_r}$ is true, a contradiction.

Thus, by Proof by Contradiction, the result holds.
$\blacksquare$





