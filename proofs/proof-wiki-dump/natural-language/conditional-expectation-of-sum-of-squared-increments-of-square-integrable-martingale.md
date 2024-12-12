# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_of_Sum_of_Squared_Increments_of_Square-Integrable_Martingale



Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $\sequence {X_t}_{t \ge 0}$ be a continuous-time martingale such that $\size {X_t}^2$ is integrable for each $t \in \hointr 0 \infty$.
Let $s, t \in \hointr 0 \infty$ be such that $0 \le s < t$. 
Let:

$s = t_0 < t_1 < \ldots < t_n = t$
be a finite subdivision of $\closedint s t$. 

Then: 

$\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2 \mid \FF_s} = \expect {X_t^2 - X_s^2 \mid \FF_s} = \expect {\paren {X_t - X_s}^2 \mid \FF_s}$ almost surely.


Corollary
$\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2} = \expect {X_t^2 - X_s^2} = \expect {\paren {X_t - X_s}^2}$


Proof
We have, for $i < j$: 














\(\ds \expect {\paren {X_{t_j} - X_{t_i} }^2 \mid \FF_{t_i} }\)

\(=\)







\(\ds \expect {X_{t_j}^2 - 2 X_{t_j} X_{t_i} + X_{t_i}^2 \mid \FF_{t_i} }\)




















\(\ds \)

\(=\)







\(\ds \expect {X_{t_j}^2 \mid \FF_{t_i} } - 2 \expect {X_{t_j} X_{t_i} \mid \FF_{t_i} } + \expect {X_{t_i}^2 \mid \FF_{t_i} }\)





Conditional Expectation is Linear



Since $\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-martingale, we have: 

$X_{t_i}$ is $\FF_{t_i}$-measurable
and so: 

$2 \expect {X_{t_j} X_{t_i} \mid \FF_{t_i} } = 2 X_{t_i} \expect {X_{t_j} \mid \FF_{t_i} }$
from Rule for Extracting Random Variable from Conditional Expectation of Product.
Using the martingale property, we have: 

$\expect {X_{t_j} \mid \FF_{t_i} } = X_{t_i}$
From Conditional Expectation of Measurable Random Variable, we have: 

$\expect {X_{t_i}^2 \mid \FF_{t_i} } = X_{t_i}^2$
Putting this together we have: 

$\expect {\paren {X_{t_j} - X_{t_i} }^2 \mid \FF_{t_i} } = \expect {X_{t_j}^2 \mid \FF_{t_i} } - 2 X_{t_i}^2 + X_{t_i}^2 = \expect {X_{t_j}^2 \mid \FF_{t_i} } - X_{t_i}^2$
Since $\expect {X_{t_i}^2 \mid \FF_{t_i} } = X_{t_i}^2$, we have: 

$\expect {\paren {X_{t_j} - X_{t_i} }^2 \mid \FF_{t_i} } = \expect {X_{t_j}^2 - X_{t_i}^2 \mid \FF_{t_i} }$
from Conditional Expectation is Linear.
Setting $i = 0$, $j = n$, we have: 

$\expect {X_t^2 - X_s^2 \mid \FF_s} = \expect {\paren {X_t - X_s}^2 \mid \FF_s}$
We can also compute:














\(\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i} - X_{t_{i - 1} } }^2 \mid \FF_s}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \expect {\paren {X_{t_i} - X_{t_{i - 1} } }^2 \mid \FF_s}\)





Conditional Expectation is Linear














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \expect {\expect {\paren {X_{t_i} - X_{t_{i - 1} } }^2 \mid \FF_{t_{i - 1} } } \mid \FF_s}\)





Tower Property of Conditional Expectation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \expect {\expect {X_{t_i}^2 - X_{t_{i - 1} }^2 \mid \FF_{t_{i - 1} } } \mid \FF_s}\)





by previous computation














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \expect {X_{t_i}^2 - X_{t_{i - 1} }^2 \mid \FF_s}\)





Tower Property of Conditional Expectation














\(\ds \)

\(=\)







\(\ds \expect {\sum_{i \mathop = 1}^n \paren {X_{t_i}^2 - X_{t_{i - 1} }^2} \mid \FF_s}\)





Conditional Expectation is Linear














\(\ds \)

\(=\)







\(\ds \expect {X_{t_n}^2 - X_{t_0}^2 \mid \FF_s}\)





the sum telescopes














\(\ds \)

\(=\)







\(\ds \expect {X_t^2 - X_s^2 \mid \FF_s}\)









completing the proof.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): Proposition $3.14$




