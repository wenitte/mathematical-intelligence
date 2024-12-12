# 

Source: https://proofwiki.org/wiki/Fort_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau_p}$ be a Fort space.

Then $\tau_p$ is a topology on $T$.


Proof
We have that $p \in \relcomp S \O = S$, so $\O \in \tau_p$.

We have that $\relcomp S S = \O$ which is finite, so $S \in \tau_p$.

Now consider $A, B \in \tau_p$, and let $H = A \cap B$.
If $p \notin A$ or $p \notin B$ then $p \notin A \cap B$ and so $H \in \tau_p$.

Now suppose $p \in A$ and $p \in B$.
Then:














\(\ds H\)

\(=\)







\(\ds A \cap B\)














\(\ds \leadsto \ \ \)





\(\ds \relcomp S H\)

\(=\)







\(\ds \relcomp S {A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \relcomp S A \cup \relcomp S B\)





De Morgan's Laws: Complement of Union




In order for $A$ and $B$ to be open sets it follows that $\relcomp S A$ and $\relcomp S B$ are both finite.
Hence their union is also finite and so $\relcomp S H$ is finite.
So $H = A \cap B \in \tau_p$ as its complement is finite.

Now let $\UU \subseteq \tau_p$.
Then from De Morgan's Laws: Complement of Union:

$\ds \relcomp S {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp S U$

We have either of two options:

$(1): \quad \forall U \in \UU: p \in \relcomp S U$
in which case:

$\ds p \in \bigcap_{U \mathop \in \UU} \relcomp S U$
Or:

$(2): \quad \exists U \in \UU: \relcomp S U$ is finite
in which case:

$\ds \bigcap_{U \mathop \in \UU} \relcomp S U$ is finite, from Intersection is Subset.

So in either case $\ds \bigcup \UU \in \tau_p$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $23 \text { - } 24$. Fort Space




