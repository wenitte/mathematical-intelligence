# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule

  This article was Featured Proof between 29 May 2009 and 5 June 2009.


Theorem
Let $f$ and $g$ be real functions which are differentiable on the open interval $\openint a b$.
Let:

$\forall x \in \openint a b: \map {g'} x \ne 0$
where $g'$ denotes the derivative of $g$ with respect to $x$.
Let:

$\ds \lim_{x \mathop \to a^+} \map f x = \lim_{x \mathop \to a^+} \map g x = 0$

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Weak Version
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Let:

$\forall x \in \openint a b: \map {g'} x \ne 0$
where $g'$ denotes the derivative of $g$ with respect to $x$.
Let:

$\map f a = \map g a = 0$

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Corollary 1
Suppose that $\exists c \in \openint a b: \map f c = \map g c = 0$.

Then:

$\ds \lim_{x \mathop \to c} \frac {\map f x} {\map g x} = \lim_{x \mathop \to c} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Corollary 2
Suppose that $\map f x \to +\infty$ and $\map g x \to +\infty$ as $x \to a^+$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Then you should assume $g' < 0$ instead of $g' \ne 0$, because it must be at this point.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof 1
Let $l = \ds \lim_{x \mathop \to a^+} \frac {\map {f'} x}{\map {g'} x}$.
Let $\epsilon \in \R_{>0}$.
By the definition of limit, we ought to find a $\delta \in \R_{>0}$ such that:

$\forall x \in \R: \size {x - a} < \delta \implies \size {\dfrac {\map f x} {\map g x} - l} < \epsilon$
Fix $\delta$ such that:

$\forall x \in \R: \size {x - a} < \delta \implies \size {\dfrac {\map {f'} x} {\map {g'} x} - l} < \epsilon$
which is possible by the definition of limit.

Define:
$\quad \map {f_0} x = \begin {cases}
\map f x & : x \in \openint a b \\
0 & : x = a
\end {cases}$
$\quad \map {g_0} x = \begin {cases}
\map f x & : x \in \openint a b \\
0 & : x = a
\end {cases}$
By definition of right-continuous, it follows that $f_0$ and $g_0$ are continuous on $\hointr a b$.

Let $x_\delta$ be such that $0 < x_\delta - a < \delta$.
We have that $f_0$ and $g_0$ are continuous on $\closedint a {x_\delta}$, and differentiable on $\openint a {x_\delta}$
Thus, by the Cauchy Mean Value Theorem with $b = x_\delta$:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'_0} \xi} {\map {g'_0} \xi} = \dfrac {\map {f_0} {x_\delta} - \map {f_0} a} {\map {g_0} {x_\delta} - \map {g_0} a}$
Since $\map {f_0} a = \map {g_0} a = 0$:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'_0} \xi} {\map {g'_0} \xi} = \dfrac {\map {f_0} {x_\delta}} {\map {g_0} {x_\delta}}$
But since $\xi, x_\delta \in \openint a b$:

$\map {f'_0} \xi = \map {f'} \xi$
$\map {g'_0} \xi = \map {g'} \xi$
$\map {f_0} {x_\delta} = \map f {x_\delta}$
$\map {g_0} {x_\delta} = \map g {x_\delta}$
Therefore:

$\exists \xi \in \openint a {x_\delta}: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f {x_\delta}} {\map g {x_\delta}}$

Now, as $a < \xi < x_\delta$, it follows that $\size{\xi - a} < \delta$ as well.
Therefore:

$\size {\dfrac {\map f {x_\delta}} {\map g {x_\delta}} - l} = \size {\dfrac {\map {f'} \xi} {\map {g'} \xi} - l} < \epsilon$
which leads us to the desired conclusion that:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
$\blacksquare$


Proof 2
Take the Cauchy Mean Value Theorem with $b = x$:

$\exists \xi \in \openint a x: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f x - \map f a} {\map g x - \map g a}$

Then if $\map f a = \map g a = 0$ we have:

$\exists \xi \in \openint a x: \dfrac {\map {f'} \xi} {\map {g'} \xi} = \dfrac {\map f x} {\map g x}$

Note that $\xi$ depends on $x$; that is, different values of $x$ may require different values of $\xi$ to make the above statement valid.
It follows from Limit of Function in Interval that $\xi \to a$ as $x \to a$.
Also, $\xi \ne a$ when $x > a$.
So from Hypothesis $2$ of Limit of Composite Function, it follows that:

$\ds \lim_{x \mathop \to a^+} \dfrac {\map {f'} \xi} {\map {g'} \xi} = \lim_{x \mathop \to a^+} \dfrac {\map {f'} x} {\map {g'} x}$
Hence the result.
$\blacksquare$


Examples
Example: $\frac {\sqrt {1 + x} - 1} x$
$\ds \lim_{x \mathop \to 0} \dfrac {\sqrt {1 + x} - 1} x = \dfrac 1 2$


Example: $\frac {x^2 - 4} {2 x - 4}$
Let $f: \R \to \R$ and $g: \R \to \R$ be real functions defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \map f x\)

\(=\)







\(\ds x^2 - 4\)




















\(\ds \map g x\)

\(=\)







\(\ds 2 x - 4\)









Then:

$\ds \lim_{x \mathop \to 2} \dfrac {\map f x} {\map g x} = 2$


Also defined as
In many elementary texts on real analysis, it appears to be commonplace for $f$ and $g$ to be specified as being continuous on $\closedint a b$.
However, this is not strictly necessary, as differentiability on $\openint a b$ is completely adequate.
If is of course noted that from Differentiable Function is Continuous, if $f$ and $g$ are differentiable on $\openint a b$, they are also continuous on $\openint a b$, just not necessarily also at $a$ or $b$.
Indeed, for L'Hôpital's Rule: Corollary $2$, $f$ and $g$ are demonstrably not continuous either at $a$ or $b$, or possibly both.


Also known as
Because of variants in the rendition of L'Hôpital's name, L'Hôpital's Rule is often seen as:

L'Hospital's rule
de L'Hôpital's rule
and so on.


Source of Name
This entry was named for Guillaume de l'Hôpital.


Historical Note
While attributed to Guillaume de l'Hôpital, who included it in his $1696$ work L'Analyse des Infiniment Petits, published anonymously, this result was in fact discovered by Johann Bernoulli in $1694$.
After L'Hôpital's death, Bernoulli claimed that most of the content of L'Analyse des Infiniment Petits, including L'Hôpital's Rule, was in fact his own work.
However, it was discovered in $1955$, on the publication of correspondence between L'Hôpital and Bernoulli that there had been an agreement between them to allow L'Hôpital to use Bernoulli's discoveries however he wanted.
Hence L'Hôpital was vindicated, and his name continues to be associated with this result.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.4$ Limits, Maxima and Minima: Indeterminate Forms (L'Hospital's Rule): $3.4.1$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.20$: The Bernoulli Brothers
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): L'Hôpital's rule (L'Hospital's rule, de L'Hôpital's rule)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): L'Hôpital's rule (L'Hospital's rule, de L'Hôpital's rule)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): l'Hôpital's rule
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): l'Hôpital, l'Hôpital's Rule
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): l'Hôpital's rule




