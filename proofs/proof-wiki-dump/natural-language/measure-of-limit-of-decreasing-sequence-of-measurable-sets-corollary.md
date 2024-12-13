# 

Source: https://proofwiki.org/wiki/Measure_of_Limit_of_Decreasing_Sequence_of_Measurable_Sets/Corollary

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space. 
Let $F \in \Sigma$.
Let $\sequence {F_n}_{n \mathop \in \N}$ be an decreasing sequence of $\Sigma$-measurable sets such that: 

$F_n \downarrow F$
where $F_n \downarrow F$ denotes the limit of decreasing sequence of sets.
Suppose also that $\map \mu {F_m} < \infty$ for some $m \in \N$. 

Then: 

$\ds \map \mu F = \lim_{n \mathop \to \infty} \map \mu {F_n}$


Proof
Define the sequence $\sequence {E_n}_{n \mathop \in \N}$ by: 

$E_n = F_{m + n}$
Then from Tail of Decreasing Sequence of Sets is Decreasing:

$\sequence {E_n}_{\mathop \in \N}$ is an decreasing sequence of $\Sigma$-measurable sets.
From Limit of Tail of Decreasing Sequence of Sets, we have: 

$E_n \downarrow F$
with: 

$\map \mu {E_1} = \map \mu {F_{m + 1} }$
Since $\sequence {F_n}_{n \mathop \in \N}$ is decreasing, we have: 

$F_{m + 1} \subseteq F_m$
So from Measure is Monotone, we have: 

$\map \mu {F_{m + 1} } \le \map \mu {F_m} < \infty$
so:

$\map \mu {E_1} < \infty$
Then:














\(\ds \map \mu F\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {E_n}\)





Measure of Limit of Decreasing Sequence of Measurable Sets














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {F_{n + m} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \mu {F_n}\)





Tail of Convergent Sequence



$\blacksquare$





