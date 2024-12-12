# 

Source: https://proofwiki.org/wiki/Fubini%27s_Theorem



Theorem
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.
Let $\struct {X \times Y, \Sigma_X \otimes \Sigma_Y, \mu \times \nu}$ be the product measure space of $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$.
Let $f: X \times Y \to \overline \R$ be a $\mu \times \nu$-integrable function.
Define a function $I_f : X \to \R$ by:

$\ds \map {I_f} x = \begin{cases}\ds \int_Y f_x \rd \nu & \text {if } f_x \text { is } \nu\text{-integrable} \\ 0 & \text{otherwise}\end{cases}$
for each $x \in X$.
Define a function $J_f : Y \to \R$ by: 

$\ds \map {J_f} y = \begin{cases}\ds \int_X f^y \rd \mu & \text {if } f^y \text { is } \mu\text{-integrable} \\ 0 & \text{otherwise}\end{cases}$
for each $y \in Y$. 

Then: 

$I_f$ is $\mu$-integrable and $J_f$ is $\nu$-integrable
and:

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} = \int_X I_f \rd \mu = \int_Y J_f \rd \nu$


Proof
Since $f$ is $\mu \times \nu$-integrable, we have: 

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} = \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu}$


Lemma
$I_f$ is $\Sigma_X$-measurable
and:

$J_f$ is $\Sigma_Y$-measurable.
$\Box$

We first aim to show that: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_X I_f \rd \mu$
From Tonelli's Theorem, we have: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} = \int_X \paren {\int_Y \paren {f^+}_x \rd \nu} \rd \mu$
From Positive Part of Vertical Section of Function is Vertical Section of Positive Part, we have: 

$\paren {f^+}_x = \paren {f_x}^+$
and so: 

$\ds \int_X \paren {\int_Y \paren {f^+}_x \rd \nu} \rd \mu = \int_X \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu$
From Tonelli's Theorem, we also obtain: 

$\ds \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_X \paren {\int_Y \paren {f^-}_x \rd \nu} \rd \mu$
From Negative Part of Vertical Section of Function is Vertical Section of Negative Part, we have: 

$\paren {f^-}_x = \paren {f_x}^-$
and so: 

$\ds \int_X \paren {\int_Y \paren {f^-}_x \rd \nu} \rd \mu = \int_X \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu$
We therefore have: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_X \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu - \int_X \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu$
From Almost All Vertical Sections of Integrable Function are Integrable, we have: 

$f_x$ is $\nu$-integrable for $\mu$-almost all $x \in X$.
That is:

there exists a $\mu$-null set $N_1 \subseteq X$ such that whenever $f_x$ is not $\nu$-integrable, $x \in N_1$.
To rewrite this in terms of $I_f$, we pass the $\mu$-integral to an $\mu$-integral over $X \setminus N_1$. 
Since $\sigma$-algebras are closed under relative complement, we have: 

$X \setminus N_1$ is $\Sigma_X$-measurable.
From Characteristic Function Measurable iff Set Measurable, we have: 

$1_{X \setminus N_1}$ is $\Sigma_X$-measurable.
so:

$\ds \paren {\int_Y \paren {f_x}^+ \rd \nu} \times 1_{X \setminus N_1}$ is $\Sigma_X$-measurable
and:

$\ds \paren {\int_Y \paren {f_x}^- \rd \nu} \times 1_{X \setminus N_1}$ is $\Sigma_X$-measurable.
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$1_{X \setminus N_1} = 1$ $\mu$-almost everywhere.
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$\ds \paren {\int_Y \paren {f_x}^+ \rd \nu} \times 1_{X \setminus N_1} = \int_Y \paren {f_x}^+ \rd \nu$ $\mu$-almost everywhere
and:

$\ds \paren {\int_Y \paren {f_x}^- \rd \nu} \times 1_{X \setminus N_1} = \int_Y \paren {f_x}^- \rd \nu$ $\mu$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int_X \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu = \int_X 1_{X \setminus N_1} \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu$
and:

$\ds \int_X \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu = \int_X 1_{X \setminus N_1} \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu$
From the definition of the $\mu$-integral of an integrable function over a $\Sigma_X$-measurable set, we have: 

$\ds \int_X 1_{X \setminus N_1} \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu = \int_{X \setminus N_1} \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu$
and:

$\ds \int_X 1_{X \setminus N_1} \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu = \int_{X \setminus N_1} \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu$
We then have: 














\(\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu}\)

\(=\)







\(\ds \int_{X \setminus N_1} \paren {\int_Y \paren {f_x}^+ \rd \nu} \rd \mu - \int_{X \setminus N_1} \paren {\int_Y \paren {f_x}^- \rd \nu} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int_{X \setminus N_1} \paren {\int_Y \paren {f_x}^+ \rd \nu - \int_Y \paren {f_x}^- \rd \nu} \rd \mu\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(=\)







\(\ds \int_{X \setminus N_1} I_f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {I_f \times \chi_{X \setminus N_1} } \rd \mu\)





Definition of Integral of Positive Measurable Function over Measurable Set



From Pointwise Multiplication preserves A.E. Equality, we have: 

$I_f \times \chi_{X \setminus N_1} = I_f$ $\mu$-almost everywhere
so, by A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int \paren {I_f \times \chi_{X \setminus N_1} } \rd \mu = \int I_f \rd \mu$
giving: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_X I_f \rd \mu$
as desired.

We now show that: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_Y J_f \rd \nu$
From Tonelli's Theorem, we have: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} = \int_Y \paren {\int_X \paren {f^+}^y \rd \mu} \rd \nu$
From Positive Part of Horizontal Section of Function is Horizontal Section of Positive Part, we have: 

$\paren {f^+}^y = \paren {f^y}^+$
and so: 

$\ds \int_Y \paren {\int_X \paren {f^+}^y \rd \mu} \rd \nu= \int_Y \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu$
From Tonelli's Theorem, we also obtain: 

$\ds \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_Y \paren {\int_X \paren {f^-}^y \rd \mu} \rd \nu$
From Negative Part of Horizontal Section of Function is Horizontal Section of Negative Part, we have: 

$\paren {f^-}^y = \paren {f^y}^-$
and so: 

$\ds \int_Y \paren {\int_X \paren {f^-}^y \rd \mu} \rd \nu = \int_Y \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu$
We therefore have: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_Y \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu - \int_Y \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu$
From Almost All Horizontal Sections of Integrable Function are Integrable, we have: 

$f^y$ is $\mu$-integrable for $\nu$-almost all $y \in Y$.
That is:

there exists a $\nu$-null set $N_2 \subseteq Y$ such that whenever $f^y$ is not $\nu$-integrable, $y \in N_2$.
To rewrite this in terms of $J_f$, we pass the $\nu$-integral to an $\nu$-integral over $Y \setminus N_2$. 
Since $\sigma$-algebras are closed under relative complement, we have: 

$Y \setminus N_2$ is $\Sigma_Y$-measurable.
From Characteristic Function Measurable iff Set Measurable, we have: 

$1_{Y \setminus N_2}$ is $\Sigma_Y$-measurable.
so:

$\ds \paren {\int_X \paren {f^y}^+ \rd \mu} \times 1_{Y \setminus N_2}$ is $\Sigma_Y$-measurable
and:

$\ds \paren {\int_X \paren {f^y}^- \rd \mu} \times 1_{Y \setminus N_2}$ is $\Sigma_Y$-measurable.
From Characteristic Function of Null Set is A.E. Equal to Zero: Corollary, we have: 

$1_{Y \setminus N_2} = 1$ $\nu$-almost everywhere.
So, from Pointwise Multiplication preserves A.E. Equality, we have: 

$\ds \paren {\int_X \paren {f^y}^+ \rd \mu} \times 1_{Y \setminus N_2} = \int_X \paren {f^y}^+ \rd \mu$ $\nu$-almost everywhere
and:

$\ds \paren {\int_X \paren {f^y}^- \rd \mu} \times 1_{Y \setminus N_2} = \int_Y \paren {f^y}^- \rd \mu$ $\nu$-almost everywhere.
From A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int_Y \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu = \int_Y 1_{Y \setminus N_2} \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu$
and:

$\ds \int_Y \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu = \int_Y 1_{Y \setminus N_2} \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu$
From the definition of the $\nu$-integral of an integrable function over a $\Sigma_Y$-measurable set, we have: 

$\ds \int_Y 1_{Y \setminus N_2} \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu = \int_{Y \setminus N_2} \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu$
and:

$\ds \int_Y 1_{Y \setminus N_2} \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu = \int_{Y \setminus N_2} \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu$
We then have: 














\(\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu}\)

\(=\)







\(\ds \int_{Y \setminus N_2} \paren {\int_X \paren {f^y}^+ \rd \mu} \rd \nu - \int_{Y \setminus N_2} \paren {\int_X \paren {f^y}^- \rd \mu} \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int_{Y \setminus N_2} \paren {\int_X \paren {f^y}^+ \rd \mu - \int_X \paren {f^y}^- \rd \mu} \rd \nu\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(=\)







\(\ds \int_{Y \setminus N_2} J_f \rd \nu\)




















\(\ds \)

\(=\)







\(\ds \int \paren {J_f \times \chi_{Y \setminus N_2} } \rd \nu\)





Definition of Integral of Positive Measurable Function over Measurable Set



From Pointwise Multiplication preserves A.E. Equality, we have: 

$J_f \times \chi_{Y \setminus N_2} = J_f$ $\nu$-almost everywhere
so, by A.E. Equal Positive Measurable Functions have Equal Integrals, we have: 

$\ds \int \paren {J_f \times \chi_{Y \setminus N_2} } \rd \mu = \int J_f \rd \nu$
giving: 

$\ds \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu} = \int_Y J_f \rd \nu$
We therefore obtain:

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} = \int_{X \times Y} f^+ \map \rd {\mu \times \nu} - \int_{X \times Y} f^- \map \rd {\mu \times \nu}$
and hence: 

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} = \int_X I_f \rd \mu = \int_Y J_f \rd \nu$
Since:

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} < \infty$
we also have: 

$I_f$ is $\mu$-integrable and $J_f$ is $\nu$-integrable
completing the proof.
$\blacksquare$


Notes
As a possible abuse of notation, Fubini's Theorem may be written in the same form as Tonelli's Theorem: 

$\ds \int_{X \times Y} f \map \rd {\mu \times \nu} = \int_X \paren {\int_Y f_x \rd \nu} \rd \mu = \int_Y \paren {\int_X f^y \rd \mu} \rd \nu$
or perhaps more conventionally:

$\ds \int_{X \times Y} \map f {x, y} \map {\map \rd {\mu \times \nu} } {x, y} = \int_X \paren {\int_Y \map f {x, y} \map {\rd \nu} y} \map {\rd \mu} x = \int_Y \paren {\int_X \map f {x, y} \map {\rd \mu} x} \map {\rd \nu} y$
This may be improper, since: 

$\ds \int_Y f_x \rd \nu$
is only necessarily defined $\mu$-almost everywhere, as discussed in the proof.
Similarly:

$\ds \int_X f^y \rd \mu$
is only necessarily defined $\nu$-almost everywhere.
Since the problematic points form a set of measure zero, they are often simply ignored.
It is more proper to "fill in" the missing points, and this is the purpose of $I_f$ and $J_f$ in the proof.
The value chosen for $I_f$ and $J_f$ at these points is arbitrary, and does not effect the value of any of the integrals by A.E. Equal Positive Measurable Functions have Equal Integrals: Corollary 1.


Also see
Tonelli's Theorem


Source of Name
This entry was named for Guido Fubini.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $13.9$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $5.2$: Fubini's Theorem: Proposition $5.2.2 \text{ (b)}$




