# 

Source: https://proofwiki.org/wiki/Fourier_Series/Triangle_Wave/Special_Cases/Unit_Half_Interval

Special Case of Fourier Series for Triangle Wave
Let $\map T x$ be the triangle wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map T x = \begin {cases}
\size x & : x \in \closedint {-1} 1 \\
\map T {x + 2} & : x < -1 \\
\map T {x - 2} & : x > +1 \end {cases}$
where $\size x$ denotes the absolute value of $x$.

Then its Fourier series can be expressed as:














\(\ds \map T x\)

\(\sim\)







\(\ds \frac 1 2 - \frac 4 {\pi^2} \sum_{n \mathop = 0}^\infty \frac 1 {\paren {2 n + 1}^2} \cos \paren {2 n + 1} \pi x\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 - \frac 4 {\pi^2} \paren {\cos \pi x + \frac 1 {3^2} \cos 3 \pi x + \frac 1 {5^2} 5 \pi x + \dotsb}\)











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









The result follows by setting $l = 1$.
$\blacksquare$





