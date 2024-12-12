# 

Source: https://proofwiki.org/wiki/Almost_All_Vertical_Sections_of_Integrable_Function_are_Integrable

Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.
Let $\struct {X \times Y, \Sigma_X \otimes \Sigma_Y, \mu \times \nu}$ be the product measure space of $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$.
Let $f: X \times Y \to \overline \R_{\ge 0}$ be a $\mu \times \nu$-integrable function.

Then: 

$f_x$ is $\nu$-integrable for $\mu$-almost all $x \in X$
where $x$ is the $x$-vertical section of function.


Proof
From Vertical Section of Measurable Function is Measurable, we have: 

$f_x$ is $\Sigma_Y$-measurable for each $x \in X$.
From Function Measurable iff Positive and Negative Parts Measurable, we have: 

$\paren {f_x}^+$ is $\Sigma_Y$-measurable for each $x \in X$
and:

$\paren {f_x}^-$ is $\Sigma_Y$-measurable for each $x \in X$.
Define a function $g : X \to \overline \R$ by: 

$\ds \map g x = \int \paren {f_x}^+ \rd \nu$
for each $x \in X$. 
Define $h : X \to \overline \R$ by: 

$\ds \map h x = \int \paren {f_x}^- \rd \nu$
for each $x \in X$.
From Integral of Vertical Section of Measurable Function gives Measurable Function, we have: 

$g$ and $h$ are $\Sigma_X$-measuarble.
From Positive Part of Vertical Section of Function is Vertical Section of Positive Part, we have: 

$\paren {f_x}^+ = \paren {f^+}_x$
From Negative Part of Vertical Section of Function is Vertical Section of Negative Part, we have:

$\paren {f_x}^- = \paren {f^-}_x$
We then have: 














\(\ds \int g \rd \mu\)

\(=\)







\(\ds \int_X \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \paren {\int_Y \paren {f^+}_x \rd \nu} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu}\)





Tonelli's Theorem



Similarly:














\(\ds \int h \rd \mu\)

\(=\)







\(\ds \int_X \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_X \paren {\int_Y \paren {f^-}_x \rd \nu} \rd \mu\)




















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

$\ds \int \paren {f_x}^+ \rd \nu < \infty$
and:

$\ds \int \paren {f_x}^- \rd \nu < \infty$
for $\mu$-almost all $x \in X$. 
That is, there exists a $\mu$-null set $N_1 \subseteq X$ such that whenever: 

$\ds \int \paren {f_x}^+ \rd \nu = \infty$
we have $x \in N_1$. 
Similarly, there exists a $\mu$-null set $N_2 \subseteq X$ such that whenever: 

$\ds \int \paren {f_x}^- \rd \nu = \infty$
we have $x \in N_2$.
If $f_x$ is not $\nu$-integrable, we have either: 

$\ds \int \paren {f_x}^+ \rd \nu = \infty$
or:

$\ds \int \paren {f_x}^- \rd \nu = \infty$
that is:

$x \in N_1$ or $x \in N_2$
That is, if $f_x$ is not $\nu$-integrable, we have: 

$x \in N_1 \cup N_2$
From Null Sets Closed under Countable Union, we have: 

$N_1 \cup N_2$ is $\mu$-null.
So:

$f_x$ is $\nu$-integrable for $\mu$-almost all $x \in X$.
$\blacksquare$


Sources
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $5.2$: Fubini's Theorem: Proposition $5.2.2 \text{ (a)}$




