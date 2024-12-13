# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Corollary_2



Corollary to L'Hôpital's Rule
Let $f$ and $g$ be real functions which are differentiable on the open interval $\openint a b$.
Suppose that $\forall x \in \openint a b: \map {g'} x \ne 0$.
Suppose that $\map f x \to +\infty$ and $\map g x \to +\infty$ as $x \to a^+$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Then you should assume $g' < 0$ instead of $g' \ne 0$, because it must be at this point.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof
Let $\ds \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x} = L$.
Let $\sequence {x_n}$ be a sequence such that:

$\quad x_n \in \openint a b$ for all $n \in \N$ and $\ds \lim_{n \mathop \to \infty} x_n = a$
From Intermediate Value Theorem for Derivatives and the definition of limit of real function, it follows that:

$\ds \lim_{n \mathop \to \infty} \map g {x_n} = +\infty$
and $\sequence {\map g {x_n} }$ is strictly increasing.


The validity of the material on this page is questionable.In particular: The sequence need not be strictly increasing; however, there must be a divergent strictly increasing subsequence.Thinking about it quickly, there must be a finite number of changes of derivative from pos to neg within a finite open interval or $g$ won't be continuous. Then you limit your discussion to the last little bit where it is monotone. Perhaps. Not sure how to get it to work though.Yes, to be really correct, we need  more steps.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Consider the range $\closedint {x_{n - 1} } {x_n} \subset \openint a b$ where $n \ge 2$.
By Cauchy Mean Value Theorem, there exists $c_n \in \openint {x_{n - 1} } {x_n}$ such that:

$\ds \frac {\map f {x_n} - \map f {x_{n - 1} } } {\map g {x_n} - \map g {x_{n - 1} } } = \frac {\map {f'} {c_n} } {\map {g'} {c_n} }$
From the above and the Squeeze Theorem for Real Sequences:

$\ds \lim_{n \mathop \to \infty} c_n = a$
and:

$\ds \lim_{n \mathop \to \infty} \frac {\map f {x_n} - \map f {x_{n - 1} } } {\map g {x_n} - \map g {x_{n - 1} } } = \lim_{n \mathop \to \infty} \frac {\map {f'} {c_n} } {\map {g'} {c_n} } = L$
So, by Stolz-Cesàro Theorem: Corollary:

$\ds \lim_{n \mathop \to \infty} \frac {\map f {x_n} } {\map g {x_n} } = L$
From the definition of limit of real function, we deduce that:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = L = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
$\blacksquare$


Remarks
The proof does not actually use the assumption $\ds \lim_{x \mathop \to a^+} \map f x = \infty$.

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Add these as separate corollariesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
Cases $x \to b^-$, $x \to \pm \infty$ and $\map g x \to -\infty$ can be proven similarly.


Also defined as
In many elementary texts on real analysis, it appears to be commonplace for $f$ and $g$ to be specified as being continuous on $\closedint a b$.
However, this is not strictly necessary, as differentiability on $\openint a b$ is completely adequate.
If is of course noted that from Differentiable Function is Continuous, if $f$ and $g$ are differentiable on $\openint a b$, they are also continuous on $\openint a b$, just not necessarily also at $a$ or $b$.
Indeed, for L'Hôpital's Rule: Corollary $2$, $f$ and $g$ are demonstrably not continuous either at $a$ or $b$, or possibly both.


Source of Name
This entry was named for Guillaume de l'Hôpital.


Historical Note
While attributed to Guillaume de l'Hôpital, who included it in his $1696$ work L'Analyse des Infiniment Petits, published anonymously, this result was in fact discovered by Johann Bernoulli in $1694$.
After L'Hôpital's death, Bernoulli claimed that most of the content of L'Analyse des Infiniment Petits, including L'Hôpital's Rule, was in fact his own work.
However, it was discovered in $1955$, on the publication of correspondence between L'Hôpital and Bernoulli that there had been an agreement between them to allow L'Hôpital to use Bernoulli's discoveries however he wanted.
Hence L'Hôpital was vindicated, and his name continues to be associated with this result.


Sources
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.4$ Limits, Maxima and Minima: Indeterminate Forms (L'Hospital's Rule): $3.4.1$




