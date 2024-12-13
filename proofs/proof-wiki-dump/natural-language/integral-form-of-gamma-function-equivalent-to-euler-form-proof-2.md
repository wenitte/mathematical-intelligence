# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Gamma_Function_equivalent_to_Euler_Form/Proof_2



Theorem
The following definitions of the concept of Gamma Function are equivalent:

Integral Form
The gamma function $\Gamma: \C \setminus \Z_{\le 0} \to \C$ is defined, for the open right half-plane, as:

$\ds \map \Gamma z = \map {\MM \set {e^{-t} } } z = \int_0^{\to \infty} t^{z - 1} e^{-t} \rd t$
where $\MM$ is the Mellin transform.

For all other values of $z$ except the non-positive integers, $\map \Gamma z$ is defined as:

$\map \Gamma {z + 1} = z \map \Gamma z$
Euler Form
The Euler form of the gamma function is:

$\ds \map \Gamma z = \frac 1 z \prod_{n \mathop = 1}^\infty \paren {\paren {1 + \frac 1 n}^z \paren {1 + \frac z n}^{-1} } = \lim_{m \mathop \to \infty} \frac {m^z m!} {z \paren {z + 1} \paren {z + 2} \cdots \paren {z + m} }$
which is valid except for $z \in \set {0, -1, -2, \ldots}$.


Proof
First we present a lemma:
Let $0 \le t \le m$.
Then:

$0 \le e^{-t} - \paren {1 - \dfrac t m}^m \le t^2 \dfrac {e^{-t} } m$
$\Box$

Recall the definition of the partial Gamma function:

$\ds \map {\Gamma_m} x := \frac {m^x m!} {x \paren {x + 1} \paren {x + 2} \dotsm \paren {x + m} }$
We have that:














\(\ds \)

\(\)







\(\ds \int_0^\infty e^{-t} t^{x - 1} \rd t - \map {\Gamma_m} x\)




















\(\ds \)

\(=\)







\(\ds \int_0^m e^{-t} t^{x - 1} \rd t + \int_m^\infty e^{-t} t^{x - 1} \rd t - \map {\Gamma_m} x\)




















\(\ds \)

\(=\)







\(\ds \int_0^m e^{-t} t^{x - 1} \rd t + \int_m^\infty e^{-t} t^{x - 1} \rd t - \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t\)





Partial Gamma Function expressed as Integral














\(\ds \)

\(=\)







\(\ds \int_m^\infty e^{-t} t^{x - 1} \rd t + \int_0^m \paren {e^t - \paren {1 - \frac t m}^m t^{x - 1} } \rd t\)










We have that for large $t$:

$t^{x - 1} < t^{t / 2}$
and so as $m \to \infty$:

$\ds \int_m^\infty e^{-t} t^{x - 1} \rd t \to 0$
Then:














\(\ds \)

\(\)







\(\ds \int_0^m \paren {e^t - \paren {1 - \frac t m}^m t^{x - 1} } \rd t\)




















\(\ds \)

\(\le\)







\(\ds \int_0^m \frac {t^2 e^{-t} } m e^{-t} t^{x - 1} \rd t\)





Lemma














\(\ds \)

\(=\)







\(\ds \frac 1 m \int_0^m t^{x + 1} e^{-t} \rd t\)




















\(\ds \)

\(<\)







\(\ds \frac 1 m \int_0^\infty t^{x + 1} e^{-t} \rd t\)










Now we have that as $m \to \infty$:

$\ds \frac 1 m \int_0^\infty t^{x + 1} e^{-t} \rd t \to 0$
so:

$\ds \int_0^\infty e^{-t} t^{x - 1} \rd t - \map {\Gamma_m} x = 0$
leading to:

$\ds \int_0^\infty e^{-t} t^{x - 1} \rd t = \lim_{m \mathop \to \infty} \dfrac {m^x m!} {x \paren {x + 1} \paren {x + 2} \dotsm \paren {x + m} }$
as was to be demonstrated.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $20$




