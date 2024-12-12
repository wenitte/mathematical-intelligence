# 

Source: https://proofwiki.org/wiki/Bounded_Function_Continuous_on_Open_Interval_is_Darboux_Integrable

Theorem
Let $f$ be a real function defined on an interval $\closedint a b$ such that $a < b$.
Let $f$ be continuous on $\openint a b$.
Let $f$ be bounded on $\closedint a b$.

Then $f$ is Darboux integrable on $\closedint a b$.


Proof
By Condition for Darboux Integrability, it suffices to show that, for a given strictly positive $\epsilon$, a subdivision $S$ of $\closedint a b$ exists such that:

$\map U S – \map L S < \epsilon$
where $\map U S$ and $\map L S$ are respectively the upper Darboux sum and lower Darboux sum of $f$ on $\closedint a b$ with respect to the subdivision $S$.

Since $f$ is bounded, a strictly positive bound $K$ exists for $f$ on $\closedint a b$.

Let a strictly positive $\epsilon$ be given, and choose a $\delta$ that satisfies:

$0 < \delta < \min \left({\dfrac \epsilon {6 K}, \dfrac {b - a} 2}\right)$

We have that $f$ is continuous on $\openint a b$.
As $\delta > 0$, $\closedint {a + \delta} {b - \delta}$ is a subset of $\openint a b$.
Thus $f$ is continuous on the interval $\closedint {a + \delta} {b - \delta}$.
By Continuous Real Function is Darboux Integrable, $f$ is Darboux integrable on $\closedint {a + \delta} {b - \delta}$.

Since $f$ is Darboux integrable on $\closedint {a + \delta} {b - \delta}$, there exists a subdivision $S_\delta$ of $\closedint {a + \delta} {b - \delta}$ that satisfies:

$\map U {S_\delta} – \map L {S_\delta} < \dfrac \epsilon 3$
where $\map U {S_\delta}$ and $\map L {S_\delta}$ are respectively the upper Darboux sum and lower Darboux sum of $f$ on $\closedint {a + \delta} {b - \delta}$ with respect to the subdivision $S_\delta$.

Define the following subdivision of $\closedint a b$:

$S = S_\delta \cup \set {a, b}$

The upper Darboux sum of $f$ on $\closedint a b$ with respect to $S$ is per definition:

$\map U S = M_a \delta + \map U {S_\delta} + M_b \delta$
where:

$M_a$ is the supremum of $f$ on $\closedint a {a + \delta}$
$M_b$ is the supremum of $f$ on $\closedint {b - \delta} b$.
$M_a$ and $M_b$ exist by the least upper bound property of the real numbers because $f$ is bounded on $\closedint a {a + \delta}$ and $\closedint {b - \delta} b$.
The lower Darboux sum of $f$ on $\closedint a b$ with respect to $S$ is per definition:

$\map L S = m_a \delta + \map L {S_\delta} + m_b \delta$
where:

$m_a$ is the infimum of $f$ on $\closedint a {a + \delta}$
$m_b$ is the infimum of $f$ on $\closedint {b - \delta} b$
$m_a$ and $m_b$ exist by the Continuum Property, because $f$ is bounded on $\closedint a {a + \delta}$ and $\closedint {b - \delta} b$.

Define the sum:














\(\ds U'\)

\(=\)







\(\ds K \delta + \map U {S_\delta} + K \delta\)




















\(\ds \)

\(\ge\)







\(\ds M_a \delta + \map U {S_\delta} + M_b \delta\)





by $K \ge M_a$ and $K \ge M_b$














\(\ds \)

\(=\)







\(\ds \map U S\)









Define the sum:














\(\ds L'\)

\(=\)







\(\ds -K \delta + \map L {S_\delta} - K \delta\)




















\(\ds \)

\(\le\)







\(\ds m_a \delta + \map L {S_\delta} + m_b \delta\)





by $-K \le m_a$ and $-K \le m_b$














\(\ds \)

\(=\)







\(\ds \map L S\)









Therefore, $U'$ and $L'$ satisfy:

$U' \ge \map U S$
$L' \le \map L S$
From these two inequalities follows:














\(\ds \map U S – \map L S\)

\(\le\)







\(\ds U' - L'\)




















\(\ds \)

\(=\)







\(\ds K \delta + \map U {S_\delta} + K \delta - \paren {-K \delta + \map L {S_\delta} -K \delta}\)





Definitions of $U'$ and $L'$














\(\ds \)

\(=\)







\(\ds 4 K \delta + \map U {S_\delta} - \map L {S_\delta}\)




















\(\ds \)

\(<\)







\(\ds 4 K \min \set {\dfrac \epsilon {6 K}, \dfrac {b - a} 2} + \map U {S_\delta} - \map L {S_\delta}\)





by $\delta < \min \set {\dfrac \epsilon {6 K}, \dfrac {b - a} 2}$














\(\ds \)

\(\le\)







\(\ds 4 K \dfrac \epsilon {6 K} + \map U {S_\delta} - \map L {S_\delta}\)





by $\min \set {\dfrac \epsilon {6 K}, \dfrac {b - a} 2} \le \dfrac \epsilon {6 K}$














\(\ds \)

\(<\)







\(\ds 4 K \dfrac \epsilon {6 K} + \dfrac \epsilon 3\)





by $\map U {S_\delta} - \map L {S_\delta} < \dfrac \epsilon 3$














\(\ds \)

\(=\)







\(\ds \frac {2 \epsilon} 3 + \frac \epsilon 3\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Hence:

$\map U S – \map L S < \epsilon$
$\blacksquare$





