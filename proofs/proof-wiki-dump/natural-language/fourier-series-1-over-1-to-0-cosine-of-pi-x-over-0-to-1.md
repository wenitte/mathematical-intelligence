# 

Source: https://proofwiki.org/wiki/Fourier_Series/1_over_-1_to_0,_Cosine_of_Pi_x_over_0_to_1

Theorem
Let $\map f x$ be the real function defined on $\openint {-1} 1$ as:

  $\map f x$ and its $7$th approximation
$\map f x = \begin{cases}
1 & : -1 < x < 0 \\
\map \cos {\pi x} & : 0 < x < 1
\end{cases}$

Then its Fourier series can be expressed as:

$\map f x \sim \displaystyle \dfrac 1 2 + \frac {\cos \pi x} 2 + \sum_{r \mathop = 1}^\infty \paren {\dfrac {4 r \sin 2 r \pi x} {\pi \paren {2 r + 1} \paren {2 r - 1} } - \dfrac {2 \map \sin {2 r + 1} \pi x } {\pi \paren {2 r + 1} } }$


Proof
By definition of Fourier series:

$\displaystyle \map f x \sim \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n \pi x + b_n \sin n \pi x}$
where:














\(\ds a_n\)

\(=\)







\(\ds \int_{-1}^1 \map f x \cos n \pi x \rd x\)




















\(\ds b_n\)

\(=\)







\(\ds \int_{-1}^1 \map f x \sin n \pi x \rd x\)









for all $n \in \Z_{>0}$.

Thus:














\(\ds a_0\)

\(=\)







\(\ds \int_{-1}^1 \map f x \rd x\)





Cosine of Zero is One














\(\ds \)

\(=\)







\(\ds \int_{-1}^0 1 \rd x + \int_0^1 \map \cos {\pi x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits x {-1} 0 + \intlimits {\frac {\map \sin {\pi x} } \pi} 0 1\)





Primitive of Power, Primitive of $\cos \pi x$














\(\ds \)

\(=\)







\(\ds \paren {0 - \paren {-1} } - \paren {\frac {\sin \pi} \pi - \frac {\sin 0} \pi}\)




















\(\ds \)

\(=\)







\(\ds 1 - 0\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 1\)









$\Box$

For $n > 0$:














\(\ds a_n\)

\(=\)







\(\ds \int_{-1}^1 \map f x \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-1}^0 \cos n \pi x \rd x + \int_0^1 \cos \pi x \cos n \pi x \rd x\)





Definition of $f$




Splitting this up into bits:














\(\ds \)

\(\)







\(\ds \int_{-1}^0 \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\sin n \pi x} {n \pi} } {-1} 0\)





Primitive of $\cos n \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin 0} {n \pi} } - \paren {\frac {\map \sin {-n \pi} } {n \pi} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





Sine of Multiple of Pi




For $0 < x < 1$, there are two cases that need to be addressed: when $n = 1$ and when $n > 1$.
First let $n > 1$.
We have:














\(\ds \)

\(\)







\(\ds \int_0^1 \cos \pi x \cos n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\map \sin {\pi - n \pi} x} {2 \paren {\pi - n \pi} } + \frac {\map \sin {\pi + n \pi} x} {2 \paren {\pi + n \pi} } } 0 1\)





Primitive of $\cos \pi x \cos n \pi x$














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\map \sin {1 - n} \pi x} {2 \paren {1 - n} \pi} + \frac {\map \sin {1 + n} \pi x} {2 \paren {\paren {1 + n} \pi} } } 0 1\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\map \sin {1 - n} \pi} {2 \paren {1 - n} \pi} + \frac {\map \sin {1 + n} \pi} {2 \paren {\paren {1 + n} \pi} } } - \paren {\frac {\sin 0} {2 \paren {1 - n} \pi} + \frac {\sin 0} {2 \paren {\paren {1 + n} \pi} } }\)




















\(\ds \)

\(=\)







\(\ds 0 - 0\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)










Now let $n = 1$.
We have:














\(\ds \)

\(\)







\(\ds \int_0^1 \cos \pi x \cos \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^1 \cos^2 \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac x 2 + \frac {\sin 2 \pi x} {4 \pi} } 0 1\)





Primitive of $\cos^2 \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac 1 2 + \frac {\sin 2 \pi} {4 \pi} } - \paren {\frac 0 2 + \frac {\sin 0} {4 \pi} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac 1 2 + 0} - \paren {0 + 0}\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \frac 1 2\)










There is only one non-vanishing term:

$a_1 = \dfrac 1 2$
$\Box$

Now for the $\sin n \pi x$ terms:














\(\ds b_n\)

\(=\)







\(\ds \int_{-1}^1 \map f x \sin n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_{-1}^0 \sin n \pi x \rd x + \int_0^1 \cos \pi x \sin n \pi x \rd x\)










For $-1 < x < 0$:














\(\ds \)

\(\)







\(\ds \int_{-1}^0 \sin n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {-\cos n \pi x} {n \pi} } {-1} 0\)





Primitive of $\sin n \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {-\cos 0} {n \pi} } - \paren {\frac {-\map \cos {-n \pi} } {n \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \cos {-n \pi} - 1} {n \pi}\)





Cosine of Zero is One and rearrangement














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n - 1} {n \pi}\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \begin {cases} 0 & : \text {$n$ even} \\ \dfrac {-2} {n \pi} & : \text {$n$ odd} \end {cases}\)














\(\ds \leadsto \ \ \)





\(\ds b_{2 r + 1}\)

\(=\)







\(\ds \dfrac {-2} {\pi \paren {2 r + 1} }\)





substituting $n = 2 r + 1$ and simplifying




For $0 < x < 1$, there are two cases that need to be addressed: when $n = 1$ and when $n > 1$.
First let $n > 1$.














\(\ds \)

\(\)







\(\ds \int_0^1 \cos \pi x \sin n \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {-\map \cos {n \pi - \pi} x} {2 \paren {n \pi - \pi} } - \frac {\map \cos {n \pi + \pi} x} {2 \paren {n \pi + \pi} } } 0 1\)





Primitive of $\cos \pi x \sin n \pi x$














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {-\map \cos {n - 1} \pi x} {2 \paren {n - 1} \pi} - \frac {\map \cos {n + 1} \pi x} {2 \paren {n + 1} \pi} } 0 1\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {-\map \cos {n - 1} \pi} {2 \paren {n - 1} \pi} - \frac {\map \cos {n + 1} \pi} {2 \paren {n + 1} \pi} } - \paren {\frac {-\cos 0} {2 \paren {n - 1} \pi} - \frac {\cos 0} {2 \paren {n + 1} \pi} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\frac {1 - \map \cos {n - 1} \pi} {n - 1} + \frac {1 - \map \cos {n + 1} \pi} {n + 1} }\)





Cosine of Zero is One and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\frac {1 - \paren {-1}^{n - 1} } {n - 1} + \frac {1 - \paren {-1}^{n + 1} } {n + 1} }\)





Cosine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds \dfrac 1 {2 \pi} \paren {\begin {cases} \paren {\dfrac 2 {n - 1} + \dfrac 2 {n + 1} } & : \text {$n$ even} \\ 0 & : \text {$n$ odd} \end {cases} }\)














\(\ds \leadsto \ \ \)





\(\ds b_{2 r}\)

\(=\)







\(\ds \dfrac 1 \pi \paren {\dfrac 1 {2 r - 1} + \dfrac 1 {2 r + 1} }\)





substituting $n = 2 r$ and simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 \pi \dfrac {\paren {2 r + 1} + \paren {2 r - 1} } {\paren {2 r + 1} \paren {2 r - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 r} {\pi \paren {2 r + 1} \paren {2 r - 1} }\)










Now let $n = 1$.














\(\ds \)

\(\)







\(\ds \int_0^1 \cos \pi x \sin \pi x \rd x\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {\sin^2 \pi x} {2 \pi} } 0 1\)





Primitive of $\cos \pi x \sin \pi x$














\(\ds \)

\(=\)







\(\ds \paren {\frac {\sin^2 \pi} {2 \pi} } - \paren {\frac {\sin^2 \pi 0} {2 \pi} }\)




















\(\ds \)

\(=\)







\(\ds 0 - 0\)





Sine of Multiple of Pi














\(\ds \)

\(=\)







\(\ds 0\)










In summary:

$\begin {cases} a_0 = 1 \\ a_1 = \dfrac 1 2 \\ b_{2 r} = \dfrac {4 r} {\pi \paren {2 r + 1} \paren {2 r - 1} } \\ b_{2 r + 1} = \dfrac {-2} {\pi \paren {2 r + 1} } \end {cases}$
$\Box$

Finally:














\(\ds \map f x\)

\(\sim\)







\(\ds \frac {a_0} 2 + \sum_{n \mathop = 1}^\infty \paren {a_n \cos n x + b_n \sin n x}\)




















\(\ds \)

\(=\)







\(\ds \frac {1 + \cos \pi x} 2 + \sum_{r \mathop = 1}^\infty \paren {\dfrac {4 r \sin 2 r \pi x} {\pi \paren {2 r + 1} \paren {2 r - 1} } - \dfrac {2 \map \sin {2 r + 1} \pi x } {\pi \paren {2 r + 1} } }\)





substituting for $a_0$, $a_n$ and $b_n$ from above



$\blacksquare$


Sources
1961: I.N. Sneddon: Fourier Series ... (previous) ... (next): Chapter One: $\S 3$. Other Types of Whole-Range Series: Example $3$




