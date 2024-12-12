# 

Source: https://proofwiki.org/wiki/Fourier_Series/Sawtooth_Wave/Special_Cases/Unit_Half_Interval

Special Case of Fourier Series for Sawtooth Wave
Let $\map S x$ be the sawtooth wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
x & : x \in \openint {-1} 1 \\
\map S {x + 2} & : x < -1 \\
\map S {x - 2} & : x > +1 \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac 2 \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n \pi x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 \pi \paren {\sin \pi x - \frac {\sin 2 \pi x} 2 + \frac {\sin 3 \pi x} 3 + \dotsb}\)











Proof
From Fourier Series for Sawtooth Wave, the sawtooth wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
x & : x \in \openint {-l} l \\
\map S {x + 2 l} & : x < -l \\
\map S {x - 2 l} & : x > +l \end {cases}$
has a Fourier series which can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac {2 l} \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \dfrac {n \pi x} l\)




















\(\ds \)

\(=\)







\(\ds \frac {2 l} \pi \paren {\sin \dfrac {\pi x} l - \frac 1 2 \sin \dfrac {2 \pi x} l + \frac 1 3 \sin \dfrac {3 \pi x} l + \dotsb}\)









The result follows by setting $l = 1$.
$\blacksquare$





