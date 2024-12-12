# 

Source: https://proofwiki.org/wiki/Characterization_of_Absolutely_Continuous_Measures



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a measure on $\struct {X, \Sigma}$.
Let $\nu$ be a finite measure on $\struct {X, \Sigma}$. 

Then $\nu$ is absolutely continuous with respect to $\mu$ if and only if:

for each $\epsilon > 0$ there exists $\delta > 0$ such that for each $A \in \Sigma$ with $\map \mu A < \delta$, we have $\map \nu A < \epsilon$.


Proof
Necessary Condition
We prove the contrapositive, then the result follows from Rule of Transposition.
Suppose that: 

for some $\epsilon > 0$, there exists no $\delta > 0$ such that for each $A \in \Sigma$ with $\map \mu A < \delta$, we have $\map \nu A < \epsilon$.
That is: 

for some $\epsilon > 0$, for all $\delta > 0$ there exists $A \in \Sigma$ with $\map \mu A < \delta$ and $\map \nu A \ge \epsilon$.
We aim to show that: 

there exists $B \in \Sigma$ such that $\map \mu B = 0$ but $\map \nu B \ne 0$.
At which point we have: 

$\nu$ is not absolutely continuous with respect to $\mu$.
Fix one such $\epsilon$.
For each $k$, pick $A_k \in \Sigma$ such that: 

$\map \mu {A_k} < 2^{-k}$
and:

$\map \nu {A_k} \ge \epsilon$
We have: 














\(\ds \sum_{k \mathop = 1}^\infty \map \mu {A_k}\)

\(<\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {2^k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac 1 {2^k} - 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {1 - \frac 1 2} - 1\)





Sum of Infinite Geometric Sequence














\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(<\)







\(\ds \infty\)









So by the Borel-Cantelli Lemma, we have:

$\ds \map \mu {\limsup_{n \mathop \to \infty} A_n} = \map \mu {\bigcap_{i \mathop = 1}^\infty \bigcup_{j \mathop = i}^\infty A_j} = 0$
Since $\nu$ is finite, we also have: 

$\map \nu {B_1}$ is finite.
We have: 

$\ds \bigcup_{k \mathop = n}^\infty A_k = A_n \cup \bigcup_{k \mathop = n + 1}^\infty A_k$
From Set is Subset of Union, we obtain: 

$\ds \bigcup_{k \mathop = n + 1}^\infty A_k \subseteq \bigcup_{k \mathop = n}^\infty A_k$
So:

the sequence $\ds \sequence {\bigcup_{k \mathop = n}^\infty A_k}_{n \in \N}$ is increasing.
and from the definition of the limit of an decreasing sequence of sets, we have: 

$\ds \bigcup_{k \mathop = n}^\infty A_k \uparrow \bigcap_{n \mathop = 1}^\infty \bigcup_{k \mathop = n}^\infty A_k$
Write:

$\ds B_n = \bigcup_{k \mathop = n}^\infty A_k$
for each $n$ and:

$\ds B = \bigcap_{n \mathop = 1}^\infty \bigcup_{k \mathop = n}^\infty A_k$
We have: 

$\ds \map \mu {B_1} \le \paren {\frac 1 2}^{1 - 1} = 1$
in particular: 

$\map \mu {B_1}$ is finite.
Applying Measure of Limit of Decreasing Sequence of Measurable Sets on $\nu$ we obtain: 

$\ds \map \nu B = \lim_{n \mathop \to \infty} \map \nu {B_n}$
We have, from Set is Subset of Union:

$\ds A_n \subseteq \bigcup_{k \mathop = n}^\infty A_n = B_n$
So, from Measure is Monotone, we have: 

$\map \nu {A_n} \le \map \nu {B_n}$
So from Limits Preserve Inequalities:

$\ds \lim_{n \mathop \to \infty} \map \nu {B_n} \ge \lim_{n \mathop \to \infty} \map \nu {A_n}$
Recall that we have: 

$\map \nu {A_n} \ge \epsilon$
for each $n$, so:

$\ds \lim_{n \mathop \to \infty} \map \nu {B_n} \ge \epsilon$
from Lower and Upper Bounds for Sequences. 
We therefore have: 

$\map \nu B \ge \epsilon$
so:

$\map \nu B \ne 0$
So:

$\nu$ is not absolutely continuous with respect to $\mu$.
$\Box$


Sufficient Condition
Suppose that: 

for each $\epsilon > 0$ there exists $\delta > 0$ such that for each $A \in \Sigma$ with $\map \mu A < \delta$, we have $\map \nu A < \epsilon$.
Let $A \in \Sigma$ have $\map \mu A = 0$. 
We aim to show that $\map \nu A = 0$.
Let $\epsilon > 0$. 
Then there exists $\delta > 0$ such that for each $A \in \Sigma$ with $\map \mu A < \delta$, we have $\map \nu A < \epsilon$. 
Since $\map \mu A = 0$, we have $\map \mu A < \delta$, and so:

$\map \nu A < \epsilon$
Since $\epsilon > 0$ was arbitrary and $\map \nu A \ge 0$, we have: 

$\map \nu A = 0$
So:

$\nu$ is absolutely continuous with respect to $\mu$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.2$: Absolute Continuity: Lemma $4.2.1$




