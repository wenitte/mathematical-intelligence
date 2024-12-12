# 

Source: https://proofwiki.org/wiki/Almost_All_Horizontal_Sections_of_Integrable_Function_are_Integrable

Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.
Let $\struct {X \times Y, \Sigma_X \otimes \Sigma_Y, \mu \times \nu}$ be the product measure space of $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$.
Let $f: X \times Y \to \overline \R_{\ge 0}$ be a $\mu \times \nu$-integrable function.

Then: 

$f^y$ is $\mu$-integrable for $\nu$-almost all $y \in Y$
where $f^y$ is the $y$-horizontal section of $f$.


Proof
From Horizontal Section of Measurable Function is Measurable, we have: 

$f^y$ is $\Sigma_X$-measurable for each $y \in Y$.
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$\paren {f^y}^+$ is $\Sigma_X$-measurable for each $y \in Y$
and:

$\paren {f^y}^-$ is $\Sigma_X$-measurable for each $y \in Y$.
Define a function $g : Y \to \overline \R$ by: 

$\ds \map g y = \int \paren {f^y}^+ \rd \mu$
for each $y \in Y$. 
Define $h : Y\to \overline \R$ by: 

$\ds \map h y = \int \paren {f^y}^- \rd \mu$
for each $y \in Y$. 
From Integral of Horizontal Section of Measurable Function gives Measurable Function, we have: 

$g$ and $h$ are $\Sigma_Y$-measuarble.
From Positive Part of Horizontal Section of Function is Horizontal Section of Positive Part, we have: 

$\paren {f^y}^+ = \paren {f^+}^y$
From Negative Part of Horizontal Section of Function is Horizontal Section of Negative Part, we have:

$\paren {f^y}^- = \paren {f^-}^y$
We then have: 














\(\ds \int g \rd \nu\)

\(=\)







\(\ds \int_Y \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_Y \paren {\int_X \paren {f^+}^y \rd \mu} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu}\)





Tonelli's Theorem



Similarly:














\(\ds \int h \rd \nu\)

\(=\)







\(\ds \int_Y \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_Y \paren {\int_X \paren {f^-}^y \rd \mu} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_{X \times Y} f^- \map \rd {\mu \times \nu}\)





Tonelli's Theorem



Since $f$ is $\mu \times \nu$-integrable, we have: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} < \infty$
and:

$\ds \int_{X \times Y} f^- \map \rd {\mu \times \nu} < \infty$
So:

$g$ and $h$ are $\mu$-integrable.
From Integrable Function is A.E. Real-Valued, we therefore have: 

$\ds \int \paren {f^y}^+ \rd \mu < \infty$
and:

$\ds \int \paren {f^y}^- \rd \mu < \infty$
for $\nu$-almost all $y \in Y$. 
That is, there exists a $\nu$-null set $N_1 \subseteq Y$ such that whenever: 

$\ds \int \paren {f^y}^+ \rd \mu = \infty$
we have $y \in N_1$. 
Similarly, there exists a $\nu$-null set $N_2 \subseteq Y$ such that whenever: 

$\ds \int \paren {f^y}^- \rd \mu = \infty$
we have $y \in N_2$.
If $f^y$ is $\mu$-integrable, we have either: 

$\ds \int \paren {f^y}^+ \rd \mu < \infty$
or:

$\ds \int \paren {f^y}^- \rd \mu < \infty$
that is: 

$y \in N_1$ or $y \in N_2$.
That is, if $f^y$ is not $\mu$-integrable, we have: 

$y \in N_1 \cup N_2$
From Null Sets Closed under Countable Union, we have: 

$N_1 \cup N_2$ is $\nu$-null.
So:

$f^y$ is $\mu$-integrable for $\nu$-almost all $y \in Y$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $5.2$: Fubini's Theorem: Proposition $5.2.2 \text{ (a)}$




