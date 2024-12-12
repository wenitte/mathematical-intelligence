# 

Source: https://proofwiki.org/wiki/User:Addem/Holder/Integral



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p, q \in \R$ such that $\dfrac 1 p + \dfrac 1 q = 1$.
Let $f \in \map {\LL^p} \mu, f: X \to \R$, and $g \in \map {\LL^q} \mu, g: X \to \R$, where $\LL$ denotes Lebesgue space.

Then their pointwise product $f g$ is $\mu$-integrable, that is:

$f g \in \map {\LL^1} \mu$
and:

$\ds \size {f g}_1 = \int \size {f g} \rd \mu \le \norm f_p \cdot \norm g_q$
where the $\norm {\, \cdot \,}_p$ signify $p$-seminorms.
Equality in Hölder's Inequality for Integrals, that is:

$\ds \int \size {f g} \rd \mu = \norm f_p \cdot \norm g_q$
holds if and only if, for almost all $x \in X$:

$\dfrac {\size {\map f x}^p} {\norm f_p^p} = \dfrac {\size {\map g x}^q} {\norm g_q^q}$


Proof
Inequality
Let $x \in X$.
Let:

$a_x := \dfrac {\size {\map f x} } {\norm f_p}$
and:

$b_x := \dfrac {\size {\map g x} } {\norm g_q}$

Applying Young's Inequality for Products to $a_x$ and $b_x$:

$\dfrac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q} \le \dfrac {\size {\map f x}^p} {p \norm f_p^p} + \dfrac {\size {\map g x}^q} { q \norm g_q^q}$

By Integral of Positive Measurable Function is Monotone, integrating both sides of this inequality over x yields:

$\ds \dfrac {\int \size {\map f x \map g x} \map \mu {\d x} } {\norm f_p \cdot \norm g_q} \le \frac {\norm f_p^p} {p \norm f_p^p} + \frac {\norm g_p^q} {q \norm g_q^q} = \frac 1 p + \frac 1 q = 1$
so:

$\ds \int \size {\map f x \map g x} \map \mu {\d x} \le \norm f_p \cdot \norm g_q$
Equality
First assume that we have equality, i.e. $\|fg\|_1=\|f\|_p\|g\|_q$.  Then

$\ds \int \paren {\frac {\size {\map f x}^p} {p \norm f_p^p} + \frac {\size {\map g x}^q} {q \norm g_q^q} - \frac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q} } \map \mu {\d x} = 0$

As:

$\dfrac {\size {\map f x}^p} {p \norm f_p^p} + \dfrac {\size {\map g x}^q} {q \norm g_q^q} - \dfrac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q} \ge 0$
it follows from Measurable Function Zero A.E. iff Absolute Value has Zero Integral that:

$\dfrac {\size {\map g x}^p} {p \norm f_p^p} + \dfrac {\size {\map g x}^q} {q \norm g_q^q} = \dfrac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q}$ a.e.
We therefore have shown that $\|fg\|_1=\|f\|_p\|g\|_q$ entails that $f$ and $g$ are linearly dependent.  

$\Box$
For the converse, suppose that $f$ and $g$ are linearly dependent.  By Young's Inequality for Products, we have equality if and only if $b_x = {a_x}^{p - 1}$.
Raising both sides to the $q$th power gives:

$\dfrac {\size {\map g x}^p} {\norm f_p^p} = \dfrac {\size {\map g x}^q} {\norm g_q^q}$
as $\paren {p - 1} q = p$. 
$\blacksquare$

Generalized Hölder's Inequality for Integrals
Let $\struct {X, \Sigma, \mu}$ be a measure space.
For $i = 1, \ldots, n$ let $p_i \in \R_{>0}$ such that:

$\ds \sum_{i \mathop = 1}^n \frac 1 {p_i} = 1$
Let $f_i \in \map {\LL^{p_i} } \mu, f_i: X \to \R$, where $\LL$ denotes Lebesgue space.

Then their pointwise product $\ds \prod_{i \mathop = 1}^n f_i$ is integrable, that is:

$\ds \prod_{i \mathop = 1}^n f_i \in \map {\LL^1} \mu$
and:

$\ds \norm {\prod_{i \mathop = 1}^n f_i}_1 = \int \size {\prod_{i \mathop = 1}^n f_i} \rd \mu \le \prod_{i \mathop = 1}^n \norm {f_i}_{p_i}$
where the various instances of $\norm {\, \cdot \,}$ signify $p$-seminorms.


Source of Name
This entry was named for Otto Ludwig Hölder.


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.2$




