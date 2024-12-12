# 

Source: https://proofwiki.org/wiki/Fourier_Series/Square_Wave/Special_Cases/Half_Interval_Pi

Special Case of Fourier Series for Square Wave
Let $\map S x$ be the square wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
1 & : x \in \openint 0 \pi \\
-1 & : x \in \openint {-\pi} 0 \\
\map S {x + 2 \pi} & : x < -\pi \\
\map S {x - 2 \pi} & : x > +\pi \end {cases}$

Then its half-range Fourier sine series can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac 4 \pi \sum_{r \mathop = 0}^\infty \frac 1 {2 r + 1} {\sin x}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 \pi \paren {\sin x + \dfrac {\sin 3 x} 3 + \dfrac {\sin 5 x} 5 + \dotsb}\)











Proof
From Fourier Series for Square Wave, the real function $\map f x$ defined on the open interval $\openint {-l} l$ as:

$\map f x = \begin {cases} -1 & : x \in \openint {-l} 0 \\ 1 & : x \in \openint 0 l \end {cases}$

has a half-range Fourier sine series which can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac 4 \pi \sum_{r \mathop = 0}^\infty \frac 1 {2 r + 1} {\sin \frac {\pi x} l}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 \pi \paren {\sin \frac {\pi x} l + \dfrac 1 3 \sin \frac {3 \pi x} l + \dfrac 1 5 \sin \frac {5 \pi x} l + \dotsb}\)









The result follows by setting $l = \pi$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Fourier Series: Special Fourier Series and their Graphs $23.7$




