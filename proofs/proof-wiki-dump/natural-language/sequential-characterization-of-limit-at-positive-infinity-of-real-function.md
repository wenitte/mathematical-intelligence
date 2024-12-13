# 

Source: https://proofwiki.org/wiki/Sequential_Characterization_of_Limit_at_Positive_Infinity_of_Real_Function



Theorem
Let $f : \R \to \R$ be a real function. 
Let $L$ be a real number. 

Then: 

$\ds \lim_{x \to \infty} \map f x = L$
if and only if: 

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$
where:

$\ds \lim_{x \mathop \to \infty} \map f x$ denotes the limit at $+\infty$ of $f$.


Corollary
$\ds \lim_{x \to \infty} \map f x = L$
if and only if:

for all increasing real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$
where:

$\ds \lim_{x \mathop \to \infty} \map f x$ denotes the limit at $+\infty$ of $f$.


Proof
Necessary Condition
Suppose that: 

$\ds \lim_{x \to \infty} \map f x = L$
Let $\sequence {x_n}_{n \mathop \in \N}$ be a real sequence with $x_n \to \infty$. 
Let $\epsilon > 0$. 
From the definition of limit at infinity, we have:

there exists $M > 0$ such that for all $x > M$ we have $\size {\map f x - L} < \epsilon$.
Since $\sequence {x_n}_{n \mathop \in \N}$ diverges to $+\infty$, we have: 

there exists $N \in \N$ such that $x_n > M$ for all $n \ge N$.
That is, for all $n \ge N$, we have: 

$\size {\map f {x_n} - L} < \epsilon$
Since $\epsilon$ was arbitrary, we have: 

$\map f {x_n} \to L$
Since $\sequence {x_n}_{n \mathop \in \N}$ was arbitrary: 

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
So, if: 

$\ds \lim_{x \to \infty} \map f x = L$
then:

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
$\Box$

Sufficient Condition
We prove the contrapositive. 
Suppose that it is not the case that: 

$\ds \lim_{n \mathop \to \infty} \map f x = L$
We show that: 

there exists a real sequence $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ but such that $\sequence {\map f {x_n} }_{n \mathop \in \N}$ does not converge to $L$.
Then: 

there exists some $\epsilon > 0$ such that for all $M > 0$ there exists $x > M$ such that $\size {\map f x - L} \ge \epsilon$.
We construct $\sequence {x_n}_{n \mathop \in \N}$ inductively. 
Pick $x_1$ such that $x_1 > 1$ and: 

$\size {\map f {x_1} - L} \ge \epsilon$
Given $x_1, x_2, \ldots, x_{n - 1}$, pick $x_n$ so that: 

$x_n > \max \set {n, x_1, x_2, \ldots, x_{n - 1} } \ge x_{n - 1}$
and: 

$\size {\map f {x_n} - L} \ge \epsilon$
Then $\sequence {x_n}_{n \mathop \in \N}$ is increasing. 
We also have: 

$x_n > n$ for each $n$
so $\sequence {x_n}_{n \mathop \in \N}$ is unbounded above. 
From Unbounded Monotone Sequence Diverges to Infinity: Increasing, we therefore have: 

$x_n \to \infty$
Since: 

$\size {\map f {x_n} - L} \ge \epsilon$
there exists no $N \in \N$ such that: 

$\size {\map f {x_n} - L} < \epsilon$
for each $n \ge N$.
So:

$\sequence {\map f {x_n} }_{n \mathop \in \N}$ does not converge to $L$.
We conclude that if it is not the case that: 

$\ds \lim_{x \mathop \to \infty} \map f x = L$
then:

there exists a real sequence $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ but such that $\sequence {\map f {x_n} }_{n \mathop \in \N}$ does not converge to $L$.
So, if: 

$\ds \lim_{x \mathop \to \infty} \map f x = L$
then: 

for all real sequences $\sequence {x_n}_{n \mathop \in \N}$ with $x_n \to \infty$ we have $\map f {x_n} \to L$.
$\blacksquare$





