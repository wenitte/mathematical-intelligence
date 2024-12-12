# 

Source: https://proofwiki.org/wiki/Bijective_Restriction/Examples/x%5E2-4x%2B5

Example of Bijective Restrictions
Let $f: \R \to \R$ be the real function defined as:

$\forall x \in \R: \map f x = x^2 - 4 x + 5$

The following real functions are bijective restrictions of $f$:














\(\ds f_1: \hointl \gets 2\)

\(\to\)







\(\ds \hointr 1 \to\)




















\(\ds f_2: \hointr 2 \to\)

\(\to\)







\(\ds \hointr 1 \to\)











Proof
From Image of $\map f x = x^2 - 4 x + 5$, the image of $f$ is given by:

$\Img f = \hointr 1 \to$
Thus a surjective restriction of $f$ can be found as:

$g: \R \to \hointr 1 \to: \map g x = x^2 - 4 x + 5$

It remains to show that $f_1$ and $f_2$ are injective.
It is established in Image of $\map f x = x^2 - 4 x + 5$ that $f$ has a minimum at $x = 2$.
As this is the only stationary point of $f$, it follows that:

$\map f x$ is strictly decreasing on $\hointl \gets 2$
$\map f x$ is strictly increasing on $\hointl 2 \to$

From Strictly Monotone Mapping with Totally Ordered Domain is Injective it follows that both $f_1$ and $f_2$ are injections.
Hence, by definition, $f_1$ and $f_2$ are bijective restrictions of $f$.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $12 \ \text{(iii)}$




