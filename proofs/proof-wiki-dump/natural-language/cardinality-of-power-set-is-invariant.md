# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_is_Invariant

Theorem
Let $X, Y$ be sets.
Let $\card X = \card Y$
where $\card X$ denotes the cardinality of $X$.

Then:

$\card {\powerset X} = \card {\powerset Y}$
where $\powerset X$ denotes the power set of $X$.


Proof
By definition of cardinality:

$X \sim Y$
where $\sim$ denotes the set equivalence.
Then by definition of set equivalence:

there exists a bijection $f: X \to Y$
By definition of bijection

$f$ is an injection and a surjection.
By Mapping is Injection iff Direct Image Mapping is Injection:

the direct image mapping $\map {f^\to}: \powerset X \to \powerset Y$ is an injection.
By Direct Image Mapping of Surjection is Surjection:

$f^\to$ is a surjection.
Then by definition of bijection:

$f^\to: \powerset X \to \powerset Y$ is a bijection.
Hence by definition of set equivalence:

$\powerset X \sim \powerset Y$
Thus the result by definition of cardinality:

$\card {\powerset X} = \card {\powerset Y}$
$\blacksquare$


Sources
Mizar article ZFREFLE1:12




