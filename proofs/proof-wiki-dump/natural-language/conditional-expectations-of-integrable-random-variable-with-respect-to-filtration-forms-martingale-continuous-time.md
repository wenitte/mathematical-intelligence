# 

Source: https://proofwiki.org/wiki/Conditional_Expectations_of_Integrable_Random_Variable_with_respect_to_Filtration_forms_Martingale/Continuous_Time

Theorem
Let $\struct {\Omega, \Sigma, \sequence {\FF_t}_{t \ge 0}, \Pr}$ be a continuous-time filtered probability space.
Let $Z$ be an integrable random variable.
For each $t \in \hointr 0 \infty$, let $\expect {Z \mid \FF_t}$ be a version of the conditional expectation of $Z$ given $\FF_t$. 
For each $t \in \hointr 0 \infty$ set:

$X_t = \expect {Z \mid \FF_t}$

Then $\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-martingale. 


Proof
From the definition of the conditional expectation of $Z$ given $\FF_t$, we have that: 

$X_t$ is $\FF_t$-measurable for each $t \in \hointr 0 \infty$.
So $\sequence {X_t}_{t \ge 0}$ is $\sequence {\FF_t}_{t \ge 0}$-adapted.
Now let $s, t \in \hointr 0 \infty$ have $s \le t$. 
Then we have: 














\(\ds \expect {X_t \mid \FF_s}\)

\(=\)







\(\ds \expect {\expect {Z \mid \FF_t} \mid \FF_s}\)




















\(\ds \)

\(=\)







\(\ds \expect {Z \mid \FF_s}\)





applying Tower Property of Conditional Expectation, since $\FF_s \subseteq \FF_t$














\(\ds \)

\(=\)







\(\ds X_s\)









So $\sequence {X_t}_{t \ge 0}$ is a $\sequence {\FF_t}_{t \ge 0}$-martingale.
$\blacksquare$


Sources
2016: Jean-François Le Gall: Brownian Motion, Martingales, and Stochastic Calculus ... (previous) ... (next): $3.3$: Continuous Time Martingales and Supermartingales




