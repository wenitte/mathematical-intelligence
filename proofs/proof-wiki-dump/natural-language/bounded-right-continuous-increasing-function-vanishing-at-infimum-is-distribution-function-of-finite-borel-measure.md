# 

Source: https://proofwiki.org/wiki/Bounded_Right-Continuous_Increasing_Function_Vanishing_at_Infimum_is_Distribution_Function_of_Finite_Borel_Measure

Theorem
Let $K$ be a closed interval.
Let $F : K \to \R$ be a bounded right-continuous increasing function such that:

$\ds \lim_{x \mathop \to \inf K} \map F x = 0$
and:

$\ds \lim_{x \mathop \to \sup K} \map F x = M \in \hointr 0 \infty$

Then there exists a finite Borel measure $\mu$ on $K$ such that the distribution function $F_\mu$ of $\mu$ is equal to $F$. 
Further, $\map \mu K = M$. 


Corollary
Let $K$ be a closed interval with $\inf K > -\infty$. 
Let $m \ge 0$. 
Let $F : K \to \R$ be a bounded right-continuous increasing function such that:

$\ds \lim_{x \mathop \to \inf K} \map F x = m$
and:

$\ds \lim_{x \mathop \to \sup K} \map F x = M \in \hointr 0 \infty$

Then there exists a finite Borel measure $\mu$ on $K$ such that the distribution function $F_\mu$ of $\mu$ is equal to $F$. 
Further, $\map \mu K = M$ and $\map \mu {\set {\inf K} } = m$. 


Proof
If $M = 0$, then we can take $\mu = 0$. 
Hence suppose that $M \ne 0$.
Note now that from Limit of Monotone Real Function, we have:

$\ds M = \sup_{x \mathop \in K} \map F x$
For $t \in \openint 0 M$, define:

$\map Q t = \inf \set {x \in K : \map F x \ge t}$
We first show that $\map Q t \in \openint {\inf K} {\sup K}$ for each $t \in \openint 0 M$. 
Let $0 < \epsilon < M$.
Since:

$\ds \lim_{x \mathop \to \sup K} \map F x = M$
there exists $N_1 > 0$ such that:

$\size {\map F x - M} < M - \epsilon$ for $N_1 < x \le \sup K$.
Then we have:

$\map F x - M >-M + \epsilon$ for $\sup K > x > N_1$
and so:

$\map F x > \epsilon$ for $\sup K > x > N_1$.
On the other hand since:

$\ds \lim_{x \mathop \to \inf K} \map F x = 0$
there exists $N_2 > 0$ such that:

$\map F x < \epsilon$ for $\inf K \le x < -N_2$.
Hence, since $F$ is increasing, we must have:

$\inf \set {x \in K : \map F x \ge \epsilon} \in \openint {-N_2} {N_1} \subseteq \openint {\inf K} {\sup K}$
So $\map Q t \in \openint {\inf K} {\sup K}$ for each $t \in \openint 0 M$.
Further, since $K$ is closed, we have $\map Q t \in K$ for each $t \in \openint 0 M$.

We now argue that $Q : \openint 0 M \to K$ is measurable.
Let $t, s \in \openint 0 M$ be such that $s < t$. 
Then whenever $x \in K$ has $\map F x > t$, we have $\map F x > s$.
Hence:

$\set {x \in K : \map F x > t} \subseteq \set {x \in K : \map F x > s}$
Hence from Infimum of Subset:

$\inf \set {x \in K : \map F x > t} \ge \inf \set {x \in K : \map F x > s}$
So $\map Q t \ge \map Q s$ whenever $s < t$. 
Hence $Q$ is increasing.
From Monotone Real Function is Measurable, $Q$ is measurable.

Let $\lambda$ be the Lebesgue measure on $\openint 0 M$.
Let $\mu = Q_\ast \lambda$ be the pushforward measure of $\lambda$ under $Q$.
From Pushforward Measure is Measure, $\mu$ is a measure on the Borel $\sigma$-algebra $\map \BB K$.
We show that $\mu$ satisfies the requirements of the theorem.
We have $Q^{-1} \sqbrk K = \openint 0 M$ and hence $\map \mu K = \map \lambda {Q^{-1} \sqbrk K} = M$.
So $\mu$ is a finite Borel measure on $K$ with $\map \mu K = M$. 

Let $F_\mu$ be the distribution function of $\mu$.
We show that $F_\mu = F$. 
Let $x \in K$.
We have:














\(\ds \map {F_\mu} x\)

\(=\)







\(\ds \map \mu {\hointl {-\infty} x \cap K}\)




















\(\ds \)

\(=\)







\(\ds \map \lambda {\set {t \in \openint 0 M : \map Q t \le x} }\)





Definition of Pushforward Measure



We first show that:

$\map F {\map Q t} \ge t$
By the definition of $\map Q t$, there exists a sequence $\sequence {x_n}_{n \mathop \in \N} \subseteq K$ such that:

$\map F {x_n} \ge t$ for each $n \in \N$
and:

$x_n \to \map Q t$
By the definition of $\map Q t$, we have $x_n \ge \map Q t$ for each $n \in \N$.
From Limit of Function by Convergent Sequences: Corollary, using the right continuity of $F$, we have:

$\map F {\map Q t} \ge t$
From the definition of infimum, we have $\map F s < t$ for $t < \map Q t$.
We now show that:

$\set {t \in \openint 0 M : \map Q t \le x} = \hointl 0 {\map F x}$
Let $t \in \openint 0 M$ be such that $\map Q t \le x$. 
From the above, it follows that $\map F x \ge t$, and hence $t \in \hointl 0 {\map F x}$. 
Conversely, suppose that $0 < t \le \map F x$.
Since $\map F {\map Q t} \ge t$ and $F$ is increasing, we have $x \ge \map Q t$.
We conclude:

$\set {t \in \openint 0 M : \map Q t \le x} = \hointl 0 {\map F x}$
We therefore have:

$\map {F_\mu} x = \map \lambda {\set {t \in \openint 0 M : \map Q t \le x} } = \map \lambda {\hointl 0 {\map F x} } = \map F x$
for $x \in \R$.
$\blacksquare$





