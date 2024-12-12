# 

Source: https://proofwiki.org/wiki/Condition_for_Darboux_Integrability



Theorem
Let $\closedint a b$ be a closed real interval.
Let $f$ be a bounded real function defined on $\closedint a b$.

Then $f$ is Darboux integrable if and only if:

for every $\epsilon \in \R_{>0}$, there exists a finite subdivision $S$ of $\closedint a b$ such that $\map U S – \map L S < \epsilon$
where

$\map U S$ is the upper Darboux sum of $f$ on $\closedint a b$ with respect to $S$
$\map L S$ is the lower Darboux sum of $f$ on $\closedint a b$ with respect to $S$


Proof
Necessary Condition
Let $f$ be Darboux integrable.
Let $\epsilon \in \R_{>0}$ be given.
It is to be proved that a finite subdivision $S$ of $\closedint a b$ exists such that:

$\map U S – \map L S < \epsilon$

As $f$ is Darboux integrable:

$\ds \int_a^b \map f x \rd x$ exists.
By the definition of the Darboux integral:

the lower Darboux integral $\ds \underline {\int_a^b} \map f x \rd x$ exists.
Thus by the definition of lower Darboux integral:

$\sup_P \map L P$ exists
where:

$\map L P$ denotes the lower Darboux sum of $f$ on $\closedint a b$ with respect to the finite subdivision $P$
$\sup_P \map L P$ denotes the supremum for $\map L P$.

Therefore by Supremum of Subset of Real Numbers is Arbitrarily Close:

a finite subdivision $S_1$ of $\closedint a b$ exists, satisfying:
$\sup_P \map L P - \map L {S_1} < \dfrac \epsilon 2$

In a similar way:
By the definition of the Darboux integral:

the upper Darboux integral $\ds \overline {\int_a^b} \map f x \rd x$ exists.
Thus by the definition of upper Darboux integral:

$\inf_P \map U P$ exists
where:

$\map U P$ denotes the upper Darboux sum of $f$ on $\closedint a b$ with respect to the finite subdivision $P$
$\inf_P \map U P$ denotes the infimum for $\map U P$.

Therefore by Infimum of Subset of Real Numbers is Arbitrarily Close:

a finite subdivision $S_2$ of $\closedint a b$ exists, satisfying:
$\map U {S_2} - \inf_P \map U P < \dfrac \epsilon 2$

Now let $S := S_1 \cup S_2$ be defined.
We observe:

$S$ is either equal to $S_1$ or finer than $S_1$
$S$ is either equal to $S_2$ or finer than $S_2$
We find:

$\map L S \ge \map L {S_1}$ by Lower Sum of Refinement
$\map U S \le \map U {S_2}$ by Upper Sum of Refinement

Recall that by the definition of Darboux integrable:

$\ds \overline {\int_a^b} \map f x \rd x = \underline {\int_a^b} \map f x \rd x$

Hence we have:














\(\ds \map U S – \map L S\)

\(\le\)







\(\ds \map U {S_2} – \map L S\)





as $\map U S \le \map U {S_2}$














\(\ds \)

\(\le\)







\(\ds \map U {S_2} – \map L {S_1}\)





as $\map L S \ge L \map L {S_1}$














\(\ds \)

\(=\)







\(\ds \map U {S_2} - \overline {\int_a^b} \map f x \rd x + \overline {\int_a^b} \map f x \rd x – \map L {S_1}\)




















\(\ds \)

\(=\)







\(\ds \map U {S_2} - \overline{\int_a^b} \map f x \rd x + \underline{\int_a^b} \map f x \rd x – \map L {S_1}\)





as $\ds \overline {\int_a^b} \map f x \rd x = \underline {\int_a^b} \map f x \rd x$














\(\ds \)

\(=\)







\(\ds \map U {S_2} - \inf_P \map U P + \sup_P \map L P – \map L {S_1}\)





Definition of Upper Darboux Integral and Definition of Lower Darboux Integral














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \sup_P \map L P – \map L {S_1}\)





as $\map U {S_2} - \inf_P \map U P < \dfrac \epsilon 2$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





as $\sup_P \map L P - \map L {S_1} < \dfrac \epsilon 2$














\(\ds \)

\(=\)







\(\ds \epsilon\)









$\Box$


Sufficient Condition
Let $\epsilon \in \R_{>0}$ be given.
Let $f$ be such that:

there exists a finite subdivision $S$ of $\closedint a b$ such that $\map U S – \map L S < \epsilon$.
We need to prove that $f$ is Darboux integrable.

First we show that $\inf_P \map U P$ exists.
Let $T$ be defined as:

$T := \leftset {\map U P: P}$ is a finite subdivision of $\rightset {\closedint a b}$
By:

$\map U S – \map L S < \epsilon$
we know that $\map U S$ exists.
From this we conclude that $T$ is non-empty.
Because $f$ is bounded, we know by the definition of upper Darboux sum that $T$ is bounded.
From the Continuum Property it follows that $\inf_P \map U P$ exists. 

Next we show that $\sup_P \map L P$ exists.

We do this similarly to how we showed that $\inf_P \map U P$ exists by focusing on lower Darboux sums instead of upper Darboux sums:
We find that $\leftset {\map L P: P}$ is a finite subdivision of $\rightset {\closedint a b}$ is non-empty and bounded.
From the Continuum Property it follows that $\sup_P \map L P$ exists.

Observe:

$\inf_P \map U P \le \map U S$ by the definition of infimum
$\sup_P \map L P \ge \map L S$ by the definition of supremum

We have:














\(\ds \inf_P \map U P - \sup_P \map L P\)

\(\le\)







\(\ds \map U S - \sup_P \map L P\)





by $\inf_P \map U P \le \map U S$














\(\ds \)

\(\le\)







\(\ds \map U S - \map L S\)





by $\sup_P \map L P \ge \map L S$














\(\ds \)

\(<\)







\(\ds \epsilon\)





by $\map U S – \map L S < \epsilon$



Also:














\(\ds \sup_P \map L P - \inf_P \map U P\)

\(\le\)







\(\ds \map U S - \inf_P \map U P\)





Supremum of Lower Sums Never Greater than Upper Sum














\(\ds \)

\(\le\)







\(\ds \map U S - \map L S\)





Infimum of Upper Sums Never Smaller than Lower Sum














\(\ds \)

\(<\)







\(\ds \epsilon\)





as $\map U S – \map L S < \epsilon$



These two results give:

$\size {\inf_P \map U P - \sup_P \map L P} < \epsilon$
Since $\epsilon$ can be chosen arbitrarily small ($>0$), this means that:

$\inf_P \map U P = \sup_P \map L P$
From this it follows by the definitions of upper and lower Darboux integrals that:

$\ds \overline {\int_a^b} \map f x \rd x = \underline {\int_a^b} \map f x \rd x$
Hence, by the definition of the Darboux integral, $f$ is Darboux integrable.
$\blacksquare$


Historical Note
The necessary and sufficient conditions for the existence of a Riemann integral were determined by Riemann in his paper Ueber die Darstellbarkeit einer Function durch eine trigonometrische Reihe of $1854$, on the subject of Fourier series.
It is noted that the proof given on this page refers specifically to the Darboux integral, which is a simpler but equivalent concept to that introduced by Riemann.
That they are equivalent is given in Equivalence of Definitions of Riemann and Darboux Integrals


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $2.5$: The Riemann Integral




