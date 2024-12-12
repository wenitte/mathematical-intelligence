# 

Source: https://proofwiki.org/wiki/User:CircuitCraft/Emulation_Theorem



Theorem
Let $M = \struct {S, \vdash}$ and $M' = \struct {S', \vdash'}$ be abstract machines.
Let there exist a relation $\phi \subseteq S \to S'$.

Suppose that, for all $s, t \in S$ such that $s \vdash t$:

Every $s' \in \phi \sqbrk s$ has a corresponding $t' \in \phi \sqbrk t$ such that $t'$ is reachable from $s'$ in $M'$.

Also suppose that for every finite sequence $s'_0 \vdash' s'_1 \vdash' \dotso \vdash' s'_n$, where:

$s'_0 \ne s'_n$
$s'_0 \in \phi \sqbrk s$
$s'_n \in \phi \sqbrk t$
$s'_i \notin \phi \sqbrk S$ for $0 < i < n$
it holds that:

$s \vdash t$

Then, for any $a, b \in S$, and $a' \in \phi \sqbrk a$:

$b$ is reachable from $a$ in $M$
if and only if:

there exists a $b' \in \phi \sqbrk b$ such that $b'$ is reachable from $a'$ in $M'$
Proof
Forward Implication
Suppose that $b$ is reachable from $a$ in $M$.
By definition of reachable, there is a finite sequence:

$a = s_0 \vdash s_1 \vdash \dotso \vdash s_n = b$
By the Principle of Recursive Definition, construct the sequence:

$s'_0 = a'$
$s'_{i + 1} \in \phi \sqbrk {s_{i + 1} }$ such that $s'_{i + 1}$ is reachable from $s'_i$ in $M'$
where the choice of element in each image is arbitrary.
$s'_{i + 1}$ is always well-defined, by hypothesis.

By definition of reachable, there is a finite sequence:

$s'_i = t_{i,0} \vdash' t_{i,1} \vdash' \dotso \vdash' t_{i,m_i} = s'_{i + 1}$
for every $0 \le i < n$.

Thus, the following finite sequence holds:

$s'_0 = t_{0, 0} \vdash' t_{0, 1} \vdash' \dotso \vdash' t_{0, m_0} = s'_1 = t_{1, 0} \vdash' \dotso \vdash' t_{n - 2, m_{n - 2} } = s'_{n - 1} = t_{n - 1, 0} \vdash' \dotso \vdash' t_{n - 1, m_{n - 1} } = s'_n$
Therefore, $s'_n$ is reachable from $s'_0$.
But by construction:

$s'_0 \in \phi \sqbrk {s_0} = \phi \sqbrk a$
$s'_n \in \phi \sqbrk {s_n} = \phi \sqbrk b$
$\Box$

Reverse Implication
Suppose that there exists a $b' \in \phi \sqbrk b$ such that $b'$ is reachable from $a'$ in $M'$.

Lemma
Let $M = \struct {S, \vdash}$ be an abstract machine.
Let $a, b \in S$ such that $b$ is reachable from $a$ in $M$.
Then there exists a pairwise distinct sequence $\sequence {s_0, s_1, \dotsc, s_n}$ such that:

$a = s_0 \vdash s_1 \vdash \dotso \vdash s_n = b$
$\Box$

By the lemma, there exists a pairwise distinct sequence:

$a' = s'_0 \vdash' \dotso \vdash' s'_n = b'$
For $m \in \N$, let $\map P m$ be the proposition:

There exist $s, t \in S$ and $0 \le i < j \le n$ such that:
$t$ is not reachable from $s$ in $M$
$s'_i \in \phi \sqbrk s$
$s'_j \in \phi \sqbrk t$
$j - i = m$

Suppose $\map P {m_\alpha}$ holds.
Then there exist such $s, t, i, j$.
But as $t$ is not reachable from $s$, it trivially follows that $s \not\vdash t$.
As $i < j$, and the $s_i$ are pairwise distinct, it follows that $s_i \ne s_j$.
Therefore, by hypothesis and the Rule of Transposition, there exists some $k \in \openint i j$ such that:

$s'_k \in \phi \sqbrk S$
There are two cases, by Law of Excluded Middle:

There exists some $u \in S$ such that $s'_k \in \phi \sqbrk u$ and $u$ is reachable from $s$
There does not exist such a $u$.

In the first case, it follows that $t$ is not reachable from $u$ for otherwise:

$s \vdash \dotso \vdash u \vdash \dotso \vdash t$
would contradict the fact that $t$ is not reachable from $s$.
Let $m_\beta = j - k$.
As $k > i$, we have:

$m_\beta < m_\alpha$
Then, $\map P {m_\beta}$ follows.

In the second case, any $v \in S$ such that $s'_k \in \phi \sqbrk v$ is not reachable from $s$.
But by definition of image, it follows from $s'_k \in \phi \sqbrk S$ that there exists such a $v$.
Let $m_\beta = k - i$
As $k < j$, we have:

$m_\beta < m_\alpha$
Then, $\map P {m_\beta}$ follows.

By Proof by Cases, for any $m_\alpha$ such that $\map P {m_\alpha}$, there exists some $m_\beta < m_\alpha$ such that $\map P {m_\beta}$.
Thus, by Method of Infinite Descent, $\neg \map P {m_\alpha}$ for every $m_\alpha \in \N$.
That is, for all $m \in \N$, $s, t \in S$ and $0 \le i < j \le n$, at least one of the following holds:

$t$ is reachable from $s$ in $M$
$s'_i \notin \phi \sqbrk s$
$s'_j \notin \phi \sqbrk t$
$j - i \ne m$
In particular, choose $m = n$, $s = a$, $t = b$, $i = 0$, $j = n$.
By hypothesis, $s'_i = s'_0 \in \phi \sqbrk a = \phi \sqbrk s$ and $s'_j = s'_n \in \phi \sqbrk b = \phi \sqbrk t$.
Trivially, $j - i = n - 0 = n = m$.
Therefore, by Modus Tollendo Ponens:

$b$ is reachable from $a$ in $M$
$\blacksquare$





