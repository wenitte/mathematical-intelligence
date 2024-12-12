# 

Source: https://proofwiki.org/wiki/Continuous_Function_with_Sequential_Limits_at_Infinity_has_Limit_at_Infinity

Theorem
Let $f : \openint 0 \infty \to \R$ be a continuous function such that: 

for each $x \in \openint 0 \infty$, the sequence $\sequence {\map f {n x} }$ converges to $0$.

Then:

$\ds \lim_{x \mathop \to \infty} \map f x = 0$


Proof
Fix $\epsilon > 0$. 
For each $n \in \N$, define $g_n : \openint 0 \infty \to \R$ by:

$\map {g_n} x = \map f {n x}$
From Composite of Continuous Mappings is Continuous, we have: 

$g_n$ is continuous for each $n$.
For each $m \in \N$, define the set $X_m$ by:

$X_m = \map { {g_m}^{-1} } {\closedint {- \epsilon} \epsilon} = \set {x \in \openint 0 \infty : \size {\map f {m x} } \le \epsilon}$
From Continuity Defined from Closed Sets, we have: 

$X_m$ is closed for each $m$.
Now, for each $n \in \N$, define: 

$\ds K_n = \bigcap_{i \mathop = n}^\infty X_i = \set {x \in \openint 0 \infty : \forall m \ge n: \size {\map f {m x} } \le \epsilon}$
From Intersection of Closed Sets is Closed, we have: 

$K_n$ is closed.

We now prove that: 

$\ds \openint 0 \infty = \bigcup_{n \mathop = 1}^\infty K_n$
Let:

$x \in \openint 0 \infty$
By hypothesis, we have that: 

the sequence $\sequence {\map f {m x} }$ converges.
That is, there exists some $N \in \N$ such that: 

$\size {\map f {m x} } \le \epsilon$
for $m \ge N$. 
That is: 

$x \in K_N$
so:

$\ds x \in \bigcup_{n \mathop = 1}^\infty K_n$
Since by construction we have: 

$\ds \bigcup_{n \mathop = 1}^\infty K_n \subseteq \openint 0 \infty$
We have, by the definition of set equality:

$\ds \openint 0 \infty = \bigcup_{n \mathop = 1}^\infty K_n$

From Space of Positive Real Numbers in Non-Meager:

$\openint 0 \infty$ is not meager.
That is: 

for some $n$, $K_n$ is not nowhere dense.
Fix this $n$, then we have: 

$\paren {\overline {K_n} }^\circ$ is non-empty.
That is, there exists some non-empty open interval $\openint c d$ such that: 

$\openint c d \subseteq \paren {\overline {K_n} }^\circ$
Since $\openint c d$ is non-empty, we have: 

$\closedint a b \subseteq \openint c d$
for some $a, b \in \R$.

For $x \in \closedint a b$, we have: 

$\size {\map f {m x} } \le \epsilon$
for $m \ge n$.
That is: 

$\size {\map f {\paren {n + j} x} } \le \epsilon$
for all integers $j \ge 0$ and $x \in \closedint a b$. 
Now, let:

$\ds K = \bigcup_{j \mathop = 0}^\infty \closedint {\paren {n + j} a} {\paren {n + j} b}$
For every $x \in K$, we have: 

$\size {\map f x} \le \epsilon$
It remains to show that $K$ contains a closed interval of the form $\hointr N \infty$.
Then: 

$\size {\map f x} \le \epsilon$
for $x \ge N$, so we would obtain the result.

Note that if: 

$j \ge \dfrac a {b - a}$
we have:

$\paren {n + j} b \ge \paren {n + j + 1} a$
So, for integer $j$ with:

$j \ge \dfrac a {b - a}$
we have: 

$\closedint {\paren {n + j} a} {\paren {n + j} b} \cap \closedint {\paren {n + j + 1} a} {\paren {n + j + 1} b} \ne \O$
Let: 

$\ds S = \bigcup_{j \mathop \in \N : j \mathop \ge \frac a {b - a} } \closedint {\paren {n + j} a} {\paren {n + j} b} \subseteq K$
From Union of Connected Sets with Common Point is Connected:

$S$ is connected.
From Subset of Real Numbers is Interval iff Connected:

$S$ is an interval.
Note that $S$ is unbounded above and contains its infimum.
So $S$ has the form: 

$S = \hointr N \infty$
for some $N \in \openint 0 \infty$, as required.
$\blacksquare$





