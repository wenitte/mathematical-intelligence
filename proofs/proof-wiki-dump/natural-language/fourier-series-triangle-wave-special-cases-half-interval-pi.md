# 

Source: https://proofwiki.org/wiki/Fourier_Series/Triangle_Wave/Special_Cases/Half_Interval_Pi

Special Case of Fourier Series for Triangle Wave
Let $\map T x$ be the triangle wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map T x = \begin {cases}
\size x & : x \in \closedint {-\pi} \pi \\
\map T {x + 2 \pi} & : x < -\pi \\
\map T {x - 2 \pi} & : x > +\pi \end {cases}$
where $\size x$ denotes the absolute value of $x$.

Then its Fourier series can be expressed as:














\(\ds \map T x\)

\(\sim\)







\(\ds \frac \pi 2 - \frac 4 \pi \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \paren {2 n + 1} x\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 - \frac 4 \pi \paren {\cos x + \frac 1 {3^2} \cos 3 x + \frac 1 {5^2} 5 x + \dotsb}\)











Proof
From Fourier Series for Triangle Wave, the real function $\map T x$ defined on the open interval $\openint {-l} l$ as:

$\map T x = \size x$

has a Fourier series which can be expressed as:














\(\ds \map T x\)

\(\sim\)







\(\ds \frac l 2 - \frac {4 l} {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \dfrac {\paren {2 n + 1} \pi x} l\)




















\(\ds \)

\(=\)







\(\ds \frac l 2 - \frac {4 l} {\pi^2} \paren {\cos \dfrac {\pi x} l + \frac 1 {3^2} \cos \dfrac {3 \pi x} l + \frac 1 {5^2} \dfrac {5 \pi x} l + \dotsb}\)









The result follows by setting $l = \pi$.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 23$: Special Fourier Series and their Graphs: $23.8$




