# 

Source: https://proofwiki.org/wiki/Generated_Sigma-Algebra_Preserves_Finiteness



Theorem
Let $X$ be a set, and let $A_1, \ldots, A_n \subseteq X$ be subsets of $X$.

Then $\map \sigma {\set {A_1, \ldots, A_n} }$ is a finite set, where $\sigma$ denotes generated $\sigma$-algebra.


Proof
Proceed by induction on $n$, that is, on the number of generators.


Basis for the Induction
The case $n = 0$ is verified as follows:

$\map \sigma \O = \set {\O, X}$
from Sigma-Algebra Generated by Empty Set.
Thus $\map \sigma \O$ is finite.

This is the basis for the induction.


Induction Hypothesis
Fix $n \in \N$.
Assume that $\map \sigma {\set {A_1, \ldots, A_n} }$ is finite.
This is the induction hypothesis.


Induction Step
This is the induction step:

For brevity, write $\Sigma_n$ for $\map \sigma {A_1, \ldots, A_n}$.
Observe that:

$\set {A_1, \ldots, A_{n + 1} } \subseteq \Sigma_n \cup \set {A_{n + 1} } \subseteq \Sigma_{n + 1}$
Hence Condition on Equality of Generated Sigma-Algebras applies to yield:

$\Sigma_{n + 1} = \map \sigma {\Sigma_n \cup \set {A_{n + 1} } }$
From Sigma-Algebra Extended by Single Set, it follows that:

$\map \sigma {\Sigma_n \cup \set {A_{n + 1} } } = \set {\paren {E_1 \cap A_{n + 1} } \cup \paren {E_2 \cap A_{n + 1}^c}: E_1, E_2 \in \Sigma_n}$

Thus there is a surjection $f: \Sigma_n \times \Sigma_n \to \Sigma_{n + 1}$, defined by:

$\map f {E_1, E_2} := \paren {E_1 \cap A_{n + 1} } \cup \paren {E_2 \cap A_{n + 1}^c}$
By Cardinality of Codomain of Surjection:

$\card {\Sigma_{n + 1} } \le \card {\Sigma_n \times \Sigma_n}$
and the latter equals $\card {\Sigma_n}^2$ by Cardinality of Cartesian Product of Finite Sets.
By the induction hypothesis, this is necessarily finite.

Therefore, $\Sigma_{n + 1}$ is also finite.
The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 3$: Problem $5 \text{(ii)}$




