# 

Source: https://proofwiki.org/wiki/Partition_Topology_is_T3_1/2



Theorem
Let $S$ be a set and let $\PP$ be a partition on $S$.
Let $T = \struct {S, \tau}$ be the partition space whose basis is $\PP$.

Then $T$ is a $T_{3 \frac 1 2}$ space.


Corollary
$T$ is a $T_3$ space.


Proof
Let $F \subseteq S$ be closed.
Denote by $S \setminus F$ the relative complement of $F$ in $S$.
Let $x \in S \setminus F$.

Define a mapping $f: S \to \closedint 0 1$ as:

$\map f s := \begin{cases}
1 & : \text { if } s \in F \\
0 & : \text { if } s \in S \setminus F

\end{cases}$
Then $f$ is identically $1$ on $F$, and identically $0$ on $\set x$.
Now if $f$ is continuous, it will be a Urysohn function for $F$ and $\set y$, and $T$ will be a $T_{3 \frac 1 2}$ space.

Now for any $V \subseteq \closedint 0 1$, we have:

$f^{-1} \sqbrk V = \begin{cases}
\O            & : \text{ if } 0, 1 \notin V \\
F             & : \text{ if } 0 \notin V \text { and } 1 \in V \\
S \setminus F & : \text{ if } 0 \in V \text { and } 1 \notin V \\
S             & : \text{ if } 0, 1 \in V

\end{cases}$


Fake Proof suggests: The validity of the material on this page is questionable.In particular: $F$ is defined to be closed. Why is it open by definition? --Fake Proof (talk contribs) 18:02, 13 July 2022 (UTC)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By definition of $\tau$, $F$ is open in $T$.
By Open Set in Partition Topology is also Closed, $F$ is also closed, and so $S \setminus F$ is open in $T$.

Thus, the preimage of any subset $V$ of $\closedint 0 1$ is open in $T$.
In particular, this holds for the open sets of $\closedint 0 1$.
It follows that $f$ is a continuous mapping, and so a Urysohn function.

Hence $T$ is $T_{3 \frac 1 2}$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $2$




