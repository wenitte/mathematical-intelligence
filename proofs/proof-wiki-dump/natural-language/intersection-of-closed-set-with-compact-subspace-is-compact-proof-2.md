# 

Source: https://proofwiki.org/wiki/Intersection_of_Closed_Set_with_Compact_Subspace_is_Compact/Proof_2

Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $H \subseteq S$ be closed in $T$.
Let $K \subseteq S$ be compact in $T$.

Then $H \cap K$ is compact in $T$.


Proof
Let $\family {U_\alpha}$ be an open cover of $H \cap K$:

$\ds H \cap K \subseteq \bigcup_\alpha U_\alpha$
Then:

$\ds K \subseteq \bigcup_\alpha U_\alpha \cup \paren {S \setminus H}$
Since $H$ is closed in $T$, $\paren {S \setminus H}$ is open in $T$.
Hence $\family {U_\alpha} \cup S \setminus H$ is an open cover of $K$.

We have that $K$ is compact in $T$.
It follows by definition that a finite subcover:

$\set {U_{\alpha_1}, U_{\alpha_2}, \ldots, U_{\alpha_n}, S \setminus H}$
of $K$ exists.
Thus:

$H \cap K \subseteq \set {U_{\alpha_1}, U_{\alpha_2}, \ldots, U_{\alpha_n} }$
and $H \cap K$ is compact in $T$.
$\blacksquare$





