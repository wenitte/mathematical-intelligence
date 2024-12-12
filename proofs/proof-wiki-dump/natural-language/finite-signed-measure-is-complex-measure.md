# 

Source: https://proofwiki.org/wiki/Finite_Signed_Measure_is_Complex_Measure

Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a finite signed measure on $\struct {X, \Sigma}$. 

Then $\mu$ is a complex measure on $\struct {X, \Sigma}$. 


Proof
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.
Then: 

$\mu = \mu^+ - \mu^-$
for measures $\mu^+$ and $\mu^-$. 
From Jordan Decomposition of Finite Signed Measure, $\mu^+$ and $\mu^-$ are finite measures.
Then, for each $A \in \Sigma$, we have:














\(\ds \cmod {\map \mu A}\)

\(\le\)







\(\ds \map {\mu^+} A + \map {\mu^-} A\)





Absolute Value of Signed Measure Bounded Above by Variation














\(\ds \)

\(\le\)







\(\ds \map {\mu^+} X + \map {\mu^-} X\)





Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)





Definition of Finite Measure



So $\mu$ takes only real values.
That is, $\mu$ takes values in $\C$. 
Since $\mu$ is a signed measure, we have: 

$\map \mu \O = 0$
and: 

for each sequence $\sequence {S_n}_{n \mathop \in \N}$ of pairwise disjoint $\Sigma$-measurable sets we have:
$\ds \map \mu {\bigcup_{n \mathop = 1}^\infty S_n} = \sum_{n \mathop = 1}^\infty \map \mu {S_n}$
So $\mu$ is a complex measure.
$\blacksquare$





