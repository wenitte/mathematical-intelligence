# 

Source: https://proofwiki.org/wiki/Characteristic_Function_of_Normal_Distribution/Lemma_1

Lemma for Characteristic Function of Normal Distribution
Let $\map \phi t$ denote the characteristic function of the normal distribution with mean $\mu$ and variance $\sigma^2$.

Let:

$k = \mu + i t \sigma^2$
$c = e^{\mu i t - \frac 1 2 t^2 \sigma^2}$
Then:

$\map \phi t = c \dfrac 1 {\sqrt {2 \pi \sigma^2} } \ds \int_{x \mathop \in \R} e^{-\paren {\frac {x - k} {\sqrt 2 \sigma} }^2} \rd x$


Proof
The characteristic function is defined as














\(\ds \map \phi t\)

\(=\)







\(\ds \expect {e^{i t X} }\)





where $\expect {\, \cdot \,}$ denotes expectation














\(\ds \)

\(=\)







\(\ds \int_{x \mathop \in \R} e^{i t x} \frac 1 {\sqrt {2 \pi \sigma^2} } e^{-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {2 \pi \sigma^2} } \int_{x \mathop \in \R} e^{i t x} e^{-\frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac 1 {\sqrt {2 \pi \sigma^2} } \int_{x \mathop \in \R} e^{i t x - \frac {\paren {x - \mu}^2} {2 \sigma^2} } \rd x\)










Begin by verifying that:

$i t x - \dfrac {\paren {x - \mu}^2} {2 \sigma^2} = -\dfrac {\paren {x - k}^2 + 2 \mu i t \sigma^2 - t^2 \sigma^4} {2 \sigma^2}$
We can then simplify the integral in $(1)$:














\(\ds \int_{x \mathop \in \R} e^{i t x - \frac {\paren {x - \mu}^2} {2\sigma^2} } \rd x\)

\(=\)







\(\ds \int_{x \mathop \in \R} e^{-\frac {\paren {x - k}^2 + 2 \mu i t \sigma^2 - t^2 \sigma^4} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds e^{\frac {2 \mu i t \sigma^2 - t^2 \sigma^4} {2 \sigma^2} } \int_{x \mathop \in \R} e^{-\frac {\paren {x - k}^2} {2 \sigma^2} } \rd x\)




















\(\ds \)

\(=\)







\(\ds e^{\mu i t - \frac 1 2 t^2 \sigma^2} \int_{x \mathop \in \R} e^{-\paren {\frac {x - k} {\sqrt 2 \sigma} }^2} \rd x\)




















\(\ds \)

\(=\)







\(\ds c \int_{x \mathop \in \R} e^{-\paren {\frac {x - k} {\sqrt 2 \sigma} }^2} \rd x\)









$\blacksquare$





