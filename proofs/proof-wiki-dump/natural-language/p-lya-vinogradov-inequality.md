# 

Source: https://proofwiki.org/wiki/P%C3%B3lya-Vinogradov_Inequality



Theorem
Let $p$ be a positive odd prime.

Then:

$\forall m, n \in \N: \ds \size {\sum_{k \mathop = m}^{m + n} \paren {\frac k p} } < \sqrt p \, \ln p$
where $\paren {\dfrac k p}$ is the Legendre symbol.


Proof
Start with the following manipulations:














\(\ds \sum_{k \mathop = m}^{m + n} \paren {\dfrac k p}\)

\(=\)







\(\ds \frac 1 p \sum_{k \mathop = 0}^{p - 1} \sum_{x \mathop = m}^{m + n} \sum_{a \mathop = 0}^{p - 1} \paren {\dfrac k p} e^{2 \pi i a \paren {x - k} / p}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 p \sum_{a \mathop = 1}^{p - 1} \sum_{x \mathop = m}^{m + n} e^{2 \pi i a x / p} \sum_{k \mathop = 0}^{p - 1} \paren {\dfrac k p} e^{-2 \pi i a t / p}\)










The expression:

$\ds \sum_{k \mathop = 0}^{p - 1} \paren {\dfrac k p} e^{-2 \pi i a t / p}$
is a Gauss sum, and has magnitude $\sqrt p$.


This article, or a section of it, needs explaining.In particular: The above statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence:














\(\ds \size {\sum_{t \mathop = m}^{m + n} \paren {\dfrac t p} }\)

\(\le\)







\(\ds \size {\frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} \sum_{x \mathop = m}^{m + n} e^{2 \pi a i x / p} }\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} e^{2 \pi i a m / p} \sum_{x \mathop = 0}^n e^{2 \pi i a x / p} }\)




















\(\ds \)

\(\le\)







\(\ds \size {\frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} \frac {e^{2 \pi i a n / p} - 1} {e^{2 \pi i a / p} - 1} }\)




















\(\ds \)

\(=\)







\(\ds \size {\frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} \frac {e^{\pi i a n / p} \, \map \sin {\pi a n / p} } {e^{\pi i a / p} \, \map \sin {\pi a / p} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} \size {\frac 1 {\map \sin {\pi \left\langle{a / p}\right\rangle} } }\)




















\(\ds \)

\(\le\)







\(\ds \frac {\sqrt p} p \sum_{a \mathop = 1}^{p - 1} \frac 1 {2 \norm {a / p} }\)










This article, or a section of it, needs explaining.In particular: $\left\langle{a / p}\right\rangle$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Here $\norm x$ denotes the difference between $x$ and the closest integer to $x$, that is:

$\ds \norm x = \inf_{z \mathop \in \Z} \set {\size {x - z} }$
Since $p$ is odd, we have:














\(\ds \frac 1 2 \sum_{a \mathop = 1}^{p-1} \frac 1 {\norm{a / p} }\)

\(=\)







\(\ds \sum_{0 \mathop < a \mathop < \frac p 2} \frac p a\)




















\(\ds \)

\(=\)







\(\ds p \sum_{a \mathop = 1}^{\frac {p - 1} 2} \frac 1 a\)










Now:

$\ln \dfrac {2 x + 1} {2 x - 1} > \dfrac 1 x$
for $x > 1$.
To prove this, it suffices to show that the function $f: \hointr 1 \infty \to \R$ given by:

$\map f x = x \ln \dfrac {2 x + 1} {2 x - 1}$
is decreasing and approaches $1$ as $x \to \infty$.
To prove the latter statement, substitute $v = 1/x$ and take the limit as $v \to 0$ using L'Hospital's Rule.

To prove the former statement, it will suffice to show that $f'$ is less than zero on the interval $\hointr 1 \infty$.
Now we have that:

$\map {f} x = \dfrac {-4} {4 x^2 - 1} \paren {1 - \dfrac {4 x^2 + 1} {4 x^2 - 1} } > 0$
for $x > 1$.
So $f'$ is increasing on $\hointr 1 \infty$.
But $\map {f'} x \to 0$ as $x \to \infty$.
So $f'$ is less than zero for $x > 1$.

With this in hand, we have:














\(\ds \size {\sum_{t \mathop = m}^{m + n} \paren {\frac t p} }\)

\(\le\)







\(\ds \frac {\sqrt p} p \cdot p \sum_{a \mathop = 1}^{\frac {p - 1} 2} \frac 1 a\)




















\(\ds \)

\(<\)







\(\ds \sqrt p \sum_{a \mathop = 1}^{\frac {p - 1} 2} \ln \frac {2 a + 1} {2 a - 1}\)




















\(\ds \)

\(=\)







\(\ds \sqrt p \, \ln p\)









$\blacksquare$


Source of Name
This entry was named for George Pólya and Ivan Matveevich Vinogradov.


Sources
This article incorporates material from Pólya-Vinogradov inequality on PlanetMath, which is licensed under the Creative Commons Attribution/Share-Alike License.




