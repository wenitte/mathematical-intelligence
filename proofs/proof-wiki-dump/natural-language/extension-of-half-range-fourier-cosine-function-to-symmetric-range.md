# 

Source: https://proofwiki.org/wiki/Extension_of_Half-Range_Fourier_Cosine_Function_to_Symmetric_Range

Theorem
Let $\map f x$ be a real function defined on the interval $\openint 0 \lambda$.
Let $\map f x$ be represented by the half-range Fourier cosine series $\map S x$:

$\map f x \sim \map S x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty a_n \cos \frac {n \pi x} \lambda$
where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \cos \frac {n \pi x} \lambda \rd x$

Then $\map S x$ also represents the extension to the even function $g: \openint {-\lambda} \lambda \to \R$ of $f$, defined as:

$\forall x \in \openint {-\lambda} \lambda: \map g x = \begin {cases} \map f x & : x > 0 \\ \map f {-x} & : x < 0 \\ \ds \lim_{x \mathop \to 0} \map g x & : x = 0 \end {cases}$


Proof
It is apparent by inspection that:

$(1): \quad g$ is an extension of $f$
$(2): \quad g$ is an even function.

Let $\map T x$ be the Fourier series representing $g$:

$\map g x \sim \map T x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren {a_n \cos \frac {n \pi x} \lambda + b_n \sin \frac {n \pi x} \lambda}$
where for all $n \in \Z_{> 0}$:

$a_n = \ds \frac 1 \lambda \int_{-\lambda}^\lambda \map g x \cos \frac {n \pi x} \lambda \rd x$
$b_n = \ds \frac 1 \lambda \int_{-\lambda}^\lambda \map g x \sin \frac {n \pi x} \lambda \rd x$

From Fourier Sine Coefficients for Even Function over Symmetric Range:

$\forall n \in \Z_{> 0}: b_n = 0$
and from Fourier Cosine Coefficients for Even Function over Symmetric Range:

$\forall n \in \Z_{>0}: a_n = \ds \frac 2 \lambda \int_0^\lambda \map g x \cos \frac {n \pi x} \lambda \rd x$
But on $\openint 0 \lambda$, by definition:

$\forall x \in \openint 0 \lambda: \map g x = \map f x$

Hence:

$\map T x = \dfrac {a_0} 2 + \ds \sum_{n \mathop = 1}^\infty \paren a_n \cos \frac {n \pi x} \lambda$
where:

$a_n = \ds \frac 2 \lambda \int_0^\lambda \map f x \cos \frac {n \pi x} \lambda \rd x$
That is, $\map T x$ is the same as $\map S x$.
Hence the result.
$\blacksquare$





