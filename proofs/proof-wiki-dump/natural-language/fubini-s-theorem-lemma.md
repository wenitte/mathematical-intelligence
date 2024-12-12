# 

Source: https://proofwiki.org/wiki/Fubini%27s_Theorem/Lemma

Lemma
Let $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$ be $\sigma$-finite measure spaces.
Let $\struct {X \times Y, \Sigma_1 \otimes \Sigma_2, \mu \times \nu}$ be the product measure space of $\struct {X, \Sigma_X, \mu}$ and $\struct {Y, \Sigma_Y, \nu}$.
Let $f: X \times Y \to \overline \R$ be a $\mu \times \nu$-integrable function.
Define a function $I_f : X \to \R$ by:

$\ds \map {I_f} x = \begin{cases}\ds \int_Y f_x \rd \nu & \text {if } f_x \text { is } \nu\text{-integrable} \\ 0 & \text{otherwise}\end{cases}$
for each $x \in X$.
Define a function $J_f : Y \to \R$ by: 

$\ds \map {J_f} y = \begin{cases}\ds \int_X f^y \rd \mu & \text {if } f^y \text { is } \mu\text{-integrable} \\ 0 & \text{otherwise}\end{cases}$
for each $y \in Y$. 

Then: 

$I_f$ is $\Sigma_X$-measurable
and:

$J_f$ is $\Sigma_Y$-measurable.


Proof
We first show that $I_f$ is $\Sigma_X$-measurable.
We will first rewrite $I_f$ in a more amenable form. 
Note that $f_x$ is $\nu$-integrable if and only if: 

$\ds \int_Y \paren {f_x}^+ \rd \nu < \infty$
or:

$\ds \int_Y \paren {f_x}^- \rd \nu < \infty$
From Positive Part of Vertical Section of Function is Vertical Section of Positive Part, we have: 

$\paren {f_x}^+ = \paren {f^+}_x$
and from Negative Part of Vertical Section of Function is Vertical Section of Negative Part, we have: 

$\paren {f_x}^- = \paren {f^-}_x$
So, $f_x$ is $\nu$-integrable if and only if:

$\ds \int_Y \paren {f^+}_x \rd \nu < \infty$
and:

$\ds \int_Y \paren {f^-}_x \rd \nu < \infty$
From Integral of Vertical Section of Measurable Function gives Measurable Function, we have:

$\ds x \mapsto \int_Y \paren {f^+}_x \rd \nu$ is $\Sigma_X$-measurable
and:

$\ds x \mapsto \int_Y \paren {f^-}_x \rd \nu$ is $\Sigma_X$-measurable.
From Set of Points for which Measurable Function is Real-Valued is Measurable, we therefore have: 

$\ds \set {x \in X : \int_Y \paren {f^+}_x \rd \nu < \infty} \in \Sigma_X$
and:

$\ds \set {x \in X : \int_Y \paren {f^-}_x \rd \nu < \infty} \in \Sigma_X$
Set:

$\ds A = \set {x \in X : \int_Y \paren {f^+}_x \rd \nu < \infty}$
and:

$\ds B = \set {x \in X : \int_Y \paren {f^-}_x \rd \nu < \infty}$
Then: 

$A \cap B \in \Sigma_X$
from Sigma-Algebra Closed under Countable Intersection.
Since $\sigma$-algebras are closed under relative complement, we have: 

$X \setminus \paren {A \cap B} \in \Sigma_X$
With that, we can write:














\(\ds \map {I_f} x\)

\(=\)







\(\ds \begin{cases}\ds \int_Y f_x \rd \nu & x \in A \cap B \\ 0 & x \in X \setminus \paren {A \cap B}\end{cases}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases}\ds \int_Y \paren {f_x}^+ \rd \nu - \int_Y \paren {f_x}^- \rd \nu & x \in A \cap B \\ 0 & x \in X \setminus \paren {A \cap B}\end{cases}\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \begin{cases}\ds \int_Y \paren {f^+}_x \rd \nu - \int_Y \paren {f^-}_x \rd \nu & x \in A \cap B \\ 0 & x \in X \setminus \paren {A \cap B}\end{cases}\)





Positive Part of Vertical Section of Function is Vertical Section of Positive Part, Negative Part of Vertical Section of Function is Vertical Section of Negative Part



For brevity, write: 

$C = A \cap B$
and:

$D = X \setminus \paren {A \cap B}$
Write $\Sigma_{X, C}$ for the trace $\sigma$-algebra of $C$ in $\Sigma_X$.
Likewise write $\Sigma_{X, D}$ for the trace $\sigma$-algebra of $D$ in $\Sigma_X$.
From Restriction of Measurable Function is Measurable on Trace Sigma-Algebra, we have: 

$\ds x \mapsto \int_Y \paren {f^+}_x \rd \nu$ is $\Sigma_{X, C}$-measurable
and:

$\ds x \mapsto \int_Y \paren {f^-}_x \rd \nu$ is $\Sigma_{X, C}$-measurable.
From Pointwise Difference of Measurable Functions is Measurable, we have: 

$\ds \int_Y \paren {f^+}_x \rd \nu - \int_Y \paren {f^-}_x \rd \nu$ is $\Sigma_{X, C}$-measurable.
From Constant Function is Measurable, we have: 

$x \mapsto 0$ is $\Sigma_{X, D}$-measurable.
From Piecewise Combination of Measurable Mappings is Measurable: General Case, we have: 

$I_f$ is $\Sigma_X$-measurable.

We will now show that $J_f$ is $\Sigma_Y$-measurable.
We will write $J_f$ in a similar form to $I_f$.
Note that $f^y$ is $\mu$-integrable if and only if: 

$\ds \int_X \paren {f^y}^+ \rd \mu < \infty$
or:

$\ds \int_X \paren {f^y}^- \rd \mu < \infty$
From Positive Part of Horizontal Section of Function is Horizontal Section of Positive Part, we have: 

$\paren {f^y}^+ = \paren {f^+}^y$
and from Negative Part of Horizontal Section of Function is Horizontal Section of Negative Part, we have: 

$\paren {f^y}^- = \paren {f^-}^y$
So, $f^y$ is $\mu$-integrable if and only if:

$\ds \int_X \paren {f^+}^y \rd \mu < \infty$
and:

$\ds \int_X \paren {f^-}^y \rd \mu < \infty$
From Integral of Horizontal Section of Measurable Function gives Measurable Function, we have:

$\ds y \mapsto \int_X \paren {f^+}^y \rd \mu$ is $\Sigma_Y$-measurable
and:

$\ds y \mapsto \int_X \paren {f^-}^y \rd \mu$ is $\Sigma_Y$-measurable.
From Set of Points for which Measurable Function is Real-Valued is Measurable, we therefore have: 

$\ds \set {y \in Y : \int_X \paren {f^+}^y \rd \mu < \infty} \in \Sigma_Y$
and:

$\ds \set {y \in Y : \int_X \paren {f^-}^y \rd \mu < \infty} \in \Sigma_Y$
Set:

$\ds A = \set {y \in Y : \int_X \paren {f^+}^y \rd \mu < \infty}$
and:

$\ds B = \set {y \in Y : \int_X \paren {f^-}^y \rd \mu < \infty}$
Then: 

$A \cap B \in \Sigma_Y$
from Sigma-Algebra Closed under Countable Intersection.
Since $\sigma$-algebras are closed under relative complement, we have: 

$Y \setminus \paren {A \cap B} \in \Sigma_Y$
With that, we can write:














\(\ds \map {J_f} y\)

\(=\)







\(\ds \begin{cases}\ds \int_X f^y \rd \mu & y \in A \cap B \\ 0 & y \in Y \setminus \paren {A \cap B}\end{cases}\)




















\(\ds \)

\(=\)







\(\ds \begin{cases}\ds \int_X \paren {f^y}^+ \rd \mu - \int_X \paren {f^y}^- \rd \mu & y \in A \cap B \\ 0 & y \in Y \setminus \paren {A \cap B}\end{cases}\)





Definition of Integral of Integrable Function














\(\ds \)

\(=\)







\(\ds \begin{cases}\ds \int_X \paren {f^+}^y \rd \mu - \int_Y \paren {f^-}^y \rd \mu & y \in A \cap B \\ 0 & y \in Y \setminus \paren {A \cap B}\end{cases}\)





Positive Part of Vertical Section of Function is Vertical Section of Positive Part, Negative Part of Vertical Section of Function is Vertical Section of Negative Part



For brevity, write: 

$C = A \cap B$
and:

$D = Y \setminus \paren {A \cap B}$
Write $\Sigma_{Y, C}$ for the trace $\sigma$-algebra of $C$ in $\Sigma_Y$.
Likewise write $\Sigma_{Y, D}$ for the trace $\sigma$-algebra of $D$ in $\Sigma_Y$.
From Restriction of Measurable Function is Measurable on Trace Sigma-Algebra, we have: 

$\ds y \mapsto \int_X \paren {f^+}^y \rd \mu$ is $\Sigma_{Y, C}$-measurable
and:

$\ds y \mapsto \int_X \paren {f^-}^y \rd \mu$ is $\Sigma_{Y, C}$-measurable.
From Pointwise Difference of Measurable Functions is Measurable, we have: 

$\ds \int_X \paren {f^+}^y \rd \mu - \int_X \paren {f^-}^y \rd \nu$ is $\Sigma_{Y, C}$-measurable.
From Constant Function is Measurable, we have: 

$y \mapsto 0$ is $\Sigma_{Y, D}$-measurable.
From Piecewise Combination of Measurable Mappings is Measurable: General Case, we have: 

$J_f$ is $\Sigma_Y$-measurable.
$\blacksquare$





