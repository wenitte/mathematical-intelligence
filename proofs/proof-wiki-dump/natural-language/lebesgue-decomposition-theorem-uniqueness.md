# 

Source: https://proofwiki.org/wiki/Lebesgue_Decomposition_Theorem/Uniqueness



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $\nu$ be either: 

a $\sigma$-finite measure
a complex measure.

Then the Lebesgue decomposition of $\nu$ with respect to $\mu$ is unique. 


Proof
Suppose that:

$\nu = \nu_a + \nu_s = \nu_a' + \nu_s'$
where:

$\nu_a$ and $\nu_a'$ are absolutely continuous with respect to $\mu$
$\nu_s$ and $\nu_s'$ are mutually singular with respect to $\mu$.
$\nu$ is either a complex measure or finite measure
If $\nu$ is a finite measure, write $\cmod \nu = \nu$.
We can then write:

$\nu_a' - \nu_a = \nu_s - \nu_s'$
We show that $\nu_a' - \nu_a$, and hence $\nu_s - \nu_s'$, are both mutually singular and absolutely continuous with respect to $\mu$.
Singular Absolutely Continuous Measure is Zero will then show that $\nu_a' = \nu_a$ and $\nu_s = \nu_s'$ in this case.

First, let $A \in \Sigma$ be such that $\map \mu A = 0$. 
Since $\nu_a$ and $\nu_a'$ are absolutely continuous with respect to $\mu$, we have $\map {\cmod {\nu_a} } A = 0$ and $\map {\cmod {\nu_a'} } A = 0$. 
From Triangle Inequality for Variation of Complex Measure, we have:

$\map {\cmod {\nu_a' - \nu_a} } A \le \map {\cmod {\nu_a} } A + \map {\cmod {\nu_a'} } A = 0$
Then:

$\map {\cmod {\nu_a' - \nu_a} } A = 0$
Hence $\nu_a' - \nu_a$ is absolutely continuous with respect to $\mu$.

Now let $N_1 \in \Sigma$ and $N_2 \in \Sigma$ be $\mu$-null such that:

$\map {\cmod {\nu_s} } {N_1^c} = 0$
and:

$\map {\cmod {\nu_s'} } {N_2^c} = 0$
From Null Sets Closed under Countable Union, $N_1^c \cup N_2^c$ is both $\cmod {\nu_s}$-null and $\cmod {\nu_s'}$-null.
From De Morgan's laws, we have $\paren {N_1 \cap N_2}^c$ is $\cmod {\nu_s}$-null and $\cmod {\nu_s'}$-null.
Hence we have:

$\map {\cmod {\nu_s - \nu_s'} } {\paren {N_1 \cap N_2}^c} \le \map {\cmod {\nu_s} } {\paren {N_1 \cap N_2}^c} + \map {\cmod {\nu_s'} } {\paren {N_1 \cap N_2}^c} = 0$
So $\paren {N_1 \cap N_2}^c$ is $\cmod {\nu_s - \nu_s'}$-null.
From Null Sets Closed under Subset, $N_1 \cap N_2$ is $\mu$-null.
Hence $\nu_s - \nu_s'$ is mutually singular with respect to $\mu$. 
Hence $\nu_a' - \nu_a$ is both mutually singular and absolutely continuous with respect to $\mu$.
By Singular Absolutely Continuous Measure is Zero, we have $\nu_a = \nu_a'$ and $\nu_s = \nu_s'$.
$\Box$


$\nu$ is $\sigma$-finite
Since $\nu$ is $\sigma$-finite, we can find a partition of $X$ into $\Sigma$-measurable sets $\sequence {D_k}_{k \mathop \in \N}$ of finite $\nu$-measure. 
Define $\nu_k$, $\nu_{a, k}$, $\nu_{s, k}$, $\nu_{a, k}'$, $\nu_{s, k}'$ to be the intersection measures of $\nu$, $\nu_a$, $\nu_s$, $\nu_a'$, $\nu_s'$ with respect to $D_k$ respectively.
From Intersection Measures preserve Absolute Continuity, we have that $\nu_{a, k}$ and $\nu_{a, k}'$ are absolutely continuous with respect to $\mu$.
From Intersection Measures preserve Mutual Singularity, we have that $\nu_{s, k}$ and $\nu_{s, k}'$ are mutually singular with respect to $\mu$.
Hence applying the finite measure case, we have $\nu_{a, k} = \nu_{a, k}'$ and $\nu_{s, k} = \nu_{s, k'}$ for each $k \in \N$.
Then for each $A \in \Sigma$ we have:














\(\ds \map {\nu_a} A\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_a} {A \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_{a, k} } A\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_{a, k}'} A\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_a'} {A \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_a'} A\)









and similarly:














\(\ds \map {\nu_s} A\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_s} {A \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_{s, k} } A\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_{s, k}'} A\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \map {\nu_s'} {A \cap D_k}\)




















\(\ds \)

\(=\)







\(\ds \map {\nu_s'} A\)









So we have $\nu_s = \nu_s'$ and $\nu_a = \nu_a'$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.3$: Singularity




