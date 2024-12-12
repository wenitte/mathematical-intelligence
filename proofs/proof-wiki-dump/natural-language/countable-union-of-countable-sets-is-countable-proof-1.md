# 

Source: https://proofwiki.org/wiki/Countable_Union_of_Countable_Sets_is_Countable/Proof_1



Theorem
Let the Axiom of Countable Choice be accepted.
Then it can be proved that a countable union of countable sets is countable.


Proof
Let $\sequence {S_n}_{n \mathop \in \N}$ be a sequence of countable sets.
Define:

$\ds S = \bigcup_{n \mathop \in \N} S_n$

For all $n \in \N$, let $\FF_n$ denote the set of all injections from $S_n$ to $\N$.
Since $S_n$ is countable, $\FF_n$ is non-empty.

Using the Axiom of Countable Choice, there exists a sequence $\sequence {f_n}_{n \mathop \in \N}$ such that $f_n \in \FF_n$ for all $n \in \N$.
Let $\phi: S \to \N \times \N$, where $\times$ denotes the cartesian product, be the mapping defined by:

$\map \phi x = \tuple {n, \map {f_n} x}$
where $n$ is the (unique) smallest natural number such that $x \in S_n$.
From the Well-Ordering Principle, such an $n$ exists; hence, the mapping $\phi$ exists.
Since each $f_n$ is an injection, it (trivially) follows that $\phi$ is an injection.

Since $\N \times \N$ is countable, there exists an injection $\alpha: \N \times \N \to \N$.
From Composite of Injections is Injection, the mapping $\alpha \circ \phi: S \to \N$ is an injection.
Hence, $S$ is countable.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.6$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Countable Sets




