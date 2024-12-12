# 

Source: https://proofwiki.org/wiki/Fourier_Series/Sawtooth_Wave/Special_Cases/Half_Interval_Pi


It has been suggested that this page or section be merged into Fourier Series/Identity Function over Minus Pi to Pi.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Special Case of Fourier Series for Sawtooth Wave
Let $\map S x$ be the sawtooth wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
x & : x \in \openint {-\pi} \pi \\
\map S {x + 2 \pi} & : x < -\pi \\
\map S {x - 2 \pi} & : x > +\pi \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds 2 \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin n x\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {\sin x - \frac {\sin 2 x} 2 + \frac {\sin 3 x} 3 + \dotsb}\)











Proof
From Fourier Series for Sawtooth Wave, the sawtooth wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
x & : x \in \openint {-l} l \\
\map S {x + 2 l} & : x < -1 \\
\map S {x - 2 l} & : x > +1 \end {cases}$

has a Fourier series which can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac {2 l} \pi \sum_{n \mathop = 1}^\infty \frac {\paren {-1}^{n + 1} } n \sin \dfrac {n \pi x} l\)




















\(\ds \)

\(=\)







\(\ds \frac {2 l} \pi \paren {\sin \dfrac {\pi x} l - \frac 1 2 \sin \dfrac {2 \pi x} l + \frac 1 3 \sin \dfrac {3 \pi x} l + \dotsb}\)









The result follows by setting $l = \pi$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.9$




