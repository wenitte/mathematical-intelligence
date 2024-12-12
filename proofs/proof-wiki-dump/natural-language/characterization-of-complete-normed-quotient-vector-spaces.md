# 

Source: https://proofwiki.org/wiki/Characterization_of_Complete_Normed_Quotient_Vector_Spaces



Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ be a normed vector space.
Let $N$ be a closed linear subspace of $X$. 
Let $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ be the normed quotient vector space associated with the quotient vector space $X/N$.
Let $\norm {\, \cdot \,}_N$ be the norm on $N$ given by restricting the norm on $X$. 

Then $\struct {X, \norm {\, \cdot \,}_X}$ is a Banach space if and only if $\struct {N, \norm {\, \cdot \,}_N}$ and $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ are Banach spaces.


Proof
Let $\pi : X \to X/N$ be the quotient mapping associated with $X/N$.

Necessary Condition
Suppose that $\struct {X, \norm {\, \cdot \,}_X}$ is a Banach space.
From Closed Subspace of Banach Space forms Banach Space, $\struct {N, \norm {\, \cdot \,}_N}$ is a Banach space.
We now show that $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ is a Banach space. 
From Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach, it suffices to show that every absolute convergent series in $X/N$ converges in $X/N$.
That is, we show that if $\sequence {x_n}_{n \mathop \in \N}$ is a sequence in $X$ with: 

$\ds \sum_{n \mathop = 1}^\infty \norm {\map \pi {x_n} }_{X/N} < \infty$
then: 

$\ds \sum_{n \mathop = 1}^N \map \pi {x_n} \to \map \pi s$ as $N \to \infty$ for some $s \in X$.
From the definition of the quotient norm, we have: 

$\ds \norm {\map \pi {x_n} }_{X/N} = \inf_{z \in N} \norm {x_n - z}_X$
Then there exists $z_n \in N$ such that: 

$\ds \norm {\map \pi {x_n} }_{X/N} \le \norm {x_n - z_n}_X \le \norm {\map \pi {x_n} }_{X/N} + 2^{-n}$
From Sum of Infinite Geometric Sequence, we have: 

$\ds \sum_{n \mathop = 1}^\infty 2^{-n} = 1$
Hence we have: 

$\ds \sum_{n \mathop = 1}^\infty \norm {x_n - z_n}_X \le 1 + \sum_{n \mathop = 1}^\infty \norm {\map \pi {x_n} }_{X/N} < \infty$
Since $X$ is a Banach space, there exists $s \in X$ such that: 

$\ds \lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N \paren {x_n - z_n} = \sum_{n \mathop = 1}^\infty \paren {x_n - z_n} = s$
by Absolutely Convergent Series in Normed Vector Space is Convergent iff Space is Banach.
Now, for each $N \in \N$: 














\(\ds \map \pi {\sum_{n \mathop = 1}^N \paren {x_n - z_n} }\)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \map \pi {x_n - z_n}\)





Quotient Mapping is Linear Transformation














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \map \pi {x_n}\)





Kernel of Quotient Mapping



From Quotient Mapping is Bounded in Normed Quotient Vector Space, $\pi$ is a bounded linear transformation.
So, by Continuity of Linear Transformations, $\pi$ is continuous.
Hence by Sequential Continuity is Equivalent to Continuity in Metric Space:














\(\ds \lim_{N \mathop \to \infty} \map \pi {\sum_{n \mathop = 1}^N \paren {x_n - z_n} }\)

\(=\)







\(\ds \map \pi {\lim_{N \mathop \to \infty} \sum_{n \mathop = 1}^N \paren {x_n - z_n} }\)




















\(\ds \)

\(=\)







\(\ds \map \pi s\)









Hence: 

$\ds \sum_{n \mathop = 1}^\infty \map \pi {x_n} = \map \pi s$
So every absolute convergent series in $X/N$ converges in $X/N$.
$\Box$

Sufficient Condition
Suppose that $\struct {N, \norm {\, \cdot \,}_N}$ and $\struct {X/N, \norm {\, \cdot \,}_{X/N} }$ are Banach spaces.
We show that every Cauchy sequence converges.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a Cauchy sequence in $X$.
Since $\pi$ is a bounded linear transformation, $\sequence {\map \pi {x_n} }_{n \mathop \in \N}$ is a Cauchy sequence in $X/N$, by Bounded Linear Transformation preserves Cauchy Sequences.
Since $X/N$ is a Banach space, $\sequence {\map \pi {x_n} }_{n \mathop \in \N}$ converges. 
That is, there exists $x \in X$ such that $\map \pi {x_n} \to \map \pi x$ in $X/N$ as $n \to \infty$.
We show that there exists $z \in N$ such that: 

$x_n \to x + z$ in $X$ as $n \to \infty$.
Since $\sequence {\map \pi {x_n} }_{n \mathop \in \N}$ converges, for each $n \in \N$ we can choose $m_n \in \N$ such that: 

$\norm {\map \pi {x_{m_n} } - \map q x}_{X/N} < 2^{-n}$
so:

$\ds \inf_{z \in N} \norm {x_{m_n} - x - z}_X < 2^{-n}$
for each $n \in \N$. 
Then for each $n \in \N$, we can pick $z_n \in N$ such that: 

$\ds \norm {x_{m_n} - x - z_n}_X < 2^{-n}$
We show that $\sequence {z_n}_{n \mathop \in \N}$ is a Cauchy sequence.
It will then converge, since $N$ is a Banach space.
Let $\epsilon > 0$. 
We have: 














\(\ds \norm {z_n - z_k}_X\)

\(=\)







\(\ds \norm {z_n - z_k + \paren {x_{m_n} - x_{m_k} - x} - \paren {x_{m_n} - x_{m_k} - x} }_X\)




















\(\ds \)

\(\le\)







\(\ds \norm {z_n + x - x_{m_n} }_X + \norm {x_{m_k} - x - z_k}_X + \norm {x_{m_n} - x_{m_k} }_X\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds 2^{-n} + 2^{-k} + \norm {x_{m_n} - x_{m_k} }_X\)





from the choice of $m_n$ and $m_k$



Since $2^{-n} \to 0$ as $n \to \infty$, we can pick $N_1 \in \N$ such that: 

$\ds 2^{-n} < \frac \epsilon 3$
for $n \ge N_1$. 
Since $\sequence {x_n}_{n \mathop \in \N}$ is a Cauchy sequence, we can pick $N_2 \in \N$ such that:

$\ds \norm {x_{m_n} - x_{m_k} }_X < \frac \epsilon 3$
for $n, k \ge N_2$.
Now let $N = \max \set {N_1, N_2}$. 
Then for $n, k \ge N$ we have: 

$\norm {z_n - z_k}_X < \epsilon$
So $\sequence {z_n}_{n \in \mathop \in \N}$ is a Cauchy sequence in $N$. 
Since $N$ is a Banach space, there exists $z \in N$ such that: 

$z_n \to z$
We now show that: 

$x_{m_n} \to x + z$
as $n \to \infty$. 
We have: 














\(\ds \norm {x_{m_n} - \paren {x + z} }\)

\(=\)







\(\ds \norm {x_{m_n} - \paren {x + z} + z_n - z_n}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x_{m_n} - x - z_n} + \norm {z_n - z}\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(<\)







\(\ds 2^{-n} + \norm {z_n - z}\)









Taking $n \to \infty$, we have: 

$2^{-n} + \norm {z_n - z} \to 0$
So, indeed we have: 

$x_{m_n} \to x + z$ as $n \to \infty$
From Convergent Subsequence of Cauchy Sequence, we can conclude that: 

$x_n \to x + z$ as $n \to \infty$.
So every Cauchy sequence in $X$ converges.
So $X$ is a Banach space.
$\blacksquare$





