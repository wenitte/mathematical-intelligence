# 

Source: https://proofwiki.org/wiki/Omega_is_Closed_in_Uncountable_Closed_Ordinal_Space_but_not_G-Delta_Set

Theorem
Let $\Omega$ denote the first uncountable ordinal.
Let $\closedint 0 \Omega$ denote the closed ordinal space on $\Omega$.

Then $\set \Omega$ is a closed set of $\closedint 0 \Omega$ but not a $G_\delta$ set.


Proof
The complement relative to $\closedint 0 \Omega$ of $\set \Omega$ is $\hointr 0 \Omega$, which is open in $\closedint 0 \Omega$.
Hence, by definition, $\set \Omega$ is a closed set of $\closedint 0 \Omega$.
Let $G_i$ be a countable set of open sets of $\closedint 0 \Omega$ which contain $\Omega$.
Then we can find a set of basis elements of $\closedint 0 \Omega$ of the form $\hointl {\alpha_i} \Omega \subseteq G_i$ for each $i$.
Each $\hointr 0 {\alpha_i}$ is countable.
We also have Countable Union of Countable Sets is Countable.
Thus the infimum of the $\alpha_i$ is an ordinal $\gamma$ which is less than $\Omega$.
Therefore:

$\ds \bigcap G_i \supseteq \hointl \gamma \Omega \ne \set \Omega$
That is, $\set \Omega$ cannot be expressed as a countable intersection of open sets of $\closedint 0 \Omega$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $43$. Closed Ordinal Space $\sqbrk {0, \Omega}$: $1$




