# 

Source: https://proofwiki.org/wiki/Continuous_Real_Function_is_Darboux_Integrable



Theorem
Let $f$ be a real function which is continuous on the closed interval $\closedint a b$.
Then $f$ is Darboux integrable on $\closedint a b$.


Proof
We have the result $f$ is bounded by Continuous Real Function is Bounded.
By Condition for Darboux Integrability, it suffices to show that for all $\epsilon > 0$, there exists a subdivision $P$ of $\closedint a b$ such that:

$\map U P – \map L P < \epsilon$
where $\map U P$ and $\map L P$ denote the upper Darboux sum and lower Darboux sum of $f$ on $\closedint a b$ belonging to the subdivision $P$.
Let $\epsilon > 0$.
We have the result Continuous Function on Closed Real Interval is Uniformly Continuous.
By the definition of uniform continuity, there exists a $\delta > 0$ such that if $x, y \in \closedint a b$ are such that $\size {x – y} < \delta$, then:

$\size {\map f x – \map f y} < \dfrac \epsilon {b - a}$
Let $P = \set {x_0, x_1, x_2, \ldots, x_n}$ be a subdivision of $\closedint a b$ such that:

$\ds \max_{1 \mathop \le k \mathop \le n} \paren {x_k – x_{k - 1} } < \delta$
For all integers $k$ satisfying $1 \le k \le n$, it follows from the Heine-Borel theorem that $\closedint {x_{k - 1} } {x_k}$ is compact.
So we can apply Corollary 3 to Continuous Image of Compact Space is Compact to conclude that there exist $u_k, v_k \in \closedint {x_{k - 1} } {x_k}$ such that:














\(\ds \map f {u_k}\)

\(=\)







\(\ds \sup \set {\map f x: x \in \closedint {x_{k - 1} } {x_k} }\)




















\(\ds \map f {v_k}\)

\(=\)







\(\ds \inf \set {\map f x: x \in \closedint {x_{k - 1} } {x_k} }\)










By assumption, $x_k – x_{k - 1} < \delta$, so:

$\size {u_k – v_k} < \delta$
It follows from the definition of $\delta$ that:

$\ds \map f {u_k} – \map f {v_k} < \frac \epsilon {b – a}$
This gives:














\(\ds \map U P – \map L P\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {u_k} \paren {x_k – x_{k - 1} } - \sum_{k \mathop = 1}^n \map f {v_k} \paren {x_k – x_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\map f {u_k} – \map f {v_k} } \paren {x_k – x_{k - 1} }\)




















\(\ds \)

\(<\)







\(\ds \frac \epsilon {b – a} \sum_{k \mathop = 1}^n \paren {x_k – x_{k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \frac \epsilon {b – a} \paren {x_n – x_0}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









as desired.
$\blacksquare$


Notes

This page has been identified as a candidate for refactoring of basic complexity.In particular: Separate page about this concept of Definition:Upper Darboux Integral and Definition:Lower Darboux Integral, which can then be linked to. Be sure to include {{SourceReview}} afterwardsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
If $f$ is not continuous on $\closedint a b$ (while still bounded), then the lower and upper integral do not necessarily have the same result. But they might.


Sources
1953: Walter Rudin: Principles of Mathematical Analysis ... (next): $6.8$
1970: Arne Broman: Introduction to Partial Differential Equations ... (previous) ... (next): Chapter $1$: Fourier Series: $1.1$ Basic Concepts: $1.1.3$ Definitions
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.5$: The Riemann Integral




