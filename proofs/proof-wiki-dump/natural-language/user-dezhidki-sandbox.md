# 

Source: https://proofwiki.org/wiki/User:Dezhidki/Sandbox



Corollary to L'Hôpital's Rule
Let $f$ and $g$ be real functions which are continuous on the closed interval $\closedint a b$ and differentiable on the open interval $\openint a b$.
Suppose that $\forall x \in \openint a b: \map {g'} x \ne 0$.
Suppose that $\map f x \to \infty$ and $\map g x \to \infty$ as $x \to a^+$.

Then:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
provided that the second limit exists.


Proof
Let $\ds \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x} = L$.
Let $\sequence {x_n}$ be a sequence such that:

$\quad x_n \in \openint a b$ for all $n \in \N$ and $\ds \lim_{n \mathop \to \infty}x_n = a$
From Intermediate Value Theorem for Derivatives and the definition of limit of real function follows that:

$\ds \lim_{n \mathop \to \infty} \map g {x_n} = \infty$
and $\sequence {\map g {x_n} }$ is strictly increasing.
Consider the range $\closedint {x_{n - 1} } {x_n} \subset \openint a b$ where $n \geq 2$.
By Cauchy Mean Value Theorem, there exists $c_n \in \openint {x_{n - 1} } {x_n}$ such that:

$\dfrac {\map f {x_n} - \map f {x_{n - 1} } } {\map g {x_n} - \map g {x_{n - 1} } } = \dfrac {\map {f'} {c_n} } {\map {g'} {c_n} }$
From the above and Squeeze Theorem follows that:

$\ds \lim_{n \mathop \to \infty} c_n = a$
and:

$\ds \lim_{n \mathop \to \infty} \frac {\map f {x_n} - \map f {x_{n - 1} } } {\map g {x_n} - \map g {x_{n - 1} } } = \lim_{n \mathop \to \infty} \dfrac {\map {f'} {c_n} } {\map {g'} {c_n} } = L$
So, by Stolz-Cesàro Theorem:

$\ds \lim_{n \mathop \to \infty} \frac {\map f {x_n}} {\map g {x_n} } = L$
From the definition of limit of a function deduce that:

$\ds \lim_{x \mathop \to a^+} \frac {\map f x} {\map g x} = L = \lim_{x \mathop \to a^+} \frac {\map {f'} x} {\map {g'} x}$
$\blacksquare$


Remarks
The proof does not actually use the assumption $\ds \lim_{x \mathop \to a^+} \map f x = \infty$.
Cases $x \to b^-$, $x \to \pm \infty$ and $\map g x \to -\infty$ can be proven similarly.
The proof does not necessarily require sequences and thus can be done using the $\epsilon$-$\delta$ definition of limit.


Source of Name
This entry was named for Guillaume de l'Hôpital.

However, this result was in fact discovered by Johann Bernoulli.
Because of variants in the rendition of his name, this result is often seen written as L'Hospital's Rule.





