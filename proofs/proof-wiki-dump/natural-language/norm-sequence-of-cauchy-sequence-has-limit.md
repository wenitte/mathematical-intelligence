# 

Source: https://proofwiki.org/wiki/Norm_Sequence_of_Cauchy_Sequence_has_Limit

Theorem
Let $\struct {R, \norm {\, \cdot \,} }$ be a normed division ring.
Let $\sequence {x_n}$ be a Cauchy sequence in $R$.
Then $\sequence {\norm {x_n} }$ has a limit in $\R$.
That is,

$\exists l \in \R: \ds \lim_{n \mathop \to \infty} \norm {x_n} = l$


Proof
It is first shown that $\sequence {\norm {x_n} }$ is a real Cauchy sequence in $\R$.
Let $\epsilon \in \R_{>0}$ be given.
By the definition of Cauchy sequence then:

$\exists N \in \N: \forall n, m > N, \norm {x_n - x_m} < \epsilon$
By Reverse Triangle Inequality on Normed Division Ring, then:

$\forall n, m > N: \cmod {\norm {x_n} - \norm {x_m} } \le \norm {x_n - x_m} < \epsilon$
From the definition of a real Cauchy sequence it follows that $\sequence {\norm {x_n} }$ is a real Cauchy sequence in $\R$.
By Cauchy's Convergence Criterion on Real Numbers $\sequence {\norm {x_n} }$ has a limit in $\R$.
$\blacksquare$


Sources




