# 

Source: https://proofwiki.org/wiki/Arens-Fort_Space_is_not_First-Countable

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $T$ is not a first-countable space.


Proof
Aiming for a contradiction, suppose $T$ is first-countable.
Then there exists a countable local base $B_0 = \sequence {U_i}_{i \mathop = 1}^\infty$ for $\tuple {0, 0}$.

Suppose there does not exist a point $\tuple {n_i, m_i} \in U_i$ such that $n_i > i$ and $m_i > i$.
Then:

$\forall \tuple {n, m} \in U_i: n \le i$ or $m \le i$
Now suppose that there does not exist some $\tuple {n, m} \in U_i$ with $n > i$.
Let $S_k$ be defined as:

$S_k = \set {n: \tuple {k, n} \notin U_i}$
The definition of the Arens-Fort space clearly stipulates that $S_k$ can only be a infinite set for a finite number of $k \in \Z_{\ge 0}$.
But:

$k > i \implies S_k = \Z_{\ge 0}$
So we have shown that:

$\exists \tuple {n, m} \in U_i: n > i$
So, let $n > i$, and let $m \le i$.
Then $\set {m: m > i} \subseteq S_n$. 
Thus $S_n = \set {m: \tuple {n, m} \notin U_i}$ is infinite for all $n > i$.
Again, this contradicts the definition of the Arens-Fort space.

So, from the definition of the neighborhood of $\tuple {0, 0}$, for each $U_i \in B_0$ there is a point $\tuple {n_i, m_i} \in U_i$ such that both $n_i > i$ and $m_i > i$.

Now let the set $E$ be constructed as:

$E := X \setminus \sequence {\tuple {n_i, m_i} }_{i \mathop = 1}^\infty$
We now prove that $E$ is a neighborhood of $\tuple {0, 0}$.
By the definition of Arens-Fort space, it is enough to show that:

$\forall i \in \N: S_i$ is finite.
We have that:














\(\ds S_i\)

\(=\)







\(\ds \set {m: \tuple {i, m} \notin E}\)




















\(\ds \)

\(=\)







\(\ds \set {m: \tuple {i, m} \in \sequence {\tuple {n_j, m_j} }_{j \mathop = 1}^\infty}\)









But we defined $n_j > j$.
So if $j > i \implies n_j > j > i$.
Thus $S_i \subseteq \sequence {m_j}_{j \mathop = 1}^i$ is finite. 
However, $\tuple {n_i, m_i} \notin E$.
Therefore there exists no $U_i \subseteq E$.
From this contradiction it follows that $T$ cannot be first-countable.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $3$




