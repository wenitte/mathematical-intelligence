# 

Source: https://proofwiki.org/wiki/No_Infinitely_Descending_Membership_Chains/Corollary

Theorem
There cannot exist a sequence $\sequence {x_n}$ whose domain is $\N_{\gt 0}$ such that:

$\forall n \in \N_{>0}: x_{n + 1} \in x_n$


Proof
Aiming for a contradiction, suppose there is a sequence like that.
From the definition of a sequence, let $f$ be the the mapping that is defined by $\sequence {x_n}$.

Let $\omega$ denote the minimally inductive set.
Let $g: \omega \to \N_{>0}$ be defined as:

$\map g \alpha = \alpha + 1$

Then the composition $f \circ g$ is a mapping whose domain is $\omega$ such that:

$\forall n \in \omega: \map {\paren {f \circ g} } {n^+} \in \map {\paren {f \circ g} } n$

But this contradicts No Infinitely Descending Membership Chains.
Therefore by Proof by Contradiction there cannot exist such a sequence.
Hence the result.
$\blacksquare$





