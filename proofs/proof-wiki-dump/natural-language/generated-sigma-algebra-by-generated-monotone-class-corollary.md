# 

Source: https://proofwiki.org/wiki/Generated_Sigma-Algebra_by_Generated_Monotone_Class/Corollary

Corollary to Generated Sigma-Algebra by Generated Monotone Class
Let $X$ be a set.
Let $\GG \subseteq \powerset X$ be a non-empty set of subsets of $X$.
Define $\relcomp X \GG$ by:

$\relcomp X \GG := \set {\relcomp X A: A \in \GG}$

Then:

$\map \sigma \GG = \map {\mathfrak m} {\GG \cup \relcomp X \GG}$
where:

$\sigma$ denotes generated $\sigma$-algebra
$\mathfrak m$ denotes generated monotone class.


Proof
From Set is Subset of Union:

$\GG \subseteq \GG \cup \relcomp X \GG$
Further, as $\map \sigma \GG$ is a $\sigma$-algebra:

$S \in \map \sigma \GG \implies \relcomp X s = X \setminus S \in \map \sigma \GG$
from Set Difference as Intersection with Relative Complement.

Since $\GG \subseteq \map \sigma \GG$:

$\GG \cup \relcomp X \GG \subseteq \map \sigma \GG$
By Condition on Equality of Generated Sigma-Algebras:

$\map \sigma \GG = \map \sigma {\GG \cup \relcomp X \GG}$

Applying Generated Sigma-Algebra by Generated Monotone Class:

$\map \sigma \GG = \map {\mathfrak m} {\GG \cup \relcomp X \GG}$
$\blacksquare$





