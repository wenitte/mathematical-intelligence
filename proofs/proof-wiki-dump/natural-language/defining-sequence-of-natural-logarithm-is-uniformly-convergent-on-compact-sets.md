# 

Source: https://proofwiki.org/wiki/Defining_Sequence_of_Natural_Logarithm_is_Uniformly_Convergent_on_Compact_Sets

Theorem
Let $x \in \R$ be a real number such that $x > 0$.
Let $\sequence {f_n}$ be the sequence of mappings $f_n : \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1}$
Let $K \subseteq \R_{>0}$ be compact.

Then $\sequence {f_n}$ is uniformly convergent on $K$.


Proof
From Continuity of Root Function and Combination Theorem for Continuous Real Functions:

$\forall n \in \N : \map {f_n} x$ is continuous on $K$
From Defining Sequence of Natural Logarithm is Convergent, $\sequence {f_n}$ is pointwise convergent to $\ln$.
From Real Natural Logarithm Function is Continuous, $\ln$ is continuous on $K$.
From Defining Sequence of Natural Logarithm is Strictly Decreasing:

$\forall x \in K: \sequence {\map {f_n} x}$ is monotone.
From Dini's Theorem, $\sequence {f_n}$ is uniformly convergent to $\ln$.
Hence the result.
$\blacksquare$





