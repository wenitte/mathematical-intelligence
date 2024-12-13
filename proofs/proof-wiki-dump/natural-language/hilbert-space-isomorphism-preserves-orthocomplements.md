# 

Source: https://proofwiki.org/wiki/Hilbert_Space_Isomorphism_preserves_Orthocomplements

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot_\HH}$ and $\struct {\KK, \innerprod \cdot \cdot_\KK}$ be Hilbert spaces.
Let $T : \HH \to \KK$ be a Hilbert space isomorphism.
Let $U \subseteq \HH$.

Then:

$T \sqbrk {U^\bot} = \paren {T \sqbrk U}^\bot$


Proof
Let $x \in \KK$.
Since $T$ is a Hilbert space isomorphism, there exists $v \in \HH$ such that $x = T v$.
We then have $x \in \paren {T \sqbrk U}^\bot$ if and only if:

$\innerprod x {T u}_\KK = 0$ for each $u \in U$.
That is:

$\innerprod {T v} {T u}_\KK = 0$
Since $T$ is a Hilbert space isomorphism, this is equivalent to $\innerprod v u_\HH = 0$ for each $u \in U$.
So this is equivalent to $v \in U^\bot$.
Since $x = T v$, this is equivalent to $x \in T \sqbrk {U^\bot}$. 
So we obtain:

$T \sqbrk {U^\bot} = \paren {T \sqbrk U}^\bot$
$\blacksquare$





