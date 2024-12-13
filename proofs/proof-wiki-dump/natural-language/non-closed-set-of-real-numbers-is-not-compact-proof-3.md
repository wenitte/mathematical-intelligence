# 

Source: https://proofwiki.org/wiki/Non-Closed_Set_of_Real_Numbers_is_not_Compact/Proof_3

Theorem
Let $\R$ be the set of real numbers considered as an Euclidean space.
Let $S \subseteq \R$ be non-closed in $\R$.

Then $S$ is not a compact subspace of $\R$.


Proof
By the rule of transposition, it suffices to show that if $S$ is a compact subspace of $\R$, then $S$ is closed.

Consider the relative complement of $S$ in $\R$:

$T = \relcomp \R S = \R \setminus S$
It remains to be shown that $T$ is open in $\R$.

Let $x \in T$.
For all strictly positive real numbers $\epsilon \in \R_{>0}$, it follows from Union of Open Sets of Metric Space is Open that:

$O_\epsilon := \openint \gets {x - \epsilon} \cup \openint {x + \epsilon} \to$
is open in $\R$.
Let $\CC = \set {O_\epsilon: \epsilon \in \R_{>0} }$.
Then:

$\ds \bigcup \CC = \R \setminus \set x \supseteq S$
as $x \notin S$.
So $\CC$ is an open cover for $S$.

Let $\GF$ be a finite subcover of $\CC$ for $S$.
Then:

$\ds \bigcup \GF = \openint \gets {x - \delta} \cup \openint {x + \delta} \to  \supseteq S$
for some strictly positive real number $\delta \in \R_{>0}$.
By the rule of transposition, it follows that:

$\openint {x - \delta} {x + \delta} \subseteq T$
Hence, $T$ is open in $\R$.
$\blacksquare$





