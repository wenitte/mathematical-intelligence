# 

Source: https://proofwiki.org/wiki/Closed_Subgroups_of_P-adic_Integers

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.

Then the closed subgroups of $\Z_p$ are the principal ideals:

$\text a) \quad \set 0$
$\text b) \quad \forall k \in \N : p^k \Z_p$


Proof
From Metric Space is Hausdorff:

$\Z_p$ is a Hausdorff space
From Finite Subspace of Hausdorff Space is Closed:

$\set 0$ is closed
From Cosets Form Local Basis of P-adic Number:

$\forall k \in \N : p^k \Z_p = 0 + p^k \Z_p$ is closed
Hence the ideals:

$\text a) \quad \set 0$
$\text b) \quad \forall k \in \N : p^k \Z_p$
are closed subgroups.

It remains to show that an arbitrary closed subgroups is indeed one of these ideals.
Let $H$ be a closed subgroup of the additive group of $\Z_p$.
From Correspondence between Abelian Groups and Z-Modules:

$\Z H \subseteq H$
Let $a \in \Z_p$.
Let $h \in H$.
From Integers are Dense in P-adic Integers, there exists a sequence $\sequence {a_n}$:

$\forall n \in \N: a_n \in Z$
$\ds \lim_{n \mathop \to \infty} a_n = a$
From Multiple Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} a_n h = a h$
We have:

$a_n h \in \Z H \subseteq H$
From Subset of Metric Space contains Limits of Sequences iff Closed:

$a h = \ds \lim_{n \mathop \to \infty} a_n h \in H$
Since $a \in \Z_p$ and $h \in H$ were arbitrary, it follows that:

$\Z_p H \subseteq H$
By definition of ideal:

$H$ is an ideal of $\Z_p$
From Ideals of P-adic Integers, $H$ is one of the principal ideals:

$\text a) \quad \set 0$
$\text b) \quad \forall k \in \N : p^k \Z_p$
$\blacksquare$





