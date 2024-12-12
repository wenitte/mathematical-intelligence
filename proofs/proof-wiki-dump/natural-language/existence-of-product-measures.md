# 

Source: https://proofwiki.org/wiki/Existence_of_Product_Measures

Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.

Then there exists a measure $\rho$ on the product space $\paren {X \times Y, \Sigma_1 \otimes \Sigma_2}$ such that:

$\forall E_1 \in \Sigma_X, E_2 \in \Sigma_Y: \map \rho {E_1 \times E_2} = \map \mu {E_1} \map \nu {E_2}$
and all such measures are $\sigma$-finite. 

Further, two such measures are given by: 

$\ds \map {\rho_1} E = \int_X \map \nu {E_x} \rd \mu$
and:

$\ds \map {\rho_2} E = \int_Y \map \mu {E^y} \rd \nu$
for each $E \in \Sigma_1 \otimes \Sigma_2$.


Proof
For each $E \in \Sigma_1 \otimes \Sigma_2$ define the function $f_E : X \to \overline \R$ by: 

$\map {f_E} x = \map \nu {E_x}$
for each $x \in X$. 
Define the function $g_E : Y \to \overline \R$ by: 

$\map {g_E} y = \map \mu {E^y}$
for each $y \in Y$. 
From Measure of Vertical Section of Measurable Set gives Measurable Function, we have that: 

$f_E$ is $\Sigma_X$-measurable.
From Measure of Horizontal Section of Measurable Set gives Measurable Function, we have that: 

$g_E$ is $\Sigma_Y$-measurable.
Note that $f_E \ge 0$ and $g_E \ge 0$ since $\mu \ge 0$ and $\nu \ge 0$. 
We can therefore define the function $\rho_1 : \Sigma_X \otimes \Sigma_Y \to \overline \R$ by: 

$\ds \map {\rho_1} E = \int_X \map \nu {E_x} \rd \mu$
and the function $\rho_2 : \Sigma_X \otimes \Sigma_Y \to \overline \R$ by: 

$\ds \map {\rho_2} E = \int_Y \map \mu {E^y} \rd \nu$
for each $E \in \Sigma_X \otimes \Sigma_Y$.

We show that $\rho_1$ and $\rho_2$ are measures. 
We verify each of the conditions $(1)$, $(2)$ and $(3)$ for $\rho_1$ and $\rho_2$.
From the definition of the integral of a positive measurable function, we have that: 

$\map {\rho_1} E \ge 0$
and:

$\map {\rho_2} E \ge 0$
for each $E \in \Sigma_X \otimes \Sigma_Y$. 
This verifies $(1)$ for $\rho_1$ and $\rho_2$. 
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence of pairwise disjoint $\Sigma_X \otimes \Sigma_Y$-measurable sets.
From Intersection of Vertical Sections is Vertical Section of Intersection and Vertical Section of Measurable Set is Measurable, we have that: 

$\sequence {\paren {E_n}_x}_{n \mathop \in \N}$ is a sequence of pairwise disjoint $\Sigma_Y$-measurable sets.
From Intersection of Horizontal Sections is Horizontal Section of Intersection and Horizontal Section of Measurable Set is Measurable, we have that: 

$\sequence {\paren {E_n}^y}_{n \mathop \in \N}$ is a sequence of pairwise disjoint $\Sigma_X$-measurable sets.
We have: 














\(\ds \map {\rho_1} {\bigcup_{n \mathop = 1}^\infty E_n}\)

\(=\)







\(\ds \int_X \map \nu {\paren {\bigcup_{n \mathop = 1}^\infty E_n}_x} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \map \nu {\bigcup_{n \mathop = 1}^\infty \paren {E_n}_x} \rd \mu\)





Union of Vertical Sections is Vertical Section of Union














\(\ds \)

\(=\)







\(\ds \int_X \paren {\sum_{n \mathop = 1}^\infty \map \nu {\paren {E_n}_x} } \rd \mu\)





since $\nu$ is countably additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int_X \map \nu {\paren {E_n}_x} \rd \mu}\)





Integral of Series of Positive Measurable Functions














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\rho_1} {E_n}\)









and:














\(\ds \map {\rho_2} {\bigcup_{n \mathop = 1}^\infty E_n}\)

\(=\)







\(\ds \int_Y \map \mu {\paren {\bigcup_{n \mathop = 1}^\infty E_n}^y} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_Y \map \mu {\bigcup_{n \mathop = 1}^\infty \paren {E_n}^y} \rd \nu\)





Union of Horizontal Sections is Horizontal Section of Union














\(\ds \)

\(=\)







\(\ds \int_Y \paren {\sum_{n \mathop = 1}^\infty \map \mu {\paren {E_n}^y} } \rd \nu\)





since $\mu$ is countably additive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \paren {\int_Y \map \mu {\paren {E_n}^y} \rd \nu}\)





Integral of Series of Positive Measurable Functions














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 1}^\infty \map {\rho_2} {E_n}\)









So $\rho_1$ and $\rho_2$ are countably additive.
This verifies $(2)$ for $\rho_1$ and $\rho_2$.
We finally verify $(3)$. 
We have: 














\(\ds \map {\rho_1} \O\)

\(=\)







\(\ds \int_X \map \nu {\O_x} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \map \nu \O \rd \mu\)





Vertical Section of Empty Set














\(\ds \)

\(=\)







\(\ds \int_X 0 \rd \mu\)





Empty Set is Null Set














\(\ds \)

\(=\)







\(\ds 0\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral



and:














\(\ds \map {\rho_2} \O\)

\(=\)







\(\ds \int_Y \map \mu {\O^y} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_Y \map \mu \O \rd \nu\)





Horizontal Section of Empty Set














\(\ds \)

\(=\)







\(\ds \int_Y 0 \rd \nu\)





Empty Set is Null Set














\(\ds \)

\(=\)







\(\ds 0\)





Measurable Function Zero A.E. iff Absolute Value has Zero Integral



verifying $(3)$ for $\rho_1$ and $\rho_2$. 
So $\rho_1$ and $\rho_2$ are both measures.

We now show that:

$\forall E_1 \in \Sigma_X, E_2 \in \Sigma_Y: \map {\rho_1} {E_1 \times E_2} = \map \mu {E_1} \map \nu {E_2}$
and:

$\forall E_1 \in \Sigma_X, E_2 \in \Sigma_Y: \map {\rho_2} {E_1 \times E_2} = \map \mu {E_1} \map \nu {E_2}$
Let $E_1 \in \Sigma_X$ and $E_2 \in \Sigma_Y$.
We have: 














\(\ds \map {\rho_1} {E_1 \times E_2}\)

\(=\)







\(\ds \int_X \map \nu {\paren {E_1 \times E_2}_x} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \map \nu {E_2} \chi_{E_1} \rd \mu\)





Measure of Vertical Section of Cartesian Product














\(\ds \)

\(=\)







\(\ds \map \nu {E_2} \int_X \chi_{E_1} \rd \mu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \map \mu {E_1} \map \nu {E_2}\)





Integral of Characteristic Function: Corollary



and:














\(\ds \map {\rho_2} {E_1 \times E_2}\)

\(=\)







\(\ds \int_Y \map \mu {\paren {E_1 \times E_2}^y} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_Y \map \mu {E_1} \chi_{E_2} \rd \nu\)





Measure of Horizontal Section of Cartesian Product














\(\ds \)

\(=\)







\(\ds \map \mu {E_1} \int_Y \chi_{E_2} \rd \nu\)





Integral of Positive Measurable Function is Positive Homogeneous














\(\ds \)

\(=\)







\(\ds \map \mu {E_1} \map \nu {E_2}\)





Integral of Characteristic Function: Corollary



giving the demand for both $\rho_1$ and $\rho_2$. 

Finally, we show that any measure $\rho$ satsfiying:

$\forall E_1 \in \Sigma_X, E_2 \in \Sigma_Y: \map \rho {E_1 \times E_2} = \map \mu {E_1} \map \nu {E_2}$
is $\sigma$-finite.
Since $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ are $\sigma$-finite measure spaces, we have: 

$\mu$ and $\nu$ are $\sigma$-finite measures on $X$ and $Y$ respectively.
Since $\mu$ is $\sigma$-finite, there exists a sequence of $\Sigma_X$-measurable sets $\sequence {E_n}_{n \mathop \in \N}$ such that: 

$\ds X = \bigcup_{n \mathop = 1}^\infty E_n$
with: 

$\map \mu {E_n} < \infty$ for each $n$.
Since $\nu$ is $\sigma$-finite, there exists a sequence of $\Sigma_Y$-measurable sets $\sequence {F_n}_{n \mathop \in \N}$ such that: 

$\ds Y = \bigcup_{n \mathop = 1}^\infty F_n$
with: 

$\map \mu {F_n} < \infty$ for each $n$.
We then have: 














\(\ds X \times Y\)

\(=\)







\(\ds \paren {\bigcup_{n \mathop = 1}^\infty E_n} \times \paren {\bigcup_{n \mathop = 1}^\infty F_n}\)




















\(\ds \)

\(=\)







\(\ds \bigcup_{\tuple {n, m} \in \N \times \N} \paren {E_n \times F_m}\)





Cartesian Product of Unions: General Result



Since $E_n \in \Sigma_X$ and $F_m \in \Sigma_Y$, we have: 

$E_n \times F_m \in \Sigma_X \otimes \Sigma_Y$
for each $n, m$. 
For each $n, m$, we also have: 

$\map {\rho} {E_n \times F_m} = \map {\mu_X} {E_n} \map {\mu_Y} {F_m} < \infty$
From Cartesian Product of Countable Sets is Countable, we have that: 

$\N \times \N$ is countable.
So:

$\ds \bigcup_{\tuple {n, m} \in \N \times \N} \paren {E_n \times F_m}$ is the countable union of $\Sigma_X \otimes \Sigma_Y$-measurable sets with $\map {\rho} {E_n \times F_m} < \infty$ for each $n, m$.
Hence: 

$\rho$ is $\sigma$-finite
completing the proof.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $13.5$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $5.1$: Constructions: Theorem $5.1.4$




