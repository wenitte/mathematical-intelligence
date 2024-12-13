# 

Source: https://proofwiki.org/wiki/Period_of_Harmonic_Wave

Theorem
Let $\phi$ be a harmonic wave expressed as:

$\forall x, t \in \R: \map \phi {x, t} = a \map \cos {\omega \paren {x - c t} }$

The period $\tau$ of $\phi$ can be expressed as:

$\tau = \dfrac \lambda c$
where $\lambda$ is the wavelength of $\phi$.


Proof 1
By definition, a harmonic wave is an instance of a periodic wave.
Hence Period of Periodic Wave can be used directly.
$\blacksquare$


Proof 2
By definition, $\tau$ is the time taken for one complete wavelength of $\phi$ to pass an arbitrary point on the $x$-axis.
From Equation of Harmonic Wave, we have:

$(1): \quad \map \phi {x, t} = a \map \cos {\omega \paren {x - c t} }$
From Wavelength of Harmonic Wave:

$\lambda = \dfrac {2 \pi} \omega$
Hence:

$\omega = \dfrac {2 \pi} \lambda$
and we can express $(1)$ in the form:

$(2): \quad \map \phi {x, t} = a \map \cos {\dfrac {2 \pi} \lambda \paren {x - c t} }$
From $(2)$ it follows that $\dfrac {2 \pi} \lambda \paren {x - c t}$ must pass through a complete cycle of values as $t$ is increased by $\tau$.
Thus:

$\dfrac {2 \pi c \tau} \lambda = 2 \pi$
and so:

$\tau = \dfrac \lambda c$
Hence the result.
$\blacksquare$





