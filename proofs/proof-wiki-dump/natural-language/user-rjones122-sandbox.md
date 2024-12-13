# 

Source: https://proofwiki.org/wiki/User:Rjones122/Sandbox

Theorem
Let $f$ and $g$ be two functions in $L^1 \R^n$ with convolution $f\ast g$. Denote with $\FF \set f$ the Fourier transform of $f$, given by $\int_{\R^n} \map f t e^{-2 \pi i t \cdot \nu} \rd t$. Then $\FF \set {f \ast g} = \FF \set f \FF \set g$ up to the normalization constant of the Fourier transform.

Proof
By Fubini's theorem, if $h = f \ast g$ then $h$ is in $L^1 \R^n$. The Fourier transform of $h$ is then given as:

$\ds \FF \set h = \int_{\R^n} \int_{\R^n} \map f \tau \map g {t - \tau} \rd \tau e^{-2 \pi i t \cdot \nu} \rd t$
$\ds \FF \set h = \int_{\R^n} \map f \tau \paren {\int_{\R^b} \map g {t - \tau} e^{-2 \pi i t \cdot \nu} \rd t} \rd \tau$
Let $x = t - \tau$. We now have:

$\ds \FF \set h = \int_{\R^n} \map f \tau \paren {\int_{\R^b} \map g x e^{-2 \pi i \paren {x + \tau} \cdot \nu} \rd x} \rd \tau$
which simplifies to:

$\ds \FF \set h = \paren {\int_{\R^n} \map f \tau e^{-2 \pi i \tau \cdot \nu} \rd \tau} \paren {\int_{\R^n} \map g x e^{-2 \pi i x \cdot \nu} \rd x}$
which is $\FF \set f \FF \set g$.

$\blacksquare$





