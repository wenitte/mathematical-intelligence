# 

Source: https://proofwiki.org/wiki/Arens-Fort_Topology_is_Topology

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.

Then $\tau$ is a topology on $T$.


Proof
We have that $\tuple {0, 0} \notin \O$ so $\O \in \tau$.

We have that $\forall m: \set {n: \tuple {m, n} \notin S} = \O$ which is finite, so $S \in \tau$.

Now consider $A, B \in \tau$, and let $H = A \cap B$.
If $\tuple {0, 0} \notin A$ or $\tuple {0, 0} \notin B$ then $\tuple {0, 0} \notin A \cap B$ and so $H \in \tau_p$.

Now suppose $\tuple {0, 0} \in A$ and $\tuple {0, 0} \in B$.
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





De Morgan's Laws: Complement of Intersection




In order for $A$ and $B$ to be open sets it follows that:

At most a finite number $m_A$ of sets $S_{m_A} = \set {n: \tuple {m_A, n} \notin A}$ are infinite
At most a finite number $m_B$ of sets $S_{m_B} = \set {n: \tuple {m_B, n} \notin B}$ are infinite.
Let $r \in \Z_{\ge 0}$ and let:

$S_{r_A} = \set {n: \tuple {r, n} \notin A}$
$S_{r_B} = \set {n: \tuple {r, n} \notin B}$

We have that: 














\(\ds \)

\(\)







\(\ds S_{r_{A \mathop \cap B} }\)




















\(\ds \)

\(=\)







\(\ds \set {n: \tuple {r, n} \notin A \cap B}\)




















\(\ds \)

\(=\)







\(\ds \set {n: \tuple {r, n} \notin A} \cup \set {n: \tuple {r, n} \notin B}\)





De Morgan's Laws: Difference with Intersection














\(\ds \)

\(=\)







\(\ds S_{r_A} \cup S_{r_B}\)










If $S_{r_A}$ and $S_{r_B}$ are finite then so is $S_{r_A} \cup S_{r_B}$.
If only a finite number of $S_{m_A}$ and $S_{m_B}$ are infinite then it follows that only a finite number of $S_{m_{A \cap B}}$ are infinite.
So $A \cap B \in \tau$.

Now let $\UU \subseteq \tau$.
Then:

$\ds \relcomp S {\bigcup \UU} = \bigcap_{U \mathop \in \UU} \relcomp S U$
by De Morgan's Laws: Complement of Union.
We have either of two options:

$(1): \quad \forall U \in \UU: \tuple {0, 0} \notin U$
in which case:

$\ds \tuple {0, 0} \notin \bigcap \UU$
Or:

$(2): \quad$ At most a finite number $m$ of sets $S_m = \set {n: \tuple {m, n} \notin U}$ are infinite
in which case:

At most a finite number $m$ of sets $S_m = \set {n: \tuple {m, n} \notin \bigcap \UU}$ are infinite.
So in either case $\ds \bigcup \UU \in \tau$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space




