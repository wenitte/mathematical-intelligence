# 

Source: https://proofwiki.org/wiki/Existence_of_Integral_on_Union_of_Adjacent_Intervals



Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$ where $a < b$.
Let $c$ be a point in $\openint a b$.

Then:

$f$ is Darboux integrable on $\closedint a c$ and $\closedint c b$
if and only if:

$f$ is Darboux integrable on $\closedint a b$.


Proof
Necessary Condition
We need to prove that $f$ is Darboux integrable on $\closedint a b$.
To do this it suffices to show that for all $\epsilon > 0$, there exists a subdivision $S$ of $\closedint a b$ such that $\map U S – \map L S < \epsilon$.
Here, $\map U S$ and $\map L S$ are, respectively, the upper Darboux sum and lower Darboux sum of $f$ on $\closedint a b$ with respect to the subdivision $S$.

Let a strictly positive $\epsilon$ be given.
Since $f$ is Darboux integrable on $\closedint a c$, we know that a subdivision $S_1$ of $\closedint a c$ exists such that $\map U {S_1} – \map L {S_1} < \dfrac \epsilon 2$.
Since $f$ is Darboux integrable on $\closedint c b$, we know that a subdivision $S_2$ of $\closedint c b$ exists such that $\map U {S_2} – \map L {S_2} < \dfrac \epsilon 2$.

Define the subdivision $S = S_1 \cup S_2$.
We observe that $S$ is a subdivision of $\closedint a b$.

By the definition of upper Darboux sum:














\(\ds \map U S\)

\(=\)







\(\ds \map U {S_1} + \map U {S_2}\)





since $S = S_1 \cup S_2$ and $S_1$ and $S_2$ are adjacent



Also, by the definition of lower Darboux sum:














\(\ds \map L S\)

\(=\)







\(\ds \map L {S_1} + \map L {S_2}\)





since $S = S_1 \cup S_2$ and $S_1$ and $S_2$ are adjacent



These two equations give:














\(\ds \map U S – \map L S\)

\(=\)







\(\ds \map U {S_1} + \map U {S_2} – \paren {\map L {S_1} + \map L {S_2} }\)




















\(\ds \)

\(=\)







\(\ds \map U {S_1} – \map L {S_1} + \map U {S_2} – \map L {S_2}\)




















\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)





since $\map U {S_1} – \map L {S_1} < \dfrac \epsilon 2$ and $\map U {S_2} – \map L {S_2} < \dfrac \epsilon 2$














\(\ds \)

\(=\)







\(\ds \epsilon\)









This shows that $S$ satisfies $\map U S – \map L S < \epsilon$.
We conclude from this that $f$ is Darboux integrable on $\closedint a b$ since $S$ is a subdivision of $\closedint a b$.
$\Box$


Sufficient Condition
We need to prove that $f$ is Darboux integrable on $\closedint a c$ and $\closedint c b$.

Let a strictly positive $\epsilon$ be given.
The Darboux integrability of $f$ on $\closedint a b$ implies that a subdivision $P$ of $\closedint a b$ exists such that $\map U P – \map L P < \epsilon$.
Here, $\map U P$ and $\map L P$ are, respectively, the upper Darboux sum and lower Darboux sum of $f$ on $\closedint a b$ with respect to the subdivision $P$.

Define the subdivision $S = P \cup \set c$.
We observe that $S$ equals $P$ if $c$ is a point in $P$, otherwise $S$ is a finer subdivision than $P$.

We have














\(\ds \epsilon\)

\(>\)







\(\ds \map U P – \map L P\)




















\(\ds \)

\(\ge\)







\(\ds \map U S – \map L P\)





as $\map U S \le \map U P $ by the definition of upper Darboux sum and the fact that $S$ refines $P$














\(\ds \)

\(\ge\)







\(\ds \map U S – \map L S\)





as $\map L S \ge \map L P $ by the definition of lower Darboux sum and the fact that $S$ refines $P$



This shows that $S$ satisfies $\map U S – \map L S < \epsilon$.

Define:

$S_1 = S \cap \set {x: x \le c}$
$S_2 = S \cap \set {x: x \ge c}$
We observe:

$S_1$ is a subdivision of $\closedint a c$.
$S_2$ is a subdivision of $\closedint c b$.
$S_1$ and $S_2$ are adjacent.
The union of $S_1$ and $S_2$ equals $S$.

We get by the definition of upper Darboux sum:














\(\ds \map U S\)

\(=\)







\(\ds \map U {S_1} + \map U {S_2}\)





since $S = S_1 \cup S_2$ and $S_1$ and $S_2$ are adjacent



Also, by the definition of lower Darboux sum:














\(\ds \map L S\)

\(=\)







\(\ds \map L {S_1} + \map L {S_2}\)





since $S = S_1 \cup S_2$ and $S_1$ and $S_2$ are adjacent




We have














\(\ds \epsilon\)

\(>\)







\(\ds \map U S – \map L S\)




















\(\ds \)

\(=\)







\(\ds \map U {S_1} + \map U {S_2} – \paren {\map L {S_1} + \map L {S_2} }\)





as $\map U S = \map U {S_1} + \map U {S_2}$ and $\map L S = \map L {S_1} + \map L {S_2}$














\(\ds \)

\(=\)







\(\ds \map U {S_1} – \map L {S_1} + \map U {S_2} – \map L {S_2}\)




















\(\ds \)

\(\ge\)







\(\ds \map U {S_1} – \map L {S_1}\)





as $\map U {S_2} – \map L {S_2} \ge 0$ by the definitions of upper Darboux sum and lower Darboux sum



This shows that $S_1$ satisfies $\map U {S_1} – \map L {S_1} < \epsilon$.
A similar deduction focusing on $S_2$ instead of $S_1$ shows that $S_2$ satisfies $\map U {S_2} – \map L {S_2} < \epsilon$.

$\map U {S_1} – \map L {S_1} < \epsilon$ gives that $f$ is Darboux integrable on $\closedint a c$ since $S_1$ is a subdivision of $\closedint a c$.
$\map U {S_2} – \map L {S_2} < \epsilon$ gives that $f$ is Darboux integrable on $\closedint c b$ since $S_2$ is a subdivision of $\closedint c b$.
$\blacksquare$





