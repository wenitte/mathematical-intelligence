# 

Source: https://proofwiki.org/wiki/Radon-Nikodym_Theorem


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ and $\nu$ be $\sigma$-finite measures on $\struct {X, \Sigma}$ such that: 

$\nu$ is absolutely continuous with respect to $\mu$.

Then there exists a $\Sigma$-measurable function $g : X \to \hointr 0 \infty$ such that: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
Further, if $g_1 : X \to \hointr 0 \infty$ and $g_2 : X \to \hointr 0 \infty$ are such that: 

$\ds \map \nu A = \int_A g_1 \rd \mu = \int_A g_2 \rd \mu$
for each $A \in \Sigma$, then: 

$g_1 = g_2$ $\mu$-almost everywhere.


Proof
Existence
We first prove the case of $\mu$ and $\nu$ finite. 
Define $\FF$ to be the set of $\Sigma$-measurable functions $f : X \to \overline \R_{\ge 0}$ with: 

$\ds \int_A f \rd \mu \le \map \nu A$
for each $A \in \Sigma$.

We show that $\FF$ is non-empty. 
From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we have: 

$\ds \int_A 0 \rd \mu = 0$
for each $A \in \Sigma$, giving: 

$\ds \int_A 0 \rd \mu \le \map \nu A$
for each $A \in \Sigma$. 
So the constant $0$ function is contained in $\FF$. 

For each $f \in F$, we have: 

$\ds \int f \rd \mu \le \map \nu X$
Since $\nu$ is a finite measure, we have: 

$\ds \sup \set {\int f \rd \mu : f \in \FF} \le \map \nu X < \infty$
We will now show that there exists $g \in \FF$ such that: 

$\ds \int g \rd \mu = \sup \set {\int f \rd \mu : f \in \FF}$
and that this $g$ has: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
We now construct a increasing sequence of functions $\sequence {g_n}_{n \mathop \in \N}$ in $\FF$ such that: 

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu = \sup \set {\int f \rd \mu : f \in \FF}$
with a view to then apply the monotone convergence theorem. 
We pick $f_n \in \FF$ such that: 

$\ds \sup \set {\int f \rd \mu : f \in \FF} - \frac 1 n < \int f_n \rd \mu \le \sup \set {\int f \rd \mu : f \in \FF}$
Lemma 1
Let $\sequence {f_n}_{n \mathop \in \N}$ be a sequence in $\mathcal F$. 

Then:

for each $n \in \N$, the pointwise maximum $\max \set {f_1, f_2, \ldots, f_n}$ is contained in $\mathcal F$.
$\Box$

For each $n \in \N$ define: 

$g_n = \max \set {f_1, f_2, \ldots, f_n}$
From Lemma 1, we have: 

$g_n \in \FF$ for each $n \in \N$.
From the definition of the pointwise maximum, we have: 














\(\ds g_{n + 1}\)

\(=\)







\(\ds \max \set {f_1, f_2, \ldots, f_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \max \set {\max \set {f_1, f_2, \ldots, f_n}, f_{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds \max \set {h_n, f_{n + 1} }\)




















\(\ds \)

\(\ge\)







\(\ds h_n\)





Definition of Max Operation



So $\sequence {g_n}_{n \mathop \in \N}$ is an increasing sequence.
We have: 














\(\ds \int g_n \rd \mu\)

\(=\)







\(\ds \int \max \set {f_1, f_2, \ldots, f_n} \rd \mu\)




















\(\ds \)

\(\ge\)







\(\ds \int f_n \rd \mu\)





Definition of Max Operation














\(\ds \)

\(>\)







\(\ds \sup \set {\int f \rd \mu : f \in \FF} - \frac 1 n\)









and, since $g_n \in \FF$, we have: 

$\ds \int g_n \rd \mu \le \sup \set {\int f \rd \mu : f \in \FF}$
from the definition of supremum.
Then from the Squeeze Theorem, we have: 

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu = \sup \set {\int f \rd \mu : f \in \FF}$
Then $\sequence {g_n}_{n \mathop \in \N}$ is an increasing sequence in $\FF$ such that:

$\ds \lim_{n \mathop \to \infty} \int g_n \rd \mu = \sup \set {\int f \rd \mu : f \in \FF}$
Now let: 

$\ds g = \lim_{n \mathop \to \infty} g_n$
From the Monotone Convergence Theorem, we have: 

$\ds \int g \rd \mu = \sup \set {\int f \rd \mu : f \in \FF}$
Since $f_n \in \FF$ for each $n$, we have: 

$\ds \int_A f_n \rd \mu \le \map \nu A$
for each $n$. 
From Lower and Upper Bounds for Sequences, we then have: 

$\ds \int_A g \rd \mu \le \map \nu A$
So $g \in \FF$. 

We now verify that: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
Define a function $\nu_1 : \Sigma \to \overline \R$ by: 

$\ds \map {\nu_1} A = \int_A g \rd \mu$
for each $A \in \Sigma$. 
From Measure with Density is Measure, we have that: 

$\nu_1$ is a measure.
Define a function $\nu_0 : \Sigma \to \overline \R$ by: 

$\ds \map {\nu_0} A = \map \nu A - \map {\nu_1} A$
for each $A \in \Sigma$.
Since $\nu$ is a finite measure we have: 

$\ds \infty > \map \nu A \ge \int_A g \rd \mu$
We have that: 

$\ds \int_A g \rd \mu < \infty$ for each $A \in \Sigma$
and: 

$g$ is $\mu$-integrable.
So the difference: 

$\ds \map \nu A - \map {\nu_1} A$
is well-defined for each $A \in \Sigma$.
So, from Linear Combination of Signed Measures is Signed Measure, we have: 

$\nu_0$ is a signed measure.
Since: 

$\map {\nu_0} A \ge 0$ for each $A \in \Sigma$
we have that: 

$\nu_0$ is a measure
from Non-Negative Signed Measure is Measure.
We want to show that: 

$\map {\nu_0} A = 0$ for all $A \in \Sigma$.

Aiming for a contradiction, suppose, suppose that: 

$\map {\nu_0} A \ne 0$ for some $A \in \Sigma$.
Then from Measure is Monotone, we have: 

$\map {\nu_0} X \ne 0$
Since $\mu$ is a finite measure, we have: 

$\map \mu X < \infty$
So, we can pick $\epsilon > 0$ such that: 

$\map {\nu_0} X > \epsilon \map \mu X$
From Linear Combination of Signed Measures is Signed Measure, we have that: 

$\nu_2 = \nu_0 - \epsilon \mu$ is a signed measure.
Let $\struct {P, N}$ be the Hahn decomposition of $\nu_2$.
Since $P$ is a $\nu_2$-positive set, we have: 

$\map {\nu_2} {A \cap P} \ge 0$
for each $A \in \Sigma$, since $A \cap P \subseteq P$ from Intersection is Subset. 
So:

$\map {\nu_0} {A \cap P} \ge \epsilon \map \mu {A \cap P}$
Then for each $A \in \Sigma$, we have:














\(\ds \map \nu A\)

\(=\)







\(\ds \int_A g \rd \mu + \map {\nu_0} A\)




















\(\ds \)

\(=\)







\(\ds \int_A g \rd \mu + \map {\nu_0} {A \cap P}\)





Measure is Monotone














\(\ds \)

\(\ge\)







\(\ds \int_A g \rd \mu + \epsilon \map \mu {A \cap P}\)




















\(\ds \)

\(=\)







\(\ds \int_A g \rd \mu + \epsilon \int \chi_{A \cap P} \rd \mu\)





Integral of Characteristic Function: Corollary














\(\ds \)

\(=\)







\(\ds \int_A g \rd \mu + \epsilon \int \paren {\chi_A \cdot \chi_P} \rd \mu\)





Characteristic Function of Intersection














\(\ds \)

\(=\)







\(\ds \int_A g \rd \mu + \epsilon \int_A \chi_P \rd \mu\)





Definition of Integral of Integrable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \int_A \paren {g + \epsilon \chi_P} \rd \mu\)





Integral of Integrable Function is Additive



So:

$g + \epsilon \chi_P \in \FF$.
We show that $\map \mu P > 0$. 
Aiming for a contradiction, suppose suppose that $\map \mu P = 0$.
Then since $\nu$ is absolutely continuous with respect to $\mu$, we have $\map \nu P = 0$.
Since: 

$\ds \int_P g \rd \mu \le \map \nu P$
we then have: 

$\ds \int_P g \rd \mu = 0$
and so:

$\map {\nu_0} P = 0$
We then have: 














\(\ds \map {\nu_0} X - \epsilon \map \mu X\)

\(=\)







\(\ds \map {\nu_0} {P \cup N} - \epsilon \map \mu {P \cup N}\)





Definition of Hahn Decomposition














\(\ds \)

\(=\)







\(\ds \map {\nu_0} P + \map {\nu_0} N - \epsilon \map \mu P - \epsilon \map \mu N\)





since $\nu_0$ and $\mu$ are countably additive














\(\ds \)

\(=\)







\(\ds \map {\nu_2} N\)




















\(\ds \)

\(\le\)







\(\ds 0\)





Definition of Negative Set



which contradicts: 

$\map {\nu_0} X > \epsilon \map \mu X$
so we have: 

$\map \mu P > 0$
From Integral of Characteristic Function: Corollary, we have: 

$\ds \int \chi_P \rd \mu = \map \mu P > 0$
So, from Integral of Positive Measurable Function is Positive Homogeneous, we then have: 

$\ds \int \epsilon \chi_P \rd \mu > 0$
Then: 














\(\ds \int \paren {g + \epsilon \chi_P} \rd \mu\)

\(=\)







\(\ds \int g \rd \mu + \epsilon \int \chi_P \rd \mu\)





Integral of Integrable Function is Additive














\(\ds \)

\(>\)







\(\ds \int g \rd \mu\)









So:

$\ds \int \paren {g + \epsilon \chi_P} \rd \mu > \sup \set {\int f \rd \mu : f \in \FF}$
contradicting the definition of supremum. 
So:

$\map {\nu_0} A = 0$ for all $A \in \Sigma$.
So we have: 

$\ds \map \nu A = \int_A g \rd \mu$
for each $A \in \Sigma$.
Since $g$ is $\mu$-integrable, we have that: 

there exists a real-valued $\mu$-integrable function $h : X \to \R$ such that $g = h$ $\mu$-almost everywhere
from Measurable Function is Integrable iff A.E. Equal to Real-Valued Integrable Function.
From A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 2, we have:

$\ds \map \nu A = \int_A h \rd \mu$
for each $A \in \Sigma$. 
So we are done in the case that $\mu$ and $\nu$ are finite. 

Now suppose that $\mu$ and $\nu$ are $\sigma$-finite.

Lemma 2
There exists a pairwise disjoint sequence of $\Sigma$-measurable sets $\sequence {X_n}_{n \in \mathop \N}$ such that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
where: 

$\map \mu {X_n} < \infty$ and $\map \nu {X_n} < \infty$ for each $n$.
$\Box$

Let $\Sigma_n$ be the trace $\sigma$-algebra of $X_n$ in $\Sigma$. 
From Trace Sigma-Algebra of Measurable Set, this consists precisely of the $\Sigma$-measurable subsets of $X_n$. 
Let $\mu \restriction_{\Sigma_n}$ and $\nu \restriction_{\Sigma_n}$ be the restrictions of $\mu$ and $\nu$ to $\Sigma_n$.
We show that for each $n \in \N$: 

$\nu \restriction_{\Sigma_n}$ and $\mu \restriction_{\Sigma_n}$ are finite and $\nu \restriction_{\Sigma_n}$ is absolutely continuous with respect to $\mu \restriction_{\Sigma_n}$.
We have: 

$\map {\nu \restriction_{\Sigma_n} } {X_n} = \map \nu {X_n} < \infty$
and: 

$\map {\mu \restriction_{\Sigma_n} } {X_n} = \map \mu {X_n} < \infty$
so $\mu \restriction_{\Sigma_n}$ and $\nu \restriction_{\Sigma_n}$ are finite measures for each $n \in \N$. 
Since $\nu$ is absolutely continuous with respect to $\mu$, we have: 

for all $A \in \Sigma$ with $\map \mu A = 0$, we have $\map \nu A = 0$.
So, in particular: 

for all $A \in \Sigma$ with $A \subseteq X_n$ and $\map \mu A = 0$, we have $\map \nu A = 0$.
That is: 

for all $A \in \Sigma_n$ with $\map {\mu \restriction_{\Sigma_n} } A = 0$, we have $\map {\nu \restriction_{\Sigma_n} } A = 0$.
Applying the finite case to each $\nu \restriction_{\Sigma_n}$:

for each $n \in \N$ there exists a $\Sigma_n$-measurable function $g_n : X \to \hointr 0 \infty$ such that $\ds \map {\nu \restriction_{\Sigma_n} } A = \int_A g_n \rd \mu \restriction_{\Sigma_n}$ for each $A \in \Sigma_n$.
We also have that $g_n$ is $\Sigma$-measurable for each $n \in \N$. 
Note that we have: 

$g_n^{-1} \sqbrk B \in \Sigma_n$ for each Borel set $B \subseteq \R$.
Since $\Sigma_n \subseteq \Sigma$, we have: 

$g_n^{-1} \sqbrk B \in \Sigma$ for each Borel set $B \subseteq \R$ for each $n \in \N$.
So: 

$g_n$ is $\Sigma$-measurable for each $n \in \N$.
From Integral with respect to Restriction of Measure to Trace Sigma-Algebra of Measurable Set:

$\ds \int_A g_n \rd \mu \restriction_{\Sigma_n} = \int_A g_n^\ast \rd \mu$
for each $A \in \Sigma_n$, where we define the function $g_n^\ast : X \to \overline \R$ by: 

$\ds \map {g_n^\ast} x = \begin{cases}\map {g_n} x & x \in X_n \\ 0 & x \not \in X_n\end{cases}$
Then, for each $A \in \Sigma$, we have: 














\(\ds \map \nu A\)

\(=\)







\(\ds \map \nu {A \cap X}\)





Intersection with Subset is Subset














\(\ds \)

\(=\)







\(\ds \map \nu {A \cap \paren {\bigcup_{n \mathop = 1}^\infty X_n} }\)




















\(\ds \)

\(=\)







\(\ds \map \nu {\bigcup_{n \mathop = 1}^\infty \paren {A \cap X_n} }\)





Intersection Distributes over Union














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\nu \restriction_{\Sigma_n} } {A \cap X_n}\)





Definition of Restriction of Measure to Trace Sigma-Algebra of Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_{A \cap X_n} g_n^\ast \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int \chi_{A \cap X_n} \cdot g_n^\ast \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int \chi_A \cdot \chi_{X_n} \cdot g_n^\ast \rd \mu\)





Characteristic Function of Intersection














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_A \chi_{X_n} \cdot g_n^\ast \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \int_A \paren {\sum_{n \mathop = 1}^\infty g_n^\ast} \rd \mu\)





Integral of Series of Positive Measurable Functions, $g_n^\ast$ is zero outside $X_n$



So the function $g : X \to \overline \R$ defined by:

$\ds g = \sum_{n \mathop = 1}^\infty g_n^\ast$
satisfies the desired integral identity. 
We can show that $g$ is in fact a function $X \to \hointr 0 \infty$, completing the existence proof.
Clearly $g \ge 0$, since $g_n^\ast \ge 0$ for each $n \in \N$. 
Let $x \in X$. 
Then: 

$x \in X_n$ for exactly one $n \in \N$
while: 

$\map {g_m^\ast} x = 0$ if $x \not \in X_m$.
So:

$\map {g_n^\ast} x = 0$ for all but possibly one $n \in \N$.
Then: 

$\ds \sum_{n \mathop = 1}^\infty \paren {\map {g_n^\ast} x} = \map {g_{n_x}^\ast } x$
for some $n_x \in \N$ depending on $x$. 
We have: 

$\map {g_{n_x} } x < \infty$
We therefore have:

$\ds \sum_{n \mathop = 1}^\infty \map {g_n^\ast} x < \infty$
for all $x \in X$. 
So: 

$\map g x < \infty$
for all $x \in X$. 
So $g$ is a function $X \to \hointr 0 \infty$ as required.
$\Box$

Essential Uniqueness
Suppose that the positive $\Sigma$-measurable functions $g_1 : X \to \hointr 0 \infty$ and $g_2 : X \to \hointr 0 \infty$ are such that: 

$\ds \map \nu A = \int_A g_1 \rd \mu = \int_A g_2 \rd \mu$
for all $A \in \Sigma$.
From Lemma 2 there exists a sequence $\sequence {X_n}_{n \mathop \in \N}$ of $\Sigma$-measurable sets with: 

$\ds X = \bigcup_{n \mathop = 1}^\infty X_n$
and:

$\map \mu {X_n} < \infty$ and $\map \nu {X_n} < \infty$ for each $n$.
Let: 

$A_1 = \set {x \in X : \map {g_1} x < \map {g_2} x}$
and:

$A_2 = \set {x \in X : \map {g_1} x \ge \map {g_2} x}$
From Measurable Functions Determine Measurable Sets, $A_1$ and $A_2$ are $\Sigma$-measurable.
From Sigma-Algebra Closed under Countable Intersection:

$A_1 \cap X_n$ and $A_2 \cap X_n$ are $\Sigma$-measurable for each $n$.
Then for each $n$, we have: 














\(\ds \int_{A_1 \cap X_n} g_1 \rd \mu\)

\(=\)







\(\ds \int_{A_1 \cap X_n} g_2 \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A_1 \cap X_n}\)




















\(\ds \)

\(\le\)







\(\ds \map \nu {X_n}\)





Intersection is Subset, Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)









and:














\(\ds \int_{A_2 \cap X_n} g_1 \rd \mu\)

\(=\)







\(\ds \int_{A_2 \cap X_n} g_2 \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \map \nu {A_2 \cap X_n}\)




















\(\ds \)

\(\le\)







\(\ds \map \nu {X_n}\)





Intersection is Subset, Measure is Monotone














\(\ds \)

\(<\)







\(\ds \infty\)









Note that $A_1$ and $A_2$ are disjoint with: 

$X = A_1 \cup A_2$
and: 














\(\ds A_1 \cap X\)

\(=\)







\(\ds A_1 \cap \bigcup_{n \mathop = 1}^\infty X_n\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty \paren {A_1 \cap X_n}\)





Union Distributes over Intersection



similarly:














\(\ds A_2 \cap X\)

\(=\)







\(\ds A_2 \cap \bigcup_{n \mathop = 1}^\infty X_n\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{n \mathop = 1}^\infty \paren {A_2 \cap X_n}\)





Union Distributes over Intersection



Since the sequence $\sequence {X_n}_{n \mathop \in \N}$ is pairwise disjoint:

the sequences $\sequence {A_1 \cap X_n}_{n \mathop \in \N}$ and $\sequence {A_2 \cap X_n}_{n \mathop \in \N}$ are pairwise disjoint.
We can then compute: 














\(\ds \int \size {g_1 - g_2} \rd \mu\)

\(=\)







\(\ds \int_{A_1} \size {g_1 - g_2} \rd \mu + \int_{A_2} \size {g_1 - g_2} \rd \mu\)





Sum of Integrals on Complementary Sets














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_{A_1 \cap X_n} \size {g_1 - g_2} \rd \mu + \sum_{n \mathop = 1}^\infty \int_{A_2 \cap X_n} \size {g_1 - g_2} \rd \mu\)





Integral of Positive Measurable Function over Disjoint Union














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int_{A_1 \cap X_n} \paren {g_2 - g_1} \rd \mu + \sum_{n \mathop = 1}^\infty \int_{A_2 \cap X_n} \paren {g_1 - g_2} \rd \mu\)





definition of $A_1$ and $A_2$














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \int \paren {g_2 - g_1} \cdot \chi_{A_1 \cap X_n} \rd \mu + \sum_{n \mathop = 1}^\infty \int \paren {g_1 - g_2} \cdot \chi_{A_1 \cap X_n} \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int \paren {g_2 \cdot \chi_{A_1 \cap X_n} } \rd \mu - \int \paren {g_1 \cdot \chi_{A_1 \cap X_n} } \rd \mu} + \sum_{n \mathop = 1}^\infty \paren {\int \paren {g_2 \cdot \chi_{A_2 \cap X_n} } \rd \mu - \int \paren {g_1 \cdot \chi_{A_2 \cap X_n} } \rd \mu}\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int_{A_1 \cap X_n} g_2 \rd \mu - \int_{A_1 \cap X_n} g_1 \rd \mu} + \sum_{n \mathop = 1}^\infty \paren {\int_{A_2 \cap X_n} g_1 \rd \mu - \int_{A_2 \cap X_n} g_2 \rd \mu}\)





Definition of Integral of Positive Measurable Function over Measurable Set














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty 0 + \sum_{n \mathop = 1}^\infty 0\)




















\(\ds \)

\(=\)







\(\ds 0\)









From Measurable Function Zero A.E. iff Absolute Value has Zero Integral, we then have: 

$g_1 - g_2 = 0$ $\mu$-almost everywhere.
So:

$g_1 = g_2$ $\mu$-almost everywhere
hence the claim.
$\blacksquare$


Source of Name
This entry was named for Johann Karl August Radon and Otton Marcin Nikodym.


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $4.2$




