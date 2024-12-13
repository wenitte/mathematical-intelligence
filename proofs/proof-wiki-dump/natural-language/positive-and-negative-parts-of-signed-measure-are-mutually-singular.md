# 

Source: https://proofwiki.org/wiki/Positive_and_Negative_Parts_of_Signed_Measure_are_Mutually_Singular

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $\tuple {\mu^+, \mu^-}$ be the Jordan decomposition of $\mu$.

Then $\mu^+$ and $\mu^-$ are mutually singular.


Proof
From the Hahn Decomposition Theorem, there exists $\mu$-positive set and a $\mu$-negative set such that:

$X = P \cup N$
and:

$P \cap N = \O$
From the Jordan Decomposition Theorem, we have:

$\map {\mu^+} A = \map \mu {A \cap P}$
and:

$\map {\mu^-} A = -\map \mu {A \cap N}$
for each $A \in \Sigma$.
From the definition of a signed measure we have $\map \mu \O = 0$. 
Hence $\map {\mu^+} N = 0$ and $\map {\mu^-} {X \setminus N} = 0$.
So $\mu^+$ is concentrated on $N^c$ and $\mu%-$ is concentrated on $N$. 
So $\mu^+$ and $\mu^-$ are mutually singular.
$\blacksquare$





