# 

Source: https://proofwiki.org/wiki/Conjunction_has_no_Inverse

Theorem
Let $\land$ denote the conjunction operation of propositional logic.

Then there exists no binary logical connective $\circ$ such that:

$(1): \quad \forall p, q \in \set {T, F}: \left({p \land q}\right) \circ q = p$


Proof
This will be proven by contradiction.
Let such an operation $\circ$ exist.
Let $f^\circ: \mathbb B^2 \to \mathbb B$ be the associated truth function.

Suppose now that $q = F$, while $p$ remains unspecified.
Then:

$p \land q = \map {f^\land} {p, F} = F$
where $f^\land$ is the truth function of conjunction.
It does not matter what $p$ is, for:

$\map {f^\land} {T, F} = \map {f^\land} {F, F} = F$
Hence, for $\paren {p \land q} \circ q = p$ to hold, $f^\circ$ must satisfy:

$\map {f^\circ} {F, F} = p$
However, because $p$ could still be either $T$ or $F$, this identity cannot always hold.
Therefore, $\circ$ cannot exist.
$\blacksquare$





