# 

Source: https://proofwiki.org/wiki/Open_Unit_Interval_on_Rational_Number_Space_is_Bounded_but_not_Compact

Theorem
Let $\struct {\Q, \tau_d}$ be the rational number space under the Euclidean topology $\tau_d$.

Then:

$\openint 0 1 \cap \Q$ is totally bounded but not compact
where $\openint 0 1$ is the open unit interval.


Proof
We first show that $\openint 0 1 \cap \Q$ is totally bounded.
Let $\epsilon \in \R_{> 0}$.
By the Archimedean Property of $\R$:

$\exists n \in \N: \dfrac 1 n < \epsilon$
We pick the numbers $\dfrac i n \in \openint 0 1 \cap \Q$, where $i \in \N$ and $0 < i < n$.
Then for all $x \in \openint 0 1 \cap \Q$ and $x \ge \dfrac 1 n$:














\(\ds \inf_{0 \mathop < i \mathop < n} \map d {x, \frac i n}\)

\(=\)







\(\ds \inf_{0 \mathop < i \mathop < n} \size {x - \frac i n}\)





Definition of Euclidean Metric on Real Number Line














\(\ds \)

\(\le\)







\(\ds \size {\frac {n x} n - \frac {\floor {n x} } n }\)





$\floor {n x}$ is an integer strictly between $0$ and $n$














\(\ds \)

\(<\)







\(\ds \frac 1 n\)





Real Number minus Floor














\(\ds \)

\(<\)







\(\ds \epsilon\)









For $x \le \dfrac 1 n$:














\(\ds \inf_{0 \mathop < i \mathop < n} \map d {x, \frac i n}\)

\(=\)







\(\ds \inf_{0 \mathop < i \mathop < n} \size {x - \frac i n}\)





Definition of Euclidean Metric on Real Number Line














\(\ds \)

\(\le\)







\(\ds \frac 1 n - x\)




















\(\ds \)

\(\le\)







\(\ds \frac 1 n\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









This shows that $\openint 0 1 \cap \Q$ totally bounded.

From the Heine-Borel Theorem on a metric space, $\openint 0 1 \cap \Q$ is compact if and only if it is both totally bounded and complete.
From Rational Number Space is not Complete Metric Space it follows that $\openint 0 1 \cap \Q$ is not compact.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $30$. The Irrational Numbers: $10$




