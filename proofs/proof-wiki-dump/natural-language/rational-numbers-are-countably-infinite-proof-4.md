# 

Source: https://proofwiki.org/wiki/Rational_Numbers_are_Countably_Infinite/Proof_4

Theorem
The set $\Q$ of rational numbers is countably infinite.


Proof
Let $Q_\pm = \set {q \in \Q: \pm q > 0}$.

For every $q \in Q_+$, there exists at least one pair $\tuple {m, n} \in \N \times \N$ such that $q = \dfrac m n$.
Therefore, we can find an injection $i: Q_+ \to \N \times \N$.
By Cartesian Product of Natural Numbers with Itself is Countable, $\N \times \N$ is countable.
Hence $Q_+$ is countable, by Domain of Injection to Countable Set is Countable.

The map $-: q \mapsto -q$ provides a bijection from $Q_-$ to $Q_+$, hence $Q_-$ is also countable.
Hence $\Q$ is countable.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.5 \ \text{(v)}$




