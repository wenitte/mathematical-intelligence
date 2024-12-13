# 

Source: https://proofwiki.org/wiki/Real_Number_Line_is_Paracompact

Theorem
Let $\struct {\R, \tau_d}$ be the real number line with the usual (Euclidean) topology.

Then $\struct {\R, \tau_d}$ is paracompact.


Proof
Let $\CC$ be an open cover for $\R$.
Then $\CC$ covers each of the closed real intervals $\closedint n {n + 1}$ for all $n \in \Z$.
By the Heine-Borel Theorem, each of $\closedint n {n + 1}$ is compact.
So, for each of these intervals $\closedint n {n + 1}$, it follows that $\CC$ can be reduced to a sequence $\sequence {G_i^{\paren n} }$ of finite subcovers.
Then each of $G_i^{\paren n} \cap \openint {n - 1} {n + 2}$ forms a refinement of $\CC$ which is locally finite.
Hence, by definition, $\R$ is paracompact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $28$. Euclidean Topology: $6$




