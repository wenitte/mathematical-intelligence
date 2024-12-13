# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Integers_by_Multiples

Theorem
Let $\struct {\Z, +}$ be the additive group of integers.
Let $\struct {m \Z, +}$ be the additive group of integer multiples of $m$.
Let $\struct {\Z_m, +_m}$ be the additive group of integers modulo $m$.

Then the quotient group of $\struct {\Z, +}$ by $\struct {m \Z, +}$ is $\struct {\Z_m, +_m}$.

Thus:

$\index \Z {m \Z} = m$


Proof
From Subgroups of Additive Group of Integers, $\struct {m \Z, +}$ is a subgroup of $\struct {\Z, +}$.
From Subgroup of Abelian Group is Normal, $\struct {m \Z, +}$ is normal in $\struct {\Z, +}$.
Therefore the quotient group $\dfrac {\struct {\Z, +} } {\struct {m \Z, +} }$ is defined.

Now $\Z$ modulo $m \Z$ is Congruence Modulo a Subgroup.
This is merely congruence modulo an integer.
Thus the quotient set $\Z / m \Z$ is $\Z_m$.

The left coset of $k \in \Z$ is denoted $k + m \Z$, which is the same thing as $\eqclass k m$ from the definition of residue class.

So $\index \Z {m \Z} = m$ follows from the definition of Subgroup Index.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.1$. The quotient sets of a subgroup: Example $113$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.3$. Index. Transversals: Example $115$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 6.7$. Quotient groups: Example $126$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: A Little Number Theory
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 37$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 39$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 47 \alpha$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $7$: Normal subgroups and quotient groups: Example $7.12$




