# 

Source: https://proofwiki.org/wiki/H%C3%B6lder%27s_Inequality_for_Integrals



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p, q \in \R_{>0}$ such that $\dfrac 1 p + \dfrac 1 q = 1$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: the assumption should read $p,q\in\R_{>0}\cup\set{+\infty}$.Suggestion: make a page for defining $p,q$ as satisfying this relation, including the pair $\tuple{1,\infty}$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Let $f \in \map {\LL^p} \mu, f: X \to \R$, and $g \in \map {\LL^q} \mu, g: X \to \R$, where $\LL$ denotes Lebesgue space.

Then their pointwise product $f g$ is $\mu$-integrable, that is:

$f g \in \map {\LL^1} \mu$
and:














\(\ds \norm {f g}_1\)

\(=\)







\(\ds \int \size {f g} \rd \mu\)




















\(\ds \)

\(\le\)







\(\ds \paren {\int \size f^p \rd \mu}^{1 / p} \paren {\int \size g^q \rd \mu}^{1 / q}\)




















\(\ds \)

\(=\)







\(\ds \norm f_p \cdot \norm g_q\)









where:

$\size {f g}$ denotes the absolute value function applied to the pointwise product of $f$ and $g$
the $\norm {\, \cdot \,}_p$ signify $p$-seminorms.


Equality
Equality, that is:

$\ds \int \size {f g} \rd \mu = \norm f_p \cdot \norm g_q$
holds if and only if, for $\mu$-almost all $x \in X$:

$\dfrac {\size {\map f x}^p} {\norm f_p^p} = \dfrac {\size {\map g x}^q} {\norm g_q^q}$

The validity of the material on this page is questionable.In particular: What if e.g. $f=0$ and $g=1$? The equality holds, trivially, but how to read the necessary condition?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This page needs the help of a knowledgeable authority.In particular: Whoever is on the case, note that the equality condition as given in both Abramowitz & Stegun and Spiegel is as follows, but then they don't go into that fancy-pants $\norm f_p$ notation either, they specifically use the notation $\ds \paren {\int_a^b {\size {\map f x} }^p \rd x}^{1 / p}$ which is more accessible, although admittedly in the context of a Riemann integral rather than a Lebesgue one. Input needed from someone who a) is familiar with the theorem in the general Lebesgue space and b) is motivated to bring the exposition back down to earth by explaining what $\norm f_p$ actually means in undergrad language.If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\dfrac {\size {\map f x}^{p - 1} } {\size {\map g x} } = c$
for some $c \in \R$.


Generalized Hölder Inequality
Let $\struct {X, \Sigma, \mu}$ be a measure space.
For $i = 1, \ldots, n$ let $p_i \in \R_{>0}$ such that:

$\ds \sum_{i \mathop = 1}^n \frac 1 {p_i} = 1$
Let $f_i \in \map {\LL^{p_i} } \mu, f_i: X \to \R$, where $\LL$ denotes Lebesgue space.

Then their pointwise product $\ds \prod_{i \mathop = 1}^n f_i$ is integrable, that is:

$\ds \prod_{i \mathop = 1}^n f_i \in \map {\LL^1} \mu$
and:

$\ds \norm {\prod_{i \mathop = 1}^n f_i}_1 = \int \size {\prod_{i \mathop = 1}^n f_i} \rd \mu \le \prod_{i \mathop = 1}^n \norm {f_i}_{p_i}$
where the various instances of $\norm {\, \cdot \,}$ signify $p$-seminorms.


Proof
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

If we have equality, then:

$\ds \int \paren {\frac {\size {\map f x}^p} {p \norm f_p^p} + \frac {\size {\map g x}^q} {q \norm g_q^q} - \frac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q} } \map \mu {\d x} = 0$

As:

$\dfrac {\size {\map f x}^p} {p \norm f_p^p} + \dfrac {\size {\map g x}^q} {q \norm g_q^q} - \dfrac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q} \ge 0$
it follows from Measurable Function Zero A.E. iff Absolute Value has Zero Integral that:

$\dfrac {\size {\map g x}^p} {p \norm f_p^p} + \dfrac {\size {\map g x}^q} {q \norm g_q^q} = \dfrac {\size {\map f x \map g x} } {\norm f_p \cdot \norm g_q}$ a.e.

By Young's Inequality for Products, we have equality if and only if $b_x = {a_x}^{p - 1}$.
Raising both sides to the $q$th power gives:

$\dfrac {\size {\map g x}^p} {\norm f_p^p} = \dfrac {\size {\map g x}^q} {\norm g_q^q}$
as $\paren {p - 1} q = p$. 
$\blacksquare$


Also known as
Hölder's Inequality for Integrals is also seen referred to just as Hölder's Inequality.
This allows it to be confused with Hölder's Inequality for Sums, so the full form is used on $\mathsf{Pr} \infty \mathsf{fWiki}$.


Also see
Hölder's Inequality for Sums


Source of Name
This entry was named for Otto Ludwig Hölder.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.2$ Inequalities: Hölder's Inequality for Integrals: $3.2.10$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 36$: Inequalities: $36.14$: Hölder's Inequality for Integrals
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Hölder's inequality: 1.
1991: David Williams: Probability with Martingales ... (previous) ... (next): $6.12$: The 'elementary formula' for expectation
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.2$




