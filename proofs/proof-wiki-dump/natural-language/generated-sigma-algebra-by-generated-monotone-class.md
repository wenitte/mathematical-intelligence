# 

Source: https://proofwiki.org/wiki/Generated_Sigma-Algebra_by_Generated_Monotone_Class



Theorem
Let $X$ be a set, and let $\GG \subseteq \powerset X$ be a nonempty collection of subsets of $X$.
Suppose that $\GG$ satisfies the following condition:

$(1):\quad A \in \GG \implies \relcomp X A \in \GG$
that is, $\GG$ is closed under complement in $X$.

Then:

$\map {\mathfrak m} \GG = \map \sigma \GG$
where $\mathfrak m$ denotes generated monotone class, and $\sigma$ denotes generated $\sigma$-algebra.


Corollary
Let $X$ be a set.
Let $\GG \subseteq \powerset X$ be a non-empty set of subsets of $X$.
Define $\relcomp X \GG$ by:

$\relcomp X \GG := \set {\relcomp X A: A \in \GG}$

Then:

$\map \sigma \GG = \map {\mathfrak m} {\GG \cup \relcomp X \GG}$


Proof
By Sigma-Algebra is Monotone Class, and the definition of generated monotone class, it follows that:

$\map {\mathfrak m} \GG \subseteq \map \sigma \GG$

Next, define $\Sigma$ by:

$\Sigma := \set {M \in \map {\mathfrak m} \GG: X \setminus M \in \map {\mathfrak m} \GG}$

By $(1)$, it follows that $\GG \subseteq \Sigma$.
Next, we will show that $\Sigma$ is a $\sigma$-algebra.

To this end, let $G \in \GG$ be arbitrary.
By $(1)$, also $X \setminus G \in \GG$.
Hence from the definition of monotone class:

$\O = G \cap \paren {X \setminus G} \in \map {\mathfrak m} \GG$
$X = G \cup \paren {X \setminus G} \in \map {\mathfrak m} \GG$
by virtue of Set Difference Intersection with Second Set is Empty Set and Set Difference and Intersection form Partition.
Since $\O = X \setminus X$, it follows that:

$X, \O \in \Sigma$

Further, from Set Difference with Set Difference, it follows that:

$E \in \Sigma \implies X \setminus E \in \Sigma$

Lastly, for any sequence $\sequence {E_n}_{n \mathop \in \N}$ in $\Sigma$, the definition of monotone class implies that:

$\ds \bigcup_{n \mathop \in \N} E_n \in \map {\mathfrak m} \GG$
Now to ensure that it is in fact in $\Sigma$, compute:














\(\ds X \setminus \paren {\bigcup_{n \mathop \in \N} E_n}\)

\(=\)







\(\ds \bigcap_{n \mathop \in \N} \paren {X \setminus E_n}\)





De Morgan's Laws: Difference with Union



All of the $X \setminus E_n$ are in $\map {\mathfrak m} \GG$ as each $E_n$ is in $\Sigma$.

Hence, from the definition of monotone class, we conclude:

$\ds \bigcap_{n \mathop \in \N} \paren {X \setminus E_n} \in \map {\mathfrak m} \GG$
which subsequently implies that:

$\ds \bigcup_{n \mathop \in \N} E_n \in \Sigma$

Thus, having verified all three axioms, $\Sigma$ is a $\sigma$-algebra.
Since $\GG \subseteq \Sigma$, this means, by definition of generated $\sigma$-algebra, that:

$\map \sigma \GG \subseteq \Sigma \subseteq \map {\mathfrak m} \GG$

By definition of set equality:

$\map {\mathfrak m} \GG = \map \sigma \GG$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 3$: Problem $11 \ \text{(ii), (iii)}$




