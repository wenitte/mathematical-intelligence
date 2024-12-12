# 

Source: https://proofwiki.org/wiki/Fourier_Series/Square_Wave/Special_Cases/Unit_Half_Interval

Special Case of Fourier Series for Square Wave
Let $\map S x$ be the square wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
1 & : x \in \openint 0 1 \\
-1 & : x \in \openint {-1} 0 \\
\map S {x + 2} & : x < -1 \\
\map S {x - 2} & : x > +1 \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac 4 \pi \sum_{r \mathop = 0}^\infty \frac 1 {2 r + 1} {\sin \pi x}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 \pi \paren {\sin \pi x + \dfrac {\sin 3 \pi x} 3 + \dfrac {\sin 5 \pi x} 5 + \dotsb}\)











Proof
From Fourier Series for Square Wave, the real function $\map f x$ defined on the open interval $\openint {-l} l$ as:

$\map f x = \begin {cases} -1 & : x \in \openint {-l} 0 \\ 1 & : x \in \openint 0 l \end {cases}$

has a Fourier series which can be expressed as:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac 4 \pi \sum_{r \mathop = 0}^\infty \frac 1 {2 r + 1} {\sin \frac {\pi x} l}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 \pi \paren {\sin \frac {\pi x} l + \dfrac 1 3 \sin \frac {3 \pi x} l + \dfrac 1 5 \sin \frac {5 \pi x} l + \dotsb}\)









The result follows by setting $l = 1$.
$\blacksquare$





