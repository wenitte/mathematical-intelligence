# 

Source: https://proofwiki.org/wiki/Kernel_of_Induced_Homomorphism_of_Polynomial_Forms

Theorem
Let $R$ and $S$ be commutative rings with unity.
Let $\phi: R \to S$ be a ring homomorphism.
Let $K = \ker \phi$.
Let $R \sqbrk X$ and $S \sqbrk X$ be the rings of polynomial forms over $R$ and $S$ respectively in the indeterminate $X$.
Let $\bar \phi: R \sqbrk X \to S \sqbrk X$ be the induced morphism of polynomial rings.
Then the kernel of $\bar \phi$ is:

$\ker \bar \phi = \set {a_0 + a_1 X + \cdots + a_n X^n \in R \sqbrk X: \map \phi {a_i} = 0 \text{ for } i = 0, \ldots, n}$
Or, more concisely:

$\ker \bar \phi = \paren {\ker \phi} \sqbrk X$


Proof
Let $\map P X = a_0 + a_1 X + \cdots + a_n X^n \in R \sqbrk X$.

Suppose first that $\map \phi {a_i} = 0$ for $i = 0, \ldots, n$.
We have by definition that:

$\map {\bar \phi} {a_0 + a_1 X + \cdots + a_n X^n} = \map \phi {a_0} + \map \phi {a_1} X + \cdots + \map \phi {a_n} X^n = 0$
That is to say, $\map P X \in \ker \bar \phi$.

Conversely, suppose that $\map P X \in \ker \bar \phi$.
That is, $\map {\bar \phi} {\map P X} = \map \phi {a_0} + \map \phi {a_1} X + \cdots + \map \phi {a_n} X^n$ is the null polynomial.
This by definition means that for $i = 0, \ldots, n$ we have $\map \phi {a_i} = 0$.
Hence, $\map P X \in \paren {\ker \phi} \sqbrk X$.
This concludes the proof.
$\blacksquare$





