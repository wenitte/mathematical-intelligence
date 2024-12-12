# 

Source: https://proofwiki.org/wiki/Fourier_Series/Square_Wave



Theorem
  Square Wave and $9$th Approximation
Let $\map S x$ be the square wave defined on the real numbers $\R$ as:

$\forall x \in \R: \map S x = \begin {cases}
1 & : x \in \openint 0 l \\
-1 & : x \in \openint {-l} 0 \\
\map S {x + 2 l} & : x < -l \\
\map S {x - 2 l} & : x > +l \end {cases}$

Then its Fourier series can be expressed as:














\(\ds \map S x\)

\(\sim\)







\(\ds \frac 4 \pi \sum_{r \mathop = 0}^\infty \frac 1 {2 r + 1} {\sin \frac {\pi x} l}\)




















\(\ds \)

\(=\)







\(\ds \frac 4 \pi \paren {\sin \frac {\pi x} l + \dfrac 1 3 \sin \frac {3 \pi x} l + \dfrac 1 5 \sin \frac {5 \pi x} l + \dotsb}\)











Proof
Let $\map f x$ be the function defined as:

$\forall x \in \openint {-l} l: \begin{cases} -1 & : -l < x < 0 \\ 1 & : 0 < x < l \end {cases}$
By inspection we see that $\map f x$ is an odd function.

Hence from Fourier Series for Odd Function over Symmetric Range we can express $f$ by a half-range Fourier sine series:

$\ds \map f x \sim \sum_{n \mathop = 1}^\infty b_n \sin \dfrac {n \pi x} l$
where for all $n \in \Z_{> 0}$:

$\ds b_n = \frac 2 l \int_0^l \map f x \sin \dfrac {n \pi x} l \rd x$
over the interval $\openint 0 l$.
In that interval $\openint 0 l$, we have:

$\map S x = 1$

Hence:














\(\ds b_n\)

\(=\)







\(\ds \frac 2 l \int_0^l \sin \dfrac {n \pi x} l \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac 2 l \intlimits {\frac l {n \pi} \paren {-\cos \dfrac {n \pi x} l} } 0 c\)





Primitive of $\sin a x$














\(\ds \)

\(=\)







\(\ds \frac 2 {n \pi} \paren {-\cos n \pi - \paren {-\cos 0} }\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {n \pi} \paren {1 - \cos n \pi}\)





Cosine of Zero is One and simplifying














\(\ds \)

\(=\)







\(\ds \frac 2 {n \pi} \paren {1 - \paren {-1}^n}\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \begin {cases} 0 & : \text {$n$ even} \\ \dfrac 4 {n \pi}  & : \text {$n$ odd} \end {cases}\)














\(\ds \leadsto \ \ \)





\(\ds b_{2 r + 1}\)

\(=\)







\(\ds \dfrac 4 {\paren {2 r + 1} \pi}\)





for $r \in \Z_{\ge 0}$: substituting $n = 2 r + 1$



The result follows.
$\blacksquare$


Special Cases
Unit Half Interval
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











Half Interval $\pi$
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













