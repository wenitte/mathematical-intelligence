# 

Source: https://proofwiki.org/wiki/Measurable_Set_with_Negative_Measure_has_Negative_Subset

Theorem
Let $\struct {X, \Sigma}$ be a measurable space. 
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$.
Let $A \in \Sigma$ have: 

$-\infty < \map \mu A < 0$

Then:

there exists a $\mu$-negative set $B$ such that $B \subseteq A$ and $\map \mu B \le \map \mu A$.


Proof
Let: 

$\delta_1 = \sup \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A}$
possibly infinite. 
Since $\O \in \Sigma$ and $\O \subseteq A$, we have: 

$\map \mu \O = 0 \in \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A}$
and so, from the definition of supremum, we have: 

$\delta_1 \ge 0$.
Again applying the definition of supremum, we can pick $A_1 \in \Sigma$ so that: 

$\ds \map \mu {A_1} \ge \min \set {\frac 1 2 \delta_1, 1} \ge 0$
We now define $\sequence {\delta_n}_{n \mathop \in \N}$ and $\sequence {A_n}_{n \mathop \in \N}$ recursively.
For $n > 1$, define: 

$\ds \delta_n = \sup \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^{n - 1} A_i}$
Since: 

$\ds \O \subseteq A \setminus \paren {\bigcup_{i = 1}^{n - 1} A_i}$
we have: 

$\ds 0 \in \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^{n - 1} A_i}$
so, from the definition of supremum, we have: 

$\delta_n \ge 0$
Now pick $A_n \in \Sigma$ so that: 

$\ds A_n \subseteq A \setminus \paren {\bigcup_{i = 1}^{n - 1} A_i}$
and:

$\ds \map \mu {A_n} \ge \min \set {\frac 1 2 \delta_n, 1} \ge 0$
Since:

$\ds A_n \not \in \bigcup_{i = 1}^{n - 1} A_i$
we have that: 

$A_n$ is disjoint to $A_1, A_2, \ldots, A_{n - 1}$

Now define: 

$\ds A_\infty = \bigcup_{i = 1}^\infty A_i$
and $B = A \setminus A_\infty$.
As noted in the construction, we have that each $A_n$ is disjoint. 
That is: 

whenever $i \ne j$, we have $A_i \cap A_j = \O$.
So, since a signed measure is countably additive, we have: 

$\ds \map \mu {A_\infty} = \sum_{i \mathop = 1}^\infty \map \mu {A_n}$
Since $\map \mu {A_n} \ge 0$ for each $n$, we therefore have:

$\map \mu {A_\infty} \ge 0$
We then have:














\(\ds \map \mu A\)

\(=\)







\(\ds \map \mu {A_\infty \cup \paren {A \setminus A_\infty} }\)




















\(\ds \)

\(=\)







\(\ds \map \mu {A_\infty} + \map \mu {A \setminus A_\infty}\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \map \mu {A_\infty} + \map \mu B\)





since $B = A \setminus A_\infty$














\(\ds \)

\(\ge\)







\(\ds \map \mu B\)





since $\map \mu {A_\infty} \ge 0$




We now show that $B$ is $\mu$-negative. 
Since $\map \mu A$ is finite, we have that:

$\map \mu {A_\infty}$ is finite.
So: 

the series $\ds \sum_{i \mathop = 1}^\infty \map \mu {A_i}$ converges.
So, from Terms in Convergent Series Converge to Zero:

$\map \mu {A_n} \to 0$ as $n \to \infty$.
Since: 

$\ds \map \mu {A_n} \ge \frac {\delta_n} 2$
we have: 

$0 \le \delta_n \le 2 \map \mu {A_n}$
So: 

$\delta_n \to 0$ as $n \to \infty$.
Let $E \in \Sigma$ have $E \subseteq B$. 
We want to show that $\map \mu E \le 0$ so that $B$ is $\mu$-negative.
Recalling that $B = A \setminus A_\infty$, we have: 

$\ds E \in \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^\infty A_i}$
Since we have: 

$\ds A \setminus \bigcup_{i = 1}^\infty A_i \subseteq A \setminus \bigcup_{i = 1}^{n - 1} A_i$
we have the inclusion:

$\ds \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^\infty A_i} \subseteq \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^{n - 1} A_i}$
So, we obtain: 

$\ds E \in \set {\map \mu E : E \in \Sigma \text { and } E \subseteq A \setminus \bigcup_{i = 1}^{n - 1} A_i}$
for each $n$. 
From the definition of supremum, this gives: 

$\map \mu E \le \delta_n$
for each $n$.
Taking $n \to \infty$, we obtain: 

$\map \mu E \le 0$
as required.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.1$




