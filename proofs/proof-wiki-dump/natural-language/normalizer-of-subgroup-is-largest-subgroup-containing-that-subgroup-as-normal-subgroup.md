# 

Source: https://proofwiki.org/wiki/Normalizer_of_Subgroup_is_Largest_Subgroup_containing_that_Subgroup_as_Normal_Subgroup

Theorem
Let $G$ be a group.
Let $H$ be a subgroup of $G$.

Then $\map {N_G} H$, the normalizer of $H$ in $G$, is the largest subgroup of $G$ containing $H$ as a normal subgroup.


Proof
From Subgroup is Subgroup of Normalizer, we have that $H \le \map {N_G} H$.

Now we need to show that $H \lhd \map {N_G} H$.
For $a \in \map {N_G} H$, the conjugate of $H$ by $a$ in $\map {N_G} H$ is:














\(\ds H^a\)

\(=\)







\(\ds \set {x \in \map {N_G} H: a x a^{-1} \in H}\)





Definition of Conjugate of Group Subset














\(\ds \)

\(=\)







\(\ds H^a \cap \map {N_G} H\)





Definition of Set Intersection














\(\ds \)

\(=\)







\(\ds H \cap \map {N_G} H\)





Definition of Normalizer














\(\ds \)

\(=\)







\(\ds H\)





Intersection with Subset is Subset‎



so:

$\forall a \in \map {N_G} H: H^a = H$
and so by definition of normal subgroup:

$H \lhd \map {N_G} H$

Now we need to show that $\map {N_G} H$ is the largest subgroup of $G$ containing $H$ such that $H \lhd \map {N_G} H$.
That is, to show that any subgroup of $G$ in which $H$ is normal is also a subset of $\map {N_G} H$.

Take any $N$ such that $H \lhd N \le G$.
In $N$, the conjugate of $H$ by $a \in N$ is $N \cap H^a = H$.
Therefore:

$H \subseteq H^a$
Similarly, $H \subseteq H^{a^{-1} }$, so:

$H^a \subseteq \paren {H^a}^{a^{-1} } = H$
Thus:

$\forall a \in N: H^a = H, a \in \map {N_G} H$
That is:

$N \subseteq \map {N_G} H$

So what we have shown is that any subgroup of $G$ in which $H$ is normal is a subset of $\map {N_G} H$, which is another way of saying that $\map {N_G} H$ is the largest such subgroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $25$. Cyclic Groups and Lagrange's Theorem: Exercise $25.20$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Conjugacy, Normal Subgroups, and Quotient Groups: $\S 48$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Homomorphisms, Normal Subgroups and Quotient Groups: Exercise $12 \ \text{(i)}$




