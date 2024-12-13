# 

Source: https://proofwiki.org/wiki/Odd_Bernoulli_Numbers_Vanish

Theorem
Let $B_n$ denote the $n$th Bernoulli Number.
Then:

$B_{2n + 1} = 0$
for $n \ge 1$.


Proof
By definition, the Bernoulli numbers are given by:

$\ds \frac x {e^x - 1} = \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!}$

We have:














\(\ds \frac x {e^x - 1}\)

\(=\)







\(\ds \frac x 2 \paren {\frac 2 {e^x -  1} }\)





multiplying top and bottom by $2$














\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {e^x - e^x + 2} {e^x -  1} }\)





adding zero














\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {\paren {e^x + 1} - \paren {e^x - 1} } {e^x -  1} }\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {e^x + 1} {e^x - 1} - 1}\)




















\(\ds \)

\(=\)







\(\ds -\frac x 2 + \frac x 2 \paren {\frac {e^x + 1} {e^x - 1} }\)










Take $\map f x := \dfrac x 2 \paren {\dfrac {e^x + 1} {e^x - 1} }$, and note that:














\(\ds \map f {-x}\)

\(=\)







\(\ds \frac {-x} 2 \paren {\dfrac {e^{-x} + 1} {e^{-x} - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\frac {-x} 2 \paren {\dfrac {1 + e^x} {1 - e^x} }\)





multiplying top and bottom by $e^x$














\(\ds \)

\(=\)







\(\ds -\frac {-x} 2 \paren {\dfrac {e^x + 1} {-\paren {e^x - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac x 2 \paren {\frac {e^x + 1} {e^x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \map f x\)









and so $\map f x := \dfrac x 2 \paren {\dfrac {e^x + 1} {e^x - 1} }$ is an even function.

Rewriting the definition of Bernoulli numbers














\(\ds \frac x {e^x - 1}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {B_n x^n} {n!}\)




















\(\ds \frac x {e^x - 1}\)

\(=\)







\(\ds 1 - \dfrac 1 2 x + \sum_{n \mathop = 2}^\infty \frac {B_n x^n} {n!}\)




















\(\ds \frac x {e^x - 1} + \dfrac 1 2 x\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n x^n} {n!}\)





adding $\dfrac 1 2 x$ to both sides














\(\ds \frac {2x + x\paren {e^x - 1 } } {2\paren {e^x - 1 } }\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n x^n} {n!}\)




















\(\ds \dfrac x 2 \paren {\dfrac {e^x + 1} {e^x - 1} }\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n x^n} {n!}\)




















\(\ds \map f x\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n} {n!} x^n\)









We now have:














\(\ds \map f x\)

\(=\)







\(\ds \map f {-x}\)





$\map f x$ established to be an even function above














\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n} {n!} \paren x^n\)

\(=\)







\(\ds 1 + \sum_{n \mathop = 2}^\infty \frac {B_n} {n!} \paren {-x}^n\)










If we set $n$ to be an odd integer where $n > 1$, we have:














\(\ds \frac {B_{2 k + 1} } { \paren {2 k + 1}!} \paren x^{2 k + 1}\)

\(=\)







\(\ds \frac {B_{2 k + 1} } { \paren {2 k + 1}!} \paren {-x}^{2 k + 1}\)




















\(\ds B_{2 k + 1} \paren x\)

\(=\)







\(\ds B_{2 k + 1} \paren {-x}\)





multiplying both sides by $\dfrac {\paren {2 k + 1}!} {x^2}$














\(\ds B_{2 k + 1}\)

\(=\)







\(\ds -B_{2 k + 1}\)





dividing both sides by $x$














\(\ds 2 B_{2 k + 1}\)

\(=\)







\(\ds 0\)




















\(\ds B_{2 k + 1}\)

\(=\)







\(\ds 0\)









Therefore: $\forall n \in \N: n \ge 1$:

$B_{2 n + 1} = 0$
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler




