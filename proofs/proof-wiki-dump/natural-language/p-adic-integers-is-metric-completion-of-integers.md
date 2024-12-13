# 

Source: https://proofwiki.org/wiki/P-adic_Integers_is_Metric_Completion_of_Integers

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $d$ be the subspace metric of the $p$-adic metric on the $p$-adic integers $\Z_p$.

Then $\struct {\Z_p, d}$ is the metric completion of the integers $\Z$.


Proof
The integers $\Z$ are a subring of the $p$-adic integers $Z_p$ by Integers form Subring of P-adic Integers.
Hence $\Z \subseteq \Z_p$.
The set of $p$-adic integers $\Z_p$ is closed in the $p$-adic metric by Set of P-adic Integers is Clopen in P-adic Numbers.
By Closure of Subset of Closed Set of Metric Space is Subset then the closure of $\Z$ is contained in $\Z_p$:

$\map \cl \Z \subseteq \Z_p$

By P-adic Integer is Limit of Unique Coherent Sequence of Integers then:

for all $x \in \Z_p$ there exists a sequence $\sequence {x_n}$ in $\Z$ such that $\ds \lim_{n \mathop \to \infty} x_n = x$
By Closure of Subset of Metric Space by Convergent Sequence then:

$\Z_p \subseteq \map \cl \Z$

Hence $\map \cl \Z = \Z_p$.

By Metric Subspace Induces Subspace Topology then the topology induced by $d$ on $\Z_p$ is the subspace topology.
By Closure of Subset in Subspace then $\map \cl \Z = \Z_p$ in the subspace metric $d$ on $\Z_p$.
It follows that $\struct {\Z_p, d}$ is the metric completion of $\Z$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction ... (previous) ... (next): $\S 3.3$ Exploring $\Q_p$: Proposition $3.3.4$




