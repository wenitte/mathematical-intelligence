# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Normal_Distribution



Theorem
The characteristic function of the normal distribution with mean $\mu$ and variance $\sigma^2$ is given by:

$\map \phi t = e^{i t \mu - \frac 1 2 t^2 \sigma^2}$


Corollary
The characteristic function of the standard normal distribution is:

$\map \phi t = e^{-\frac 1 2 t^2}$


Proof
Lemma $1$
Let:

$k = \mu + i t \sigma^2$
$c = e^{\mu i t - \frac 1 2 t^2 \sigma^2}$
Then:

$\map \phi t = c \dfrac 1 {\sqrt {2 \pi \sigma^2} } \ds \int_{x \mathop \in \R} e^{-\paren {\frac {x - k} {\sqrt 2 \sigma} }^2} \rd x$
$\Box$


Lemma $2$
$\ds \lim_{\alpha \mathop \to \infty} \int_{\frac{-\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} }^{\frac {\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} } e^{-z^2} \rd z = \sqrt {2 \pi \sigma^2}$
$\Box$

By Lemma $1$:

$\map \phi t = c \dfrac 1 {\sqrt {2 \pi \sigma^2} } \ds \int_{x \mathop \in \R} e^{-\paren {\frac {x - k} {\sqrt 2 \sigma} }^2} \rd x$

Let $z = \paren {\dfrac {x - k} {\sqrt 2 \sigma} }$.
Then:














\(\ds \map \phi t\)

\(=\)







\(\ds c \frac 1 {\sqrt {2 \pi \sigma^2} } \int_{\frac {-\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} }^{\frac {\alpha - \mu} {\sqrt 2 \sigma} - i \frac {t \sigma} {\sqrt 2} } e^{-z^2} \rd z\)




















\(\ds \)

\(=\)







\(\ds c \frac 1 {\sqrt {2 \pi \sigma^2} } \sqrt {2 \pi \sigma^2}\)





Lemma $2$














\(\ds \)

\(=\)







\(\ds c\)




















\(\ds \)

\(=\)







\(\ds e^{\mu i t - \frac 1 2 t^2 \sigma^2}\)









$\blacksquare$





